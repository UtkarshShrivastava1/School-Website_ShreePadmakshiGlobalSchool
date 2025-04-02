import React from 'react'
// import axios from "axios";
// import axios from 'axios';
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {

    const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/admin-login", {
        username,
        password,
      });

      localStorage.setItem("adminToken", response.data.token);
      localStorage.setItem("adminUsername", username);
      
      // Redirect to admin dashboard
      alert("Login successful");
      router("/admin/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || 
        "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white  p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 ">Admin Login</h1>
          <p className="mt-2 text-gray-600 ">
            Sign in to access the admin dashboard
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  dark:text-black"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  dark:text-black pr-10"
                placeholder="Enter your password"
                required
              />
              <button 
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            // className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            className="w-full flex justify-center items-center gap-2 bg-red-900 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <LogIn size={18} />
                <span>Login</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminLogin