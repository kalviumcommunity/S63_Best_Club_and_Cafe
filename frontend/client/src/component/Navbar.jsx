import React from "react";
import { Link } from "react-router-dom";
 // Ensure this file exists and is styled

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
        <li><Link to="/select-user">Select User</Link></li> {/* New Link */}
      </ul>
    </nav>
  );
};

export default Navbar;