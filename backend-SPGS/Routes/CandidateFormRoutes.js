// routes/candidateFormRoutes.js
const express = require("express");
const router = express.Router();
const { candidateFormSubmit, getPendingCandidateForms, updateStatus, getShortlistedCandidates, downloadCandidateForm } = require("../controllers/candidateFormController.js");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup to save files to disk
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Make filename unique
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Route
router.post("/submitCandidateForm", upload.single("signature"), candidateFormSubmit);
router.get("/getPendingCandidateForms",getPendingCandidateForms);
router.put("/updateStatus/:id",updateStatus);
router.get("/getShortlistedCandidate",getShortlistedCandidates);
router.get("/downloadCandidateForm/:id",downloadCandidateForm)
module.exports = router;
