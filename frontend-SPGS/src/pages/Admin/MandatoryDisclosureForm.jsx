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

    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const data = new FormData();
    data.append("type", formData.type);
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("file", file);

    try {
      await addDisclosure(data);
      setMessage("Disclosure added successfully!");
      setFormData({ type: "", title: "", description: "" });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      refreshNotices?.();
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Something went wrong. Please try again.";
      setMessage(`Failed to add disclosure: ${errorMsg}`);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-[50%] mx-auto mt-3">
      <h2 className="text-3xl font-bold mb-2 text-center">Create Mandatory Disclosure</h2>
      <hr className='text-gray-400 mb-2'/>
      {message && (
        <p className={`text-sm mb-2 ${message.startsWith("Failed") ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="type">Type:</label>
          <input
            id="type"
            name="type"
            type="text"
            value={formData.type}
            onChange={handleChange}
            placeholder="e.g. Annual Report"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter document title"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief description of the disclosure"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="file">Upload File:</label>
          <input
            id="file"
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="w-full border rounded p-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
        </div>

        <button
          type="submit"
          className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-orange-600 transition-all ease-in-out cursor-pointer"
        >
          Add Disclosure
        </button>
      </form>
    </div>
  );
};

export default MandatoryDisclosureForm;
