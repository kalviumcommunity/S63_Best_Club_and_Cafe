import React, { useState } from "react";
import axios from "axios";

const AddEntity = () => {
  const [entity, setEntity] = useState({ name: "", location: "", description: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEntity({ ...entity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/entities", entity);
      setMessage("Entity added successfully!");
      setEntity({ name: "", location: "", description: "" });
    } catch (error) {
      setMessage("Error adding entity");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Add Entity</h2>
      {message && <p className="text-green-500">{message}</p>}

      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
        <input type="text" name="name" placeholder="Entity Name" value={entity.name} onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-md bg-gray-700" required />
        <input type="text" name="location" placeholder="Location" value={entity.location} onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-md bg-gray-700" required />
        <textarea name="description" placeholder="Description" value={entity.description} onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-md bg-gray-700" required />
        
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
          Add Entity
        </button>
      </form>
    </div>
  );
};

export default AddEntity;
