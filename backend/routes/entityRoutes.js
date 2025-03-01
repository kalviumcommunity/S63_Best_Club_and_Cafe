const express = require("express");
const router = express.Router();
const Entity = require("../models/Entity");

// Get all entities
router.get("/", async (req, res) => {
  try {
    const entities = await Entity.find();
    res.json(entities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entities" });
  }
});

// Add a new entity
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newEntity = new Entity({ name, description });
    await newEntity.save();
    res.status(201).json(newEntity);
  } catch (error) {
    res.status(500).json({ message: "Error adding entity" });
  }
});

module.exports = router;
