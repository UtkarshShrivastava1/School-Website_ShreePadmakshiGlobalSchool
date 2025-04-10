const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const os = require("os");
const path = require("path");
const colors = require("colors");
const helmet = require("helmet");
const compression = require("compression");
const errorHandler = require("./middleware/errorHandler");
const ip = require("ip");

dotenv.config();

const app = express();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5000;

// MongoDB URI based on environment
const mongoURI = isProduction
  ? process.env.MONGO_ATLAS_URI
  : process.env.MONGO_LOCAL_URI;

// ✅ Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(
      `✅ MongoDB Connected (${process.env.NODE_ENV})`.brightMagenta.bold
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed".red, err);
    process.exit(1);
  });

// ✅ Middleware: Parse JSON
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ✅ Middleware: Security & Compression (for production)
if (isProduction) {
  app.use(helmet());
  app.use(compression());
  console.log("🛡️ Helmet & Compression enabled for production".cyan);
}

// ✅ CORS Configuration
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((origin) => origin.trim())
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`[CORS BLOCKED] Origin: ${origin}`.yellow);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
console.log(
  isProduction
    ? "✅ CORS configured for production".green
    : "🛠️ CORS open for local development".yellow
);

// ✅ Static File Hosting (if any)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
console.log(`📁 Serving static files from /uploads`.blue);

// ✅ API Routes
app.use("/api/auth", require("./Routes/AuthRoutes"));
app.use("/events", require("./Routes/EventRoutes"));
app.use("/details", require("./Routes/DetailsRoutes"));
app.use("/api/leaves", require("./Routes/LeaveRoutes"));
app.use("/api/notices", require("./Routes/NoticeRoutes"));
app.use("/api/posts", require("./Routes/postRoutes"));
app.use("/api/disclosure", require("./Routes/disclosureRoutes"));

// ✅ Global Error Handler
app.use(errorHandler);

// ✅ Fallback Error Handler
app.use((err, req, res, next) => {
  console.error("[Global Error Handler]".red, err.stack || err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

// ✅ Graceful Shutdown
process.on("SIGINT", async () => {
  console.log("SIGINT received. Closing MongoDB connection...".yellow);
  await mongoose.connection.close();
  console.log("MongoDB connection closed.".yellow);
  process.exit(0);
});

process.on("uncaughtException", (err) => {
  console.error("[Uncaught Exception]".red, err.message);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("[Unhandled Rejection]".red, err.message);
  process.exit(1);
});

// ✅ Start Server
app.listen(port, () => {
  const backendURL = `http://localhost:${port}`;
  const networkURL = `http://${ip.address()}:${port}`;
  const appName = "School Management System";
  const time = new Date().toLocaleString();
  const nodeVer = process.version;

  console.log("\n===============================".brightCyan);
  console.log(`${appName} is live 🚀`.brightGreen.bold);
  console.log(`Environment: `.blue + `${process.env.NODE_ENV}`.brightBlue);
  console.log(`Port: `.blue + `${port}`.brightYellow);
  console.log(`Local URL: `.blue + backendURL.brightCyan);
  console.log(`Network URL: `.blue + networkURL.brightCyan);
  console.log(`MongoDB: `.blue + mongoURI.gray);
  console.log(`Node.js: `.blue + nodeVer.green);
  console.log(`Machine: `.blue + os.hostname().brightMagenta);
  console.log(`Started at: `.blue + time.brightWhite);
  console.log("===============================\n".brightCyan);
});
