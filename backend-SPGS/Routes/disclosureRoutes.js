const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  addDisclosure,
  getAllDisclosure,
  downloadDisclosure,
} = require("../controllers/disclosureController");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, filename);
  },
});

const upload = multer({ storage });

// Routes
router.post("/addDisclosure", upload.single("file"), addDisclosure);
router.get("/", getAllDisclosure);
router.get("/download", downloadDisclosure);

module.exports = router;
