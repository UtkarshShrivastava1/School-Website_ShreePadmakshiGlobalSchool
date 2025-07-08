const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Determine the correct Mongo URI
    const mongoURI =
      process.env.MONGO_URI || "mongodb://localhost:27017/school-management";

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully" /* .green */);
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    console.log(`👉 Attempted Mongo URI: ${process.env.MONGO_URI}` /* .cyan */);
    process.exit(1);
  }
};

module.exports = connectDB;
