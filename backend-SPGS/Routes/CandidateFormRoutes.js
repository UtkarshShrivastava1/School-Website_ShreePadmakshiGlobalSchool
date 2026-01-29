// routes/candidateFormRoutes.js
const express = require("express");
const router = express.Router();
const { candidateFormSubmit, getPendingCandidateForms, updateStatus, getShortlistedCandidates, downloadCandidateForm, getRejectedCandidates } = require("../controllers/candidateFormController.js");




// Route
router.post("/submitCandidateForm",  candidateFormSubmit);
router.get("/getPendingCandidateForms",getPendingCandidateForms);
router.put("/updateStatus/:id",updateStatus);
router.get("/getShortlistedCandidate",getShortlistedCandidates);
router.get("/downloadCandidateForm/:id",downloadCandidateForm)
router.get("/getRejectedCandidates",getRejectedCandidates);
module.exports = router;
