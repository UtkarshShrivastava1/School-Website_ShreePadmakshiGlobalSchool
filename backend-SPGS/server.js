require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const os = require("os");
require("colors");

const app = express();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5000;
const startTime = new Date().toLocaleString();

// 📦 Connect to MongoDB
connectDB();

// 📦 Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// 🌐 CORS Configuration - MOVED BEFORE ROUTES
// More permissive CORS configuration to fix the errors
const corsOptions = {
  origin: isProduction
    ? process.env.FRONTEND_URL
      ? process.env.FRONTEND_URL.split(",").map((origin) => origin.trim())
      : "*"
    : "*",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
  exposedHeaders: "Content-Length,Content-Range",
};

app.use(cors(corsOptions));
// Preflight requests handling
app.options("*", cors(corsOptions));

console.log(
  `🌍 CORS Mode: `.blue +
    `${
      isProduction
        ? "Configured for: " + (process.env.FRONTEND_URL || "All origins")
        : "Open (Dev)"
    }`.brightMagenta
);

// 🛡️ Helmet for security headers (production only)
if (isProduction) {
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
    })
  );
  console.log("🛡️ Helmet enabled.".cyan);
}

// 📦 Compression for faster response (production only)
if (isProduction) {
  app.use(compression());
  console.log("📦 Compression enabled.".cyan);
}

// ✅ Serve static files from the 'uploads' folder
app.use('/uploads', express.static('uploads'));

// 🧭 Routes
app.use("/api/auth", require("./Routes/AuthRoutes"));
app.use("/events", require("./Routes/EventRoutes"));
app.use("/details", require("./Routes/DetailsRoutes"));
app.use("/api/leaves", require("./Routes/LeaveRoutes"));
app.use("/api/notices", require("./Routes/NoticeRoutes"));
app.use("/api/posts", require("./Routes/postRoutes"));
app.use("/api/disclosure", require("./Routes/disclosureRoutes"));
app.use("",require("./Routes/latestnews"));
app.use("/api/candidateForm", require("./Routes/CandidateFormRoutes"));
// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "up",
    environment: process.env.NODE_ENV,
    cors: {
      enabled: true,
      origin: corsOptions.origin,
    },
  });
});

// 🧯 Error Handler
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

// 🚀 Start Server
app.listen(port, () => {
  console.log("\n===============================".brightCyan);
  console.log("🎓 School Management Backend".brightGreen.bold);
  console.log(`🌐 Environment: `.blue + `${process.env.NODE_ENV}`.brightBlue);
  console.log(`🚪 Port: `.blue + `${port}`.brightYellow);
  console.log(
    `🌍 CORS Mode: `.blue +
      `${isProduction ? "Restricted (Production)" : "Open (Dev)"}`.brightMagenta
  );
  console.log(
    `🗃️ MongoDB: `.blue +
      `${isProduction ? "Production Atlas" : "Local Development"} DB`.brightCyan
  );
  console.log(`🖥️ Host: `.blue + `${os.hostname()}`.yellow);
  console.log(`🕒 Started at: `.blue + `${startTime}`.white);
  console.log("===============================\n".brightCyan);
});
