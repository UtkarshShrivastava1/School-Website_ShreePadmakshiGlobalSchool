import React, { useState, useEffect } from "react";
import { Edit, Trash2, PlusCircle, X, Newspaper, Image, FileImage } from "lucide-react";
import { getLatestNews, createLatestNews, updateLatestNews, deleteLatestNews } from "../../services/NotificationService";

const NewsDashboard = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  
  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  
  // Modal & Edit State
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editNewsId, setEditNewsId] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const data = await getLatestNews();
      if (Array.isArray(data)) {
        setNewsList(data);
      } else {
        setNewsList([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleOpenCreate = () => {
    setIsEditMode(false);
    setEditNewsId(null);
    setTitle("");
    setDescription("");
    setImageFile(null);
    setExistingImageUrl("");
    setPreviewUrl("");
    setShowModal(true);
  };

  const handleOpenEdit = (news) => {
    setIsEditMode(true);
    setEditNewsId(news._id);
    setTitle(news.title || "");
    setDescription(news.description || "");
    setImageFile(null);
    setExistingImageUrl(news.image || "");
    setPreviewUrl(news.image || "");
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this news story?")) return;
    try {
      await deleteLatestNews(id);
      setMessage("News story deleted successfully!");
      fetchNews();
      setTimeout(() => setMessage(""), 3500);
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news story");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    if (imageFile) {
      data.append("image", imageFile);
    } else if (isEditMode) {
      // If editing and no new file selected, preserve existing image url
      data.append("image", existingImageUrl);
    }

    try {
      if (isEditMode) {
        await updateLatestNews(editNewsId, data);
        setMessage("News story updated successfully!");
      } else {
        if (!imageFile) {
          alert("Please upload an image for the news story.");
          return;
        }
        await createLatestNews(data);
        setMessage("News story published successfully!");
      }

      setTitle("");
      setDescription("");
      setImageFile(null);
      setPreviewUrl("");
      setShowModal(false);
      fetchNews();
      setTimeout(() => setMessage(""), 3500);
    } catch (error) {
      console.error("Error submitting news:", error);
      alert("Failed to save news details");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <Newspaper className="text-[#f25811]" />
            Latest News Slider
          </h2>
          <p className="text-gray-500 text-sm mt-1">Manage slides and cards for homepage news stories</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 font-bold px-4 py-2 bg-[#f25811] text-white rounded-lg hover:bg-[rgb(230,80,10)] transition-all cursor-pointer shadow-md"
        >
          <PlusCircle size={18} />
          Add News Slide
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
      ) : newsList.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <Newspaper size={48} className="mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-semibold text-gray-700">No news stories found</h3>
          <p className="text-gray-500 text-sm mt-1">Add news stories to animate your homepage carousel.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((news) => (
            <div key={news._id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
              <div className="h-48 w-full bg-gray-100 relative">
                {news.image ? (
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Image size={40} />
                  </div>
                )}
                
                {/* Actions overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleOpenEdit(news)}
                    className="bg-white p-2.5 rounded-full text-blue-600 hover:bg-blue-50 transition-colors shadow cursor-pointer"
                    title="Edit News"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(news._id)}
                    className="bg-white p-2.5 rounded-full text-red-600 hover:bg-red-50 transition-colors shadow cursor-pointer"
                    title="Delete News"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg truncate mb-1" title={news.title}>
                  {news.title}
                </h3>
                <p className="text-gray-500 text-xs mb-2">
                  {news.createdAt ? new Date(news.createdAt).toLocaleDateString() : ""}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2 h-10">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Creation / Edition Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#191f5d] to-indigo-900 text-white p-5 flex justify-between items-center">
              <h3 className="text-xl font-bold">{isEditMode ? "Edit News Slide" : "Publish News Slide"}</h3>
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
                  News Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Enter slide heading"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
                  News Snippet / Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="3"
                  placeholder="Summarize the news story..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="image">
                  Slide Background Image
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                />
                
                {previewUrl && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">Image Preview:</p>
                    <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={previewUrl}
                        alt="News preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
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
                  {isEditMode ? "Save Changes" : "Publish Slide"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDashboard;
