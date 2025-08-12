import axios from "axios";

// Get the correct base URL depending on environment
const baseURL =
  import.meta.env.VITE_NODE_ENV === "development"
    ? import.meta.env.VITE_DEVELOPMENT_URL
    : import.meta.env.VITE_PRODUCTION_URL;

const API = `${baseURL}/api/disclosure`;

// POST - Add Disclosure
export const addDisclosure = async (formData) => {
  try {
    const response = await axios.post(`${API}/addDisclosure`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Error uploading disclosure:", error);
    throw error;
  }
};

// GET - Get All Disclosures
export const getAllDisclosures = async () => {
  try {
    const response = await axios.get(API);
    return response;
  } catch (error) {
    console.error("Error fetching disclosures:", error);
    throw error;
  }
};

// GET - Download Disclosure
export const downloadDisclosure = async (fileName, originalName) => {
  try {
    const response = await axios.get(`${API}/download?file=${fileName}`, {
      responseType: "blob",
    });

    // Create download link
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;

    // Use original name if provided, otherwise use fileName
    const downloadName = originalName || fileName;
    link.setAttribute("download", downloadName);

    document.body.appendChild(link);
    link.click();

    // Cleanup
    link.remove();
    window.URL.revokeObjectURL(url);

    return response;
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};

// Helper function to format file size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

// Helper function to format date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};
