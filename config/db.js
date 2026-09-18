const mongoose = require("mongoose");

let connectionPromise = null;

const connectDB = async () => {
  // Already connected
  if (mongoose.connection.readyState === 1) {
    return;
  }

  // Connection already in progress
  if (connectionPromise) {
    return connectionPromise;
  }

  console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
  console.log(
    "MONGO_URI starts with:",
    process.env.MONGO_URI
      ? process.env.MONGO_URI.substring(0, 14)
      : "MISSING"
  );

  connectionPromise = mongoose
    .connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      family: 4,
    })
    .then(() => {
      console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
      console.error("MongoDB connection failed!");
      console.error("Name:", error.name);
      console.error("Message:", error.message);
      console.error("Reason:", error.reason || "No reason provided");

      connectionPromise = null;

      throw error;
    });

  return connectionPromise;
};

module.exports = connectDB;