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
      address:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      contact: "+91 9111777295",
      email: "spgsbilaspur@gmail.com",
      website: "www.spgsbilaspur.com",
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
      teachers: "48",
      administrativeStaff: "6",
      nonTeachingStaff: "5",
      peons: "5",
      g4Staff: "14",
      sweepers: "2",
    },
    importantDates: {
      academicSession: "2025-26",
      sessionStartDate: "April 1, 2025",
      admissionPeriod: "Nov 15,2024 to june 15 2025 ",
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
          description: doc.description || `File: ${doc.file || "Unknown"}`,
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

      // Extract the file extension from the actual filename on the server
      const fileExtension = fileName.split('.').pop();
      
      // We check if the originalName (Title) already has the extension, if not we append it
      let downloadName = originalName || fileName;
      if (!downloadName.toLowerCase().endsWith(`.${fileExtension.toLowerCase()}`)) {
        downloadName = `${downloadName}.${fileExtension}`;
      }

      link.setAttribute("download", downloadName);

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
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Hero Section */}
      <div className="bg-gradient-to-r from-[#191f5d] to-blue-900 rounded-2xl shadow-xl overflow-hidden mb-8 relative">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-10 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>
        
        <div className="relative text-center p-10 md:p-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-xs font-semibold rounded-full mb-6 uppercase tracking-wider">
            <Info size={14} />
            <span>Transparency Portal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Mandatory Disclosure
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
            In compliance with regulatory requirements, we provide complete
            transparency regarding our school's information, results, and academic
            details.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-col sm:flex-row px-2">
            <button
              className={`py-4 px-8 flex items-center justify-center space-x-3 font-semibold text-sm transition-all duration-200 relative ${
                activeTab === "documents"
                  ? "text-[#f25811]"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
              }`}
              onClick={() => setActiveTab("documents")}
            >
              <FileText size={18} />
              <span>Documents & Reports</span>
              {activeTab === "documents" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f25811]"></div>
              )}
            </button>
            <button
              className={`py-4 px-8 flex items-center justify-center space-x-3 font-semibold text-sm transition-all duration-200 relative ${
                activeTab === "school"
                  ? "text-[#f25811]"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
              }`}
              onClick={() => setActiveTab("school")}
            >
              <School size={18} />
              <span>School Information</span>
              {activeTab === "school" && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f25811]"></div>
              )}
            </button>
          </div>
        </div>

        {/* Documents & Reports Tab */}
        {activeTab === "documents" && (
          <div className="p-6 md:p-8">
            {/* Search & Filters */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
              
              <div className="relative w-full lg:w-80 group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search documents by title or description..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                <button
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeFilter === "all"
                      ? "bg-[#191f5d] text-white shadow-md shadow-blue-900/20"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveFilter("all")}
                >
                  All Categories
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all duration-200 ${
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
                  className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all duration-200 ${
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
                  className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all duration-200 ${
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
                  className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all duration-200 ${
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
              <div className="flex justify-center my-16">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#f25811]"></div>
              </div>
            ) : error.documents ? (
              <div className="text-center py-12 text-red-500 bg-red-50 rounded-xl border border-red-100">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Info size={32} className="text-red-400" />
                  <span className="font-medium">Error loading documents</span>
                  <span className="text-sm text-red-400">{error.documents}</span>
                </div>
              </div>
            ) : filteredDocuments.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <FileText className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">No documents found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search criteria or category filter.</p>
                {(searchQuery || activeFilter !== "all") && (
                  <button 
                    onClick={() => { setSearchQuery(""); setActiveFilter("all"); }}
                    className="mt-6 text-[#f25811] hover:text-orange-700 font-medium text-sm transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                  >
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-5">
                        <div className={`p-2.5 rounded-xl flex items-center justify-center transition-colors
                          ${doc.type === "results" ? "bg-red-50 text-red-600 group-hover:bg-red-100" : ""}
                          ${doc.type === "academic" ? "bg-blue-50 text-blue-600 group-hover:bg-blue-100" : ""}
                          ${doc.type === "information" ? "bg-green-50 text-green-600 group-hover:bg-green-100" : ""}
                          ${doc.type === "general" || !["results", "academic", "information"].includes(doc.type) ? "bg-gray-50 text-gray-600 group-hover:bg-gray-100" : ""}
                        `}>
                          {doc.type === "results" ? <FileText size={22} /> :
                           doc.type === "academic" ? <School size={22} /> :
                           doc.type === "information" ? <Info size={22} /> :
                           <File size={22} />}
                        </div>
                        <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full capitalize tracking-wide
                          ${doc.type === "results" ? "bg-red-50 text-red-600 border border-red-100" : ""}
                          ${doc.type === "academic" ? "bg-blue-50 text-blue-600 border border-blue-100" : ""}
                          ${doc.type === "information" ? "bg-green-50 text-green-600 border border-green-100" : ""}
                          ${doc.type === "general" || !["results", "academic", "information"].includes(doc.type) ? "bg-gray-50 text-gray-600 border border-gray-100" : ""}
                        `}>
                          {doc.type}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2.5 text-gray-900 group-hover:text-[#191f5d] transition-colors line-clamp-2 leading-tight">
                        {doc.title}
                      </h3>
                      
                      {doc.description && (
                        <p className="text-sm text-gray-500 mb-5 line-clamp-3 leading-relaxed">
                          {doc.description}
                        </p>
                      )}
                      
                      <div className="flex items-center text-xs font-medium text-gray-400 mt-auto pt-4 border-t border-gray-50">
                        <Clock size={14} className="mr-1.5 text-gray-400" />
                        <span>Added {new Date(doc.date).toLocaleDateString('en-GB')}</span>
                      </div>
                    </div>
                    
                    <div className="px-6 pb-6 pt-2">
                      <button
                        onClick={() => handleDownload(doc.fileName, doc.originalName)}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#191f5d]/5 text-[#191f5d] font-semibold rounded-xl hover:bg-[#191f5d] hover:text-white transition-all duration-300 active:scale-[0.98]"
                      >
                        <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
                        <span>Download File</span>
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
      <div className="mt-8 text-center text-sm text-gray-400 flex items-center justify-center space-x-2">
        <Info size={14} />
        <span>
          This information is provided in compliance with the Right to Information Act and educational regulatory requirements.
        </span>
      </div>
    </div>
  );
};

export default SchoolPortal;
