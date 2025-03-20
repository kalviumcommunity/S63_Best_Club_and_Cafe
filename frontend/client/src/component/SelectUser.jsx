import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SelectUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch all users
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/")
      .then((response) => {
        console.log("Users fetched:", response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Failed to load users. Please try again.");
        setLoading(false);
      });
  }, []);

  // Handle user selection
  const handleUserSelect = (event) => {
    const userId = event.target.value;
    const user = users.find((user) => user._id === userId);
    setSelectedUser(user);
  };

  // Navigate to upload-post page
  const goToUploadPost = () => {
    if (selectedUser) {
      navigate("/upload-post", { state: { user: selectedUser } });
    }
  };

  return (
    <div className="select-user-container">
      <h1>Select a User</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="dropdown-container">
          <select onChange={handleUserSelect} defaultValue="">
            <option value="" disabled>Select a User</option>
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Navigate to post upload page */}
      <button 
        className="go-button" 
        onClick={goToUploadPost} 
        disabled={!selectedUser}
      >
        Go to Upload Post
      </button>

      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
};

export default SelectUser;
