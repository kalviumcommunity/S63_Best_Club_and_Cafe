const express = require("express");
const router = express.Router();
const Club = require("../models/Club"); // Correct model

// 📌 Create a new club
router.post("/clubs", async (req, res) => {
  try {
    const { name, location, category, rating, reviews } = req.body;
    
    // Validate required fields
    if (!name || !location || !category || !rating) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newClub = new Club({ name, location, category, rating, reviews: reviews || [] });
    await newClub.save();
    
    res.status(201).json({ message: "Club created successfully", data: newClub });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 📌 Get all clubs
router.get("/clubs", async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Get a single club by ID
router.get("/clubs/:id", async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json(club);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Update a club
router.put("/clubs/:id", async (req, res) => {
  try {
    const updatedClub = await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedClub) return res.status(404).json({ message: "Club not found" });
    res.json({ message: "Club updated!", data: updatedClub });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Delete a club
router.delete("/clubs/:id", async (req, res) => {
  try {
    const deletedClub = await Club.findByIdAndDelete(req.params.id);
    if (!deletedClub) return res.status(404).json({ message: "Club not found" });
    res.json({ message: "Club deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
