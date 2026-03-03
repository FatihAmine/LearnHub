const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();

// ─────────────────────────────────────────────
// POST /api/users — insertOne
// ─────────────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const doc = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: req.body.role || "student",
      profile: req.body.profile || {},
      skills: req.body.skills || [],
      isActive: true,
      totalCoursesEnrolled: 0,
      createdAt: new Date(),
      lastLoginAt: new Date(),
    };

    // MongoDB: insertOne
    const result = await req.db.collection("users").insertOne(doc);

    res.status(201).json({
      message: "User created successfully",
      insertedId: result.insertedId,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// GET /api/users/:id — findOne
// ─────────────────────────────────────────────
router.get("/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    // MongoDB: findOne by _id
    const user = await req.db
      .collection("users")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// PATCH /api/users/:id — updateOne + $set / $push / $pull / $inc
// Supports operations via query param ?op=set|push|pull|inc
// Body contains the fields/values to apply
// ─────────────────────────────────────────────
router.patch("/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const filter = { _id: new ObjectId(req.params.id) };
    const op = req.query.op || "set"; // default operation: $set

    let update;
    switch (op) {
      case "set":
        // MongoDB: updateOne + $set
        // Example body: { "profile.city": "Rabat" }
        update = { $set: req.body };
        break;
      case "push":
        // MongoDB: updateOne + $push
        // Example body: { "skills": "Data Analysis" }
        update = { $push: req.body };
        break;
      case "pull":
        // MongoDB: updateOne + $pull
        // Example body: { "skills": "Python" }
        update = { $pull: req.body };
        break;
      case "inc":
        // MongoDB: updateOne + $inc
        // Example body: { "totalCoursesEnrolled": 1 }
        update = { $inc: req.body };
        break;
      default:
        return res.status(400).json({ error: "Invalid op. Use: set, push, pull, inc" });
    }

    const result = await req.db.collection("users").updateOne(filter, update);

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      message: `User updated successfully (${op})`,
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// PUT /api/users/:id/profile — updateOne + upsert: true
// ─────────────────────────────────────────────
router.put("/:id/profile", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const filter = { _id: new ObjectId(req.params.id) };

    // MongoDB: updateOne with upsert: true
    const result = await req.db.collection("users").updateOne(
      filter,
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          role: req.body.role || "student",
          profile: req.body.profile || {},
          skills: req.body.skills || [],
          isActive: req.body.isActive !== undefined ? req.body.isActive : true,
          totalCoursesEnrolled: req.body.totalCoursesEnrolled || 0,
          createdAt: new Date(),
          lastLoginAt: new Date(),
        },
      },
      { upsert: true }
    );

    res.json({
      message: result.upsertedCount
        ? "User created (upsert)"
        : "User profile updated",
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
      upsertedId: result.upsertedId || null,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// GET /api/users/:id/dashboard — User dashboard
// Business logic: assembles data from multiple collections
// ─────────────────────────────────────────────
router.get("/:id/dashboard", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const userOid = new ObjectId(req.params.id);

    // 1. findOne → the user (with projection)
    const user = await req.db.collection("users").findOne(
      { _id: userOid },
      {
        projection: {
          firstName: 1,
          lastName: 1,
          email: 1,
          role: 1,
          profile: 1,
          totalCoursesEnrolled: 1,
          isActive: 1,
          lastLoginAt: 1,
        },
      }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 2. find → active enrollments (filter userId + status)
    const enrollments = await req.db
      .collection("enrollments")
      .find({ userId: userOid, status: "active" })
      .toArray();

    // Enrich enrollments with course info
    const enrichedEnrollments = [];
    for (const enrollment of enrollments) {
      const course = await req.db
        .collection("courses")
        .findOne(
          { _id: enrollment.courseId },
          { projection: { title: 1, category: 1, difficulty: 1 } }
        );
      enrichedEnrollments.push({
        _id: enrollment._id,
        courseId: enrollment.courseId,
        courseTitle: course ? course.title : "Unknown course",
        courseCategory: course ? course.category : null,
        courseDifficulty: course ? course.difficulty : null,
        status: enrollment.status,
        progress: enrollment.progress,
        enrolledAt: enrollment.enrolledAt,
      });
    }

    // 3. find → user reviews (filter userId, sort by date desc, limit 5)
    const reviews = await req.db
      .collection("reviews")
      .find({ userId: userOid })
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();

    // Enrich reviews with course title
    const enrichedReviews = [];
    for (const review of reviews) {
      const course = await req.db
        .collection("courses")
        .findOne(
          { _id: review.courseId },
          { projection: { title: 1 } }
        );
      enrichedReviews.push({
        _id: review._id,
        courseTitle: course ? course.title : "Unknown course",
        rating: review.rating,
        title: review.title,
        comment: review.comment,
        createdAt: review.createdAt,
      });
    }

    // Assemble the structured response
    res.json({
      user,
      activeEnrollments: {
        count: enrichedEnrollments.length,
        data: enrichedEnrollments,
      },
      recentReviews: {
        count: enrichedReviews.length,
        data: enrichedReviews,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
