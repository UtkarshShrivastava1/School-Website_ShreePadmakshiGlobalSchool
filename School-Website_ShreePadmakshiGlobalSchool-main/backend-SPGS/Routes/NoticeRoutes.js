const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addNotice, getAllNotices } = require("../controllers/NoticeController");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Routes
router.post("/add", upload.single("file"), addNotice);
router.get("/", getAllNotices);

module.exports = router;

