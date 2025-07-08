import axios from "axios";
import api from "./api";
// import api from "./api";

const API_BASE_URL = "http://localhost:5000";

export const addDisclosure = async(formData) =>{
    console.log
    try{
        const response = await api.post(`/disclosure/addDisclosure`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
           });
        console.log("Response:", response.data);
        return response.data;
    } catch(error){
        throw new Error('Error adding disclosure');
    }
}