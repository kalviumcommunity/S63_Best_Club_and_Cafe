import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
 // ✅ Import Signup.css for styling

const Signup = () => {
  const navigate = useNavigate();
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
      }, 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div className="signup-container">
      <motion.div
        className="signup-box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="signup-title">Create Your Account</h2>

        {message && <p className="signup-message">{message}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="signup-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
            required
          />

          <motion.button
            type="submit"
            className="signup-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up 🚀
          </motion.button>
        </form>

        {/* Go Back Button */}
        <motion.button
          onClick={() => navigate("/")}
          className="back-button"
          whileHover={{ scale: 1.1 }}
        >
          ← Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Signup;
