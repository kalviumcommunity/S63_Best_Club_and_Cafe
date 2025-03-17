import React from "react";
import { Link } from "react-router-dom";
 // ✅ Ensure CSS file is imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Club & Cafe</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/add-entity">Add Entity</Link></li>
        <li><Link to="/entities">Entities</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
