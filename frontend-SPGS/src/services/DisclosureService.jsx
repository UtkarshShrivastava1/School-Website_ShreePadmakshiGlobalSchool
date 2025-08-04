import axios from "axios";

// Get the correct base URL depending on environment
const baseURL =
  import.meta.env.VITE_NODE_ENV === "development"
    ? import.meta.env.VITE_DEVELOPMENT_URL
    : import.meta.env.VITE_PRODUCTION_URL;

const API = `${baseURL}/api/disclosure`;

// POST - Add Disclosure
export const addDisclosure = async (formData) => {
  return axios.post(`${API}/addDisclosure`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// GET - Get All Disclosures
export const getAllDisclosures = async () => {
  return axios.get(API);
};

// GET - Download Disclosure
export const downloadDisclosure = async (fileName) => {
  return axios.get(`${API}/download?file=${fileName}`, {
    responseType: "blob",
  });
};
