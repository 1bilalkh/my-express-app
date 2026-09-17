const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

const passport = require("passport");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

// Connect MongoDB
connectDB();

// CORS MUST come before routes
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// JSON body parser
app.use(express.json());

// Passport
app.use(passport.initialize());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Express server is working!",
  });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});