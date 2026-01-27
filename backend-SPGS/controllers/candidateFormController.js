const { safeUpload } = require("../config/cloudinary");
const CandidateForm = require("../models/CandidateForm");
const candidateForm = require("../models/CandidateForm");
const PDFDocument = require("pdfkit");

const axios = require("axios");


exports.candidateFormSubmit = async (req, res) => {
  const parseJSON = (value, fallback) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (err) {
    return fallback;
  }
};

  try {
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
   
    if (!req.file) {
      return res.status(400).json({ message: "Signature is required" });
    }
     // Cloudinary upload
    const uploadedSignature = await safeUpload(req.file.path || req.file.buffer, {
      folder: "signatures", 
      resource_type: "image",
     
    });

    const signatureUrl = uploadedSignature.secure_url; // ye DB me store hoga
   
    // 🔄 Parse arrays & objects
    const education = parseJSON(req.body.education, []);
    const teachingExperience = parseJSON(req.body.teachingExperience, []);
    const trainings = parseJSON(req.body.trainings, []);
    const professionalReferences = parseJSON(
      req.body.professionalReferences,
      []
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
      signature:signatureUrl,
      place: place || null,
    });
    await newCandidateForm.save();
    res.status(201).json({
      message: "Candidate form submitted successfully",
      candidateForm: newCandidateForm,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error:error.message });
  }
};


exports.getPendingCandidateForms=async(req,res)=>{
  try{
    const candidates=await CandidateForm.find({status:"pending"});
    res.status(200).json({candidates});

  }catch(error){
    res.status(500).json({ message: "Server error", error:error.message });
  }
}

exports.getShortlistedCandidates=async(req,res)=>{
  try{
    const candidates=await CandidateForm.find({status:"shortlisted"});
    res.status(200).json({candidates});
  
  }catch(error){
    res.status(500).json({ message: "Server error", error:error.message });
  }
}

exports.updateStatus=async(req,res)=>{
  try{
    const{id}=req.params;
    const{status}=req.body;
    const candidate=await CandidateForm.findByIdAndUpdate(id,{status},{new:true});
    if(!candidate){
      return res.status(404).json({message:"Candidate not found"});
    }
    res.status(200).json({message:"Status updated successfully",candidate});
  }catch(error){
   res.status(500).json({ message: "Server error", error:error.message });
  }
}


