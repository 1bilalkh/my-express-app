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

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// Start server
if (require.main === module) {
  const startServer = async () => {
    try {
      await connectDB();

      const PORT = process.env.PORT || 3000;

      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    } catch (error) {
      console.error("Server could not start because MongoDB failed.");
    }
  };

  startServer();
}

module.exports = app;