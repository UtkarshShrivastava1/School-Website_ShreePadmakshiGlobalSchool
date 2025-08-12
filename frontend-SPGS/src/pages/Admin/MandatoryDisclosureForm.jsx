import { useState, useRef } from "react";
import { addDisclosure } from "../../services/DisclosureService";

const MandatoryDisclosureForm = ({ refreshNotices }) => {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef();

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
    if (file) data.append("file", file); // Important: 'file' matches multer field name

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

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-[50%] mx-auto mt-3">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Create Mandatory Disclosure
      </h2>
      <hr className="text-gray-400 mb-2" />
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
          type="submit"
          className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-orange-600"
        >
          Add Disclosure
        </button>
      </form>
    </div>
  );
};

export default MandatoryDisclosureForm;
