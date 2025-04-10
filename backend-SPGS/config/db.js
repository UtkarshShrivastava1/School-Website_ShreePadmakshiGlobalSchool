const mongoose = require("mongoose");
const { initializeAdmin } = require("../models/admin");

const connectDB = async () => {
  try {
    // Select the appropriate connection string based on environment
    const mongoURI =
      process.env.NODE_ENV === "production"
        ? process.env.MONGO_URI
        : process.env.MONGO_URI ||
          "mongodb://localhost:27017/school-management";

    // Add connection options
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Initialize admin after successful connection
    await initializeAdmin();

    // Use colors for better console output if colors package is used
    console.log("🗃️ MongoDB connected successfully".green ? "green" : "");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    console.log(`👉 Connecting to Mongo URI: ${mongoURI}`.cyan);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
