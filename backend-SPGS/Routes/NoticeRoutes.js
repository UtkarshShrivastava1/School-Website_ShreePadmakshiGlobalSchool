const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addNotice, getAllNotices, updateNotice, deleteNotice } = require("../controllers/NoticeController");
const { protect, isAdmin } = require("../middleware/auth");

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
router.post("/add", protect, isAdmin, upload.single("file"), addNotice);
router.get("/", getAllNotices);
router.put("/:id", protect, isAdmin, upload.single("file"), updateNotice);
router.delete("/:id", protect, isAdmin, deleteNotice);

module.exports = router;

