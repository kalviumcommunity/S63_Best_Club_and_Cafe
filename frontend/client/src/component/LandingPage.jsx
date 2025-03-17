import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// Ensure you create and import this CSS file

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* ✅ Background Image & Overlay */}
      <div className="background-overlay"></div>

      {/* ✅ Animated Content */}
      <motion.div
        className="content-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="landing-title">
          Discover the <span>Best Clubs & Cafes</span> in Your City
        </h1>

        <p className="landing-subtitle">
          Explore, review, and share your experiences with the community.
        </p>

        <motion.button
          className="cta-button"
          
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Go 🚀
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
