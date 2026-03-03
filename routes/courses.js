const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();

// ─────────────────────────────────────────────
// POST /api/courses/bulk — insertMany
// ─────────────────────────────────────────────
router.post("/bulk", async (req, res) => {
  try {
    const docs = req.body; // expects an array of course objects

    if (!Array.isArray(docs) || docs.length === 0) {
      return res
        .status(400)
        .json({ error: "Body must be a non-empty array of courses" });
    }

    // Add timestamps to each document
    const courseDocs = docs.map((doc) => ({
      ...doc,
      instructorId: doc.instructorId
        ? new ObjectId(doc.instructorId)
        : undefined,
      rating: doc.rating || { average: 0, count: 0 },
      isPublished: doc.isPublished !== undefined ? doc.isPublished : true,
      enrollmentCount: doc.enrollmentCount || 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    // MongoDB: insertMany
    const result = await req.db.collection("courses").insertMany(courseDocs);

    res.status(201).json({
      message: `${result.insertedCount} courses inserted successfully`,
      insertedIds: result.insertedIds,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// GET /api/courses?category=Web&sort=price&order=asc&page=1&limit=10
// MongoDB: find + filter + sort + skip/limit (pagination)
// ─────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const { category, difficulty, sort, order, page, limit } = req.query;

    // Build filter object
    const filter = {};
    if (category) filter.category = category;
    if (difficulty) filter.difficulty = difficulty;

    // Build sort object
    const sortObj = {};
    if (sort) {
      sortObj[sort] = order === "desc" ? -1 : 1; // default ascending
    }

    // Pagination
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    const skip = (pageNum - 1) * limitNum;

    // MongoDB: find with filter + sort + skip + limit
    const courses = await req.db
      .collection("courses")
      .find(filter)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .toArray();

    // Total count for pagination metadata
    const total = await req.db.collection("courses").countDocuments(filter);

    res.json({
      data: courses,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// DELETE /api/courses/:id — Cascade deletion
// 1. deleteOne → the course
// 2. deleteMany → all its lessons
// 3. deleteMany → all its reviews
// 4. updateMany + $set → enrollments → "cancelled"
// ─────────────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid course ID" });
    }

    const courseId = new ObjectId(req.params.id);

    // Check course exists first
    const course = await req.db
      .collection("courses")
      .findOne({ _id: courseId });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // 1. deleteOne → delete the course itself
    const courseResult = await req.db
      .collection("courses")
      .deleteOne({ _id: courseId });

    // 2. deleteMany → cascade delete all lessons
    const lessonsResult = await req.db
      .collection("lessons")
      .deleteMany({ courseId: courseId });

    // 3. deleteMany → cascade delete all reviews
    const reviewsResult = await req.db
      .collection("reviews")
      .deleteMany({ courseId: courseId });

    // 4. updateMany + $set → mark enrollments as "cancelled"
    const enrollmentsResult = await req.db
      .collection("enrollments")
      .updateMany(
        { courseId: courseId },
        { $set: { status: "cancelled" } }
      );

    res.json({
      message: "Course and related data deleted successfully",
      deleted: {
        courses: courseResult.deletedCount,
        lessons: lessonsResult.deletedCount,
        reviews: reviewsResult.deletedCount,
      },
      cancelledEnrollments: enrollmentsResult.modifiedCount,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
