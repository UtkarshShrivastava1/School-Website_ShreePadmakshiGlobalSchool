<<<<<<< HEAD
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const {addDisclosure,getAllDisclosure,downloadDisclosure}= require("../controllers/disclosureController");


// // Configure Multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Store files in 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

// router.post("/addDisclosure", upload.single("file") ,addDisclosure);
// router.get("/",getAllDisclosure);
// router.get("/download", downloadDisclosure);

// module.exports = router;

// routes/disclosureRoute.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createDisclosure, getAllDisclosure, downloadDisclosure } = require("../controllers/disclosureController");

// Setup multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
=======
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
>>>>>>> cbdd66aaae07f5c8c05374282cc22b411a36a1db
  },
});

const upload = multer({ storage });

<<<<<<< HEAD
router.post("/createDisclosure", upload.single("file"), createDisclosure);
=======
// Routes
router.post("/addDisclosure", upload.single("file"), addDisclosure);
>>>>>>> cbdd66aaae07f5c8c05374282cc22b411a36a1db
router.get("/", getAllDisclosure);
router.get("/download", downloadDisclosure);

module.exports = router;
