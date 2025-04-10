require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const errorHandler = require('./middleware/errorHandler');

const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const isProduction = process.env.NODE_ENV === "production";

// Use different MongoDB URIs based on the environment
const mongoURI = isProduction
  ? process.env.MONGO_ATLAS_URI
  : process.env.MONGO_LOCAL_URI;

const port = process.env.PORT || 5000;

// Database Connection
connectDB();

// Middleware
app.use(express.json({ limit: '10mb' }));

// Middleware: CORS configuration
if (isProduction) {
    // Split the comma-separated string into an array and trim whitespace
    const allowedOrigins = process.env.FRONTEND_URL.split(",").map((origin) =>
      origin.trim()
    );
  
    app.use(
      cors({
        origin: function (origin, callback) {
          // Allow requests with no origin (like mobile apps or curl)
          if (!origin) return callback(null, true);
          if (allowedOrigins.includes(origin)) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        },
        credentials: true,
      })
    );
    console.log("CORS configured for production".green);
  } else {
    app.use(cors()); // Allow all origins in development
    console.log("CORS configured for local development".yellow);
  }

  
app.use(cors());

// Routes
app.use("/api/auth", require("./Routes/AuthRoutes"));
app.use("/events", require("./Routes/EventRoutes"));
app.use("/details", require("./Routes/DetailsRoutes"));
app.use("/api/leaves", require("./Routes/LeaveRoutes"));
app.use("/api/notices", require("./Routes/NoticeRoutes"));
app.use("/api/posts", require("./Routes/postRoutes"));
app.use("/api/disclosure", require("./Routes/disclosureRoutes"));

// Error Handling
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}...`));