exports.downloadCandidateForm = async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await CandidateForm.findById(id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

  
    const val = (v) => (v !== undefined && v !== null && v !== "" ? v : "Not Provided");

    const formatDate = (d) => {
      if (!d) return "Not Provided";
      return new Date(d).toLocaleDateString("en-IN");
    };

    const formatAddress = (addr) => {
      if (!addr) return "Not Provided";
      return [
        addr.addressLine || addr.address,
        addr.city,
        addr.district,
        addr.state,
        addr.pincode,
      ].filter(Boolean).join(", ");
    };

    const sectionTitle = (doc, title) => {
      doc.moveDown(1); // top spacing before title
      doc.font("Helvetica-Bold")
         .fontSize(13)
         .fillColor("#1f2937")
         .text(title, { underline: true, lineGap: 2 });
      doc.moveDown(0.3); // spacing after title
      doc.font("Helvetica").fontSize(10).fillColor("#000");
    };

    const row = (doc, key, value) => {
      doc.font("Helvetica-Bold")
         .text(`${key}: `, { continued: true })
         .font("Helvetica")
         .text(val(value), { lineGap: 2 });
      doc.moveDown(0.2); // consistent vertical spacing between rows
    };

    /* ---------------- PDF Setup ---------------- */
    const doc = new PDFDocument({ size: "A4", margin: 50 });

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${candidate.name || "Candidate"}_Application.pdf`
    );
    res.setHeader("Content-Type", "application/pdf");
    doc.pipe(res);

    /* ---------------- Header ---------------- */
    doc.font("Helvetica-Bold").fontSize(18).fillColor("#111827")
       .text("CANDIDATE APPLICATION FORM", { align: "center", lineGap: 4 });
    doc.moveDown(1.2);
    doc.fillColor("#000");

    /* ---------------- Personal Details ---------------- */
    sectionTitle(doc, "Personal Details");
    row(doc, "Full Name", candidate.name);
    row(doc, "Date of Birth", formatDate(candidate.dateOfBirth));
    row(doc, "Birth Place", candidate.birthPlace);
    row(doc, "Religion", candidate.religionOther ? `${candidate.religion} (${candidate.religionOther})` : candidate.religion);
    row(doc, "Nationality", candidate.nationalityOther ? `${candidate.nationality} (${candidate.nationalityOther})` : candidate.nationality);
    row(doc, "Aadhar Number", candidate.aadharNumber);
    row(doc, "PAN Number", candidate.panNumber);
    row(doc, "Mobile Number", candidate.mobileNumber?.length ? candidate.mobileNumber.join(", ") : "Not Provided");
    row(doc, "Email", candidate.email);
    row(doc, "Expected Salary", candidate.expectedSalary);

    /* ---------------- Family Details ---------------- */
    sectionTitle(doc, "Family Details");
    row(doc, "Father's Name", candidate.fatherName);
    row(doc, "Mother's Name", candidate.motherName);
    row(doc, "Father's Occupation", candidate.fatherOccupation);
    row(doc, "Mother's Occupation", candidate.motherOccupation);
    row(doc, "Father's Mobile", candidate.fatherMobileNumber);
    row(doc, "Mother's Mobile", candidate.motherMobileNumber);

    /* ---------------- Address ---------------- */
    sectionTitle(doc, "Address Details");
    row(doc, "Correspondence Address", formatAddress(candidate.correspondenceAddress));
    row(doc, "Permanent Address", formatAddress(candidate.permanentAddress));

    /* ---------------- Education ---------------- */
    sectionTitle(doc, "Educational Qualifications");
    if (candidate.education?.length) {
      candidate.education.forEach((edu, i) => {
        doc.moveDown(0.3).font("Helvetica-Bold").text(`${i + 1}. ${val(edu.course)}`);
        doc.font("Helvetica");
        row(doc, "Board / University", edu.boardOrUniversity);
        row(doc, "Subject", edu.subject);
        row(doc, "Marks", `${val(edu.marksScored)} / ${val(edu.totalMarks)}`);
        row(doc, "Percentage / CGPA", edu.percentageOrCGPA);
        row(doc, "Year of Passing", edu.yearOfPassing);
      });
    } else {
      doc.text("Not Provided");
    }

    /* ---------------- Teaching Experience ---------------- */
    sectionTitle(doc, "Teaching / School Experience");
    if (candidate.teachingExperience?.length) {
      candidate.teachingExperience.forEach((exp, i) => {
        doc.moveDown(0.3).font("Helvetica-Bold").text(`${i + 1}. ${val(exp.institutionName)}`);
        doc.font("Helvetica");
        row(doc, "Designation", exp.designation);
        row(doc, "Subjects Taken", exp.subjectsTaken);
        row(doc, "Duration", `${formatDate(exp.dateOfJoining)} - ${formatDate(exp.dateOfLeaving)}`);
        row(doc, "Last Drawn Salary", exp.lastDrawnSalary);
        row(doc, "Reason for Discontinuation", exp.reasonForDiscontinuation);
      });
    } else {
      doc.text("Not Provided");
    }

    /* ---------------- Trainings ---------------- */
    sectionTitle(doc, "Trainings / Workshops");
    if (candidate.trainings?.length) {
      candidate.trainings.forEach((t, i) => {
        doc.moveDown(0.3).font("Helvetica-Bold").text(`${i + 1}. ${val(t.trainingName)}`);
        doc.font("Helvetica");
        row(doc, "Agency", t.trainingAgency);
        row(doc, "Mode", t.mode);
        row(doc, "Date", formatDate(t.date));
        row(doc, "Place", t.place);
        row(doc, "Summary", t.summary);
      });
    } else {
      doc.text("Not Provided");
    }

    /* ---------------- References ---------------- */
    sectionTitle(doc, "Professional References");
    if (candidate.professionalReferences?.length) {
      candidate.professionalReferences.forEach((r, i) => {
        doc.moveDown(0.3).font("Helvetica-Bold").text(`${i + 1}. ${val(r.name)}`);
        doc.font("Helvetica");
        row(doc, "Designation", r.designation);
        row(doc, "Institution", r.institutionName);
        row(doc, "Contact Number", r.contactNumber);
      });
    } else {
      doc.text("Not Provided");
    }

    /* ---------------- Declaration ---------------- */
    sectionTitle(doc, "Declaration");
    doc.font("Helvetica").text("I hereby declare that the information furnished above is true and correct to the best of my knowledge.");
    doc.moveDown(0.5);
    row(doc, "Place", candidate.place);
    row(doc, "Date", formatDate(candidate.date));

    /* ---------------- Signature ---------------- */
    sectionTitle(doc, "Signature");
    if (candidate.signature) {
      let imageBuffer;
      try {
        if (candidate.signature.startsWith("http")) {
          const response = await axios.get(candidate.signature, { responseType: "arraybuffer" });
          imageBuffer = Buffer.from(response.data);
        } else {
          const localPath = path.join(__dirname, "..", candidate.signature);
          if (fs.existsSync(localPath)) imageBuffer = fs.readFileSync(localPath);
        }

        if (imageBuffer) {
          try {
            doc.image(imageBuffer, { width: 120 });
          } catch {
            doc.text("Signature image invalid");
          }
        } else {
          doc.text("Not Provided");
        }
      } catch {
        doc.text("Signature Not Provided");
      }
    } else {
      doc.text("Not Provided");
    }

    doc.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
