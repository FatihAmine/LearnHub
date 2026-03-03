# 🎓 LearnHub

A full-stack online learning platform built with **Node.js**, **Express**, and **MongoDB**. LearnHub provides a REST API and a responsive web frontend for managing courses, users, enrollments, and reviews.

---

## 📸 Overview

LearnHub is an educational platform where students can browse courses, enroll, track progress, leave reviews, and view personalized dashboards — all powered by a MongoDB-backed API.

---

## 🛠️ Technologies Used

| Layer        | Technology                                                    |
|-------------|---------------------------------------------------------------|
| **Runtime**  | [Node.js](https://nodejs.org/)                               |
| **Framework**| [Express 5](https://expressjs.com/)                          |
| **Database** | [MongoDB 7+](https://www.mongodb.com/) (native driver)      |
| **Frontend** | Vanilla HTML / CSS / JavaScript                              |
| **Font**     | [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)|
| **API Test** | [Postman Collection](learnhub.postman_collection.json)       |

---

## 📁 Project Structure

```
learnhub-project/
├── server.js                  # Express server & MongoDB connection
├── package.json               # Dependencies & project metadata
├── seed.mongosh.js            # Database seed script (mongosh)
├── learnhub.postman_collection.json  # Postman API collection
├── routes/
│   ├── users.js               # User CRUD & dashboard
│   ├── courses.js             # Course listing, bulk insert & cascade delete
│   ├── enrollments.js         # Enrollment & lesson progress
│   ├── reviews.js             # Reviews with rating recalculation
│   └── extra.js               # Search, stats & data export
└── public/
    ├── index.html             # Course catalog page
    ├── dashboard.html         # User dashboard page
    ├── course.html            # Single course detail page
    ├── stats.html             # Global statistics page
    ├── css/style.css          # All styles (responsive)
    └── js/app.js              # Frontend API helpers & UI logic
```

---

## ⚙️ Prerequisites

Before running the project, make sure you have installed:

1. **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
2. **MongoDB** (v7 or higher) — [Download](https://www.mongodb.com/try/download/community)
3. **Git** — [Download](https://git-scm.com/)
4. *(Optional)* **Postman** — [Download](https://www.postman.com/downloads/) for API testing

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/FatihAmine/LearnHub.git
cd LearnHub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally on the default port (`27017`):

```bash
# If using mongod directly:
mongod

# Or if using MongoDB as a service, it may already be running.
```

### 4. Seed the database

Load sample data (20 users, courses, lessons, enrollments, reviews):

```bash
mongosh seed.mongosh.js
```

### 5. Start the server

```bash
node server.js
```

The server will start at **http://localhost:3000**.

### 6. Open in browser

Visit: [http://localhost:3000](http://localhost:3000)

| Page               | URL                                  |
|--------------------|--------------------------------------|
| Course Catalog     | http://localhost:3000/                |
| User Dashboard     | http://localhost:3000/dashboard.html  |
| Course Details     | http://localhost:3000/course.html     |
| Global Statistics  | http://localhost:3000/stats.html      |

---

## 📡 API Endpoints

Base URL: `http://localhost:3000`

### Health & Utilities

| Method | Endpoint                          | Description                        |
|--------|-----------------------------------|------------------------------------|
| GET    | `/api/health`                     | Health check                       |
| GET    | `/api/stats`                      | Global platform statistics         |
| GET    | `/api/search?q=...&in=...`        | Regex search across collections    |
| GET    | `/api/export/users`               | Export all users (JSON)            |
| GET    | `/api/export/courses`             | Export all courses (JSON)          |
| GET    | `/api/export/lessons`             | Export all lessons (JSON)          |
| GET    | `/api/export/enrollments`         | Export all enrollments (JSON)      |
| GET    | `/api/export/reviews`             | Export all reviews (JSON)          |

### Users

| Method | Endpoint                          | Description                                  |
|--------|-----------------------------------|----------------------------------------------|
| POST   | `/api/users`                      | Create a new user (`insertOne`)              |
| GET    | `/api/users/:id`                  | Get user by ID (`findOne`)                   |
| PATCH  | `/api/users/:id?op=set`           | Update user fields (`$set`)                  |
| PATCH  | `/api/users/:id?op=push`          | Push to array field (`$push`)                |
| PATCH  | `/api/users/:id?op=pull`          | Pull from array field (`$pull`)              |
| PATCH  | `/api/users/:id?op=inc`           | Increment a numeric field (`$inc`)           |
| PUT    | `/api/users/:id/profile`          | Upsert user profile                         |
| GET    | `/api/users/:id/dashboard`        | Get user dashboard (aggregation)             |

### Courses

| Method | Endpoint                          | Description                                  |
|--------|-----------------------------------|----------------------------------------------|
| POST   | `/api/courses/bulk`               | Insert multiple courses (`insertMany`)       |
| GET    | `/api/courses`                    | List courses (filter, sort, paginate)        |
| DELETE | `/api/courses/:id`                | Delete course with cascade                   |

### Enrollments

| Method | Endpoint                              | Description                              |
|--------|---------------------------------------|------------------------------------------|
| POST   | `/api/enrollments`                    | Enroll user in a course (6-step logic)   |
| PATCH  | `/api/enrollments/:id/progress`       | Mark a lesson as completed               |

### Reviews

| Method | Endpoint                          | Description                                  |
|--------|-----------------------------------|----------------------------------------------|
| POST   | `/api/reviews`                    | Leave a review (4-step business logic)       |

---

## 🧪 Testing with Postman

1. Open **Postman**
2. Click **File → Import**
3. Select the file `learnhub.postman_collection.json` from the project root
4. The collection **"LearnHub API"** will appear with all endpoints organized by category
5. Update the collection variables:
   - `baseUrl` → `http://localhost:3000` (default)
   - `userId` → replace with an actual user `_id` from your database
   - `courseId` → replace with an actual course `_id`
   - `enrollmentId` → replace with an actual enrollment `_id`
   - `lessonId` → replace with an actual lesson `_id`
6. Start testing the endpoints!

---

## 🔑 Key MongoDB Operations Demonstrated

| Operation                        | Where Used                              |
|----------------------------------|-----------------------------------------|
| `insertOne`                      | Create user, enrollment, review         |
| `insertMany`                     | Bulk insert courses                     |
| `findOne`                        | Get user/course by ID                   |
| `find` + filter + sort + pagination | List courses                         |
| `updateOne` with `$set`          | Update user profile fields              |
| `updateOne` with `$push`         | Add skill to user                       |
| `updateOne` with `$pull`         | Remove skill from user                  |
| `updateOne` with `$inc`          | Increment counters                      |
| `deleteOne` + `deleteMany`       | Cascade course deletion                 |
| `countDocuments`                 | Statistics & pagination                 |
| Regex search (`$or`)             | Search across collections               |
| Aggregation pipeline             | User dashboard & stats                  |
| Upsert                           | User profile upsert                     |

---

## 📄 License

This project is licensed under the ISC License.
