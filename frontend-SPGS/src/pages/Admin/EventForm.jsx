import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = { title, description, date };

    // Here you would typically send the eventData to your backend API
    // console.log('Event Data:', eventData);
    
    // Reset form fields
    // setTitle('');
    // setDescription('');
    // setDate('');

    try {
      const response = axios.post('http://localhost:5000/events', eventData);
      // console.log(response.data);
      alert('Event created successfully');
      setTitle('');
      setDescription('');
      setDate('');
    } catch (error) {
      console.log(error);
      alert('Error creating event');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5  border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-2  text-center">Create Event</h2>
      <hr className='text-gray-400 mb-2'/>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          {/* <button
            type="submit"
            className="bg-[#191f5d] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  transition-all ease-in-out cursor-pointer"
          >
            Create Event
          </button> */}

          <button type="submit" className="font-bold px-4 bg-[#f25811] text-white py-2 rounded-lg hover:bg-[rgb(242,88,17)] transition-all ease-in-out cursor-pointer">
          Create Event
        </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;