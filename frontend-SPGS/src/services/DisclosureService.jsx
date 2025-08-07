import api from "./api";
// import api from "./api";


export const addDisclosure = async(formData) =>{

    try{
        const response = await api.post(`/disclosure/createDisclosure`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
           });
        console.log("Response:", response.data);
        return response.data;
    }catch (error) {
    console.error("Error adding disclosure:", error);
    throw error; // or throw new Error(`Error adding disclosure: ${error.message}`);
  }
}

// import api from "./api";

// export const addDisclosure = async (formData) => {
//   try {
//     const response = await api.post(`/disclosure/createDisclosure`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log("Response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error adding disclosure:", error);
//     throw error; // or throw new Error(`Error adding disclosure: ${error.message}`);
//   }
// };
