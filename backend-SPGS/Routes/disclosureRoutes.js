const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  addDisclosure,
  getAllDisclosure,
  downloadDisclosure,
  deleteDisclosure,
} = require("../controllers/disclosureController");

// Setup multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

// Routes
router.post("/addDisclosure", upload.single("file"), addDisclosure);
router.get("/", getAllDisclosure);
router.get("/download", downloadDisclosure);
router.delete("/delete/:filename", deleteDisclosure);

module.exports = router;
