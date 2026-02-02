const { safeUpload } = require("../config/cloudinary");
const CandidateForm = require("../models/CandidateForm");
const candidateForm = require("../models/CandidateForm");
const PDFDocument = require("pdfkit");
const axios = require("axios");

exports.candidateFormSubmit = async (req, res) => {
  const errors = {};
  const parseJSON = (value, fallback) => {
    try {
      return value ? JSON.parse(value) : fallback;
    } catch (err) {
      return fallback;
    }
  };

  try {
    const existingAadhaar = await candidateForm.findOne({
      aadharNumber: req.body.aadharNumber,
    });
    if (existingAadhaar) {
      errors.aadharNumber = "Aadhaar number already exists";
    }
    const existingPan = await candidateForm.findOne({
      panNumber: req.body.panNumber,
    });
    if (existingPan) {
      errors.panNumber = "PAN number already exists";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(409).json({ errors });
    }
    const {
      name,
      dateOfBirth,
      birthPlace,
      religion,
      religionOther,
      nationality,
      aadharNumber,
      nationalityOther,
      panNumber,
      mobileNumber,
      email,
      expectedSalary,
      fatherName,
      motherName,
      fatherOccupation,
      motherOccupation,
      fatherMobileNumber,
      motherMobileNumber,
      correspondenceAddress,
      permanentAddress,
      otherRoles,
      date,
      place,
    } = req.body;

    // 🔄 Parse arrays & objects
    const education = parseJSON(req.body.education, []);
    const teachingExperience = parseJSON(req.body.teachingExperience, []);
    const trainings = parseJSON(req.body.trainings, []);
    const professionalReferences = parseJSON(
      req.body.professionalReferences,
      [],
    );

    const mobileNumbers = parseJSON(mobileNumber, []);
    const newCandidateForm = new candidateForm({
      name,
      dateOfBirth,
      birthPlace,
      religion,
      nationality,
      aadharNumber,
      panNumber,
      mobileNumber: mobileNumbers,
      email,
      expectedSalary,
      fatherName,
      motherName,
      fatherOccupation,
      motherOccupation,
      fatherMobileNumber,
      motherMobileNumber,
      correspondenceAddress: parseJSON(correspondenceAddress, {}),
      permanentAddress: parseJSON(permanentAddress, {}),
      education,
      teachingExperience,
      trainings,
      professionalReferences,
      religionOther,
      nationalityOther,
      otherRoles,
      date,

      place: place || null,
    });
    await newCandidateForm.save();
    res.status(201).json({
      message: "Candidate form submitted successfully",
      candidateForm: newCandidateForm,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getPendingCandidateForms = async (req, res) => {
  try {
    const candidates = await CandidateForm.find({ status: "pending" });
    res.status(200).json({ candidates });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getShortlistedCandidates = async (req, res) => {
  try {
    const candidates = await CandidateForm.find({ status: "shortlisted" });
    res.status(200).json({ candidates });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getRejectedCandidates = async (req, res) => {
  try {
    const candidates = await CandidateForm.find({ status: "rejected" });
    res.status(200).json({ candidates });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const candidate = await CandidateForm.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.status(200).json({ message: "Status updated successfully", candidate });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// exports.downloadCandidateForm = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const candidate = await CandidateForm.findById(id);

//     if (!candidate) {
//       return res.status(404).json({ message: "Candidate not found" });
//     }

//     const val = (v) => (v !== undefined && v !== null && v !== "" ? v : "Not Provided");

//     const formatDate = (d) => {
//       if (!d) return "Not Provided";
//       return new Date(d).toLocaleDateString("en-IN");
//     };

//     const formatAddress = (addr) => {
//       if (!addr) return "Not Provided";
//       return [
//         addr.addressLine || addr.address,
//         addr.city,
//         addr.district,
//         addr.state,
//         addr.pincode,
//       ].filter(Boolean).join(", ");
//     };

//     const sectionTitle = (doc, title) => {
//       doc.moveDown(1); // top spacing before title
//       doc.font("OS-Bold")
//          .fontSize(13)
//          .fillColor("#1f2937")
//          .text(title, { underline: true, lineGap: 2 });
//       doc.moveDown(0.3); // spacing after title
//       doc.font("OS-Regular").fontSize(12).fillColor("#000");
//     };

//     const row = (doc, key, value) => {
//       doc.font("OS-Bold")
//          .text(`${key}: `, { continued: true })
//          .font("OS-Regular")
//          .text(val(value), { lineGap: 2 });
//       doc.moveDown(0.2); // consistent vertical spacing between rows
//     };

//     /* ---------------- PDF Setup ---------------- */
//     const doc = new PDFDocument({ size: "A4", margin: 50 });
//     doc.registerFont("OS-Regular", "./fonts/OpenSans-Regular.ttf");
// doc.registerFont("OS-Bold", "./fonts/OpenSans-SemiBold.ttf");

//     res.setHeader(
//       "Content-Disposition",
//       `attachment; filename=${candidate.name || "Candidate"}_Application.pdf`
//     );
//     res.setHeader("Content-Type", "application/pdf");
//     doc.pipe(res);

//     /* ---------------- Header ---------------- */
//     doc.font("OS-Bold").fontSize(18).fillColor("#111827")
//        .text("CANDIDATE APPLICATION FORM", { align: "center", lineGap: 4 });
//     doc.moveDown(1.2);
//     doc.fillColor("#000");

//     /* ---------------- Personal Details ---------------- */
//     sectionTitle(doc, "Personal Details");
//     row(doc, "Full Name", candidate.name);
//     row(doc, "Date of Birth", formatDate(candidate.dateOfBirth));
//     row(doc, "Birth Place", candidate.birthPlace);
//     row(doc, "Religion", candidate.religionOther ? `${candidate.religion} (${candidate.religionOther})` : candidate.religion);
//     row(doc, "Nationality", candidate.nationalityOther ? `${candidate.nationality} (${candidate.nationalityOther})` : candidate.nationality);
//     row(doc, "Aadhar Number", candidate.aadharNumber);
//     row(doc, "PAN Number", candidate.panNumber);
//     row(doc, "Mobile Number", candidate.mobileNumber?.length ? candidate.mobileNumber.join(", ") : "Not Provided");
//     row(doc, "Email", candidate.email);
//     row(doc, "Expected Salary", candidate.expectedSalary);

//     /* ---------------- Family Details ---------------- */
//     sectionTitle(doc, "Family Details");
//     row(doc, "Father's Name", candidate.fatherName);
//     row(doc, "Mother's Name", candidate.motherName);
//     row(doc, "Father's Occupation", candidate.fatherOccupation);
//     row(doc, "Mother's Occupation", candidate.motherOccupation);
//     row(doc, "Father's Mobile", candidate.fatherMobileNumber);
//     row(doc, "Mother's Mobile", candidate.motherMobileNumber);

//     /* ---------------- Address ---------------- */
//     sectionTitle(doc, "Address Details");
//     row(doc, "Correspondence Address", formatAddress(candidate.correspondenceAddress));
//     row(doc, "Permanent Address", formatAddress(candidate.permanentAddress));

//     /* ---------------- Education ---------------- */
//     sectionTitle(doc, "Educational Qualifications");
//     if (candidate.education?.length) {
//       candidate.education.forEach((edu, i) => {
//         doc.moveDown(0.3).font("OS-Bold").text(`${i + 1}. ${val(edu.course)}`);
//         doc.moveDown(0.3);
//         doc.font("OS-Regular");
//         row(doc, "Board / University", edu.boardOrUniversity);

//         row(doc, "Subject", edu.subject);
//         row(doc, "Marks", `${val(edu.marksScored)} / ${val(edu.totalMarks)}`);
//         row(doc, "Percentage / CGPA", edu.percentageOrCGPA);
//         row(doc, "Year of Passing", edu.yearOfPassing);
//         doc.moveDown(0.5);
//       });
//     } else {
//       doc.text("Not Provided");
//     }

//     /* ---------------- Teaching Experience ---------------- */
//     sectionTitle(doc, "Teaching / School Experience");
//     if (candidate.teachingExperience?.length) {
//       candidate.teachingExperience.forEach((exp, i) => {
//         doc.moveDown(0.3).font("OS-Bold").text(`${i + 1}. ${val(exp.institutionName)}`);
//         doc.font("OS-Regular");
//         row(doc, "Designation", exp.designation);
//         row(doc, "Subjects Taken", exp.subjectsTaken);
//         row(doc, "Duration", `${formatDate(exp.dateOfJoining)} - ${formatDate(exp.dateOfLeaving)}`);
//         row(doc, "Last Drawn Salary", exp.lastDrawnSalary);
//         row(doc, "Reason for Discontinuation", exp.reasonForDiscontinuation);
//       });
//     } else {
//       doc.text("Not Provided");
//     }

//     /* ---------------- Trainings ---------------- */
//     sectionTitle(doc, "Trainings / Workshops");
//     if (candidate.trainings?.length) {
//       candidate.trainings.forEach((t, i) => {
//         doc.moveDown(0.3).font("OS-Bold").text(`${i + 1}. ${val(t.trainingName)}`);
//         doc.font("OS-Regular");
//         row(doc, "Agency", t.trainingAgency);
//         row(doc, "Mode", t.mode);
//         row(doc, "Date", formatDate(t.date));
//         row(doc, "Place", t.place);
//         row(doc, "Summary", t.summary);
//       });
//     } else {
//       doc.text("Not Provided");
//     }

//     /* ---------------- References ---------------- */
//     sectionTitle(doc, "Professional References");
//     if (candidate.professionalReferences?.length) {
//       candidate.professionalReferences.forEach((r, i) => {
//         doc.moveDown(0.3).font("OS-Bold").text(`${i + 1}. ${val(r.name)}`);
//         doc.font("OS-Regular");
//         row(doc, "Designation", r.designation);
//         row(doc, "Institution", r.institutionName);
//         row(doc, "Contact Number", r.contactNumber);
//       });
//     } else {
//       doc.text("Not Provided");
//     }

//     /* ---------------- Declaration ---------------- */
//     sectionTitle(doc, "Declaration");
//     doc.font("OS-Regular").text("All the above information provided by me is correct and to the best of my knowledge. Any wrong information or details can lead to the cancellation of my candidature/ selection/ appointment at any point of time.");
//     doc.moveDown(0.5);
//     row(doc, "Place", candidate.place);
//     row(doc, "Date", formatDate(candidate.date));

//     doc.end();
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

exports.downloadCandidateForm = async (req, res) => {
  try {
    const { id } = req.params;
    const c = await CandidateForm.findById(id);
    if (!c) return res.status(404).json({ message: "Candidate not found" });

    /* ---------- Helpers ---------- */
    const val = (v) =>
      v !== undefined && v !== null && v !== "" ? v : "Not Provided";

    const formatDate = (d) =>
      d ? new Date(d).toLocaleDateString("en-IN") : "";

    const formatAddress = (a) =>
      a
        ? [a.addressLine || a.address, a.city, a.district, a.state, a.pincode]
            .filter(Boolean)
            .join(", ")
        : "";

    /* ---------- PDF Setup ---------- */
    const doc = new PDFDocument({ size: "A4", margin: 40 });
    doc.registerFont("R", "./fonts/OpenSans-Regular.ttf");
    doc.registerFont("B", "./fonts/OpenSans-SemiBold.ttf");

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${c.name || "Candidate"}_Application.pdf`,
    );
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    /* ---------- Layout Helpers ---------- */
    let sectionStartY = 0;
    let sectionEndY = 0;
    const ensureSpace = (minSpace = 80) => {
  if (doc.y + minSpace > doc.page.height - doc.page.margins.bottom) {
    doc.addPage();
  }
};
    const sectionHeader = (title) => {
      doc.moveDown(1);

      const x = 40;
      const width = 515;
      const height = 20;
      const y = doc.y;
      const fontSize = 12;
      // blue background
      doc.rect(x, y, width, height).fill("#6B7280");

      // centered text
      doc
        .fillColor("white")
        .font("B")
        .fontSize(12)
        .text(title, x, y + (height - fontSize) / 2, {
          width: width,
          align: "center",
        });

      doc.moveDown(2);
      doc.fillColor("black").font("R").fontSize(10);
      doc.x = 40;

      sectionStartY = doc.y;
    };

    const formRow = (l1, v1, l2, v2) => {
      const y = doc.y;
      // const startY = doc.y;
      // const rowHeight = 22;
      doc.font("B").text(l1, 40, y);
      doc.font("R").text(val(v1), 170, y,{
         width: 110,          //  LEFT VALUE WIDTH
    lineBreak: true,
      });

      if (l2) {
        doc.font("B").text(l2, 300, y);
        doc.font("R").text(val(v2), 430, y);
      }

      doc.moveDown(1.5);
    };
    const getCellHeight = (text, width) => {
  return doc.heightOfString(val(text), {
    width,
    align: "left",
  }) + 12; // padding
};


    // const table = (headers, rows, colWidths) => {
    //   let y = doc.y;
    //   let x = 40;

    //   doc.font("B");
    //   headers.forEach((h, i) => {
    //     doc.rect(x, y, colWidths[i], 20).stroke();
    //     doc.text(h, x + 4, y + 6, { width: colWidths[i] - 8 });
    //     x += colWidths[i];
    //   });

    //   y += 20;
    //   doc.font("R");

    //   rows.forEach((r) => {
    //     x = 40;
    //     r.forEach((cell, i) => {
    //       doc.rect(x, y, colWidths[i], 20).stroke();
    //       doc.text(val(cell), x + 4, y + 6, {
    //         width: colWidths[i] - 8,
    //       });
    //       x += colWidths[i];
    //     });
    //     y += 20;
    //   });

    //   doc.y = y + 10;
    // };
const table = (headers, rows, colWidths) => {
  let x = 40;
  let y = doc.y;

  /* ---------- Header ---------- */
  doc.font("B");
  headers.forEach((h, i) => {
    doc.rect(x, y, colWidths[i], 24).stroke();
    doc.text(h, x + 4, y + 6, { width: colWidths[i] - 8 });
    x += colWidths[i];
  });

  y += 24;
  doc.font("R");

  /* ---------- Rows ---------- */
  rows.forEach((row) => {
    // 🔹 find max height needed in this row
    const rowHeight = Math.max(
      ...row.map((cell, i) =>
        getCellHeight(cell, colWidths[i] - 8),
      ),
    );

    x = 40;

    row.forEach((cell, i) => {
      doc.rect(x, y, colWidths[i], rowHeight).stroke();
      doc.text(val(cell), x + 4, y + 6, {
        width: colWidths[i] - 8,
      });
      x += colWidths[i];
    });

    y += rowHeight;

    // 🔹 page break safety
    if (y > doc.page.height - doc.page.margins.bottom - 40) {
      doc.addPage();
      y = doc.y;
    }
  });

  doc.y = y + 10;
};
    /* ---------- TITLE ---------- */
    doc.font("B").fontSize(16).text("CANDIDATE APPLICATION FORM", {
      align: "center",
    });

    /* ---------- PERSONAL ---------- */
    sectionHeader("PERSONAL INFORMATION");

    formRow("Full Name", c.name, "Birth Place", c.birthPlace);
    formRow(
      "Date of Birth",
      formatDate(c.dateOfBirth),
      "Nationality",
      c.nationalityOther
        ? `${c.nationality} (${c.nationalityOther})`
        : c.nationality,
    );
    formRow(
      "Religion",
      c.religionOther ? `${c.religion} (${c.religionOther})` : c.religion,
      "Expected Salary",
      c.expectedSalary,
    );
    formRow("Aadhar Number", c.aadharNumber, "PAN Number", c.panNumber);
    formRow("Mobile Number", c.mobileNumber?.join(", "), "Email", c.email);
    sectionEndY = doc.y;

    doc
      .moveTo(270, sectionStartY - 11)
      .lineTo(270, sectionEndY - 10)
      .strokeColor("#4c4d4e")
      .lineWidth(1)
      .stroke();
    /* ---------- FAMILY ---------- */
    sectionHeader("FAMILY DETAILS");

    formRow("Father's Name", c.fatherName, "Mother's Name", c.motherName);
    formRow(
      "Father's Occupation",
      c.fatherOccupation,
      "Mother's Occupation",
      c.motherOccupation,
    );
    formRow(
      "Father's Mobile",
      c.fatherMobileNumber,
      "Mother's Mobile",
      c.motherMobileNumber,
    );
    sectionEndY = doc.y;

    doc
      .moveTo(270, sectionStartY - 5)
      .lineTo(270, sectionEndY - 20)
      .strokeColor("#4c4d4e")
      .lineWidth(1)
      .stroke();
    /* ---------- ADDRESS ---------- */
    sectionHeader("ADDRESS DETAILS");

    doc.font("B").text("Correspondence Address:");
    doc.font("R").text(formatAddress(c.correspondenceAddress));
    doc.moveDown(0.8);

    doc.font("B").text("Permanent Address:");
    doc.font("R").text(formatAddress(c.permanentAddress));

    /* ---------- EDUCATION TABLE ---------- */
    sectionHeader("EDUCATIONAL QUALIFICATIONS");

    table(
      ["Course", "Board / University", "Subject", "Marks", "Year"],
      c.education?.map((e) => [
        e.course,
        e.boardOrUniversity,
        e.subject,
        `${e.marksScored}/${e.totalMarks}`,
        e.yearOfPassing,
      ]) || [],
      [80, 150, 120, 80, 85],
    );
/* ---------- TEACHING EXPERIENCE ---------- */
ensureSpace(160);
sectionHeader("TEACHING / SCHOOL EXPERIENCE");

const teachingRows =
  c.teachingExperience && c.teachingExperience.length > 0
    ? c.teachingExperience.map((exp) => [
        val(exp.institutionName),
        val(exp.designation),
        val(exp.subjectsTaken),
        `${formatDate(exp.dateOfJoining)} - ${formatDate(exp.dateOfLeaving)}` || "Not Provided",
        val(exp.lastDrawnSalary),
        val(exp.reasonForDiscontinuation),
      ])
    : [[
        "Not Provided",
        "Not Provided",
        "Not Provided",
        "Not Provided",
        "Not Provided",
        "Not Provided",
      ]];

table(
  [
    "Institution",
    "Designation",
    "Subjects",
    "Duration",
    "Last Salary",
    "Reason",
  ],
  teachingRows,
  [110, 90, 80, 95, 70, 70]
);
    /* ---------- TRAININGS TABLE ---------- */
    ensureSpace(120);
    sectionHeader("TRAININGS / WORKSHOPS");
const trainingRows =
  c.trainings && c.trainings.length > 0
    ? c.trainings.map((t) => [
        val(t.trainingName),
        val(t.trainingAgency),
        val(t.mode),
        formatDate(t.date) || "Not Provided",
        val(t.place),
      ])
    : [["Not Provided", "Not Provided", "Not Provided", "Not Provided", "Not Provided"]];

table(
  ["Training Name", "Agency", "Mode", "Date", "Place"],
  trainingRows,
  [140, 120, 70, 80, 100]
);

    /* ---------- REFERENCES TABLE ---------- */
    sectionHeader("PROFESSIONAL REFERENCES");

   const referenceRows =
  c.professionalReferences && c.professionalReferences.length > 0
    ? c.professionalReferences.map((r) => [
        val(r.name),
        val(r.designation),
        val(r.institutionName),
        val(r.contactNumber),
      ])
    : [["Not Provided", "Not Provided", "Not Provided", "Not Provided"]];

table(
  ["Name", "Designation", "Institution", "Contact"],
  referenceRows,
  [120, 120, 170, 100]
);

    /* ---------- DECLARATION ---------- */
    sectionHeader("DECLARATION");

    doc.text(
      "All the above information provided by me is correct and to the best of my knowledge. Any wrong information or details can lead to the cancellation of my candidature/ selection/ appointment at any point of time.",
    );
    doc.moveDown(1);

    formRow("Place", c.place, "Date", formatDate(c.date));

    doc.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
