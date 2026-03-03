const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();

// ─────────────────────────────────────────────
// POST /api/enrollments — Enroll a user in a course
// Business logic: 6 chained MongoDB operations
// ─────────────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const { userId, courseId, payment } = req.body;

    if (!userId || !courseId) {
      return res.status(400).json({ error: "userId and courseId are required" });
    }

    if (!ObjectId.isValid(userId) || !ObjectId.isValid(courseId)) {
      return res.status(400).json({ error: "Invalid userId or courseId" });
    }

    const userOid = new ObjectId(userId);
    const courseOid = new ObjectId(courseId);

    // 1. findOne → verify user exists
    const user = await req.db
      .collection("users")
      .findOne({ _id: userOid });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 2. findOne → verify course exists and is published
    const course = await req.db
      .collection("courses")
      .findOne({ _id: courseOid });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    if (!course.isPublished) {
      return res.status(400).json({ error: "Course is not published" });
    }

    // 3. findOne → verify not already enrolled
    const existing = await req.db
      .collection("enrollments")
      .findOne({ userId: userOid, courseId: courseOid, status: { $ne: "cancelled" } });

    if (existing) {
      return res.status(409).json({ error: "User is already enrolled in this course" });
    }

    // 4. insertOne → create the enrollment
    const enrollment = {
      userId: userOid,
      courseId: courseOid,
      status: "active",
      progress: {
        completedLessons: [],
        percentage: 0,
        lastAccessedAt: new Date(),
      },
      payment: {
        amount: payment?.amount || course.price || 0,
        method: payment?.method || "card",
        paidAt: new Date(),
      },
      enrolledAt: new Date(),
      completedAt: null,
    };

    const insertResult = await req.db
      .collection("enrollments")
      .insertOne(enrollment);

    // 5. updateOne + $inc → increment course enrollmentCount
    await req.db
      .collection("courses")
      .updateOne({ _id: courseOid }, { $inc: { enrollmentCount: 1 } });

    // 6. updateOne + $inc → increment user totalCoursesEnrolled
    await req.db
      .collection("users")
      .updateOne({ _id: userOid }, { $inc: { totalCoursesEnrolled: 1 } });

    res.status(201).json({
      message: "Enrollment created successfully",
      enrollmentId: insertResult.insertedId,
      enrollment,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// PATCH /api/enrollments/:id/progress — Mark a lesson completed
// Business logic: multi-step progress update
// ─────────────────────────────────────────────
router.patch("/:id/progress", async (req, res) => {
  try {
    const { lessonId } = req.body;

    if (!lessonId) {
      return res.status(400).json({ error: "lessonId is required" });
    }

    if (!ObjectId.isValid(req.params.id) || !ObjectId.isValid(lessonId)) {
      return res.status(400).json({ error: "Invalid enrollment ID or lesson ID" });
    }

    const enrollmentOid = new ObjectId(req.params.id);
    const lessonOid = new ObjectId(lessonId);

    // 1. findOne → verify enrollment exists
    const enrollment = await req.db
      .collection("enrollments")
      .findOne({ _id: enrollmentOid });

    if (!enrollment) {
      return res.status(404).json({ error: "Enrollment not found" });
    }

    if (enrollment.status === "completed") {
      return res.status(400).json({ error: "Course already completed" });
    }

    if (enrollment.status === "cancelled") {
      return res.status(400).json({ error: "Enrollment is cancelled" });
    }

    // Check if lesson already completed
    const alreadyDone = enrollment.progress.completedLessons.some(
      (id) => id.toString() === lessonOid.toString()
    );

    if (alreadyDone) {
      return res.status(409).json({ error: "Lesson already marked as completed" });
    }

    // 2. updateOne + $push → add lessonId to completedLessons
    await req.db.collection("enrollments").updateOne(
      { _id: enrollmentOid },
      {
        $push: { "progress.completedLessons": lessonOid },
        $set: { "progress.lastAccessedAt": new Date() },
      }
    );

    // Count total lessons for this course to calculate percentage
    const totalLessons = await req.db
      .collection("lessons")
      .countDocuments({ courseId: enrollment.courseId });

    const completedCount = enrollment.progress.completedLessons.length + 1;
    const percentage = Math.round((completedCount / totalLessons) * 100);

    // 3. $set → recalculate progress.percentage
    const updateFields = { "progress.percentage": percentage };

    // 4. If 100% → $set status "completed" + completedAt
    if (percentage >= 100) {
      updateFields.status = "completed";
      updateFields.completedAt = new Date();
    }

    await req.db
      .collection("enrollments")
      .updateOne({ _id: enrollmentOid }, { $set: updateFields });

    res.json({
      message: percentage >= 100
        ? "Lesson completed — course finished! 🎉"
        : "Lesson marked as completed",
      progress: {
        completedLessons: completedCount,
        totalLessons,
        percentage,
        status: percentage >= 100 ? "completed" : enrollment.status,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
