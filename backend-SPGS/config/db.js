const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    process.env.MONGO_URI || "mongodb://localhost:27017/school-management";

  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    console.error("👉 Mongo URI:", mongoURI);

    // ❌ DO NOT exit the process in production
    // Let the server retry or fail gracefully
    throw err;
  }
};

module.exports = connectDB;
