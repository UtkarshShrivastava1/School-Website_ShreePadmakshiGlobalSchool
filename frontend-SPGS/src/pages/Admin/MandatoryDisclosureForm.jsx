import { useState } from "react";
import { addDisclosure } from "../../services/DisclosureService";

const MandatoryDisclosureForm = ({ refreshNotices }) => {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

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
      
      // Reset file input field
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error adding notice:", error);
      const errorMsg = error.response?.data?.error || error.message || "Unknown error";
      setMessage(`Failed to add notice: ${errorMsg}`);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-[50%] mx-auto mt-3">
      <h2 className="text-3xl font-bold mb-2 text-center">Create Mandatory Disclosure</h2>
      <hr className='text-gray-400 mb-2'/>
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type:
          </label>
          <input 
            id="type"
            type="text" 
            name="type" 
            placeholder="Type" 
            value={formData.type} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input 
            id="title"
            type="text" 
            name="title" 
            placeholder="Title" 
            value={formData.title} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea 
            id="description"
            name="description" 
            placeholder="Description" 
            value={formData.description} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
            File:
          </label>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            className="w-full border rounded p-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <button 
          type="submit" 
          className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-[rgb(242,88,17)] transition-all ease-in-out cursor-pointer"
        >
          Add Mandatory Disclosure
        </button>
      </form>
    </div>
  );
};

export default MandatoryDisclosureForm;