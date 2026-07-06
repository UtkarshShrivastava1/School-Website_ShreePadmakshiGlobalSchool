import axios from "axios";
import api from "./api";

const API_BASE_URL = "http://localhost:5000";

const URI = `${ import.meta.env.VITE_NODE_ENV === "development" ? import.meta.env.VITE_DEVELOPMENT_URL : import.meta.env.VITE_PRODUCTION_URL }`;

// Helper for authenticating non-api prefixed routes (like /events)
const getAuthHeaders = () => {
  const token = localStorage.getItem("adminToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Fetch events
export const getEventByDate = async (date) => {
    const response = await axios.get(`${URI}/events/${date}`);
    return response.data;
  };
  
  export const getAllEvents = async () => {
    const response = await axios.get(`${URI}/events`);
    return response.data;
  };

  // Add event
  export const createEvent = async (eventData) => {
    const response = await axios.post(`${URI}/events`, eventData, {
      headers: getAuthHeaders()
    });
    return response.data;
  };

  // Update event
  export const updateEvent = async (id, eventData) => {
    const response = await axios.put(`${URI}/events/${id}`, eventData, {
      headers: getAuthHeaders()
    });
    return response.data;
  };

  // Delete event
  export const deleteEvent = async (id) => {
    const response = await axios.delete(`${URI}/events/${id}`, {
      headers: getAuthHeaders()
    });
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

// Update notice (with file upload)
export const updateNotice = async (id, formData) => {
  try {
    const response = await api.put(`/notices/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    return error.response?.data || { error: error.message };
  }
};

// Delete notice
export const deleteNotice = async (id) => {
  try {
    const response = await api.delete(`/notices/${id}`);
    return response.data;
  } catch (error) {
    return error.response?.data || { error: error.message };
  }
};

// Fetch latest news
export const getLatestNews = async () => {
  try {
    const response = await api.get(`/latestnews`);
    return response.data;
  } catch (error) {
    return error.response?.data || { error: error.message };
  }
};

// Add latest news (with image upload)
export const createLatestNews = async (formData) => {
  try {
    const response = await api.post(`/latestnews/create`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    return error.response?.data || { error: error.message };
  }
};

// Update latest news (with image upload)
export const updateLatestNews = async (id, formData) => {
  try {
    const response = await api.put(`/latestnews/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    return error.response?.data || { error: error.message };
  }
};

// Delete latest news
export const deleteLatestNews = async (id) => {
  try {
    const response = await api.delete(`/latestnews/${id}`);
    return response.data;
  } catch (error) {
    return error.response?.data || { error: error.message };
  }
};