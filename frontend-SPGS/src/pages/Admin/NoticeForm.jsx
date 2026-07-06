import React, { useState, useEffect } from "react";
import { Edit, Trash2, PlusCircle, X, Megaphone, FileText, Download } from "lucide-react";
import { getNotices, addNotice, updateNotice, deleteNotice } from "../../services/NotificationService";
import api from "../../services/api";

const NoticeForm = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  
  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });
  const [file, setFile] = useState(null);
  
  // Modal & Edit State
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editNoticeId, setEditNoticeId] = useState(null);
  const [existingFileUrl, setExistingFileUrl] = useState("");

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const data = await getNotices();
      // Handle the case where error might be returned
      if (Array.isArray(data)) {
        setNotices(data);
      } else {
        setNotices([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching notices:", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOpenCreate = () => {
    setIsEditMode(false);
    setEditNoticeId(null);
    setFormData({ title: "", description: "", date: "" });
    setFile(null);
    setExistingFileUrl("");
    setShowModal(true);
  };

  const handleOpenEdit = (notice) => {
    setIsEditMode(true);
    setEditNoticeId(notice._id);
    
    let formattedDate = "";
    if (notice.date) {
      try {
        const d = new Date(notice.date);
        formattedDate = !isNaN(d.getTime()) ? d.toISOString().split("T")[0] : notice.date;
      } catch (e) {
        formattedDate = notice.date;
      }
    }
    
    setFormData({
      title: notice.title || "",
      description: notice.description || "",
      date: formattedDate,
    });
    setFile(null);
    setExistingFileUrl(notice.fileUrl || "");
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    try {
      await deleteNotice(id);
      setMessage("Notice deleted successfully!");
      fetchNotices();
      setTimeout(() => setMessage(""), 3500);
    } catch (error) {
      console.error("Error deleting notice:", error);
      alert("Failed to delete notice");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("date", formData.date);
    if (file) {
      data.append("file", file);
    }

    try {
      if (isEditMode) {
        await updateNotice(editNoticeId, data);
        setMessage("Notice updated successfully!");
      } else {
        await addNotice(data);
        setMessage("Notice added successfully!");
      }

      setFormData({ title: "", description: "", date: "" });
      setFile(null);
      setShowModal(false);
      fetchNotices();
      setTimeout(() => setMessage(""), 3500);
    } catch (error) {
      console.error("Error submitting notice:", error);
      alert("Failed to save notice. Please verify all details.");
    }
  };

  const formatDate = (dateString) => {
    try {
      const options = { year: "numeric", month: "short", day: "numeric" };
      const d = new Date(dateString);
      return isNaN(d.getTime()) ? dateString : d.toLocaleDateString(undefined, options);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <Megaphone className="text-[#f25811]" />
            Notices & Announcements
          </h2>
          <p className="text-gray-500 text-sm mt-1">Publish and modify announcements or bulletins</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 font-bold px-4 py-2 bg-[#f25811] text-white rounded-lg hover:bg-[rgb(230,80,10)] transition-all cursor-pointer shadow-md"
        >
          <PlusCircle size={18} />
          Add Notice
        </button>
      </div>

      {message && (
        <div className="mb-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md shadow-sm">
          {message}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-[#f25811] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : notices.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <Megaphone size={48} className="mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-semibold text-gray-700">No notices found</h3>
          <p className="text-gray-500 text-sm mt-1">Start by adding a bulletin or notice for the school.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Title</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Description</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Attachment</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {notices.map((notice) => (
                <tr key={notice._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{notice.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">{formatDate(notice.date)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{notice.description}</td>
                  <td className="px-6 py-4 text-sm">
                    {notice.fileUrl ? (
                      <a
                        href={notice.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-800 transition-colors font-medium"
                      >
                        <FileText size={16} />
                        View File
                      </a>
                    ) : (
                      <span className="text-gray-400 text-xs italic">None</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-right space-x-3">
                    <button
                      onClick={() => handleOpenEdit(notice)}
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer font-semibold"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(notice._id)}
                      className="inline-flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors cursor-pointer font-semibold"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Creation / Edition Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#191f5d] to-indigo-900 text-white p-5 flex justify-between items-center">
              <h3 className="text-xl font-bold">{isEditMode ? "Edit Notice Details" : "Publish New Notice"}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="hover:bg-white/10 p-2 rounded-full transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">
                  Notice Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter notice title"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="date">
                  Publish Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
                  Notice Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Describe the notice contents..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="file">
                  Attachment File (PDF, Image, etc.)
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                />
                {isEditMode && existingFileUrl && (
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    Current file: <a href={existingFileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View attached file</a> (Leave empty to keep current file)
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-semibold text-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#f25811] text-white rounded-lg hover:bg-[rgb(230,80,10)] transition-all font-semibold text-sm cursor-pointer shadow-md"
                >
                  {isEditMode ? "Save Changes" : "Publish Notice"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeForm;