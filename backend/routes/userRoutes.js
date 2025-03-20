const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/Club"); // ✅ Corrected model

const router = express.Router();

// 📌 Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save User
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Fixed: Get all users (excluding passwords)
router.get("/", async (req, res) => { // Changed from "/users" to "/"
  try {
    console.log("Fetching users from database..."); // Debugging
    const users = await User.find().select("-password"); // Exclude passwords
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to load users. Please try again." });
  }
});

module.exports = router;
