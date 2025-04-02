import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

// Fetch events
export const getEventByDate = async (date) => {
    const response = await axios.get(`${API_BASE_URL}/events/${date}`);
    return response.data;
  };
  
  export const getAllEvents = async () => {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  };

// Fetch notices
export const getNotices = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/api/notices`);
    return response.data;
  }catch(error){
    return error.response.data;
  }
};

// Add notice (with file upload)
export const addNotice = async (formData) => {
  console.log(formData);
  try{
    const response = await axios.post(`${API_BASE_URL}/api/notices/add`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }catch(error){
    return error.response.data;
  }
};