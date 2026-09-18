const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require("dns");

dotenv.config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

const passport = require("passport");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

// Start MongoDB connection
const dbPromise = connectDB();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// JSON
app.use(express.json());

// Passport
app.use(passport.initialize());

// Home
app.get("/", (req, res) => {
  res.json({
    message: "Express server is working!",
  });
});

// MongoDB health check
app.get("/api/health", async (req, res) => {
  try {
    await dbPromise;

    res.json({
      mongoUriExists: !!process.env.MONGO_URI,
      mongoState: mongoose.connection.readyState,
      message: "MongoDB connected",
    });
  } catch (error) {
    res.status(500).json({
      mongoUriExists: !!process.env.MONGO_URI,
      mongoState: mongoose.connection.readyState,
      message: "MongoDB connection failed",
      error: error.message,
    });
  }
});

// Wait for MongoDB before API routes
app.use(async (req, res, next) => {
  try {
    await dbPromise;
    next();
  } catch (error) {
    res.status(500).json({
      message: "Database connection failed",
      error: error.message,
    });
  }
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// Start local server
if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  dbPromise
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Server could not start because MongoDB failed.");
      console.error(error.message);
    });
}

module.exports = app;