// create db "learnhub"
const db = connect("mongodb://localhost:27017/learnhub")

// create collection("instructors") and insert 20 instructors


// create collection("users") and insert 20 users
const student = [
  {
    _id: new ObjectId(),
    firstName: "Ahmed",
    lastName: "El Amrani",
    email: "ahmed.elamrani@email.com",
    role: "student",
    profile: {
      bio: "Computer science student",
      avatar: "https://example.com/avatar1.jpg",
      city: "Casablanca",
      country: "Morocco"
    },
    skills: ["JavaScript", "Python"],
    isActive: true,
    totalCoursesEnrolled: 2,
    createdAt: new Date("2024-01-15"),
    lastLoginAt: new Date("2024-12-01")
  },
  {
    _id: new ObjectId(),
    firstName: "Fatima",
    lastName: "Zahra",
    email: "fatima.zahra@email.com",
    role: "student",
    profile: {
      bio: "Web development student",
      avatar: "https://example.com/avatar2.jpg",
      city: "Rabat",
      country: "Morocco"
    },
    skills: ["HTML", "CSS", "Bootstrap"],
    isActive: true,
    totalCoursesEnrolled: 3,
    createdAt: new Date("2024-02-01"),
    lastLoginAt: new Date("2024-12-02")
  },
  {
    _id: new ObjectId(),
    firstName: "Mohamed",
    lastName: "Bennani",
    email: "mohamed.bennani@email.com",
    role: "student",
    profile: {
      bio: "Passionate about mobile development",
      avatar: "https://example.com/avatar3.jpg",
      city: "Marrakech",
      country: "Morocco"
    },
    skills: ["Java", "Kotlin"],
    isActive: true,
    totalCoursesEnrolled: 1,
    createdAt: new Date("2024-03-10"),
    lastLoginAt: new Date("2024-11-30")
  },
  {
    _id: new ObjectId(),
    firstName: "Sara",
    lastName: "El Fassi",
    email: "sara.elfassi@email.com",
    role: "student",
    profile: {
      bio: "Artificial intelligence student",
      avatar: "https://example.com/avatar4.jpg",
      city: "Fès",
      country: "Morocco"
    },
    skills: ["Python", "Machine Learning"],
    isActive: true,
    totalCoursesEnrolled: 2,
    createdAt: new Date("2024-01-20"),
    lastLoginAt: new Date("2024-12-03")
  },
  {
    _id: new ObjectId(),
    firstName: "Youssef",
    lastName: "Haddad",
    email: "youssef.haddad@email.com",
    role: "student",
    profile: {
      bio: "Passionate about databases",
      avatar: "https://example.com/avatar5.jpg",
      city: "Tangier",
      country: "Morocco"
    },
    skills: ["MongoDB", "SQL"],
    isActive: true,
    totalCoursesEnrolled: 3,
    createdAt: new Date("2024-02-05"),
    lastLoginAt: new Date("2024-12-01")
  },
  {
    _id: new ObjectId(),
    firstName: "Imane",
    lastName: "Kabbaj",
    email: "imane.kabbaj@email.com",
    role: "student",
    profile: {
      bio: "Front-end web developer",
      avatar: "https://example.com/avatar6.jpg",
      city: "Casablanca",
      country: "Morocco"
    },
    skills: ["React", "JavaScript"],
    isActive: true,
    totalCoursesEnrolled: 1,
    createdAt: new Date("2024-03-01"),
    lastLoginAt: new Date("2024-12-02")
  },
  {
    _id: new ObjectId(),
    firstName: "Omar",
    lastName: "El Idrissi",
    email: "omar.elidrissi@email.com",
    role: "student",
    profile: {
      bio: "Backend developer",
      avatar: "https://example.com/avatar7.jpg",
      city: "Rabat",
      country: "Morocco"
    },
    skills: ["Node.js", "Express", "MongoDB"],
    isActive: true,
    totalCoursesEnrolled: 2,
    createdAt: new Date("2024-01-25"),
    lastLoginAt: new Date("2024-12-01")
  },
  {
    _id: new ObjectId(),
    firstName: "Khadija",
    lastName: "Ouazzani",
    email: "khadija.ouazzani@email.com",
    role: "student",
    profile: {
      bio: "Passionate about data science",
      avatar: "https://example.com/avatar8.jpg",
      city: "Marrakech",
      country: "Morocco"
    },
    skills: ["Python", "Pandas", "NumPy"],
    isActive: true,
    totalCoursesEnrolled: 3,
    createdAt: new Date("2024-02-10"),
    lastLoginAt: new Date("2024-12-02")
  },
  {
    _id: new ObjectId(),
    firstName: "Rachid",
    lastName: "Bouzid",
    email: "rachid.bouzid@email.com",
    role: "student",
    profile: {
      bio: "DevOps student",
      avatar: "https://example.com/avatar9.jpg",
      city: "Fès",
      country: "Morocco"
    },
    skills: ["Docker", "Kubernetes", "AWS"],
    isActive: true,
    totalCoursesEnrolled: 2,
    createdAt: new Date("2024-01-30"),
    lastLoginAt: new Date("2024-12-01")
  },
  {
    _id: new ObjectId(),
    firstName: "Najat",
    lastName: "El Alami",
    email: "najat.elalami@email.com",
    role: "student",
    profile: {
      bio: "Web programming student",
      avatar: "https://example.com/avatar10.jpg",
      city: "Tangier",
      country: "Morocco"
    },
    skills: ["HTML", "CSS", "JavaScript"],
    isActive: true,
    totalCoursesEnrolled: 1,
    createdAt: new Date("2024-02-12"),
    lastLoginAt: new Date("2024-12-02")
  },
  {
    _id: new ObjectId(),
    firstName: "Hassan",
    lastName: "El Fadil",
    email: "hassan.elfadil@email.com",
    role: "student",
    profile: {
      bio: "Passionate about backend development",
      avatar: "https://example.com/avatar11.jpg",
      city: "Casablanca",
      country: "Morocco"
    },
    skills: ["Python", "Django"],
    isActive: true,
    totalCoursesEnrolled: 3,
    createdAt: new Date("2024-03-01"),
    lastLoginAt: new Date("2024-12-01")
  },
  {
    _id: new ObjectId(),
    firstName: "Salma",
    lastName: "Jebari",
    email: "salma.jebari@email.com",
    role: "student",
    profile: {
      bio: "Mobile apps student",
      avatar: "https://example.com/avatar12.jpg",
      city: "Rabat",
      country: "Morocco"
    },
    skills: ["Flutter", "Dart"],
    isActive: true,
    totalCoursesEnrolled: 2,
    createdAt: new Date("2024-02-15"),
    lastLoginAt: new Date("2024-12-03")
  },
  {
    _id: new ObjectId(),
    firstName: "Yassine",
    lastName: "Chouaib",
    email: "yassine.chouaib@email.com",
    role: "student",
    profile: {
      bio: "Passionate about AI",
      avatar: "https://example.com/avatar13.jpg",
      city: "Marrakech",
      country: "Morocco"
    },
    skills: ["Python", "TensorFlow"],
    isActive: true,
    totalCoursesEnrolled: 1,
    createdAt: new Date("2024-01-20"),
    lastLoginAt: new Date("2024-12-01")
  },
  {
    _id: new ObjectId(),
    firstName: "Rania",
    lastName: "Moussaoui",
    email: "rania.moussaoui@email.com",
    role: "student",
    profile: {
      bio: "Front-end developer",
      avatar: "https://example.com/avatar14.jpg",
      city: "Fès",
      country: "Morocco"
    },
    skills: ["React", "CSS", "HTML"],
    isActive: true,
    totalCoursesEnrolled: 2,
    createdAt: new Date("2024-02-18"),
    lastLoginAt: new Date("2024-12-02")
  },
  {
    _id: new ObjectId(),
    firstName: "Anas",
    lastName: "Lahbabi",
    email: "anas.lahbabi@email.com",
    role: "student",
    profile: {
      bio: "Cybersecurity student",
      avatar: "https://example.com/avatar15.jpg",
      city: "Casablanca",
      country: "Morocco"
    },
    skills: ["Python", "Networking"],
    isActive: true,
    totalCoursesEnrolled: 3,
    createdAt: new Date("2024-03-01"),
    lastLoginAt: new Date("2024-12-01")
  },
  {
    _id: new ObjectId(),
    firstName: "Meryem",
    lastName: "El Ouardi",
    email: "meryem.elouardi@email.com",
    role: "student",
    profile: {
      bio: "Data analysis student",
      avatar: "https://example.com/avatar16.jpg",
      city: "Rabat",
      country: "Morocco"
    },
    skills: ["Python", "Pandas", "SQL"],
    isActive: true,
    totalCoursesEnrolled: 2,
    createdAt: new Date("2024-02-20"),
    lastLoginAt: new Date("2024-12-03")
  },
  {
    _id: new ObjectId(),
    firstName: "Ilyas",
    lastName: "Bennis",
    email: "ilyas.bennis@email.com",
    role: "student",
    profile: {
      bio: "Backend developer",
      avatar: "https://example.com/avatar17.jpg",
      city: "Marrakech",
      country: "Morocco"
    },
    skills: ["Node.js", "MongoDB", "Express"],
    isActive: true,
    totalCoursesEnrolled: 1,
    createdAt: new Date("2024-01-25"),
    lastLoginAt: new Date("2024-12-01")
  },
  {
    _id: new ObjectId(),
    firstName: "Asmae",
    lastName: "Rachidi",
    email: "asmae.rachidi@email.com",
    role: "student",
    profile: {
      bio: "Web design student",
      avatar: "https://example.com/avatar18.jpg",
      city: "Fès",
      country: "Morocco"
    },
    skills: ["CSS", "HTML", "Figma"],
    isActive: true,
    totalCoursesEnrolled: 2,
    createdAt: new Date("2024-02-22"),
    lastLoginAt: new Date("2024-12-02")
  },
  {
    _id: new ObjectId(),
    firstName: "Othman",
    lastName: "Boukili",
    email: "othman.boukili@email.com",
    role: "student",
    profile: {
      bio: "Passionate about databases",
      avatar: "https://example.com/avatar19.jpg",
      city: "Tangier",
      country: "Morocco"
    },
    skills: ["SQL", "MongoDB"],
    isActive: true,
    totalCoursesEnrolled: 1,
    createdAt: new Date("2024-02-25"),
    lastLoginAt: new Date("2024-12-01")
  },
  {
    _id: new ObjectId(),
    firstName: "Salim",
    lastName: "Fadili",
    email: "salim.fadili@email.com",
    role: "student",
    profile: {
      bio: "Full stack developer",
      avatar: "https://example.com/avatar20.jpg",
      city: "Casablanca",
      country: "Morocco"
    },
    skills: ["JavaScript", "React", "Node.js"],
    isActive: true,
    totalCoursesEnrolled: 3,
    createdAt: new Date("2024-03-01"),
    lastLoginAt: new Date("2024-12-03")
  }
]

