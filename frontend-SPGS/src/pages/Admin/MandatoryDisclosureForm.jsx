import { useState, useRef, useEffect } from "react";
import { addDisclosure, editDisclosure } from "../../services/DisclosureService";

const MandatoryDisclosureForm = ({ refreshNotices }) => {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [disclosures, setDisclosures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [editId, setEditId] = useState(null);
  const fileInputRef = useRef();

  const baseURL =
    import.meta.env.VITE_NODE_ENV === "development"
      ? import.meta.env.VITE_DEVELOPMENT_URL
      : import.meta.env.VITE_PRODUCTION_URL;
  const API = `${baseURL}/api/disclosure`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("type", formData.type);
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (file) data.append("file", file);

    try {
      if (editId) {
        await editDisclosure(editId, data);
        setMessage("Disclosure updated successfully!");
        setEditId(null);
      } else {
        await addDisclosure(data);
        setMessage("Disclosure added successfully!");
      }
      setFormData({ type: "", title: "", description: "" });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (refreshNotices) refreshNotices();
    } catch (error) {
      console.error("Error saving disclosure:", error);
      const errorMsg = error?.response?.data?.message || error.message;
      setMessage(`Failed to save disclosure: ${errorMsg}`);
    }
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setFormData({ type: "", title: "", description: "" });
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
      fetchDisclosures(); // Refresh the list
      if (refreshNotices) refreshNotices();
    } catch (error) {
      console.error("Error deleting disclosure:", error);
      setDeleteMessage("Failed to delete disclosure");
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
      <div className="p-6 bg-white shadow-lg rounded-lg w-[50%] mx-auto mt-3">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-3xl font-bold text-center flex-1">
            {editId ? "Edit Mandatory Disclosure" : "Create Mandatory Disclosure"}
          </h2>
          <button
            onClick={openModal}
            className="font-bold px-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm"
          >
            Manage Disclosures
          </button>
        </div>
        <hr className="text-gray-400 mb-2" />
        {message && <p className="text-green-600">{message}</p>}
        <div className="space-y-4">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded bg-white"
          >
            <option value="" disabled>Select Type</option>
            <option value="results">Results</option>
            <option value="academic">Academic</option>
            <option value="information">Information</option>
            <option value="general">General</option>
          </select>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description (Optional)"
            className="w-full p-2 border rounded"
          />
          <input
            id="file"
            type="file"
            ref={fileInputRef}
            accept=".pdf,.doc,.docx,.png,.jpeg,.jpg,.gif,.webp"
            onChange={handleFileChange}
            className="w-full border rounded p-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {editId && (
            <p className="text-sm text-gray-500">
              Note: Uploading a new file will overwrite the existing one.
            </p>
          )}
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-orange-600 flex-1"
            >
              {editId ? "Update Disclosure" : "Add Disclosure"}
            </button>
            {editId && (
              <button
                onClick={handleCancelEdit}
                className="font-bold px-4 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 flex-1"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[80%] max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Manage Disclosures</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {deleteMessage && (
              <p
                className={`mb-4 ${
                  deleteMessage.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {deleteMessage}
              </p>
            )}

            {loading ? (
              <div className="text-center py-8">
                <p>Loading disclosures...</p>
              </div>
            ) : disclosures.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No disclosures found</p>
              </div>
            ) : (
              <div className="space-y-4">
                {disclosures.map((disclosure, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 flex justify-between items-start"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">
                        {disclosure.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        Type: {disclosure.type}
                      </p>
                      <p className="text-gray-700">{disclosure.description}</p>
                      {disclosure.file && (
                        <p className="text-sm text-gray-500 mt-2">
                          File: {disclosure.file}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <button
                        onClick={() => handleEditClick(disclosure)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteDisclosure(disclosure._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-semibold"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MandatoryDisclosureForm;