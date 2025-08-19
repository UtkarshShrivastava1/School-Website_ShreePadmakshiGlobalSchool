import { useState, useRef, useEffect } from "react";
import { addDisclosure } from "../../services/DisclosureService";

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
      await addDisclosure(data);
      setMessage("Disclosure added successfully!");
      setFormData({ type: "", title: "", description: "" });
      setFile(null);
      document.getElementById("file").value = "";
      if (refreshNotices) refreshNotices();
    } catch (error) {
      console.error("Error adding disclosure:", error);
      const errorMsg = error?.response?.data?.message || error.message;
      setMessage(`Failed to add disclosure: ${errorMsg}`);
    }
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

  const handleDeleteDisclosure = async (filename) => {
    try {
      const response = await fetch(`${API}/delete/${filename}`, {
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
            Create Mandatory Disclosure
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
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Type"
            required
            className="w-full p-2 border rounded"
          />
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
            placeholder="Description"
            required
            className="w-full p-2 border rounded"
          />
          <input
            id="file"
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpeg,.jpg,.gif,.webp"
            onChange={handleFileChange}
            className="w-full border rounded p-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            onClick={handleSubmit}
            className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-orange-600"
          >
            Add Disclosure
          </button>
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
                      {disclosure.filename && (
                        <p className="text-sm text-gray-500 mt-2">
                          File: {disclosure.filename}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        handleDeleteDisclosure(
                          disclosure.filename || disclosure.id
                        )
                      }
                      className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-semibold"
                    >
                      Delete
                    </button>
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
