import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate

const Signup = () => {
  const navigate = useNavigate();  // ✅ Initialize navigate function


  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/signup", formData);
      setMessage(response.data.message);
      setFormData({ name: "", email: "", password: "" });

       // ✅ Navigate to the Add Entity form after successful signup
       setTimeout(() => {
        navigate("/add-entity");
      }, 1500);  // Delay for better UX
      
    } catch (error) {
      setMessage(error.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Signup</h2>
      {message && <p className="text-green-500">{message}</p>}
      
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-md bg-gray-700" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-md bg-gray-700" required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-md bg-gray-700" required />
        
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
          Signup
        </button>
      </form>

      {/* Go Back Button */}
      <button 
        onClick={() => navigate("/")}  // ✅ Navigate to Landing Page
        className="mt-4 text-white underline hover:text-gray-400">
        ← Back to Home
      </button>
    </div>
  );
};

export default Signup;
