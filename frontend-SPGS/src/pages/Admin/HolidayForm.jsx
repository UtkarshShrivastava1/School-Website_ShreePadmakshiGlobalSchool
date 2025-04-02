import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HolidayForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 

    try {
      await axios.post("http://localhost:5000/api/leaves/apply", formData);
      setMessage("Holiday added successfully!");
      setFormData({
        title: "",
        description: "",
        date: ""
      });
    } catch (error) {
      setMessage("Error creating event.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-[50%] mx-auto mt-3">
      <h2 className="text-3xl font-bold mb-2 text-center">Add A Holiday</h2>
      <hr className='text-gray-400 mb-2'/>
      {message && <p className="text-green-600 text-center mb-3">{message}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input 
            id="title"
            type="text" 
            name="title"
            value={formData.title} 
            onChange={handleChange} 
            placeholder='Title'
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea 
            id="description"
            name="description"
            value={formData.description} 
            onChange={handleChange} 
            placeholder='Description'
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
            Date:
          </label>
          <input 
            id="date"
            type="date" 
            name="date"
            value={formData.date} 
            onChange={handleChange} 
            placeholder='YYYY-MM-DD'
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button 
          type="submit" 
          className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-[rgb(242,88,17)] transition-all ease-in-out cursor-pointer w-full"
        >
          Add Holiday
        </button>
      </form>
    </div>
  )
}

export default HolidayForm