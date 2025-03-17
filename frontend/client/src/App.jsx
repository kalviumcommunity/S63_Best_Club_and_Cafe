import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import LandingPage from "./component/LandingPage";
import Signup from "./component/Signup";
import AddEntity from "./component/AddEntity";
import UpdateEntity from "./component/UpdateEntity";
import Navbar from "./component/Navbar";
import EntitiesList from "./component/EntitiesList";  // 🆕 Imported EntitiesList

const App = () => {
  const [entities, setEntities] = useState([]);

  // 🔄 Fetch all entities
  useEffect(() => {
    fetchEntities();
  }, []);

  const fetchEntities = () => {
    axios.get("http://localhost:5000/api/entities")
      .then(response => setEntities(response.data))
      .catch(error => console.error("Error fetching entities:", error));
  };

  // 🗑️ Delete entity
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/entities/${id}`);
      setEntities(entities.filter(entity => entity._id !== id)); // Update UI
    } catch (error) {
      console.error("Error deleting entity:", error);
    }
  };

  return (
    <Router>
      <MainContent 
        entities={entities} 
        onDelete={handleDelete} 
        fetchEntities={fetchEntities} 
      />
      <Navbar />
    </Router>
  );
};

// 🔥 Component to manage background dynamically
const MainContent = ({ entities, onDelete, fetchEntities }) => {
  const location = useLocation();

  // 🎨 Define different background images for each page
  const getBackground = () => {
    switch (location.pathname) {
      case "/":
        return "landing-bg"; // Landing Page
      case "/signup":
        return "signup-bg"; // Signup Page
      case "/add-entity":
        return "add-entity-bg"; // Add Entity Page
      case "/update-entity/:id":
        return "update-entity-bg";// Update Page
      case "/entities":
        return "entities-bg"; // 🆕 New Background for Entities Page 
      default:
        return "default-bg"; // Default Background
    }
  };

  return (
    <div className={`bg-container ${getBackground()}`}>
      <div className="bg-overlay"></div>
      <div className="content-container">
        <Routes>
          <Route path="/" element={<LandingPage entities={entities} onDelete={onDelete} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-entity" element={<AddEntity fetchEntities={fetchEntities} />} />
          <Route path="/update-entity/:id" element={<UpdateEntity fetchEntities={fetchEntities} />} />
          <Route path="/entities" element={<EntitiesList />} />  {/* 🆕 Added Route for Entities Page */}

        </Routes>
      </div>
    </div>
  );
};

export default App;
