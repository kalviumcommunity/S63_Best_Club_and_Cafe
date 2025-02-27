import React, { useEffect, useState } from "react";
import "./App.css";
import ClubCard from "./component/ClubCard"; // Ensure the correct path
import axios from "axios";
import Signup from "./component/Signup";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:5000/api/users") // ✅ Correct endpoint
          .then(response => {
              setUsers(response.data);
          })
          .catch(error => {
              console.error("Error fetching users:", error);
          });
  }, []);

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="bg-image absolute top-0 left-0 w-full h-full z-[-1]"></div>

      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
        {/* Hero Section */}
        <header className="text-center p-10">
          <h1 className="text-4xl font-bold mb-4">Discover the Best Clubs & Cafes in Your City</h1>
          <p className="text-lg mb-6">Explore top venues, share reviews, and connect with like-minded people.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
            Get Started
          </button>
        </header>

        {/* Signup Component */}
        <Signup />

        {/* Registered Users */}
        <h2 className="text-2xl text-white text-center mt-6">Registered Users</h2>
        <ul className="text-white text-center">
          {users.map((user) => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
    
      </div>
    </div>
  );
};

export default App;
