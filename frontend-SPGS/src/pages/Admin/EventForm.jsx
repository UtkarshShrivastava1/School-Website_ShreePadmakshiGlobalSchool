import React, { useState, useEffect } from 'react';
import { Edit, Trash2, PlusCircle, X, Calendar } from 'lucide-react';
import { getAllEvents, createEvent, updateEvent, deleteEvent } from '../../services/NotificationService';

const EventForm = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  
  // Edit and Visibility States
  const [isEditMode, setIsEditMode] = useState(false);
  const [editEventId, setEditEventId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await getAllEvents();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setIsEditMode(false);
    setEditEventId(null);
    setTitle('');
    setDescription('');
    setDate('');
    setShowForm(true);
  };

  const handleOpenEdit = (event) => {
    setIsEditMode(true);
    setEditEventId(event._id);
    setTitle(event.title);
    setDescription(event.description);
    
    // Format date string from database to yyyy-MM-dd
    let formattedDate = '';
    if (event.date) {
      try {
        const d = new Date(event.date);
        if (!isNaN(d.getTime())) {
          formattedDate = d.toISOString().split('T')[0];
        } else {
          formattedDate = event.date;
        }
      } catch (err) {
        formattedDate = event.date;
      }
    }
    setDate(formattedDate);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;
    try {
      await deleteEvent(id);
      setMessage('Event deleted successfully');
      fetchEvents();
      setTimeout(() => setMessage(''), 3500);
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = { title, description, date };

    try {
      if (isEditMode) {
        await updateEvent(editEventId, eventData);
        setMessage('Event updated successfully!');
      } else {
        await createEvent(eventData);
        setMessage('Event created successfully!');
      }
      
      // Reset states
      setTitle('');
      setDescription('');
      setDate('');
      setShowForm(false);
      setIsEditMode(false);
      setEditEventId(null);
      fetchEvents();
      setTimeout(() => setMessage(''), 3500);
    } catch (error) {
      console.error('Error submitting event:', error);
      alert('Error saving event details');
    }
  };

  const formatDate = (dateStr) => {
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const d = new Date(dateStr);
      return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString(undefined, options);
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
            <Calendar className="text-[#f25811]" />
            Events Manager
          </h2>
          <p className="text-gray-500 text-sm mt-1">Create, update, and manage school events</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 font-bold px-4 py-2 bg-[#f25811] text-white rounded-lg hover:bg-[rgb(230,80,10)] transition-all cursor-pointer shadow-md"
        >
          <PlusCircle size={18} />
          Create Event
        </button>
      </div>

      {message && (
        <div className="mb-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md shadow-sm">
          {message}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-[#f25811] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <Calendar size={48} className="mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-semibold text-gray-700">No events found</h3>
          <p className="text-gray-500 text-sm mt-1">Start by adding a new event for the school calendar.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Title</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Description</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {events.map((event) => (
                <tr key={event._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{event.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">{formatDate(event.date)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{event.description}</td>
                  <td className="px-6 py-4 text-sm text-right space-x-3">
                    <button
                      onClick={() => handleOpenEdit(event)}
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer font-semibold"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="inline-flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors cursor-pointer font-semibold"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Creation / Edition Popup Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all">
            <div className="bg-gradient-to-r from-[#191f5d] to-indigo-900 text-white p-5 flex justify-between items-center">
              <h3 className="text-xl font-bold">{isEditMode ? 'Edit Event Details' : 'Create New Event'}</h3>
              <button
                onClick={() => setShowForm(false)}
                className="hover:bg-white/10 p-2 rounded-full transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">
                  Event Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Enter event name"
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="date">
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
                  Event Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="4"
                  placeholder="Describe the event details..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-semibold text-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#f25811] text-white rounded-lg hover:bg-[rgb(230,80,10)] transition-all font-semibold text-sm cursor-pointer shadow-md"
                >
                  {isEditMode ? 'Save Changes' : 'Publish Event'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventForm;