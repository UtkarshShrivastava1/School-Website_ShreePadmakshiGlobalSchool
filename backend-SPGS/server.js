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

// 🛡️ Helmet for security headers (production only)
if (isProduction) {
  app.use(helmet());
  console.log("🛡️ Helmet enabled.".cyan);
}

// 📦 Compression for faster response (production only)
if (isProduction) {
  app.use(compression());
  console.log("📦 Compression enabled.".cyan);
}

// 🌐 CORS Configuration
if (isProduction) {
  const allowedOrigins = process.env.FRONTEND_URL.split(",").map((origin) =>
    origin.trim()
  );

  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          console.log(`[CORS BLOCKED] Origin: ${origin}`.red);
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      allowedHeaders:
        "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    })
  );

  app.options("*", cors());
  console.log("✅ CORS configured for production.".green);
} else {
  app.use(cors()); // Allow all in development
  console.log("🛠️ CORS configured for local development.".yellow);
}

// 🧭 Routes
app.use("/api/auth", require("./Routes/AuthRoutes"));
app.use("/events", require("./Routes/EventRoutes"));
app.use("/details", require("./Routes/DetailsRoutes"));
app.use("/api/leaves", require("./Routes/LeaveRoutes"));
app.use("/api/notices", require("./Routes/NoticeRoutes"));
app.use("/api/posts", require("./Routes/postRoutes"));
app.use("/api/disclosure", require("./Routes/disclosureRoutes"));

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
