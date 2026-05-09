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
import api from "../../services/api";
import axios from "axios";

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
      established: "2022",
      affiliation: "Central Board of Secondary Education (CBSE)",
      affiliationNumber: "3330519",
      udiseCode: "22072516913",
      schoolCode: "16271",
      periodOfAffiliation: "01/04/2024 to 31/03/2029",
      nocInformation: "Chhattisgarh State | Letter No.:\nF-6-08/2023/20-3",
      address:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      contact: "+91 9111777295",
      email: "spgsbilaspur@gmail.com",
      website: "www.spgsbilaspur.com",
    },
    infrastructure: {
      totalCampusArea: "6179.83 SQ.MTR",
      classRooms: "35",
      laboratories: "5 labs, 299.25 SQ.MTR",
      internetFacility: "YES",
      girlsToilets: "16",
      boysToilets: "18",
    },
    facultyInfo: {
      teachers: "56",
      administrativeStaff: "6",
      nonTeachingStaff: "5",
      peons: "6",
      g4Staff: "15",
      sweepers: "3",
    },
    importantDates: {
      academicSession: "2026-27",
      sessionStartDate: "April 1, 2026",
      admissionPeriod: "Nov 15, 2025 to June 15, 2026",
      examinationSchedule: "As per academic calendar",
    },
  };

  // Helper function to format file size
  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setIsLoading((prev) => ({ ...prev, documents: true }));

        const baseUrl =
          import.meta.env.VITE_NODE_ENV === "development"
            ? import.meta.env.VITE_DEVELOPMENT_URL
            : import.meta.env.VITE_PRODUCTION_URL;

        const response = await axios.get(`${baseUrl}/api/disclosure`);
        console.log("API Response:", response.data);

        const data = response.data;

        const transformedData = data.map((doc, index) => ({
          id: doc._id || doc.id || index,
          title: doc.title || doc.originalName || doc.file || "Untitled Document",
          description: doc.description || (doc.originalFilename ? `File: ${doc.originalFilename}` : "File uploaded to cloud storage"),
          type: doc.type || "general",
          date: doc.createdAt || doc.uploadDate || doc.modifiedDate || new Date(),
          size: "File", // File size is no longer tracked directly in DB model, so we show "File"
          fileName: doc.file, // Our new model uses 'file' instead of 'fileName'
          originalName: doc.title,
          _id: doc._id || doc.id,
        }));

        setDocuments(transformedData);
        console.log("Transformed data:", transformedData);
        setIsLoading((prev) => ({ ...prev, documents: false }));
      } catch (err) {
        console.error("Error fetching documents:", err);
        setError((prev) => ({ ...prev, documents: err.message }));
        setIsLoading((prev) => ({ ...prev, documents: false }));
        setDocuments([]);
      }
    };

    fetchDocuments();
  }, []);

  const handleDownload = async (fileName, originalName) => {
    try {
      const baseUrl =
        import.meta.env.VITE_NODE_ENV === "development"
          ? import.meta.env.VITE_DEVELOPMENT_URL
          : import.meta.env.VITE_PRODUCTION_URL;

      const response = await axios.get(
        `${baseUrl}/api/disclosure/download?file=${fileName}`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", doc.originalFilename || doc.title || "download");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Download failed. Please try again.");
    }
  };

  // Fixed filtering with proper null checks
  const filteredDocuments = documents
    .filter((doc) => {
      if (!doc) return false; // Skip if doc is null/undefined

      const matchesFilter =
        activeFilter === "all" || (doc.type || "general") === activeFilter;

      // Safe search with null checks
      const title = (doc.title || "").toLowerCase();
      const description = (doc.description || "").toLowerCase();
      const search = (searchQuery || "").toLowerCase();

      const matchesSearch =
        !searchQuery || title.includes(search) || description.includes(search);

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      // Safe date sorting
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateB - dateA;
    });

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
                <p className="font-medium whitespace-pre-line">{value}</p>
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
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      {/* Header Hero Section */}
      <div className="bg-gradient-to-r from-[#191f5d] to-blue-900 rounded-2xl shadow-xl overflow-hidden mb-6 sm:mb-8 relative">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-blue-400 opacity-10 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>
        
        <div className="relative text-center p-8 sm:p-10 md:p-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-[10px] sm:text-xs font-semibold rounded-full mb-4 sm:mb-6 uppercase tracking-wider">
            <Info size={12} className="sm:w-[14px] sm:h-[14px]" />
            <span>Transparency Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 sm:mb-4 tracking-tight leading-tight">
            Mandatory Disclosure
          </h1>
          <p className="text-blue-100/90 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            In compliance with regulatory requirements, we provide complete
            transparency regarding our school's information, results, and academic
            details.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-100 bg-gray-50/50 overflow-x-auto no-scrollbar">
          <div className="flex min-w-max px-1 sm:px-2">
            <button
              className={`py-3 sm:py-4 px-3 sm:px-6 md:px-8 flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 relative whitespace-nowrap ${
                activeTab === "documents"
                  ? "text-[#f25811]"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
              }`}
              onClick={() => setActiveTab("documents")}
            >
              <FileText size={16} className="sm:w-5 sm:h-5" />
              <span>Documents & Reports</span>
              {activeTab === "documents" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f25811]"></div>
              )}
            </button>
            <button
              className={`py-3 sm:py-4 px-3 sm:px-6 md:px-8 flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 relative whitespace-nowrap ${
                activeTab === "school"
                  ? "text-[#f25811]"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
              }`}
              onClick={() => setActiveTab("school")}
            >
              <School size={16} className="sm:w-5 sm:h-5" />
              <span>School Information</span>
              {activeTab === "school" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f25811]"></div>
              )}
            </button>
          </div>
        </div>

        {/* Documents & Reports Tab */}
        {activeTab === "documents" && (
          <div className="p-4 sm:p-6 md:p-8">
            {/* Search & Filters */}
            <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center space-y-4 lg:space-y-0 mb-6 sm:mb-8 bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-100">
              
              <div className="relative w-full lg:w-80 group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex overflow-x-auto pb-2 lg:pb-0 hide-scrollbar gap-2 w-full lg:w-auto -mx-1 px-1">
                <button
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeFilter === "all"
                      ? "bg-[#191f5d] text-white shadow-md shadow-blue-900/20"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveFilter("all")}
                >
                  All Categories
                </button>
                <button
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all duration-200 ${
                    activeFilter === "results"
                      ? "bg-red-500 text-white shadow-md shadow-red-500/20"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-red-200 hover:text-red-600 hover:bg-red-50"
                  }`}
                  onClick={() => setActiveFilter("results")}
                >
                  <FileText size={14} />
                  <span>Results</span>
                </button>
                <button
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all duration-200 ${
                    activeFilter === "academic"
                      ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setActiveFilter("academic")}
                >
                  <School size={14} />
                  <span>Academic</span>
                </button>
                <button
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all duration-200 ${
                    activeFilter === "information"
                      ? "bg-green-500 text-white shadow-md shadow-green-500/20"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-green-200 hover:text-green-600 hover:bg-green-50"
                  }`}
                  onClick={() => setActiveFilter("information")}
                >
                  <Info size={14} />
                  <span>Information</span>
                </button>
                <button
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all duration-200 ${
                    activeFilter === "general"
                      ? "bg-gray-700 text-white shadow-md shadow-gray-700/20"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveFilter("general")}
                >
                  <File size={14} />
                  <span>General</span>
                </button>
              </div>
            </div>

            {/* Documents List */}
            {isLoading.documents ? (
              <div className="flex justify-center my-12 sm:my-16">
                <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-t-2 border-b-2 border-[#f25811]"></div>
              </div>
            ) : error.documents ? (
              <div className="text-center py-10 sm:py-12 text-red-500 bg-red-50 rounded-xl border border-red-100 px-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Info size={28} className="text-red-400 sm:w-8 sm:h-8" />
                  <span className="font-medium text-sm sm:text-base">Error loading documents</span>
                  <span className="text-xs sm:text-sm text-red-400">{error.documents}</span>
                </div>
              </div>
            ) : filteredDocuments.length === 0 ? (
              <div className="text-center py-16 sm:py-20 px-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <FileText className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">No documents found</h3>
                <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">Try adjusting your search criteria or category filter.</p>
                {(searchQuery || activeFilter !== "all") && (
                  <button 
                    onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
                    className="mt-4 sm:mt-6 text-[#f25811] hover:text-orange-700 font-medium text-xs sm:text-sm transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            ) : (
            <div className="space-y-3 sm:space-y-4">
              {filteredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className={`bg-white border border-gray-100 border-l-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_2px_8px_-3px_rgba(6,81,237,0.08)] sm:shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] sm:hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col sm:flex-row group
                    ${doc.type === "results" ? "border-l-red-500" : ""}
                    ${doc.type === "academic" ? "border-l-blue-500" : ""}
                    ${doc.type === "information" ? "border-l-green-500" : ""}
                    ${doc.type === "general" || !["results", "academic", "information"].includes(doc.type) ? "border-l-gray-400" : ""}
                  `}
                >
                  <div className="py-3 px-4 sm:p-6 flex-grow flex flex-col justify-center">
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-1.5 sm:mb-3">
                      <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors
                        ${doc.type === "results" ? "bg-red-50 text-red-600 group-hover:bg-red-100" : ""}
                        ${doc.type === "academic" ? "bg-blue-50 text-blue-600 group-hover:bg-blue-100" : ""}
                        ${doc.type === "information" ? "bg-green-50 text-green-600 group-hover:bg-green-100" : ""}
                        ${doc.type === "general" || !["results", "academic", "information"].includes(doc.type) ? "bg-gray-50 text-gray-600 group-hover:bg-gray-100" : ""}
                      `}>
                        {doc.type === "results" ? <FileText size={14} className="sm:w-5 sm:h-5" /> :
                         doc.type === "academic" ? <School size={14} className="sm:w-5 sm:h-5" /> :
                         doc.type === "information" ? <Info size={14} className="sm:w-5 sm:h-5" /> :
                         <File size={14} className="sm:w-5 sm:h-5" />}
                      </div>
                      <span className={`text-[10px] font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full capitalize tracking-wide
                        ${doc.type === "results" ? "bg-red-50 text-red-600 border border-red-100" : ""}
                        ${doc.type === "academic" ? "bg-blue-50 text-blue-600 border border-blue-100" : ""}
                        ${doc.type === "information" ? "bg-green-50 text-green-600 border border-green-100" : ""}
                        ${doc.type === "general" || !["results", "academic", "information"].includes(doc.type) ? "bg-gray-50 text-gray-600 border border-gray-100" : ""}
                      `}>
                        {doc.type}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-1.5 text-gray-900 group-hover:text-[#191f5d] transition-colors leading-tight pr-2">
                      {doc.title}
                    </h3>
                    
                    {doc.description && (
                      <p className="text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-3 line-clamp-2 leading-snug sm:leading-relaxed">
                        {doc.description}
                      </p>
                    )}
                    
                    <div className="flex items-center text-[10px] sm:text-xs font-medium text-gray-400 mt-0.5 sm:mt-2">
                      <Clock size={10} className="mr-1 sm:mr-1.5 text-gray-400 sm:w-3.5 sm:h-3.5" />
                      <span>Added {new Date(doc.date).toLocaleDateString('en-GB')}</span>
                    </div>
                  </div>
                  
                  <div className="p-2 sm:p-6 bg-gray-50/50 flex items-center justify-center sm:border-l sm:border-t-0 border-t border-gray-100 sm:min-w-[200px]">
                    <button
                      onClick={() => handleDownload(doc.fileName, doc.originalName)}
                      className="w-full flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-5 py-2 sm:py-3 bg-white border border-gray-200 text-[#191f5d] text-xs sm:text-base font-semibold rounded-lg sm:rounded-xl hover:bg-[#191f5d] hover:text-white hover:border-[#191f5d] shadow-sm transition-all duration-300 active:scale-[0.98]"
                    >
                      <Download size={14} className="transition-transform group-hover:-translate-y-0.5 sm:w-[18px] sm:h-[18px]" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        )}

        {/* School Information Tab */}
        {activeTab === "school" && renderSchoolInfoContent()}
      </div>

      {/* Footer Note */}
      <div className="mt-6 sm:mt-8 px-4 text-center text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
        <Info size={14} className="flex-shrink-0" />
        <span className="leading-relaxed">
          This information is provided in compliance with the Right to Information Act and educational regulatory requirements.
        </span>
      </div>
    </div>
  );
};

export default SchoolPortal;
