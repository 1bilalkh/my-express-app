const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
    console.log(
      "MONGO_URI starts with:",
      process.env.MONGO_URI
        ? process.env.MONGO_URI.substring(0, 14)
        : "MISSING"
    );

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      family: 4,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed!");
    console.error("Name:", error.name);
    console.error("Message:", error.message);
    console.error("Reason:", error.reason || "No reason provided");

    throw error;
  }
};

module.exports = connectDB;