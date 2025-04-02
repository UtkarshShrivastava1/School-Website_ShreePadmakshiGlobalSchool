import React, { useState, useEffect } from "react";
import {
  Clock,
  Download,
  File,
  FileText,
  Info,
  School,
  Search,
  Users,
  Calendar,
  Building,
} from "lucide-react";

const SchoolPortal = () => {
  const [activeTab, setActiveTab] = useState("documents");
  const [activeFilter, setActiveFilter] = useState("all");
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState({
    documents: true,
  });
  const [error, setError] = useState({
    documents: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSection, setExpandedSection] = useState(null);

  // Static school information data
  const schoolInformation = {
    basicInfo: {
      schoolName: "Shree Padmakshi Global School",
      established: "1985",
      affiliation: "Central Board of Secondary Education (CBSE)",
      affiliationNumber: "3330519",
      address:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      contact: "+91 9111777295",
      email: "spgsbilaspur@gmail.com",
      website: "www.mlzsbilaspur.edu",
    },
    infrastructure: {
      totalCampusArea: "6179.83 SQ.MTR",
      classRooms: "30 (Size 10.50x5.50)",
      laboratories: "5 labs, 299.25 SQ.MTR",
      internetFacility: "YES",
      girlsToilets: "16",
      boysToilets: "18",
    },
    facultyInfo: {
      teachers: "55",
      administrativeStaff: "Not Available",
      nonTeachingStaff: "5",
      peons: "5",
      g4Staff: "14",
      sweepers: "Not Available",
    },
    importantDates: {
      academicSession: "2024-25",
      sessionStartDate: "April 1, 2024",
      admissionPeriod: "January 15 - March 15, 2024",
      examinationSchedule: "As per academic calendar",
    },
  };

  useEffect(() => {
    // Fetch documents
    const fetchDocuments = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, documents: true }));
        const response = await fetch("http://localhost:5000/api/disclosure");

        if (!response.ok) {
          throw new Error("Failed to fetch documents");
        }

        const data = await response.json();
        // console.log(data)
        setDocuments(data);
        console.log(data);
        setIsLoading((prev) => ({ ...prev, documents: false }));
      } catch (err) {
        console.error("Error fetching documents:", err);
        setError((prev) => ({ ...prev, documents: err.message }));
        setIsLoading((prev) => ({ ...prev, documents: false }));
      }
    };

    fetchDocuments();
  }, []);

  const handleDownload = (documentId) => {
    window.open(
      `http://localhost:5000/api/disclosure/download?id=${documentId}`,
      "_blank"
    );
  };

  // const filteredDocuments = documents.filter((doc) => {
  //   const matchesFilter = activeFilter === "all" || doc.type === activeFilter;
  //   const matchesSearch =
  //     doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     doc.description.toLowerCase().includes(searchQuery.toLowerCase());
  //   return matchesFilter && matchesSearch;
  // });

  const filteredDocuments = documents
  .filter((doc) => {
    const matchesFilter = activeFilter === "all" || doc.type === activeFilter;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Render school information sections
  const renderSchoolInfoContent = () => {
    return (
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Basic Information */}
        <div className="col-span-1 border rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <File size={20} />
            <h2 className="text-xl font-bold">Basic Information</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            General details about our school
          </p>

          <div className="space-y-4">
            {Object.entries(schoolInformation.basicInfo).map(([key, value]) => (
              <div key={key}>
                <h3 className="text-sm text-gray-500 capitalize">
                  {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                </h3>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Collapsible Sections and Important Dates */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          {/* Infrastructure & Facilities */}
          <div className="border rounded-lg">
            <button
              className="w-full p-4 flex items-center justify-between"
              onClick={() => toggleSection("infrastructure")}
            >
              <div className="flex items-center space-x-2">
                <Building size={20} />
                <h2 className="text-lg font-medium">
                  Infrastructure & Facilities
                </h2>
              </div>
              <svg
                className={`w-5 h-5 transition-transform ${
                  expandedSection === "infrastructure" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {expandedSection === "infrastructure" && (
              <div className="p-4 border-t space-y-4">
                {Object.entries(schoolInformation.infrastructure).map(
                  ([key, value]) => (
                    <div key={key}>
                      <h3 className="text-sm text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                      </h3>
                      <p className="font-medium">{value}</p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Faculty Information */}
          <div className="border rounded-lg">
            <button
              className="w-full p-4 flex items-center justify-between"
              onClick={() => toggleSection("faculty")}
            >
              <div className="flex items-center space-x-2">
                <Users size={20} />
                <h2 className="text-lg font-medium">Faculty Information</h2>
              </div>
              <svg
                className={`w-5 h-5 transition-transform ${
                  expandedSection === "faculty" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {expandedSection === "faculty" && (
              <div className="p-4 border-t space-y-4">
                {Object.entries(schoolInformation.facultyInfo).map(
                  ([key, value]) => (
                    <div key={key}>
                      <h3 className="text-sm text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                      </h3>
                      <p className="font-medium">{value}</p>
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Important Dates */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar size={20} />
              <h2 className="text-lg font-medium">Important Dates</h2>
            </div>

            <div className="space-y-4">
              {Object.entries(schoolInformation.importantDates).map(
                ([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <h3 className="text-sm text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                    </h3>
                    <p className="font-medium">{value}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow">
      {/* Header */}
      <div className="text-center p-8">
        <div className="inline-block px-3 py-1 bg-gray-800 text-white text-xs rounded-full mb-2">
          Transparency
        </div>
        <h1 className="text-3xl font-bold mb-4">Mandatory Disclosure</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          In compliance with regulatory requirements, we provide complete
          transparency regarding our school's information, results, and academic
          details.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b">
        <div className="flex items-center justify-between px-6">
          <button
            className={`py-4 px-6 flex items-center space-x-2 font-medium border-b-2 ${
              activeTab === "documents"
                ? "border-blue-600 text-blue-600"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("documents")}
          >
            <FileText size={18} />
            <span>Documents & Reports</span>
          </button>
          <button
            className={`py-4 px-6 flex items-center space-x-2 font-medium border-b-2 ${
              activeTab === "school"
                ? "border-blue-600 text-blue-600"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("school")}
          >
            <School size={18} />
            <span>School Information</span>
          </button>
        </div>
      </div>

      {/* Documents & Reports Tab */}
      {activeTab === "documents" && (
        <div className="p-6">
          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeFilter === "all"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setActiveFilter("all")}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 ${
                  activeFilter === "results"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setActiveFilter("results")}
              >
                <FileText size={16} />
                <span>Results</span>
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 ${
                  activeFilter === "academic"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setActiveFilter("academic")}
              >
                <School size={16} />
                <span>Academic</span>
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 ${
                  activeFilter === "information"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setActiveFilter("information")}
              >
                <Info size={16} />
                <span>Information</span>
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 ${
                  activeFilter === "general"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setActiveFilter("general")}
              >
                <File size={16} />
                <span>General</span>
              </button>
            </div>
          </div>

          {/* Documents List */}
          {isLoading.documents ? (
            <div className="flex justify-center my-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error.documents ? (
            <div className="text-center py-12 text-red-500">
              {error.documents}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDocuments
                .map((doc) => (
                  <div
                    key={doc.id}
                    className="border rounded-lg p-6 flex flex-col md:flex-row justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                        {doc.type === "results" && (
                          <FileText size={16} className="text-red-500" />
                        )}
                        {doc.type === "academic" && (
                          <School size={16} className="text-blue-500" />
                        )}
                        <span className="capitalize">{doc.type}</span>
                        {/* <span className="capitalize">{doc.fileUrl}</span> */}
                      </div>
                      <h3 className="font-medium text-lg mb-1">{doc.title}</h3>
                      <p className="text-gray-600">{doc.description}</p>
                      <div className="flex items-center mt-3 text-sm text-gray-500 space-x-6">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>
                            Created: {new Date(doc.date).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <File size={14} />
                          <span>Size: {doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 flex items-center">
                      <button
                        onClick={() => handleDownload(doc._id)}
                        className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <Download size={18} />
                        <span>Download</span>
                      </button>
                      {/* <a href={`http://localhost:5000${doc.fileUrl}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    >sgs</a> */}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      {/* School Information Tab */}
      {activeTab === "school" && renderSchoolInfoContent()}

      {/* Footer */}
      <div className="border-t p-4 text-center text-xs text-gray-500">
        {activeTab === "school" &&
          "This information is provided in compliance with the Right to Information Act and educational regulatory requirements. Last updated: May 1, 2024."}
      </div>
    </div>
  );
};

export default SchoolPortal;
