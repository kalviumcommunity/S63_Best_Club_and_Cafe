import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import LandingPage from "./component/LandingPage";
import Signup from "./component/Signup";
import AddEntity from "./component/AddEntity";

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch registered users
  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <Router>
      <div className="relative">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />

          {/* Add Entity Page */}
          <Route path="/add-entity" element={<AddEntity />} />

          {/* Registered Users List */}
          <Route 
            path="/users" 
            element={
              <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl text-white text-center mt-6">Registered Users</h2>
                <ul className="text-white text-center">
                  {users.map((user) => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                  ))}
                </ul>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
