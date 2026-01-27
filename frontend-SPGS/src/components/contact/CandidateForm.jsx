import { useState,useRef } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function CandidateForm() {
  const[loading,setLoading]=useState(false);
  const initialFormState = {
  name: "",
  dateOfBirth: "",
  birthPlace: "",
  religion: "",
  religionOther: "",
  nationality: "",
  nationalityOther: "",
  aadharNumber: "",
  panNumber: "",
  mobileNumber1: "",
  mobileNumber2: "",
  email: "",
  expectedSalary: "",
  fatherName: "",
  motherName: "",
  fatherOccupation: "",
  motherOccupation: "",
  fatherMobileNumber: "",
  motherMobileNumber: "",
  correspondenceAddress: {
    address: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  },
  permanentAddress: {
    addressLine: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  },
  otherRoles: "",
  date: "",
  place: "",
  signature: null,
  teachingExperience: [],
  trainings: [],
  education: [
    {
      course: "10th",
      boardOrUniversity: "",
      subject: "",
      marksScored: "",
      totalMarks: "",
      percentageOrCGPA: "",
      yearOfPassing: "",
    },
    {
      course: "12th",
      boardOrUniversity: "",
      subject: "",
      marksScored: "",
      totalMarks: "",
      percentageOrCGPA: "",
      yearOfPassing: "",
    },
    {
      course: "Graduation",
      boardOrUniversity: "",
      subject: "",
      marksScored: "",
      totalMarks: "",
      percentageOrCGPA: "",
      yearOfPassing: "",
    },
  ],
  professionalReferences: [],
};
const fileRef = useRef(null);

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let newErrors = {};

    // Personal Details
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of Birth is required";

    if (!formData.birthPlace.trim())
      newErrors.birthPlace = "Birth Place is required";

    if (!formData.religion) newErrors.religion = "Religion is required";

    if (formData.religion === "Other" && !formData.religionOther.trim())
      newErrors.religionOther = "Please specify religion";

    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";

    if (formData.nationality === "Other" && !formData.nationalityOther.trim())
      newErrors.nationalityOther = "Please specify nationality";

    // Aadhar (12 digits)
    if (!/^\d{12}$/.test(formData.aadharNumber))
      newErrors.aadharNumber = "Aadhar must be 12 digits";

    // PAN (ABCDE1234F)
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber))
      newErrors.panNumber = "Invalid PAN format";

    // Mobile
    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber1))
      newErrors.mobileNumber1 = "Invalid mobile number";

    if (
      formData.mobileNumber2 &&
      !/^[6-9]\d{9}$/.test(formData.mobileNumber2)
    ) {
      newErrors.mobileNumber2 = "Invalid mobile number";
    }

    // Address validation
    if (!formData.correspondenceAddress.address.trim())
      newErrors.correspondenceAddress = "Correspondence address required";
    if (!formData.permanentAddress.addressLine.trim())
      newErrors.permanentAddress = "Permanent address required";
    if (!/^\d{6}$/.test(formData.correspondenceAddress.pincode))
      newErrors.correspondencePincode = "Invalid pincode";

    if (!/^\d{6}$/.test(formData.permanentAddress.pincode))
      newErrors.permanentPincode = "Invalid pincode";

    // Education (mandatory 10th/12th/Graduation)
    formData.education.slice(0, 3).forEach((edu, index) => {
      if (!edu.boardOrUniversity)
        newErrors[`edu_${index}`] = "Education details incomplete";
    });

    // Signature
    if (!formData.signature) newErrors.signature = "Signature is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (type, field, value) => {
    setFormData({
      ...formData,
      [type]: {
        ...formData[type],
        [field]: value,
      },
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, signature: e.target.files[0] });
  };

  // Teaching Experience handlers
  const addTeachingExperience = () => {
    setFormData({
      ...formData,
      teachingExperience: [
        ...formData.teachingExperience,
        {
          institutionName: "",
          designation: "",
          subjectsTaken: "",
          dateOfJoining: "",
          dateOfLeaving: "",
          lastDrawnSalary: "",
          totalExperience: "",
          reasonForDiscontinuation: "",
        },
      ],
    });
  };
  const updateTeachingExperience = (index, field, value) => {
    const updated = [...formData.teachingExperience];
    updated[index][field] = value;
    setFormData({ ...formData, teachingExperience: updated });
  };

  const removeTeachingExperience = (index) => {
    setFormData({
      ...formData,
      teachingExperience: formData.teachingExperience.filter(
        (_, i) => i !== index,
      ),
    });
  };
  const addTraining = () => {
    setFormData({
      ...formData,
      trainings: [
        ...formData.trainings,
        {
          trainingName: "",
          trainingAgency: "",
          date: "",
          mode: "",
          place: "",
          summary: "",
        },
      ],
    });
  };
  const updateTraining = (index, field, value) => {
    const updated = [...formData.trainings];
    updated[index][field] = value;
    setFormData({ ...formData, trainings: updated });
  };

  const removeTraining = (index) => {
    setFormData({
      ...formData,
      trainings: formData.trainings.filter((_, i) => i !== index),
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          course: "",
          boardOrUniversity: "",
          subject: "",
          marksScored: "",
          totalMarks: "",
          percentageOrCGPA: "",
          yearOfPassing: "",
        },
      ],
    });
  };

  const updateEducation = (index, field, value) => {
    const updated = [...formData.education];
    updated[index][field] = value;
    setFormData({ ...formData, education: updated });
  };

  const removeEducation = (index) => {
    if (index < 3) return; // 10th, 12th, Graduation safe
    setFormData({
      ...formData,
      education: formData.education.filter((_, i) => i !== index),
    });
  };
  const addReference = () => {
    setFormData({
      ...formData,
      professionalReferences: [
        ...formData.professionalReferences,
        {
          name: "",
          designation: "",
          institutionName: "",
          contactNumber: "",
        },
      ],
    });
  };

  const updateReference = (index, field, value) => {
    const updated = [...formData.professionalReferences];
    updated[index][field] = value;
    setFormData({ ...formData, professionalReferences: updated });
  };

  const removeReference = (index) => {
    setFormData({
      ...formData,
      professionalReferences: formData.professionalReferences.filter(
        (_, i) => i !== index,
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    try {
      setLoading(true);
      const fd = new FormData();
      Object.entries({
        name: formData.name,
        dateOfBirth: formData.dateOfBirth,
        birthPlace: formData.birthPlace,
        religion: formData.religion,
        religionOther: formData.religionOther,
        nationality: formData.nationality,
        nationalityOther: formData.nationalityOther,
        aadharNumber: formData.aadharNumber,
        panNumber: formData.panNumber,
        email: formData.email,
        expectedSalary: formData.expectedSalary,
        fatherName: formData.fatherName,
        motherName: formData.motherName,
        fatherOccupation: formData.fatherOccupation,
        motherOccupation: formData.motherOccupation,
        fatherMobileNumber: formData.fatherMobileNumber,
        motherMobileNumber: formData.motherMobileNumber,
        otherRoles: formData.otherRoles,
        place: formData.place,
        date: formData.date,
      }).forEach(([key, value]) => fd.append(key, value));

      // arrays & objects
      fd.append(
        "mobileNumber",
        JSON.stringify(
          [formData.mobileNumber1, formData.mobileNumber2].filter(Boolean),
        ),
      );
      fd.append("education", JSON.stringify(formData.education));
      fd.append(
        "teachingExperience",
        JSON.stringify(formData.teachingExperience),
      );
      fd.append("trainings", JSON.stringify(formData.trainings));
      fd.append(
        "professionalReferences",
        JSON.stringify(formData.professionalReferences),
      );
      fd.append(
        "correspondenceAddress",
        JSON.stringify(formData.correspondenceAddress),
      );
      fd.append("permanentAddress", JSON.stringify(formData.permanentAddress));

      // file
      fd.append("signature", formData.signature);

      const res = await api.post("/candidateForm/submitCandidateForm", fd);

   toast.success("Form submitted successfully");
      setFormData(initialFormState);
      setErrors({});
      fileRef.current.value = ""; 
      console.log(res.data);
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Submission failed"
      );
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <form
      
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-lg p-8 space-y-8"
      >
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Candidate Application Form
        </h1>

        {/* Personal Details */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700">
            Personal Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={formData.name}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                className="input pt-4"
                onChange={handleChange}
                value={formData.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
              )}
            </div>

            <input
              className="input"
              name="birthPlace"
              placeholder="Birth Place"
              onChange={handleChange}
              value={formData.birthPlace}
            />
            {errors.birthPlace && (
              <p className="text-red-500 text-sm">{errors.birthPlace}</p>
            )}
            <select className="input" name="religion"

             onChange={handleChange}>
              <option value="">Select Religion</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Sikh</option>
              <option>Other</option>
            </select>
            {formData.religion === "Other" && (
              <input
                className="input"
                name="religionOther"
                placeholder="Specify Religion"
                onChange={handleChange}
                value={formData.religionOther}
              />
            )}
            {errors.religion && (
              <p className="text-red-500 text-sm">{errors.religion}</p>
            )}
            <select
              className="input"
              name="nationality"
              onChange={handleChange}
            >
              <option value="">Nationality</option>
              <option>Indian</option>
              <option>Other</option>
            </select>
            {formData.nationality === "Other" && (
              <input

                className="input"
                name="nationalityOther"
                placeholder="Specify Nationality"
                onChange={handleChange}
                value={formData.nationalityOther}
              />
            )}
            {errors.nationality && (
              <p className="text-red-500 text-sm">{errors.nationality}</p>
            )}
            <input
              className="input"
              name="aadharNumber"
              placeholder="Aadhar Number"
              onChange={handleChange}

              value={formData.aadharNumber}
            />
            {errors.aadharNumber && (
              <p className="text-red-500 text-sm">{errors.aadharNumber}</p>
            )}
            <input
              className="input"
              name="panNumber"
              placeholder="PAN Number"
              value={formData.panNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  panNumber: e.target.value.toUpperCase(),
                })
              }
            />

            {errors.panNumber && (
              <p className="text-red-500 text-sm">{errors.panNumber}</p>
            )}
            <input
              className="input"
              name="mobileNumber1"
              placeholder="Mobile Number 1"
              onChange={handleChange}
              value={formData.mobileNumber1}
            />
            {errors.mobileNumber1 && (
              <p className="text-red-500 text-sm">{errors.mobileNumber1}</p>
            )}
            <input
              className="input"
              name="mobileNumber2"
              placeholder="Mobile Number 2 (optional)"
              onChange={handleChange}
              value={formData.mobileNumber2}
            />
            {errors.mobileNumber2 && (
              <p className="text-red-500 text-sm">{errors.mobileNumber2}</p>
            )}
            <input
              className="input"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
        </section>

        {/* Salary */}
        <section>
          <input
            className="input "
            name="expectedSalary"
            placeholder="Expected Salary"
            onChange={handleChange}
            value={formData.expectedSalary}
          />
        </section>
        {/* Family */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700">Family Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input"
              name="fatherName"
              placeholder="Father's Name"
              onChange={handleChange}
              value={formData.fatherName}
            />
            <input
              className="input"
              name="motherName"
              placeholder="Mother's Name"
              onChange={handleChange}
              value={formData.motherName}
            />
            <input
              className="input"
              name="fatherOccupation"
              placeholder="Father's Occupation"
              onChange={handleChange}
              value={formData.fatherOccupation}
            />
            <input
              className="input"
              name="motherOccupation"
              placeholder="Mother's Occupation"
              onChange={handleChange}
              value={formData.motherOccupation}
            />
            <input
              className="input"
              name="fatherMobileNumber"
              placeholder="Father's Mobile"
              onChange={handleChange}
              value={formData.fatherMobileNumber}
            />
            <input
              className="input"
              name="motherMobileNumber"
              placeholder="Mother's Mobile"
              onChange={handleChange}
              value={formData.motherMobileNumber}
            />
          </div>
        </section>

        {/* Addresses */}
        {/* Correspondence Address */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700">
            Correspondence Address
          </h2>

          <textarea
            className="input w-full"
            placeholder="Address"
            onChange={(e) =>
              handleAddressChange(
                "correspondenceAddress",
                "address",
                e.target.value,
              )
            }
            value={formData.correspondenceAddress?.address}
          />
          {errors.correspondenceAddress && (
            <p className="text-red-500 text-sm">
              {errors.correspondenceAddress}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              className="input"
              placeholder="City"

              onChange={(e) =>
                handleAddressChange(
                  "correspondenceAddress",
                  "city",
                  e.target.value,
                )
              }
              value={formData.correspondenceAddress?.city}
            />
            <input
              className="input"
              placeholder="District"
              onChange={(e) =>
                handleAddressChange(
                  "correspondenceAddress",
                  "district",
                  e.target.value,
                )
              }
              value={formData.correspondenceAddress?.district}
            />
            <input
              className="input"
              placeholder="State"
              onChange={(e) =>
                handleAddressChange(
                  "correspondenceAddress",
                  "state",
                  e.target.value,
                )
              }
              value={formData.correspondenceAddress?.state}
            />
            <input
              className="input"
              placeholder="Pin Code"
              onChange={(e) =>
                handleAddressChange(
                  "correspondenceAddress",
                  "pincode",
                  e.target.value,
                )
              }
              value={formData.correspondenceAddress?.pincode}
            />
            {errors.correspondencePincode && (
              <p className="text-red-500 text-sm">
                {errors.correspondencePincode}
              </p>
            )}
          </div>
        </section>

        {/* Permanent Address */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700">
            Permanent Address
          </h2>

          <textarea
            className="input w-full"
            placeholder="Address"
            onChange={(e) =>
              handleAddressChange(
                "permanentAddress",
                "addressLine",
                e.target.value,
              )
            }
            value={formData.permanentAddress?.addressLine}
          />
          {errors.permanentAddress && (
            <p className="text-red-500 text-sm">{errors.permanentAddress}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              className="input"
              placeholder="City"
              onChange={(e) =>
                handleAddressChange("permanentAddress", "city", e.target.value)
              }
              value={formData.permanentAddress?.city}
            />
            <input
              className="input"
              placeholder="District"
              onChange={(e) =>
                handleAddressChange(
                  "permanentAddress",
                  "district",
                  e.target.value,
                )
              }
              value={formData.permanentAddress?.district}
            />
            <input
              className="input"
              placeholder="State"
              onChange={(e) =>
                handleAddressChange("permanentAddress", "state", e.target.value)
              }
              value={formData.permanentAddress?.state}
            />
            <input
              className="input"
              placeholder="Pin Code"
              onChange={(e) =>
                handleAddressChange(
                  "permanentAddress",
                  "pincode",
                  e.target.value,
                )
              }
              value={formData.permanentAddress?.pincode}
            />
            {errors.permanentPincode && (
              <p className="text-red-500 text-sm">{errors.permanentPincode}</p>
            )}
          </div>
        </section>
        {/* Education Qualifications */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Educational Qualifications</h2>
            <button
              type="button"
              onClick={addEducation}
              className="text-blue-600"
            >
              + Add Qualification
            </button>
          </div>

          {formData.education.map((edu, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 space-y-3 bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <input
                  className="input font-medium"
                  placeholder="Course"
                  value={edu.course}
                  disabled={index < 3}
                  onChange={(e) =>
                    updateEducation(index, "course", e.target.value)
                  }
                  
                />
                {errors[`edu_${index}`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`edu_${index}`]}
                  </p>
                )}

                {index >= 3 && (
                  <button
                    type="button"
                    className="text-red-500 text-sm"
                    onClick={() => removeEducation(index)}
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  className="input"
                  placeholder="Board / University"
                  onChange={(e) =>
                    updateEducation(index, "boardOrUniversity", e.target.value)
                  }
                  value={formData.education[index].boardOrUniversity}
                />
                <input
                  className="input"
                  placeholder="Subject / Specialization"
                  onChange={(e) =>
                    updateEducation(index, "subject", e.target.value)
                  }
                  value={formData.education[index].subject}
                />
                <input
                  className="input"
                  placeholder="Marks Scored"
                  onChange={(e) =>
                    updateEducation(index, "marksScored", e.target.value)
                  }
                  value={formData.education[index].marksScored}
                />
                <input
                  className="input"
                  placeholder="Total Marks"
                  onChange={(e) =>
                    updateEducation(index, "totalMarks", e.target.value)
                  }
                  value={formData.education[index].totalMarks}
                />
                <input
                  className="input"
                  placeholder="Percentage / CGPA"
                  onChange={(e) =>
                    updateEducation(index, "percentageOrCGPA", e.target.value)
                  }
                  value={formData.education[index].percentageOrCGPA}
                />
                <input
                  className="input"
                  placeholder="Year of Passing"
                  onChange={(e) =>
                    updateEducation(index, "yearOfPassing", e.target.value)
                  }
                  value={formData.education[index].yearOfPassing}
                />
              </div>
            </div>
          ))}
        </section>

        {/* Teaching Experience */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">
              Teaching / School Experience
            </h2>
            <button
              type="button"
              onClick={addTeachingExperience}
              className="text-blue-600"
            >
              + Add
            </button>
          </div>

          {formData.teachingExperience.map((exp, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 space-y-3 bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  className="input"
                  placeholder="Institution Name"
                  onChange={(e) =>
                    updateTeachingExperience(
                      index,
                      "institutionName",
                      e.target.value,
                    )
                  }
                  value={formData.teachingExperience[index].institutionName}
                />
                <input
                  className="input"
                  placeholder="Designation"
                  onChange={(e) =>
                    updateTeachingExperience(
                      index,
                      "designation",
                      e.target.value,
                    )
                  }
                  value={formData.teachingExperience[index].designation}
                />
                <input
                  className="input"
                  placeholder="Subjects Taken"
                  onChange={(e) =>
                    updateTeachingExperience(
                      index,
                      "subjectsTaken",
                      e.target.value,
                    )
                  }
                  value={formData.teachingExperience[index].subjectsTaken}
                />
                <input
                  className="input"
                  placeholder="Last Drawn Salary"
                  onChange={(e) =>
                    updateTeachingExperience(
                      index,
                      "lastDrawnSalary",
                      e.target.value,
                    )
                  }
                  value={formData.teachingExperience[index].lastDrawnSalary}
                />
                <input 
                  className="input" 
                  placeholder="Total Experience"
                  onChange={(e) =>
                    updateTeachingExperience(
                      index,
                      "totalExperience",
                      e.target.value,
                    )
                  }
                  value={formData.teachingExperience[index].totalExperience}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="date"
                  className="input"
                  onChange={(e) =>
                    updateTeachingExperience(
                      index,
                      "dateOfJoining",
                      e.target.value,
                    )
                  }
                  value={formData.teachingExperience[index].dateOfJoining}
                />
                <input
                  type="date"
                  className="input"
                  onChange={(e) =>
                    updateTeachingExperience(
                      index,
                      "dateOfLeaving",
                      e.target.value,
                    )
                  }
                  value={formData.teachingExperience[index].dateOfLeaving}
                />

              </div>
              <textarea
                className="input w-full"
                placeholder="Reason for Discontinuation"
                onChange={(e) =>
                  updateTeachingExperience(
                    index,
                    "reasonForDiscontinuation",
                    e.target.value,
                  )
                }
                value={formData.teachingExperience[index].reasonForDiscontinuation}
              />
              <button
                type="button"
                onClick={() => removeTeachingExperience(index)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </section>
        {/* Trainings */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Trainings Undergone</h2>
            <button
              type="button"
              onClick={addTraining}
              className="text-blue-600"
            >
              + Add
            </button>
          </div>

          {formData.trainings.map((train, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 space-y-3 bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  className="input"
                  placeholder="Training Name"
                  onChange={(e) =>
                    updateTraining(index, "trainingName", e.target.value)
                  }
                  value={formData.trainings[index].trainingName}
                />
                <input
                  className="input"
                  placeholder="Training Agency"
                  onChange={(e) =>
                    updateTraining(index, "trainingAgency", e.target.value)
                  }
                  value={formData.trainings[index].trainingAgency}
                />
                <input
                  type="date"
                  className="input"
                  onChange={(e) =>
                    updateTraining(index, "date", e.target.value)
                  }
                  value={formData.trainings[index].date}
                />
                <select
                  className="input"
                  onChange={(e) =>
                    updateTraining(index, "mode", e.target.value)
                  }
                >
                  <option value="">Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
                <input
                  className="input"
                  placeholder="Place"
                  onChange={(e) =>
                    updateTraining(index, "place", e.target.value)
                  }
                />
              </div>
              <textarea
                className="input w-full"
                placeholder="Summary"
                onChange={(e) =>
                  updateTraining(index, "summary", e.target.value)
                }
                value={formData.trainings[index].summary}
              />
              <button
                type="button"
                onClick={() => removeTraining(index)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </section>

        {/* Other Roles */}
        <section>
          <textarea
            className="input w-full h-24"
            name="otherRoles"
            placeholder="Any other roles taken in school"
            onChange={handleChange}
            value={formData.otherRoles}
          />
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Professional References</h2>
            <button
              type="button"
              onClick={addReference}
              className="text-blue-600"
            >
              + Add Reference
            </button>
          </div>

          {formData.professionalReferences.map((ref, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 space-y-3 bg-gray-50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  className="input"
                  placeholder="Name"
                  onChange={(e) =>
                    updateReference(index, "name", e.target.value)
                  }
                  value={formData.professionalReferences[index].name}
                />
                <input
                  className="input"
                  placeholder="Designation"
                  onChange={(e) =>
                    updateReference(index, "designation", e.target.value)
                  }
                  value={formData.professionalReferences[index].designation}
                />
                <input
                  className="input"
                  placeholder="Institution Name"
                  onChange={(e) =>
                    updateReference(index, "institutionName", e.target.value)
                  }
                  value={formData.professionalReferences[index].institutionName}
                />
                <input
                  className="input"
                  placeholder="Contact Number"
                  onChange={(e) =>
                    updateReference(index, "contactNumber", e.target.value)
                  }
                  value={formData.professionalReferences[index].contactNumber}
                />
              </div>

              <button
                type="button"
                className="text-red-500 text-sm"
                onClick={() => removeReference(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </section>
 {/* Declaration */}
        <section className="text-sm text-gray-600">
       All the above information provided by me is correct and to the best of my knowledge. Any wrong information or details can lead to the cancellation of my candidature/ selection/ appointment at any point of time.
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input"
              name="place"
              placeholder="Place"
              onChange={handleChange}
              value={formData.place}
            />
            <input
              type="date"
              className="input"
              name="date"
              placeholder="Date"
              onChange={handleChange}
              value={formData.date}
            />
          </div>
        </section>
        {/* Signature */}
        <section className="space-y-2">
          <label className="text-sm text-gray-600 m-1 ">Upload Signature</label>
          <input  ref={fileRef} type="file" onChange={handleFileChange} 
          />
          {errors.signature && (
            <p className="text-red-500 text-sm">{errors.signature}</p>
          )}
        </section>

       
       <section className="flex justify-center">
        <button disabled={loading}
          type="submit"
          className=" bg-blue-600 text-white p-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
         {loading?"Submitting...":"Submit Application"}
        </button>
        </section>
      </form>

      <style jsx>{`
        .input {
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
        }
      `}</style>
    </div>
  );
}
