const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      family: 4,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("MongoDB connection failed!");
    console.log("Main error:", error.message);

    if (error.reason?.servers) {
      for (const [server, details] of error.reason.servers) {
        console.log("\nSERVER:", server);
        console.log("TYPE:", details.type);
        console.log("ERROR:", details.error?.message || "No server error");
      }
    }
  }
};

module.exports = connectDB;