import axios from "axios";
import api from "./api";

const API_BASE_URL = "http://localhost:5000";

const URI = `${ import.meta.env.VITE_NODE_ENV === "development" ? import.meta.env.VITE_DEVELOPMENT_URL : import.meta.env.VITE_PRODUCTION_URL }`;

// Fetch events
export const getEventByDate = async (date) => {
    const response = await axios.get(`${URI}/events/${date}`);
    return response.data;
  };
  
  export const getAllEvents = async () => {
    const response = await axios.get(`${URI}/events`);
    return response.data;
  };

// Fetch notices
export const getNotices = async () => {
  try{
    const response = await api.get(`/notices`);
    return response.data;
  }catch(error){
    return error.response.data;
  }
};

// Add notice (with file upload)
export const addNotice = async (formData) => {
  console.log(formData);
  try{
    const response = await api.post(`/notices/add`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }catch(error){
    return error.response.data;
  }
};