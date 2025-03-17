import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateEntity = () => {
  const { id } = useParams(); // Get entity ID from URL
  const navigate = useNavigate();
  const [entity, setEntity] = useState({ name: "", description: "" });

  // Fetch entity details when component loads
  useEffect(() => {
    if (!id) {
      console.error("No entity ID provided!");
      return;
    }
  
    axios.get(`http://localhost:5000/api/entities/${id}`)
      .then(response => setEntity(response.data))
      .catch(error => console.error("Error fetching entity:", error.response?.data || error));
  }, [id]);
  

  // Handle input changes
  const handleChange = (e) => {
    setEntity({ ...entity, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/entities/${id}`, entity);
      navigate("/entities"); // Redirect after update
    } catch (error) {
      console.error("Error updating entity:", error);
    }
  };

  return (
    <div className="update-entity">
      <h2>Update Entity</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={entity.name} onChange={handleChange} required />
        <input type="text" name="description" value={entity.description} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEntity;