// Insert all users into DB
db.users.insertMany(student) 

instructor1Id = new ObjectId()
instructor2Id = new ObjectId()
instructor3Id = new ObjectId() 

// create collection("courses") and insert 15 courses

const courses = [
  {
    _id: new ObjectId(),
    title: "MongoDB for Beginners",
    description: "Learn the basics of MongoDB and how to create NoSQL databases.",
    instructorId: instructor1Id,
    category: "Database",
    difficulty: "beginner",
    price: 49.99,
    tags: ["mongodb", "nosql", "database"],
    metadata: { duration: 1200, totalLessons: 12, language: "en" },
    rating: { average: 4.5, count: 28 },
    isPublished: true,
    enrollmentCount: 156,
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-11-20")
  },
  {
    _id: new ObjectId(),
    title: "Introduction to JavaScript",
    description: "Master the basics of JavaScript for web development.",
    instructorId: instructor2Id,
    category: "Web",
    difficulty: "beginner",
    price: 39.99,
    tags: ["javascript", "web", "frontend"],
    metadata: { duration: 900, totalLessons: 10, language: "en" },
    rating: { average: 4.2, count: 35 },
    isPublished: true,
    enrollmentCount: 200,
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-11-15")
  },
  {
    _id: new ObjectId(),
    title: "Intermediate Python",
    description: "Deepen your Python skills with hands-on projects.",
    instructorId: instructor3Id,
    category: "AI",
    difficulty: "intermediate",
    price: 59.99,
    tags: ["python", "ai", "machine learning"],
    metadata: { duration: 1500, totalLessons: 15, language: "en" },
    rating: { average: 4.7, count: 40 },
    isPublished: true,
    enrollmentCount: 180,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-11-25")
  },
  {
    _id: new ObjectId(),
    title: "Mobile Development with Flutter",
    description: "Build cross-platform mobile applications with Flutter.",
    instructorId: instructor1Id,
    category: "Mobile",
    difficulty: "beginner",
    price: 69.99,
    tags: ["flutter", "mobile", "dart"],
    metadata: { duration: 1200, totalLessons: 12, language: "en" },
    rating: { average: 4.4, count: 25 },
    isPublished: true,
    enrollmentCount: 150,
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-11-20")
  },
  {
    _id: new ObjectId(),
    title: "DevOps and Kubernetes",
    description: "Learn the basics of DevOps and Kubernetes cluster management.",
    instructorId: instructor2Id,
    category: "DevOps",
    difficulty: "intermediate",
    price: 79.99,
    tags: ["devops", "kubernetes", "docker"],
    metadata: { duration: 1300, totalLessons: 13, language: "en" },
    rating: { average: 4.6, count: 30 },
    isPublished: true,
    enrollmentCount: 140,
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-11-22")
  },
  {
    _id: new ObjectId(),
    title: "React for Beginners",
    description: "Learn to build web interfaces with React.js.",
    instructorId: instructor3Id,
    category: "Web",
    difficulty: "beginner",
    price: 45.99,
    tags: ["react", "javascript", "web"],
    metadata: { duration: 1000, totalLessons: 11, language: "en" },
    rating: { average: 4.3, count: 28 },
    isPublished: true,
    enrollmentCount: 170,
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-11-18")
  },
  {
    _id: new ObjectId(),
    title: "Advanced Node.js",
    description: "Master Node.js and build high-performance server applications.",
    instructorId: instructor1Id,
    category: "Web",
    difficulty: "advanced",
    price: 69.99,
    tags: ["nodejs", "backend", "javascript"],
    metadata: { duration: 1400, totalLessons: 14, language: "en" },
    rating: { average: 4.8, count: 32 },
    isPublished: true,
    enrollmentCount: 130,
    createdAt: new Date("2024-01-30"),
    updatedAt: new Date("2024-11-28")
  },
  {
    _id: new ObjectId(),
    title: "Machine Learning with Python",
    description: "Learn to build AI models with Python and scikit-learn.",
    instructorId: instructor2Id,
    category: "AI",
    difficulty: "intermediate",
    price: 59.99,
    tags: ["python", "ai", "ml"],
    metadata: { duration: 1500, totalLessons: 15, language: "en" },
    rating: { average: 4.5, count: 36 },
    isPublished: true,
    enrollmentCount: 160,
    createdAt: new Date("2024-02-05"),
    updatedAt: new Date("2024-11-19")
  },
  {
    _id: new ObjectId(),
    title: "Docker and Containerization",
    description: "Understand Docker and containers for modern deployment.",
    instructorId: instructor3Id,
    category: "DevOps",
    difficulty: "beginner",
    price: 49.99,
    tags: ["docker", "devops", "containers"],
    metadata: { duration: 900, totalLessons: 10, language: "en" },
    rating: { average: 4.2, count: 22 },
    isPublished: true,
    enrollmentCount: 110,
    createdAt: new Date("2024-03-12"),
    updatedAt: new Date("2024-11-17")
  },
  {
    _id: new ObjectId(),
    title: "SQL Databases",
    description: "Learn to create and manage relational databases with SQL.",
    instructorId: instructor1Id,
    category: "Database",
    difficulty: "beginner",
    price: 39.99,
    tags: ["sql", "database", "mysql"],
    metadata: { duration: 1000, totalLessons: 10, language: "en" },
    rating: { average: 4.1, count: 25 },
    isPublished: true,
    enrollmentCount: 125,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-11-15")
  },
  {
    _id: new ObjectId(),
    title: "Advanced Angular",
    description: "Build high-performance front-end applications with Angular.",
    instructorId: instructor2Id,
    category: "Web",
    difficulty: "advanced",
    price: 65.99,
    tags: ["angular", "javascript", "web"],
    metadata: { duration: 1300, totalLessons: 13, language: "en" },
    rating: { average: 4.4, count: 30 },
    isPublished: true,
    enrollmentCount: 145,
    createdAt: new Date("2024-02-12"),
    updatedAt: new Date("2024-11-20")
  },
  {
    _id: new ObjectId(),
    title: "Kotlin for Android",
    description: "Learn to build modern Android applications with Kotlin.",
    instructorId: instructor3Id,
    category: "Mobile",
    difficulty: "intermediate",
    price: 59.99,
    tags: ["kotlin", "android", "mobile"],
    metadata: { duration: 1200, totalLessons: 12, language: "en" },
    rating: { average: 4.3, count: 28 },
    isPublished: true,
    enrollmentCount: 135,
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-11-18")
  },
  {
    _id: new ObjectId(),
    title: "Advanced DevOps",
    description: "Master advanced DevOps concepts and CI/CD pipelines.",
    instructorId: instructor1Id,
    category: "DevOps",
    difficulty: "advanced",
    price: 79.99,
    tags: ["devops", "ci/cd", "docker"],
    metadata: { duration: 1500, totalLessons: 15, language: "en" },
    rating: { average: 4.6, count: 32 },
    isPublished: true,
    enrollmentCount: 120,
    createdAt: new Date("2024-01-25"),
    updatedAt: new Date("2024-11-25")
  },
  {
    _id: new ObjectId(),
    title: "Artificial Intelligence for Beginners",
    description: "Introduction to AI concepts and machine learning.",
    instructorId: instructor2Id,
    category: "AI",
    difficulty: "beginner",
    price: 49.99,
    tags: ["ai", "machine learning", "python"],
    metadata: { duration: 1100, totalLessons: 11, language: "en" },
    rating: { average: 4.2, count: 27 },
    isPublished: true,
    enrollmentCount: 140,
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-11-21")
  }
]

