import React, { useState, useEffect } from 'react';
import { Edit, Trash2, PlusCircle, X, ImagePlus, CheckCircle2 } from 'lucide-react';

function GalleryDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    title: '',
    content: '',
    image: null,
    existingImage: null,
  });

  // Fetch posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        throw new Error('Unauthorized! Please login first.');
      }

      const response = await fetch('http://localhost:5000/api/posts', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      setPosts(data.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 
      ${type === 'success' 
        ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' 
        : 'bg-gradient-to-r from-red-400 to-red-600 text-white'}
      flex items-center space-x-3 transform transition-all duration-300 ease-in-out`;
    
    notification.innerHTML = `
      ${type === 'success' 
        ? '<CheckCircle2 size={24} />' 
        : '<X size={24} />'}
      <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      // Remove the deleted post from the state
      setPosts(posts.filter(post => post._id !== postId));
      
      // Show success notification
      showNotification('Post deleted successfully!');
    } catch (err) {
      console.error('Error deleting post:', err);
      showNotification(err.message, 'error');
    }
  };

  const handleEdit = (post) => {
    setSelectedPost(post);
    setEditFormData({
      title: post.title,
      content: post.content,
      image: null,
      existingImage: post.image ? post.image.url : null,
    });
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      formData.append('title', editFormData.title);
      formData.append('content', editFormData.content);
      
      // Only append image if a new one is selected
      if (editFormData.image) {
        formData.append('image', editFormData.image);
      }

      const response = await fetch(`http://localhost:5000/api/posts/${selectedPost._id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update post');
      }

      // Update the post in the list
      setPosts(posts.map(post => 
        post._id === selectedPost._id ? data.data : post
      ));

      // Show success notification
      showNotification('Post updated successfully!');
      setIsEditModalOpen(false);
    } catch (err) {
      console.error('Error updating post:', err);
      showNotification(err.message, 'error');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL for the new image
      const previewUrl = URL.createObjectURL(file);
      setEditFormData(prev => ({
        ...prev,
        image: file,
        existingImage: previewUrl,
      }));
    }
  };

  const handleRemoveImage = () => {
    setEditFormData(prev => ({
      ...prev,
      image: null,
      existingImage: null,
    }));
  };

  if (loading) return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center">
        <X size={64} className="text-red-500 mx-auto mb-4" />
        <p className="text-red-600 text-xl">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            Gallery Dashboard
          </h1>
          <p className="text-xl text-gray-600">Manage and curate your visual stories</p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center bg-white rounded-2xl shadow-xl p-12 max-w-xl mx-auto">
            <ImagePlus size={64} className="mx-auto mb-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your gallery is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Start creating stunning visual content by adding your first post
            </p>
            <button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                         px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 
                         transition-all duration-300 flex items-center mx-auto"
            >
              <PlusCircle className="mr-2" /> Add New Post
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div 
                key={post._id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg 
                           transform transition-all duration-300 
                           hover:scale-105 hover:shadow-2xl 
                           group relative"
              >
                {post.image && post.image.url && (
                  <div className="relative">
                    <img 
                      src={post.image.url} 
                      alt={post.title} 
                      className="w-full h-64 object-cover 
                                 transition-all duration-300 
                                 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 
                                    group-hover:bg-opacity-20 transition-all 
                                    flex items-center justify-center space-x-4 opacity-0 
                                    group-hover:opacity-100">
                      <button 
                        onClick={() => handleEdit(post)}
                        className="bg-white p-3 rounded-full shadow-lg 
                                   hover:bg-blue-500 hover:text-white transition-all"
                      >
                        <Edit size={20} />
                      </button>
                      <button 
                        onClick={() => handleDelete(post._id)}
                        className="bg-white p-3 rounded-full shadow-lg 
                                   hover:bg-red-500 hover:text-white transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 truncate">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {post.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 
                          flex items-center justify-center z-50 
                          p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-2xl w-full 
                            shadow-2xl relative overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 
                              text-white p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Edit Post</h2>
                <button 
                  onClick={() => setIsEditModalOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-all"
                >
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleEditSubmit} className="p-8 space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Title</label>
                  <input
                    type="text"
                    value={editFormData.title}
                    onChange={(e) => setEditFormData(prev => ({
                      ...prev,
                      title: e.target.value
                    }))}
                    className="w-full px-4 py-3 border-2 border-gray-200 
                               rounded-lg focus:outline-none 
                               focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Content</label>
                  <textarea
                    value={editFormData.content}
                    onChange={(e) => setEditFormData(prev => ({
                      ...prev,
                      content: e.target.value
                    }))}
                    className="w-full px-4 py-3 border-2 border-gray-200 
                               rounded-lg focus:outline-none 
                               focus:border-blue-500 transition-all"
                    rows="4"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Image</label>
                  <div className="flex items-center space-x-6">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="w-full file:mr-4 file:rounded-full file:border-0
                                 file:bg-blue-50 file:text-blue-700
                                 hover:file:bg-blue-100"
                    />
                    {editFormData.existingImage && (
                      <div className="relative group">
                        <img 
                          src={editFormData.existingImage} 
                          alt="Preview" 
                          className="w-32 h-32 object-cover rounded-lg shadow-md"
                        />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute -top-2 -right-2 bg-red-500 text-white 
                                     rounded-full p-1 opacity-0 group-hover:opacity-100 
                                     transition-all hover:scale-110"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-700 
                               rounded-lg hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
                               text-white rounded-lg hover:from-blue-600 
                               hover:to-purple-700 transition-all"
                  >
                    Update Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryDashboard;