require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const os = require("os");
const path = require("path");
require("colors");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// ------------------------------------------------------------------
// ENV SETUP
// ------------------------------------------------------------------
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 5000;
const startTime = new Date().toLocaleString();

// ------------------------------------------------------------------
// BODY PARSERS
// ------------------------------------------------------------------
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ------------------------------------------------------------------
// CORS CONFIGURATION (PRODUCTION SAFE)
// ------------------------------------------------------------------
const allowedOrigins = isProduction
  ? (process.env.FRONTEND_URL || "")
      .split(",")
      .map((o) => o.trim())
      .filter(Boolean)
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Postman / server-to-server
    if (!isProduction) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.error(`❌ Blocked by CORS: ${origin}`);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

console.log(
  `🌍 CORS Mode:`.blue +
    (isProduction
      ? ` Restricted → ${allowedOrigins.join(", ")}`.brightMagenta
      : " Open (Dev)".brightGreen),
);

// ------------------------------------------------------------------
// SECURITY & PERFORMANCE (PRODUCTION ONLY)
// ------------------------------------------------------------------
if (isProduction) {
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: { policy: "cross-origin" },
    }),
  );
  app.use(compression());

  console.log("🛡️ Helmet enabled.".cyan);
  console.log("📦 Compression enabled.".cyan);
}

// ------------------------------------------------------------------
// STATIC FILES
// ------------------------------------------------------------------
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ------------------------------------------------------------------
// ROUTES
// ------------------------------------------------------------------
app.use("/api/auth", require("./Routes/AuthRoutes"));
app.use("/events", require("./Routes/EventRoutes"));
app.use("/details", require("./Routes/DetailsRoutes"));
app.use("/api/leaves", require("./Routes/LeaveRoutes"));
app.use("/api/notices", require("./Routes/NoticeRoutes"));
app.use("/api/posts", require("./Routes/postRoutes"));
app.use("/api/disclosure", require("./Routes/disclosureRoutes"));
app.use("/api/latestnews", require("./Routes/latestnews"));
app.use("/api/candidateForm", require("./Routes/CandidateFormRoutes"));

// ------------------------------------------------------------------
// HEALTH CHECK
// ------------------------------------------------------------------
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "up",
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// ------------------------------------------------------------------
// ERROR HANDLER (MUST BE LAST)
// ------------------------------------------------------------------
app.use(errorHandler);

// ------------------------------------------------------------------
// START SERVER (AFTER DB CONNECTS)
// ------------------------------------------------------------------
(async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("\n===============================".brightCyan);
      console.log("🎓 School Management Backend".brightGreen.bold);
      console.log(
        `🌐 Environment:`.blue + ` ${process.env.NODE_ENV}`.brightBlue,
      );
      console.log(`🚪 Port:`.blue + ` ${PORT}`.brightYellow);
      console.log(
        `🗃️ MongoDB:`.blue +
          ` ${isProduction ? "Production Atlas" : "Local"} DB`.brightCyan,
      );
      console.log(`🖥️ Host:`.blue + ` ${os.hostname()}`.yellow);
      console.log(`🕒 Started at:`.blue + ` ${startTime}`.white);
      console.log("===============================\n".brightCyan);
    });
  } catch (err) {
    console.error("❌ Server startup failed".red.bold);
    console.error(err);
    process.exit(1);
  }
})();
