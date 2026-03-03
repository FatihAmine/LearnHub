const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();

// ─────────────────────────────────────────────
// POST /api/reviews — Leave a review
// Business logic: 4 chained MongoDB operations
// ─────────────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const { userId, courseId, rating, title, comment } = req.body;

    if (!userId || !courseId || !rating) {
      return res
        .status(400)
        .json({ error: "userId, courseId, and rating are required" });
    }

    if (!ObjectId.isValid(userId) || !ObjectId.isValid(courseId)) {
      return res.status(400).json({ error: "Invalid userId or courseId" });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    const userOid = new ObjectId(userId);
    const courseOid = new ObjectId(courseId);

    // 1. findOne → verify user is enrolled in this course
    const enrollment = await req.db
      .collection("enrollments")
      .findOne({ userId: userOid, courseId: courseOid, status: { $ne: "cancelled" } });

    if (!enrollment) {
      return res.status(403).json({
        error: "User must be enrolled in the course to leave a review",
      });
    }

    // 2. findOne → verify no duplicate review
    const existingReview = await req.db
      .collection("reviews")
      .findOne({ userId: userOid, courseId: courseOid });

    if (existingReview) {
      return res
        .status(409)
        .json({ error: "User has already reviewed this course" });
    }

    // 3. insertOne → create the review
    const review = {
      userId: userOid,
      courseId: courseOid,
      rating: Number(rating),
      title: title || "",
      comment: comment || "",
      isVerified: enrollment.status === "completed",
      helpfulCount: 0,
      createdAt: new Date(),
      updatedAt: null,
    };

    const insertResult = await req.db
      .collection("reviews")
      .insertOne(review);

    // 4. find all reviews + updateOne with $set + $inc → recalculate average
    const allReviews = await req.db
      .collection("reviews")
      .find({ courseId: courseOid })
      .toArray();

    const totalRatings = allReviews.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = Math.round((totalRatings / allReviews.length) * 10) / 10;

    await req.db.collection("courses").updateOne(
      { _id: courseOid },
      {
        $set: { "rating.average": averageRating },
        $inc: { "rating.count": 1 },
      }
    );

    res.status(201).json({
      message: "Review created successfully",
      reviewId: insertResult.insertedId,
      review,
      courseRating: {
        average: averageRating,
        count: allReviews.length,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
