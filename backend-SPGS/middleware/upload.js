const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure /uploads folder exists
const uploadPath = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  },
});

// File type filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "image/webp",
  ];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(
      new Error("Only JPEG, PNG, PDF, and WebP files are allowed"),
      false
    );
  }
  cb(null, true);
};

// Set up multer with memory storage and file size limit
const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
  fileFilter,
}).single("image"); // Make sure frontend sends 'image' as the key

// Middleware wrapper
const uploadMiddleware = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({
          success: false,
          message:
            err.code === "LIMIT_FILE_SIZE"
              ? "File too large. Maximum size is 2MB."
              : err.message,
        });
      }
      return res.status(400).json({
        success: false,
        message: err.message || "File upload failed.",
      });
    }
    next();
  });
};

module.exports = uploadMiddleware;
