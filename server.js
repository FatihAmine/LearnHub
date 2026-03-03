const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

const MONGO_URI = "mongodb://localhost:27017";
const DB_NAME = "learnhub";

let db;

async function connectDB() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  db = client.db(DB_NAME);
  console.log(`Connected to MongoDB — database: ${DB_NAME}`);
  return db;
}

// Make db accessible to routes
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
const usersRouter = require("./routes/users");
const coursesRouter = require("./routes/courses");
const enrollmentsRouter = require("./routes/enrollments");
const reviewsRouter = require("./routes/reviews");
const extraRouter = require("./routes/extra");

app.use("/api/users", usersRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/enrollments", enrollmentsRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api", extraRouter);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ message: "LearnHub API is running" });
});

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1);
});
