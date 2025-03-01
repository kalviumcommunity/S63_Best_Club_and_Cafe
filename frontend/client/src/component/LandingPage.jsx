import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen flex items-center justify-center  "
         style={{ backgroundImage: "url('https://imgs.search.brave.com/ZFusR5_ZHRvY37zl8d2bYcd2mVTy7Aqr0Kib0hHUnAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/MzYzNzc3Ny9waG90/by9hLW1hbi1hbmQt/YS13b21hbi1jbGlu/a2luZy1jb2ZmZWUt/bXVncy1pbi1jYWZl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1FcW9tVnpiam43/SjZwMHJmeEZtV2hu/THVQdk9MXy1XRUMy/NXNCeUhhck5VPQ')" }}>
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <motion.div 
        className="text-center text-white relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        
        <h1 className="text-6xl font-extrabold mb-6 text-shadow-lg">
          Find the Best Clubs & Cafes in Your City
        </h1>

        <p className="text-xl mb-8">Explore, review, and share your experiences with the community.</p>

        <motion.button 
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-10 rounded-lg text-2xl shadow-lg transform hover:scale-105 transition duration-300"
          onClick={() => navigate("/signup")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          Let's Go 🚀
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
