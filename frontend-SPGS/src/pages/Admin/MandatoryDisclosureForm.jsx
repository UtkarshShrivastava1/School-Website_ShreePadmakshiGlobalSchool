import { useState, useRef, useEffect } from "react";
import { addDisclosure, editDisclosure } from "../../services/DisclosureService";
import {
  FileText,
  School,
  Info,
  File,
  Upload,
  X,
  Edit3,
  Trash2,
  CheckCircle,
  AlertCircle,
  Settings,
  Plus,
  Loader,
} from "lucide-react";

const MandatoryDisclosureForm = ({ refreshNotices }) => {
  const [formData, setFormData] = useState({
    type: "general",
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [disclosures, setDisclosures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deleteMessageType, setDeleteMessageType] = useState("");
  const [editId, setEditId] = useState(null);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const fileInputRef = useRef();

  const baseURL =
    import.meta.env.VITE_NODE_ENV === "development"
      ? import.meta.env.VITE_DEVELOPMENT_URL
      : import.meta.env.VITE_PRODUCTION_URL;
  const API = `${baseURL}/api/disclosure`;

  const typeOptions = [
    { value: "results", label: "Results", icon: FileText, color: "red" },
    { value: "academic", label: "Academic", icon: School, color: "blue" },
    { value: "information", label: "Information", icon: Info, color: "green" },
    { value: "general", label: "General", icon: File, color: "gray" },
  ];

  const getTypeStyles = (type) => {
    const typeObj = typeOptions.find((t) => t.value === type);
    if (!typeObj) return { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", badge: "bg-gray-100 text-gray-700 border-gray-200" };

    const styles = {
      red: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200", badge: "bg-red-100 text-red-700 border-red-200" },
      blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", badge: "bg-blue-100 text-blue-700 border-blue-200" },
      green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200", badge: "bg-green-100 text-green-700 border-green-200" },
      gray: { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", badge: "bg-gray-100 text-gray-700 border-gray-200" },
    };
    return styles[typeObj.color];
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile && !formData.title.trim()) {
      const defaultTitle = selectedFile.name.replace(/\.[^/.]+$/, "");
      setFormData((prev) => ({ ...prev, title: defaultTitle }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("type", formData.type);
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (file) data.append("file", file);

    try {
      if (editId) {
        await editDisclosure(editId, data);
        setMessage("Disclosure updated successfully!");
        setMessageType("success");
        setEditId(null);
      } else {
        await addDisclosure(data);
        setMessage("Disclosure added successfully!");
        setMessageType("success");
        setShowSuccessAnimation(true);
        setTimeout(() => setShowSuccessAnimation(false), 3000);
      }
      setFormData({ type: "general", title: "", description: "" });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (refreshNotices) refreshNotices();
      setTimeout(() => setMessage(""), 5000);
    } catch (error) {
      console.error("Error saving disclosure:", error);
      const errorMsg = error?.response?.data?.message || error.message;
      setMessage(`Failed to save disclosure: ${errorMsg}`);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setFormData({ type: "general", title: "", description: "" });
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setMessage("");
  };

  const fetchDisclosures = async () => {
    setLoading(true);
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error("Failed to fetch disclosures");
      const data = await response.json();
      setDisclosures(data);
    } catch (error) {
      console.error("Error fetching disclosures:", error);
      setDeleteMessage("Failed to load disclosures");
      setDeleteMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDisclosure = async (id) => {
    try {
      const response = await fetch(`${API}/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete disclosure");

      setDeleteMessage("Disclosure deleted successfully!");
      setDeleteMessageType("success");
      fetchDisclosures();
      if (refreshNotices) refreshNotices();
    } catch (error) {
      console.error("Error deleting disclosure:", error);
      setDeleteMessage("Failed to delete disclosure");
      setDeleteMessageType("error");
    }
  };

  const handleEditClick = (disclosure) => {
    setEditId(disclosure._id);
    setFormData({
      type: disclosure.type || "",
      title: disclosure.title || "",
      description: disclosure.description || "",
    });
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setMessage("");
    closeModal();
  };

  const openModal = () => {
    setShowModal(true);
    setDeleteMessage("");
    fetchDisclosures();
  };

  const closeModal = () => {
    setShowModal(false);
    setDeleteMessage("");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-3 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-6 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                  {editId ? "Edit Disclosure" : "Create Disclosure"}
                </h1>
                <p className="text-gray-500 mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base">
                  Manage mandatory disclosure documents and school information
                </p>
              </div>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 bg-[#191f5d] text-white font-semibold rounded-lg sm:rounded-xl hover:bg-[#0f1449] transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm sm:text-base flex-shrink-0 cursor-pointer active:scale-95"
              >
                <Settings size={16} className="sm:w-5 sm:h-5" />
                <span>Manage</span>
                <span className="hidden sm:inline">Disclosures</span>
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#191f5d] to-blue-900 px-4 sm:px-8 py-4 sm:py-6">
              <h2 className="text-lg sm:text-2xl font-bold text-white">
                {editId ? "Update Information" : "Add New Disclosure"}
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">
                {editId
                  ? "Modify the disclosure details below"
                  : "Fill in the details to add a new disclosure"}
              </p>
            </div>

            {/* Message Alerts */}
            {message && (
              <div
                className={`mx-4 sm:mx-8 mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-start space-x-2 sm:space-x-3 border text-xs sm:text-sm transition-all duration-500 ease-out transform ${
                  messageType === "success"
                    ? "bg-green-50 border-green-200 text-green-800 animate-slide-in"
                    : "bg-red-50 border-red-200 text-red-800"
                } ${showSuccessAnimation ? "animate-bounce" : ""}`}
              >
                {messageType === "success" ? (
                  <CheckCircle size={16} className="flex-shrink-0 mt-0.5 sm:w-5 sm:h-5 animate-pulse" />
                ) : (
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                )}
                <p className="font-medium leading-snug">{message}</p>
              </div>
            )}

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              {/* Type Selection */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                  Document Type *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#191f5d] focus:ring-2 focus:ring-[#191f5d]/10 transition-all bg-white text-sm sm:text-base text-gray-900 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="general">General</option>
                  <option value="results">Results</option>
                  <option value="academic">Academic</option>
                  <option value="information">Information</option>
                </select>
              </div>

              {/* Title Input */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter disclosure title"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#191f5d] focus:ring-2 focus:ring-[#191f5d]/10 transition-all bg-white text-sm sm:text-base text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Description Input */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                  Description (Optional)
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter description or additional details"
                  rows="3"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-[#191f5d] focus:ring-2 focus:ring-[#191f5d]/10 transition-all bg-white text-sm sm:text-base text-gray-900 placeholder-gray-500 resize-none"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                  Upload Document
                </label>
                <div className="relative">
                  <input
                    id="file"
                    type="file"
                    ref={fileInputRef}
                    accept=".pdf,.doc,.docx,.png,.jpeg,.jpg,.gif,.webp"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="block p-4 sm:p-6 border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl hover:border-[#191f5d] hover:bg-[#191f5d]/5 cursor-pointer transition-all"
                  >
                    <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                      <Upload size={24} className="sm:w-8 sm:h-8 text-[#191f5d]" />
                      <div className="text-center">
                        <p className="font-semibold text-xs sm:text-base text-gray-900 truncate px-2">
                          {file ? file.name : "Click to upload"}
                        </p>
                        <p className="text-[10px] sm:text-sm text-gray-500 mt-0.5 sm:mt-1 px-2">
                          PDF, DOC, DOCX, PNG, JPG, GIF, WEBP
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
                {editId && (
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-2 sm:mt-3 flex items-start space-x-1">
                    <Info size={12} className="flex-shrink-0 mt-0.5" />
                    <span>Uploading a new file will replace the existing one</span>
                  </p>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-[#f25811] text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center space-x-1.5 sm:space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader size={16} className="animate-spin" />
                  ) : (
                    <Plus size={16} className="sm:w-5 sm:h-5" />
                  )}
                  <span>{editId ? "Update" : "Add"}</span>
                  <span className="hidden sm:inline">{editId ? "Disclosure" : "Disclosure"}</span>
                </button>
                {editId && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-gray-900 font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl hover:bg-gray-300 transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Management Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#191f5d] to-blue-900 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  Manage Disclosures
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">
                  View, edit, or delete existing disclosures
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-all flex-shrink-0"
              >
                <X size={20} className="sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Delete Message Alert */}
            {deleteMessage && (
              <div
                className={`mx-4 sm:mx-8 mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-start space-x-2 sm:space-x-3 border text-xs sm:text-sm ${
                  deleteMessageType === "success"
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                {deleteMessageType === "success" ? (
                  <CheckCircle size={16} className="flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                ) : (
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                )}
                <p className="font-medium leading-snug">{deleteMessage}</p>
              </div>
            )}

            {/* Modal Content */}
            <div className="overflow-y-auto flex-1 px-4 sm:px-8 py-4 sm:py-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 space-y-4">
                  <Loader size={32} className="sm:w-10 sm:h-10 text-[#191f5d] animate-spin" />
                  <p className="text-gray-500 font-medium text-sm">Loading disclosures...</p>
                </div>
              ) : disclosures.length === 0 ? (
                <div className="text-center py-12 sm:py-16 space-y-3 sm:space-y-4">
                  <FileText size={40} className="sm:w-12 sm:h-12 mx-auto text-gray-300" />
                  <p className="text-gray-500 font-medium text-sm">No disclosures found</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Create your first disclosure using the form above
                  </p>
                </div>
              ) : (
                <div className="space-y-2 sm:space-y-4">
                  {disclosures.map((disclosure, index) => {
                    const typeObj = typeOptions.find(
                      (t) => t.value === disclosure.type
                    );
                    const Icon = typeObj?.icon || File;
                    const styles = getTypeStyles(disclosure.type);

                    return (
                      <div
                        key={index}
                        className={`p-3 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all hover:shadow-lg ${styles.border} ${styles.bg}`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                          <div className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
                            <div className="flex items-start space-x-2">
                              <Icon
                                size={20}
                                className={`flex-shrink-0 mt-0.5 sm:w-6 sm:h-6 ${styles.text}`}
                              />
                              <h4 className="text-sm sm:text-xl font-bold text-gray-900 line-clamp-2">
                                {disclosure.title}
                              </h4>
                            </div>
                            <div className="flex items-center space-x-2 flex-wrap">
                              <span
                                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold border whitespace-nowrap ${styles.badge}`}
                              >
                                {typeObj?.label || disclosure.type}
                              </span>
                            </div>
                            {disclosure.description && (
                              <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 line-clamp-2 leading-snug">
                                {disclosure.description}
                              </p>
                            )}
                            {disclosure.file && (
                              <p className="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2 flex items-center space-x-1 truncate">
                                <File size={10} className="flex-shrink-0" />
                                <span className="truncate">{disclosure.file}</span>
                              </p>
                            )}
                          </div>
                          <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto flex-shrink-0">
                            <button
                              onClick={() => handleEditClick(disclosure)}
                              className="flex-1 sm:flex-none px-2.5 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white font-semibold text-xs sm:text-sm rounded-lg sm:rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-1 sm:space-x-1.5 cursor-pointer active:scale-95"
                            >
                              <Edit3 size={14} className="sm:w-4 sm:h-4" />
                              <span className="hidden sm:inline">Edit</span>
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteDisclosure(disclosure._id)
                              }
                              className="flex-1 sm:flex-none px-2.5 sm:px-4 py-1.5 sm:py-2 bg-red-600 text-white font-semibold text-xs sm:text-sm rounded-lg sm:rounded-lg hover:bg-red-700 transition-all duration-200 flex items-center justify-center space-x-1 sm:space-x-1.5 cursor-pointer active:scale-95"
                            >
                              <Trash2 size={14} className="sm:w-4 sm:h-4" />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-100 bg-gray-50 px-4 sm:px-8 py-3 sm:py-4 flex justify-end flex-shrink-0">
              <button
                onClick={closeModal}
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-900 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-all duration-200 cursor-pointer active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MandatoryDisclosureForm;