// Insert all courses into DB
db.courses.insertMany(courses)

// Extract IDs for referencing in other collections
const courseIds = courses.map(c => c._id)
const studentIds = student.map(s => s._id)

// create collection("lessons") and insert 30 lessons (2 per course)
const lessons = [
  // Course 1: MongoDB for Beginners
  { _id: new ObjectId(), courseId: courseIds[0], title: "Introduction to Documents", content: "In this lesson, we will discover the concept of documents in MongoDB and how they differ from rows in relational databases.", type: "video", order: 1, duration: 45, resources: [{ name: "Slides PDF", url: "https://example.com/mongo-intro-slides.pdf" }, { name: "Source Code", url: "https://example.com/mongo-intro-code.zip" }], isFree: true, createdAt: new Date("2024-03-01") },
  { _id: new ObjectId(), courseId: courseIds[0], title: "Basic CRUD Operations", content: "Learn to create, read, update and delete documents in MongoDB.", type: "text", order: 2, duration: 50, resources: [{ name: "Exercises PDF", url: "https://example.com/mongo-crud-exercices.pdf" }], isFree: false, createdAt: new Date("2024-03-02") },

  // Course 2: Introduction to JavaScript
  { _id: new ObjectId(), courseId: courseIds[1], title: "Variables and Data Types", content: "Discover variables, primitive types and objects in JavaScript.", type: "video", order: 1, duration: 40, resources: [{ name: "Slides PDF", url: "https://example.com/js-variables-slides.pdf" }, { name: "Source Code", url: "https://example.com/js-variables-code.zip" }], isFree: true, createdAt: new Date("2024-02-10") },
  { _id: new ObjectId(), courseId: courseIds[1], title: "Functions and Scope", content: "Learn to create functions and understand variable scope.", type: "video", order: 2, duration: 55, resources: [{ name: "Slides PDF", url: "https://example.com/js-functions-slides.pdf" }], isFree: false, createdAt: new Date("2024-02-12") },

  // Course 3: Intermediate Python
  { _id: new ObjectId(), courseId: courseIds[2], title: "Python Decorators", content: "Master decorators to write more elegant Python code.", type: "video", order: 1, duration: 50, resources: [{ name: "Slides PDF", url: "https://example.com/python-decorators-slides.pdf" }, { name: "Source Code", url: "https://example.com/python-decorators-code.zip" }], isFree: true, createdAt: new Date("2024-01-15") },
  { _id: new ObjectId(), courseId: courseIds[2], title: "Generators and Iterators", content: "Understand generators and iterators for efficient data processing.", type: "text", order: 2, duration: 45, resources: [{ name: "Exercises PDF", url: "https://example.com/python-generators-exercices.pdf" }], isFree: false, createdAt: new Date("2024-01-17") },

  // Course 4: Mobile Development with Flutter
  { _id: new ObjectId(), courseId: courseIds[3], title: "Setup and First Project", content: "Install Flutter and create your first mobile application.", type: "video", order: 1, duration: 35, resources: [{ name: "Installation Guide", url: "https://example.com/flutter-install-guide.pdf" }, { name: "Source Code", url: "https://example.com/flutter-first-app.zip" }], isFree: true, createdAt: new Date("2024-03-05") },
  { _id: new ObjectId(), courseId: courseIds[3], title: "Fundamental Widgets", content: "Discover basic Flutter widgets: Container, Row, Column, Text.", type: "video", order: 2, duration: 50, resources: [{ name: "Slides PDF", url: "https://example.com/flutter-widgets-slides.pdf" }], isFree: false, createdAt: new Date("2024-03-07") },

  // Course 5: DevOps and Kubernetes
  { _id: new ObjectId(), courseId: courseIds[4], title: "Introduction to Kubernetes", content: "Understand the architecture of Kubernetes and its main components.", type: "video", order: 1, duration: 55, resources: [{ name: "Slides PDF", url: "https://example.com/k8s-intro-slides.pdf" }, { name: "Cheat Sheet", url: "https://example.com/k8s-cheatsheet.pdf" }], isFree: true, createdAt: new Date("2024-02-20") },
  { _id: new ObjectId(), courseId: courseIds[4], title: "Deploying Pods and Services", content: "Learn to create pods, services and Kubernetes deployments.", type: "text", order: 2, duration: 60, resources: [{ name: "Source Code", url: "https://example.com/k8s-deploy-code.zip" }], isFree: false, createdAt: new Date("2024-02-22") },

  // Course 6: React for Beginners
  { _id: new ObjectId(), courseId: courseIds[5], title: "JSX and Components", content: "Discover JSX syntax and create your first React components.", type: "video", order: 1, duration: 40, resources: [{ name: "Slides PDF", url: "https://example.com/react-jsx-slides.pdf" }, { name: "Source Code", url: "https://example.com/react-jsx-code.zip" }], isFree: true, createdAt: new Date("2024-03-10") },
  { _id: new ObjectId(), courseId: courseIds[5], title: "State and Props", content: "Learn to manage state and pass data between components.", type: "quiz", order: 2, duration: 45, resources: [{ name: "Exercises PDF", url: "https://example.com/react-state-exercices.pdf" }], isFree: false, createdAt: new Date("2024-03-12") },

  // Course 7: Advanced Node.js
  { _id: new ObjectId(), courseId: courseIds[6], title: "Streams and Buffers", content: "Master Node.js streams for processing large volumes of data.", type: "video", order: 1, duration: 55, resources: [{ name: "Slides PDF", url: "https://example.com/node-streams-slides.pdf" }, { name: "Source Code", url: "https://example.com/node-streams-code.zip" }], isFree: false, createdAt: new Date("2024-01-30") },
  { _id: new ObjectId(), courseId: courseIds[6], title: "Microservices Architecture", content: "Build a microservices architecture with Node.js and Express.", type: "text", order: 2, duration: 60, resources: [{ name: "Source Code", url: "https://example.com/node-microservices-code.zip" }], isFree: false, createdAt: new Date("2024-02-01") },

  // Course 8: Machine Learning with Python
  { _id: new ObjectId(), courseId: courseIds[7], title: "Linear Regression", content: "Understand and implement linear regression with scikit-learn.", type: "video", order: 1, duration: 50, resources: [{ name: "Slides PDF", url: "https://example.com/ml-regression-slides.pdf" }, { name: "Jupyter Notebook", url: "https://example.com/ml-regression.ipynb" }], isFree: true, createdAt: new Date("2024-02-05") },
  { _id: new ObjectId(), courseId: courseIds[7], title: "Classification with KNN", content: "Learn the K-Nearest Neighbors algorithm for classification.", type: "quiz", order: 2, duration: 45, resources: [{ name: "Exercises PDF", url: "https://example.com/ml-knn-exercices.pdf" }], isFree: false, createdAt: new Date("2024-02-07") },

  // Course 9: Docker and Containerization
  { _id: new ObjectId(), courseId: courseIds[8], title: "Getting Started with Docker", content: "Install Docker and launch your first container.", type: "video", order: 1, duration: 35, resources: [{ name: "Installation Guide", url: "https://example.com/docker-install-guide.pdf" }, { name: "Cheat Sheet", url: "https://example.com/docker-cheatsheet.pdf" }], isFree: true, createdAt: new Date("2024-03-12") },
  { _id: new ObjectId(), courseId: courseIds[8], title: "Dockerfile and Images", content: "Create custom Docker images with Dockerfile.", type: "text", order: 2, duration: 40, resources: [{ name: "Source Code", url: "https://example.com/docker-images-code.zip" }], isFree: false, createdAt: new Date("2024-03-14") },

  // Course 10: SQL Databases
  { _id: new ObjectId(), courseId: courseIds[9], title: "Creating Tables and Inserting Data", content: "Learn the CREATE TABLE and INSERT INTO commands.", type: "video", order: 1, duration: 40, resources: [{ name: "Slides PDF", url: "https://example.com/sql-create-slides.pdf" }, { name: "SQL Script", url: "https://example.com/sql-create-script.sql" }], isFree: true, createdAt: new Date("2024-02-01") },
  { _id: new ObjectId(), courseId: courseIds[9], title: "SELECT Queries and Joins", content: "Master SELECT, WHERE, JOIN queries to retrieve your data.", type: "quiz", order: 2, duration: 50, resources: [{ name: "Exercises PDF", url: "https://example.com/sql-select-exercices.pdf" }], isFree: false, createdAt: new Date("2024-02-03") },

  // Course 11: Advanced Angular
  { _id: new ObjectId(), courseId: courseIds[10], title: "RxJS and Observables", content: "Master reactive programming with RxJS in Angular.", type: "video", order: 1, duration: 55, resources: [{ name: "Slides PDF", url: "https://example.com/angular-rxjs-slides.pdf" }, { name: "Source Code", url: "https://example.com/angular-rxjs-code.zip" }], isFree: false, createdAt: new Date("2024-02-12") },
  { _id: new ObjectId(), courseId: courseIds[10], title: "Lazy Loading and Performance", content: "Optimize your Angular applications with module lazy loading.", type: "text", order: 2, duration: 45, resources: [{ name: "Source Code", url: "https://example.com/angular-lazy-code.zip" }], isFree: false, createdAt: new Date("2024-02-14") },

  // Course 12: Kotlin for Android
  { _id: new ObjectId(), courseId: courseIds[11], title: "Kotlin Basic Syntax", content: "Discover Kotlin syntax: variables, functions, classes.", type: "video", order: 1, duration: 40, resources: [{ name: "Slides PDF", url: "https://example.com/kotlin-syntax-slides.pdf" }, { name: "Source Code", url: "https://example.com/kotlin-syntax-code.zip" }], isFree: true, createdAt: new Date("2024-03-01") },
  { _id: new ObjectId(), courseId: courseIds[11], title: "Android Activities and Fragments", content: "Understand the lifecycle of activities and fragments.", type: "video", order: 2, duration: 50, resources: [{ name: "Source Code", url: "https://example.com/kotlin-activities-code.zip" }], isFree: false, createdAt: new Date("2024-03-03") },

  // Course 13: Advanced DevOps
  { _id: new ObjectId(), courseId: courseIds[12], title: "CI/CD Pipelines with Jenkins", content: "Configure continuous integration and deployment pipelines.", type: "video", order: 1, duration: 55, resources: [{ name: "Slides PDF", url: "https://example.com/devops-cicd-slides.pdf" }, { name: "Jenkins Config", url: "https://example.com/jenkinsfile.zip" }], isFree: false, createdAt: new Date("2024-01-25") },
  { _id: new ObjectId(), courseId: courseIds[12], title: "Monitoring and Alerting", content: "Set up monitoring with Prometheus and Grafana.", type: "text", order: 2, duration: 50, resources: [{ name: "Source Code", url: "https://example.com/devops-monitoring-code.zip" }], isFree: false, createdAt: new Date("2024-01-27") },

  // Course 14: Artificial Intelligence for Beginners
  { _id: new ObjectId(), courseId: courseIds[13], title: "What is AI?", content: "Introduction to the fundamental concepts of artificial intelligence.", type: "video", order: 1, duration: 35, resources: [{ name: "Slides PDF", url: "https://example.com/ai-intro-slides.pdf" }], isFree: true, createdAt: new Date("2024-02-15") },
  { _id: new ObjectId(), courseId: courseIds[13], title: "Simple Neural Networks", content: "Discover how an artificial neural network works.", type: "quiz", order: 2, duration: 45, resources: [{ name: "Jupyter Notebook", url: "https://example.com/ai-neural-network.ipynb" }, { name: "Exercises PDF", url: "https://example.com/ai-nn-exercices.pdf" }], isFree: false, createdAt: new Date("2024-02-17") },

  // Extra lessons for courses to reach 30+ (adding to courses 1, 2)
  { _id: new ObjectId(), courseId: courseIds[0], title: "MongoDB Indexes and Performance", content: "Learn to create indexes to optimize your MongoDB queries.", type: "quiz", order: 3, duration: 40, resources: [{ name: "Exercises PDF", url: "https://example.com/mongo-index-exercices.pdf" }], isFree: false, createdAt: new Date("2024-03-05") },
  { _id: new ObjectId(), courseId: courseIds[1], title: "DOM Manipulation", content: "Learn to manipulate the DOM with JavaScript to make your pages interactive.", type: "video", order: 3, duration: 45, resources: [{ name: "Source Code", url: "https://example.com/js-dom-code.zip" }, { name: "Slides PDF", url: "https://example.com/js-dom-slides.pdf" }], isFree: false, createdAt: new Date("2024-02-14") }
]

