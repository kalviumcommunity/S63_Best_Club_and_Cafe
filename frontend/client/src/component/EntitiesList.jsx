import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Make sure this file exists and is styled

const EntitiesList = () => {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔄 Fetch all entities from the server
  useEffect(() => {
    axios.get("http://localhost:5000/api/entities")
      .then(response => {
        setEntities(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching entities:", error);
        setError("Failed to load entities. Please try again.");
        setLoading(false);
      });
  }, []);

  // 🗑️ Handle Delete Entity
// 🗑️ Handle Delete Entity
const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/entities/${id}`, {
        headers: { "Content-Type": "application/json" }
      });
      
      if (response.status === 200) {
        setEntities((prevEntities) => prevEntities.filter((entity) => entity._id !== id));
      } else {
        console.error("Failed to delete entity. Server response:", response);
        alert("Failed to delete entity.");
      }
    } catch (error) {
      console.error("Error deleting entity:", error.response?.data || error.message);
      alert("Error deleting entity. Check console for details.");
    }
  };
  
  
  return (
    <div className="entities-container">
      <div className="entities-overlay"></div> {/* Background Overlay */}
      <h1>🌟 Best Clubs & Cafes in the City 🌟</h1>

      {loading ? (
        <p>Loading entities...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : entities.length > 0 ? (
        <div className="entities-grid">
          {entities.map((entity) => (
            <div key={entity._id} className="entity-card">
              <h2>{entity.name}</h2>
              <p>{entity.description}</p>
              <div className="entity-buttons">
                <Link to={`/update-entity/${entity._id}`}>
                  <button className="edit-btn">Edit</button>
                </Link>
                <button className="delete-btn" onClick={() => handleDelete(entity._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No entities available.</p>
      )}

      <Link to="/add-entity">
        <button className="add-entity-btn">➕ Add New Entity</button>
      </Link>
    </div>
  );
};

export default EntitiesList;
