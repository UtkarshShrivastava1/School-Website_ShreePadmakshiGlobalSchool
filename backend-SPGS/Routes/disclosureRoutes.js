const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  addDisclosure,
  getAllDisclosure,
  downloadDisclosure,
} = require("../controllers/disclosureController");

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder must exist
  },
  filename: (req, file, cb) => {
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
