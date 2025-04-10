require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const chalk = require("chalk");
const boxen = require("boxen");
const os = require("os");
const ip = require("ip"); // Add this
const cloudinary = require("cloudinary").v2;

// App Init
const app = express();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5000;

// MongoDB URI Picker
const mongoURI = isProduction
  ? process.env.MONGO_ATLAS_URI
  : process.env.MONGO_LOCAL_URI;

// 🧠 Database Connection
connectDB(mongoURI);

// 📦 Cloudinary Config & Test
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Test Cloudinary Credentials
let cloudinaryStatus = "❌ Not configured properly";
try {
  if (
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  ) {
    cloudinaryStatus = "✅ Connected";
  }
} catch (err) {
  cloudinaryStatus = "❌ Error in Cloudinary Config";
}

// 🧱 Body Parsing Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// 🌐 CORS Configuration
if (isProduction) {
  const allowedOrigins = process.env.FRONTEND_URL.split(",").map((origin) =>
    origin.trim()
  );

  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      allowedHeaders:
        "Origin,X-Requested-With,Content-Type,Accept,Authorization",
      credentials: true,
    })
  );
  console.log(chalk.green("✅ CORS configured for production."));
} else {
  app.use(cors());
  console.log(chalk.yellow("🛠️ CORS configured for local development."));
}

// 🚦 Handle Preflight
app.options("*", cors());

// 🧭 Routes
app.use("/api/auth", require("./Routes/AuthRoutes"));
app.use("/events", require("./Routes/EventRoutes"));
app.use("/details", require("./Routes/DetailsRoutes"));
app.use("/api/leaves", require("./Routes/LeaveRoutes"));
app.use("/api/notices", require("./Routes/NoticeRoutes"));
app.use("/api/posts", require("./Routes/postRoutes"));
app.use("/api/disclosure", require("./Routes/disclosureRoutes"));

// 🚨 Error Handler
app.use(errorHandler);

// 🚀 Start Server
app.listen(port, () => {
  const timestamp = new Date().toLocaleString();
  const systemInfo = `${os.type()} ${os.platform()} ${os.arch()}`;
  const nodeVersion = process.version;

  // 👀 Show correct URL depending on environment
  let displayURL = "";
  if (isProduction && process.env.FRONTEND_URL) {
    displayURL = `${chalk.bold("🌐  Production URL")}: ${chalk.cyan(
      process.env.FRONTEND_URL
    )}`;
  } else {
    displayURL = `
${chalk.bold("🧭  Local URL")}: http://localhost:${chalk.blue(port)}
${chalk.bold("🧭  Network URL")}: http://${chalk.gray(
      ip.address()
    )}:${chalk.blue(port)}
    `;
  }

  const message = boxen(
    `
${chalk.bold("🔌  Server Status")}: ${chalk.green("Running")}
${chalk.bold("🕓  Started At")}: ${chalk.gray(timestamp)}
${chalk.bold("🖥️   System")}: ${chalk.gray(systemInfo)}
${chalk.bold("🧪  Node Version")}: ${chalk.gray(nodeVersion)}
${chalk.bold("☁️   Cloudinary")}: ${chalk.cyan(cloudinaryStatus)}
${chalk.bold("🔐  CORS Mode")}: ${
      isProduction ? chalk.green("Strict") : chalk.yellow("Open")
    }
${chalk.bold("📡  Mongo URI")}: ${chalk.gray(
      isProduction ? "Atlas (Production)" : "Local Dev"
    )}
${chalk.bold("🌍  Environment")}: ${chalk.cyan(process.env.NODE_ENV)}
${displayURL}
`,
    {
      padding: 1,
      margin: 1,
      borderStyle: "double",
      borderColor: "green",
      title: "🚀 Server Boot Info",
      titleAlignment: "center",
    }
  );

  console.log(message);
});
