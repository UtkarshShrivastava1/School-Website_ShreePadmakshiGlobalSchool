const mongoose = require("mongoose");
const CandidateFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    birthPlace: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      enum: ["Hindu", "Muslim", "Christian", "Sikh", "Other"],
      required: true,
    },
    religionOther: {
      type: String,
    },
    nationality: {
      type: String,
      enum: ["Indian", "Other"],
      required: true,
    },
    nationalityOther: {
      type: String,
    },
    aadharNumber: {
      type: String,
      required: true,
      unique: true,
    },
    panNumber: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: [String],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    expectedSalary: {
      type: Number,
      
    },
    fatherName: {
      type: String,
    },
    motherName: {
      type: String,
    },
    fatherOccupation: {
      type: String,
    },
    motherOccupation: {
      type: String,
    },
    fatherMobileNumber: {
      type: String,
    },
    motherMobileNumber: {
      type: String,
    },
    correspondenceAddress: {
      address: String,
      city: String,
      district: String,
      state: String,
      pincode: String,
    },
    permanentAddress: {
      addressLine: String,
      city: String,
      district: String,
      state: String,
      pincode: String,
    },

    //  Educational Qualifications
    education: [
      {
        course: String, // 10th, 12th, Graduation, B.Ed etc
        boardOrUniversity: String,
        subject: String,
        marksScored: String,
        totalMarks: String,
        percentageOrCGPA: String,
        yearOfPassing: String,
        
      },
     
    ],
    otherRoles: {
      type: String,
    },
    //  Teaching / School Experience
    teachingExperience: [
      {
        institutionName: String,
        designation: String,
        subjectsTaken: String,
        dateOfJoining: Date,
        dateOfLeaving: Date,
        totalExperience: String,
        lastDrawnSalary: String,
        reasonForDiscontinuation: String,
      },
    ],

    //  Trainings
    trainings: [
      {
        trainingName: String,
        trainingAgency: String, // CBSE / Others
        date: Date,
        mode: { type: String, enum: ["Online", "Offline"] },
        place: String,
        summary: String,
      },
    ],

    professionalReferences: [
      {
        name: String,
        designation: String,
        institutionName: String,
        contactNumber: String,
      },
    ],
    date: {
      type: Date,
    },
    place: String,
    
    status:{
      type:String,
      enum:["pending","shortlisted","rejected"],
      default:"pending",
    }
  },
  { timestamps: true },
);
module.exports = mongoose.model("CandidateForm", CandidateFormSchema);
