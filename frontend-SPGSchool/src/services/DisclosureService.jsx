import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const addDisclosure = async(formData) =>{
    try{
        const response = await axios.post(`${API_BASE_URL}/api/disclosure/addDisclosure`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch(error){
        throw new Error('Error adding disclosure');
    }
}