// Extract lesson IDs for enrollments
const lessonIds = lessons.map(l => l._id)

// Insert all lessons into DB
db.lessons.insertMany(lessons)

// create collection("enrollments") and insert 25 enrollments
const enrollments = [
  { _id: new ObjectId(), userId: studentIds[0], courseId: courseIds[0], status: "active", progress: { completedLessons: [lessonIds[0]], percentage: 33, lastAccessedAt: new Date("2024-12-01") }, payment: { amount: 49.99, method: "card", paidAt: new Date("2024-06-15") }, enrolledAt: new Date("2024-06-15"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[0], courseId: courseIds[1], status: "completed", progress: { completedLessons: [lessonIds[2], lessonIds[3], lessonIds[29]], percentage: 100, lastAccessedAt: new Date("2024-11-20") }, payment: { amount: 39.99, method: "paypal", paidAt: new Date("2024-05-10") }, enrolledAt: new Date("2024-05-10"), completedAt: new Date("2024-11-20") },
  { _id: new ObjectId(), userId: studentIds[1], courseId: courseIds[5], status: "active", progress: { completedLessons: [lessonIds[10]], percentage: 50, lastAccessedAt: new Date("2024-12-02") }, payment: { amount: 45.99, method: "card", paidAt: new Date("2024-07-01") }, enrolledAt: new Date("2024-07-01"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[1], courseId: courseIds[1], status: "active", progress: { completedLessons: [lessonIds[2]], percentage: 33, lastAccessedAt: new Date("2024-12-01") }, payment: { amount: 39.99, method: "card", paidAt: new Date("2024-06-20") }, enrolledAt: new Date("2024-06-20"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[1], courseId: courseIds[9], status: "completed", progress: { completedLessons: [lessonIds[20], lessonIds[21]], percentage: 100, lastAccessedAt: new Date("2024-11-15") }, payment: { amount: 39.99, method: "paypal", paidAt: new Date("2024-04-15") }, enrolledAt: new Date("2024-04-15"), completedAt: new Date("2024-11-15") },
  { _id: new ObjectId(), userId: studentIds[2], courseId: courseIds[11], status: "active", progress: { completedLessons: [lessonIds[24]], percentage: 50, lastAccessedAt: new Date("2024-11-30") }, payment: { amount: 59.99, method: "card", paidAt: new Date("2024-08-01") }, enrolledAt: new Date("2024-08-01"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[3], courseId: courseIds[2], status: "active", progress: { completedLessons: [lessonIds[4]], percentage: 50, lastAccessedAt: new Date("2024-12-03") }, payment: { amount: 59.99, method: "card", paidAt: new Date("2024-07-10") }, enrolledAt: new Date("2024-07-10"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[3], courseId: courseIds[7], status: "paused", progress: { completedLessons: [lessonIds[14]], percentage: 50, lastAccessedAt: new Date("2024-10-15") }, payment: { amount: 59.99, method: "paypal", paidAt: new Date("2024-06-01") }, enrolledAt: new Date("2024-06-01"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[4], courseId: courseIds[0], status: "completed", progress: { completedLessons: [lessonIds[0], lessonIds[1], lessonIds[28]], percentage: 100, lastAccessedAt: new Date("2024-11-30") }, payment: { amount: 49.99, method: "card", paidAt: new Date("2024-05-20") }, enrolledAt: new Date("2024-05-20"), completedAt: new Date("2024-11-30") },
  { _id: new ObjectId(), userId: studentIds[4], courseId: courseIds[9], status: "active", progress: { completedLessons: [lessonIds[20]], percentage: 50, lastAccessedAt: new Date("2024-12-01") }, payment: { amount: 39.99, method: "card", paidAt: new Date("2024-08-15") }, enrolledAt: new Date("2024-08-15"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[4], courseId: courseIds[4], status: "active", progress: { completedLessons: [], percentage: 0, lastAccessedAt: new Date("2024-12-01") }, payment: { amount: 79.99, method: "paypal", paidAt: new Date("2024-09-01") }, enrolledAt: new Date("2024-09-01"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[5], courseId: courseIds[5], status: "completed", progress: { completedLessons: [lessonIds[10], lessonIds[11]], percentage: 100, lastAccessedAt: new Date("2024-11-28") }, payment: { amount: 45.99, method: "card", paidAt: new Date("2024-06-10") }, enrolledAt: new Date("2024-06-10"), completedAt: new Date("2024-11-28") },
  { _id: new ObjectId(), userId: studentIds[6], courseId: courseIds[6], status: "active", progress: { completedLessons: [lessonIds[12]], percentage: 50, lastAccessedAt: new Date("2024-12-01") }, payment: { amount: 69.99, method: "card", paidAt: new Date("2024-07-20") }, enrolledAt: new Date("2024-07-20"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[6], courseId: courseIds[0], status: "active", progress: { completedLessons: [lessonIds[0], lessonIds[1]], percentage: 67, lastAccessedAt: new Date("2024-12-01") }, payment: { amount: 49.99, method: "paypal", paidAt: new Date("2024-08-05") }, enrolledAt: new Date("2024-08-05"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[7], courseId: courseIds[2], status: "completed", progress: { completedLessons: [lessonIds[4], lessonIds[5]], percentage: 100, lastAccessedAt: new Date("2024-11-25") }, payment: { amount: 59.99, method: "card", paidAt: new Date("2024-05-01") }, enrolledAt: new Date("2024-05-01"), completedAt: new Date("2024-11-25") },
  { _id: new ObjectId(), userId: studentIds[7], courseId: courseIds[7], status: "active", progress: { completedLessons: [lessonIds[14]], percentage: 50, lastAccessedAt: new Date("2024-12-02") }, payment: { amount: 59.99, method: "card", paidAt: new Date("2024-07-15") }, enrolledAt: new Date("2024-07-15"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[7], courseId: courseIds[13], status: "active", progress: { completedLessons: [lessonIds[26]], percentage: 50, lastAccessedAt: new Date("2024-12-02") }, payment: { amount: 49.99, method: "free", paidAt: new Date("2024-09-10") }, enrolledAt: new Date("2024-09-10"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[8], courseId: courseIds[4], status: "active", progress: { completedLessons: [lessonIds[8]], percentage: 50, lastAccessedAt: new Date("2024-12-01") }, payment: { amount: 79.99, method: "card", paidAt: new Date("2024-06-25") }, enrolledAt: new Date("2024-06-25"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[8], courseId: courseIds[8], status: "completed", progress: { completedLessons: [lessonIds[18], lessonIds[19]], percentage: 100, lastAccessedAt: new Date("2024-11-20") }, payment: { amount: 49.99, method: "paypal", paidAt: new Date("2024-05-15") }, enrolledAt: new Date("2024-05-15"), completedAt: new Date("2024-11-20") },
  { _id: new ObjectId(), userId: studentIds[9], courseId: courseIds[1], status: "cancelled", progress: { completedLessons: [], percentage: 0, lastAccessedAt: new Date("2024-07-01") }, payment: { amount: 39.99, method: "card", paidAt: new Date("2024-06-30") }, enrolledAt: new Date("2024-06-30"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[10], courseId: courseIds[2], status: "active", progress: { completedLessons: [lessonIds[4]], percentage: 50, lastAccessedAt: new Date("2024-12-01") }, payment: { amount: 59.99, method: "card", paidAt: new Date("2024-08-20") }, enrolledAt: new Date("2024-08-20"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[11], courseId: courseIds[3], status: "completed", progress: { completedLessons: [lessonIds[6], lessonIds[7]], percentage: 100, lastAccessedAt: new Date("2024-11-18") }, payment: { amount: 69.99, method: "paypal", paidAt: new Date("2024-04-20") }, enrolledAt: new Date("2024-04-20"), completedAt: new Date("2024-11-18") },
  { _id: new ObjectId(), userId: studentIds[12], courseId: courseIds[7], status: "paused", progress: { completedLessons: [lessonIds[14]], percentage: 50, lastAccessedAt: new Date("2024-09-15") }, payment: { amount: 59.99, method: "card", paidAt: new Date("2024-07-05") }, enrolledAt: new Date("2024-07-05"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[13], courseId: courseIds[5], status: "active", progress: { completedLessons: [lessonIds[10]], percentage: 50, lastAccessedAt: new Date("2024-12-02") }, payment: { amount: 45.99, method: "free", paidAt: new Date("2024-08-01") }, enrolledAt: new Date("2024-08-01"), completedAt: null },
  { _id: new ObjectId(), userId: studentIds[14], courseId: courseIds[12], status: "active", progress: { completedLessons: [lessonIds[26]], percentage: 50, lastAccessedAt: new Date("2024-12-01") }, payment: { amount: 79.99, method: "card", paidAt: new Date("2024-09-20") }, enrolledAt: new Date("2024-09-20"), completedAt: null }
]

// Insert all enrollments into DB
db.enrollments.insertMany(enrollments)

// create collection("reviews") and insert 20 reviews
const reviews = [
  { _id: new ObjectId(), userId: studentIds[0], courseId: courseIds[1], rating: 5, title: "Excellent course!", comment: "Very well explained, the exercises are relevant and progressive. Highly recommended.", isVerified: true, helpfulCount: 12, createdAt: new Date("2024-08-20"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[1], courseId: courseIds[9], rating: 4, title: "Good SQL course", comment: "Solid content, I would have liked more practical exercises.", isVerified: true, helpfulCount: 8, createdAt: new Date("2024-09-10"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[4], courseId: courseIds[0], rating: 5, title: "MongoDB demystified", comment: "I finally understood MongoDB thanks to this course. The examples are clear and concrete.", isVerified: true, helpfulCount: 15, createdAt: new Date("2024-10-05"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[5], courseId: courseIds[5], rating: 4, title: "Good introduction to React", comment: "The course covers React basics well. Missing some advanced topics.", isVerified: true, helpfulCount: 10, createdAt: new Date("2024-09-15"), updatedAt: new Date("2024-09-20") },
  { _id: new ObjectId(), userId: studentIds[7], courseId: courseIds[2], rating: 5, title: "Python at its best!", comment: "Decorators and generators are very well explained. Excellent content.", isVerified: true, helpfulCount: 18, createdAt: new Date("2024-08-25"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[8], courseId: courseIds[8], rating: 4, title: "Good Docker intro", comment: "Well-structured course for containerization beginners.", isVerified: true, helpfulCount: 7, createdAt: new Date("2024-09-01"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[11], courseId: courseIds[3], rating: 5, title: "Flutter is awesome!", comment: "This course allowed me to create my first mobile app. Kudos to the instructor!", isVerified: true, helpfulCount: 14, createdAt: new Date("2024-10-10"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[6], courseId: courseIds[6], rating: 4, title: "Well-made advanced Node.js", comment: "Streams and microservices are well covered. A few more exercises would be welcome.", isVerified: false, helpfulCount: 6, createdAt: new Date("2024-10-20"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[3], courseId: courseIds[2], rating: 3, title: "Decent but could be better", comment: "The content is good but the pace is a bit fast for intermediate level.", isVerified: false, helpfulCount: 3, createdAt: new Date("2024-09-25"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[8], courseId: courseIds[4], rating: 5, title: "Kubernetes well explained", comment: "Finally a course that makes Kubernetes accessible! The demos are very useful.", isVerified: false, helpfulCount: 11, createdAt: new Date("2024-10-15"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[10], courseId: courseIds[2], rating: 4, title: "Very informative", comment: "I learned a lot about Python. The practical projects are a real plus.", isVerified: false, helpfulCount: 9, createdAt: new Date("2024-11-01"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[7], courseId: courseIds[7], rating: 5, title: "ML well covered", comment: "The course covers essential algorithms with concrete examples. Very satisfied.", isVerified: false, helpfulCount: 13, createdAt: new Date("2024-10-28"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[13], courseId: courseIds[5], rating: 4, title: "Perfect React for beginners", comment: "Good pace, good explanations. I would have liked a more complete final project.", isVerified: false, helpfulCount: 5, createdAt: new Date("2024-11-05"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[14], courseId: courseIds[12], rating: 3, title: "Complex DevOps", comment: "The content is rich but sometimes hard to follow without prior experience.", isVerified: false, helpfulCount: 4, createdAt: new Date("2024-11-10"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[7], courseId: courseIds[13], rating: 4, title: "Good intro to AI", comment: "The fundamental concepts are well presented. Ideal for beginners.", isVerified: false, helpfulCount: 8, createdAt: new Date("2024-11-15"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[0], courseId: courseIds[0], rating: 4, title: "Solid MongoDB foundation", comment: "Good course for starting with MongoDB. The CRUD exercises are very useful.", isVerified: false, helpfulCount: 7, createdAt: new Date("2024-11-20"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[6], courseId: courseIds[0], rating: 5, title: "Essential for NoSQL", comment: "This course gave me a solid foundation in MongoDB. I feel ready for real projects.", isVerified: false, helpfulCount: 16, createdAt: new Date("2024-11-22"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[12], courseId: courseIds[7], rating: 2, title: "Too theoretical", comment: "The course lacks practical examples. Too much theory without concrete application.", isVerified: false, helpfulCount: 2, createdAt: new Date("2024-11-25"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[1], courseId: courseIds[5], rating: 5, title: "Superb React course", comment: "Everything is clear and well organized. Components and state are perfectly explained.", isVerified: false, helpfulCount: 11, createdAt: new Date("2024-11-28"), updatedAt: null },
  { _id: new ObjectId(), userId: studentIds[9], courseId: courseIds[1], rating: 1, title: "Disappointed with the course", comment: "The course did not match my expectations. Content too basic for me.", isVerified: false, helpfulCount: 1, createdAt: new Date("2024-12-01"), updatedAt: null }
]

// Insert all reviews into DB
db.reviews.insertMany(reviews) 

// chapter 2 :  

// insert a new student into "users" collection

db.users.insertOne({
        _id: new ObjectId(),
        firstName:"Amine",
        lastName:"Fatih",
        email:"amine.fatih@example.com",
        role:"student",
        profile:{
            bio:"Data Engineer with a passion for big data and machine learning. Always eager to learn new technologies and improve my skills.",
            avatar:"https://example.com/avatars/amine.jpg",
            city:"Boujdour",
            country:"Morocco"
        },
        skills:["Python", "SQL", "Hadoop", "Spark"],
        isActive:true,
        totalCoursesEnrolled:0,
        createdAt:new Date("2024-06-01"),
        lastLoginAt:new Date("2026-03-01")
    })

// insert a 3 new course into "courses" collection

db.courses.insertMany([
  {
    _id: new ObjectId(),
    title: "Introduction to Project Management",
    description: "Learn the fundamentals of project management, including planning, execution, and delivery.",
    instructorId: instructor1Id, // replace with a real instructorId
    category: "DevOps",
    difficulty: "beginner",
    price: 49.99,
    tags: ["project management", "planning", "teamwork"],
    metadata: { duration: 600, totalLessons: 8, language: "en" },
    rating: { average: 0, count: 0 },
    isPublished: true,
    enrollmentCount: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    title: "Digital Marketing Essentials",
    description: "Understand the key principles of digital marketing, including SEO, social media, and content strategy.",
    instructorId: instructor2Id,
    category: "Web",
    difficulty: "beginner",
    price: 59.99,
    tags: ["marketing", "digital", "seo"],
    metadata: { duration: 700, totalLessons: 9, language: "en" },
    rating: { average: 0, count: 0 },
    isPublished: true,
    enrollmentCount: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: new ObjectId(),
    title: "Fundamentals of Artificial Intelligence",
    description: "Get an introduction to AI concepts, including machine learning, neural networks, and applications.",
    instructorId: instructor3Id,
    category: "AI",
    difficulty: "intermediate",
    price: 79.99,
    tags: ["ai", "machine learning", "data science"],
    metadata: { duration: 900, totalLessons: 12, language: "en" },
    rating: { average: 0, count: 0 },
    isPublished: true,
    enrollmentCount: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }
])

// update city of a user with email
// using Set operator to update the city field 

db.users.updateOne(
    { email:"ahmed.elamrani@email.com"},
    { $set:{"profile.city":"Rabat"}}
)

// increment enrollmentCount for course with title 
// using $inc operator to increment the enrollmentCount field
db.courses.updateOne(
    { title: "Introduction to Project Management" },
    { $inc: { enrollmentCount: 1 } }
)

// Add "Data Analysis" to skills array 
// using $push operator to add a new skill to the skills array

db.users.updateOne(
    { email:"youssef.haddad@email.com"},
    { $push: { skills: "Data Analysis" } }
)

// remove "planning" tag from course with title
// using $pull operator to remove the "planning" tag from the tags array
db.courses.updateOne(
    { title: "Introduction to Project Management" },
    { $pull: { tags: "planning" } }
)

// update multiple users  
// using updatemany and $lt for date comparison 
const sixMonthsAgo = new Date() 
sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

db.users.updateMany(
    { lastLoginAt: { $lt: sixMonthsAgo } },
    { $set: { isActive: false } }
)

// upsert a user by email 
// using upsert option to insert a new user if no document matches the email 
db.users.updateOne(
    { email: "mohamed.bennani@email.com" },
    { 
        $set: {
            firstName: "Mohamed",
            lastName: "Bennani",
            role: "student",
            profile: {
                bio:"Aspiring data scientist with a background in statistics and programming. Passionate about turning data into actionable insights.",
                avatar:"https://example.com/avatars/mohamed.jpg",
                city:"Casablanca",
                country:"Morocco"
            },
            skills: ["Python", "R", "SQL"],
            isActive: true,
            totalCoursesEnrolled: 0,
            isActive: true,
            totalCoursesEnrolled: 0,
            createdAt: new Date(),
            lastLoginAt: new Date()
        }
    },
    { upsert: true }
)

// delete a course by id 
// using deleteOne 

db.reviews.deleteOne({ 
    _id: new ObjectId("69a5d03664902f62fc7c2963") 
})


// delete multiple docs where status is cancelled
// using deleteMany to remove all

db.enrollments.deleteMany({ 
    status: "cancelled" 
})


// find courses with price between 20 and 80
// using $gte and $lte
db.courses.find(
    { price: { $gte: 20, $lte: 80 } }
) 

// find courses in category "database" or "web"
// using $in operator to find courses 
db.courses.find(
    { category: { $in: ["database", "web"] } }
)

// find courses where difficulty is not "advanced"
// using $ne 

db.courses.find(
    { difficulty: { $ne: "advanced" } }
)

// find user who are active and users 
// using $and 
db.users.find(
    { $and: [{ isActive: true }, { role: "student" }] }
)

// find courses that are free or have avg rating >= 4.5
// using $or to find courses 
db.courses.find(
    { $or: [{ price: 0 }, { "rating.average": { $gte: 4.5 } }] }
)

// Find reviews where updatedAt exists AND is not null
// using $exists and $ne to find reviews
db.reviews.find(
    { updatedAt: { $exists: true, $ne: null } }
)

// find users who live in Paris
db.users.find(
  { "profile.city": "Paris" }
)

//Find published courses with average rating ≥ 4

db.courses.find(
  {
    $and: [
      { isPublished: true },
      { "rating.average": { $gte: 4 } }
    ]
  }
)

//Find enrollments where status is NOT "cancelled" AND NOT "paused"
// using $nin 
db.enrollments.find(
  { status: { $nin: ["cancelled", "paused"] } }
)

// Show only title and price of courses

db.courses.find(
  {},
  { title: 1, price: 1, _id: 0 }
)

// Show all user fields EXCEPT profile
db.users.find(
  {},
  { profile: 0 }
)
// Show the 5 highest rated courses (best to worst)
db.courses.find()
  .sort({ "rating.average": -1 })
  .limit(5)
// Show all courses sorted by ascending price
db.courses.find()
  .sort({ price: 1 })
// Show page 2 of courses
const pageSize = 10
const pageNumber = 2
db.courses.find()
  .skip((pageNumber - 1) * pageSize)
  .limit(pageSize)
// Count total number of published courses
db.courses.countDocuments(
  { isPublished: true }
)
// Verify user is not already enrolled
const userId = new ObjectId("USER_ID_HERE")
const courseId = new ObjectId("COURSE_ID_HERE")

const existingEnrollment = db.enrollments.findOne({
  userId: userId,
  courseId: courseId,
  status: { $ne: "cancelled" }  
})
// If not enrolled 
if (!existingEnrollment) {

  db.enrollments.insertOne({
    userId: userId,
    courseId: courseId,
    status: "active",
    progress: 0,
    completedLessons: [],
    enrolledAt: new Date()
  })

  // Step 3: Update counters
  db.courses.updateOne(
    { _id: courseId },
    { $inc: { enrollmentCount: 1 } }   // use $inc
  )

  db.users.updateOne(
    { _id: userId },
    { $inc: { totalCoursesEnrolled: 1 } }
  )
}
// Catalogue Query
db.courses.find(
  {
    $and: [
      { category: "Web" },
      { isPublished: true },
      { price: { $lt: 70 } },                // $lt
      { "rating.average": { $gte: 4 } }      // dot notation + $gte
    ]
  },
  {
    _id: 0,
    title: 1,
    price: 1,
    "rating.average": 1
  }
)
.sort({ enrollmentCount: -1 })
.limit(10)
//Progress Logic
const lessonId = new ObjectId("LESSON_ID_HERE")

db.enrollments.updateOne(
  { userId: userId, courseId: courseId },
  {
    $push: { completedLessons: lessonId }  // $push
  }
)
const enrollment = db.enrollments.findOne({ userId, courseId })
const totalLessons = db.lessons.countDocuments({ courseId: courseId })

const progressPercent =
  (enrollment.completedLessons.length / totalLessons) * 100

db.enrollments.updateOne(
  { userId: userId, courseId: courseId },
  { $set: { progress: progressPercent } }  // $set
)
//Cascade Delete Logic
db.lessons.deleteMany({ courseId: courseId })
db.reviews.deleteMany({ courseId: courseId })
db.enrollments.updateMany(
  { courseId: courseId, status: { $nin: ["cancelled"] } },  // $nin
  { $set: { status: "cancelled" } }
)
db.courses.deleteOne({ _id: courseId })
//Dashboard Query
const user = db.users.findOne({ _id: userId })
const activeEnrollments = db.enrollments.find({
  userId: userId,
  status: { $in: ["active", "completed"] }  // $in
}).toArray()
const recentReviews = db.reviews.find(
  {
    userId: userId,
    updatedAt: { $exists: true, $ne: null }  // $exists + $ne
  }
)
.sort({ updatedAt: -1 })
.limit(3)
.toArray()