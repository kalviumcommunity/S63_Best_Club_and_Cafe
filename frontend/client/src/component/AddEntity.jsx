import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// ✅ Import CSS file for styling

const AddEntity = () => {
  const navigate = useNavigate();
  const [entity, setEntity] = useState({ name: "", location: "", description: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEntity({ ...entity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops the page from reloading
    try {
      await axios.post("http://localhost:5000/api/entities", entity);
      setMessage("✅ Entity added successfully!");   // Clear old messages
      setEntity({ name: "", location: "", description: "" }); // Clear form

      // ✅ Redirect after a  3short delay
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage("❌ Error adding entity. Please try again.");
    }
  };

  return (
    <div className="add-entity-container">
      <motion.div
        className="add-entity-box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="add-entity-title">Add a New Club or Cafe</h2>

        {message && <p className="add-entity-message">{message}</p>}

        <form onSubmit={handleSubmit} className="add-entity-form">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={entity.name}
            onChange={handleChange}
            className="add-entity-input"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            value={entity.location}
            onChange={handleChange}
            className="add-entity-input"
            required
          />
          <textarea
            name="description"
            placeholder="Enter Description"
            value={entity.description}
            onChange={handleChange}
            className="add-entity-textarea"
            required
          />

          <motion.button
            type="submit"
            className="add-entity-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add Entity 🚀
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



export default AddEntity;
