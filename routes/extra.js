const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();

// ─────────────────────────────────────────────
// GET /api/search?q=javascript&in=courses,lessons
// Regex text search on titles and descriptions
// ─────────────────────────────────────────────
router.get("/search", async (req, res) => {
  try {
    const { q, in: collections } = req.query;

    if (!q || q.trim().length === 0) {
      return res.status(400).json({ error: "Query parameter 'q' is required" });
    }

    // Build a case-insensitive regex
    const regex = new RegExp(q, "i");
    const targets = collections
      ? collections.split(",").map((s) => s.trim())
      : ["courses", "lessons"];

    const results = {};

    if (targets.includes("courses")) {
      results.courses = await req.db
        .collection("courses")
        .find({
          $or: [{ title: regex }, { description: regex }, { tags: regex }],
        })
        .project({ title: 1, description: 1, category: 1, difficulty: 1, price: 1, "rating.average": 1 })
        .limit(20)
        .toArray();
    }

    if (targets.includes("lessons")) {
      results.lessons = await req.db
        .collection("lessons")
        .find({
          $or: [{ title: regex }, { content: regex }],
        })
        .project({ title: 1, content: 1, courseId: 1, type: 1, duration: 1 })
        .limit(20)
        .toArray();
    }

    if (targets.includes("users")) {
      results.users = await req.db
        .collection("users")
        .find({
          $or: [
            { firstName: regex },
            { lastName: regex },
            { email: regex },
          ],
        })
        .project({ firstName: 1, lastName: 1, email: 1, role: 1 })
        .limit(20)
        .toArray();
    }

    const totalResults = Object.values(results).reduce(
      (sum, arr) => sum + arr.length,
      0
    );

    res.json({ query: q, totalResults, results });
  } catch (err) {
    // Handle invalid regex
    if (err.message.includes("Regular expression")) {
      return res.status(400).json({ error: "Invalid search pattern" });
    }
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// GET /api/stats — Global statistics
// ─────────────────────────────────────────────
router.get("/stats", async (req, res) => {
  try {
    const [
      totalUsers,
      totalCourses,
      totalLessons,
      totalEnrollments,
      totalReviews,
      publishedCourses,
      activeEnrollments,
      completedEnrollments,
    ] = await Promise.all([
      req.db.collection("users").countDocuments(),
      req.db.collection("courses").countDocuments(),
      req.db.collection("lessons").countDocuments(),
      req.db.collection("enrollments").countDocuments(),
      req.db.collection("reviews").countDocuments(),
      req.db.collection("courses").countDocuments({ isPublished: true }),
      req.db.collection("enrollments").countDocuments({ status: "active" }),
      req.db.collection("enrollments").countDocuments({ status: "completed" }),
    ]);

    // Category breakdown
    const categoryBreakdown = await req.db
      .collection("courses")
      .aggregate([
        { $group: { _id: "$category", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray();

    // Difficulty breakdown
    const difficultyBreakdown = await req.db
      .collection("courses")
      .aggregate([
        { $group: { _id: "$difficulty", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ])
      .toArray();

    // Top rated courses
    const topCourses = await req.db
      .collection("courses")
      .find({ isPublished: true })
      .sort({ "rating.average": -1 })
      .limit(5)
      .project({ title: 1, "rating.average": 1, enrollmentCount: 1, category: 1 })
      .toArray();

    // Average rating across all reviews
    const avgRating = await req.db
      .collection("reviews")
      .aggregate([
        { $group: { _id: null, average: { $avg: "$rating" } } },
      ])
      .toArray();

    res.json({
      overview: {
        totalUsers,
        totalCourses,
        publishedCourses,
        totalLessons,
        totalEnrollments,
        activeEnrollments,
        completedEnrollments,
        totalReviews,
        averageRating: avgRating[0] ? Math.round(avgRating[0].average * 10) / 10 : 0,
      },
      categoryBreakdown: categoryBreakdown.map((c) => ({
        category: c._id,
        count: c.count,
      })),
      difficultyBreakdown: difficultyBreakdown.map((d) => ({
        difficulty: d._id,
        count: d.count,
      })),
      topCourses,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// GET /api/export/:collection — Export collection data as JSON
// ─────────────────────────────────────────────
router.get("/export/:collection", async (req, res) => {
  try {
    const collName = req.params.collection;
    const allowed = ["users", "courses", "lessons", "enrollments", "reviews"];

    if (!allowed.includes(collName)) {
      return res.status(400).json({
        error: `Invalid collection. Allowed: ${allowed.join(", ")}`,
      });
    }

    const data = await req.db.collection(collName).find({}).toArray();

    // Set headers for file download
    res.setHeader("Content-Type", "application/json");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="learnhub-${collName}-${Date.now()}.json"`
    );

    res.json({
      collection: collName,
      exportedAt: new Date(),
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
