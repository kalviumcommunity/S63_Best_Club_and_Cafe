import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UserPostUpload = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  if (!user) {
    return <p>Error: No user selected.</p>;
  }

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/posts", {
        userId: user._id,
        ...post,
      });
      setMessage("Post uploaded successfully!");
      setPost({ title: "", content: "", image: "" });
    } catch (error) {
      setMessage("Failed to upload post. Please try again.");
    }
  };

  return (
    <div className="upload-post-container">
      <h1>Upload Post</h1>
      <p>Posting as: <strong>{user.name}</strong></p>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Post Title" value={post.title} onChange={handleChange} required />
        <textarea name="content" placeholder="Write your post..." value={post.content} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL (optional)" value={post.image} onChange={handleChange} />
        
        <button type="submit">Upload</button>
      </form>

      <button onClick={() => navigate("/")}>← Back to Home</button>
    </div>
  );
};

export default UserPostUpload;
