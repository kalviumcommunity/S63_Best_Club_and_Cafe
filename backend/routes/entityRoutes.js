const express = require("express");
const router = express.Router();
const Entity = require("../models/Entity");



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

// Get all entities
router.get("/", async (req, res) => {
  try {
    const entities = await Entity.find();
    res.json(entities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entities" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEntity = await Entity.findByIdAndDelete(id);

    if (!deletedEntity) {
      return res.status(404).json({ message: "Entity not found" });
    }

    res.json({ message: "Entity deleted successfully" });
  } catch (error) {
    console.error("Error deleting entity:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEntity = await Entity.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedEntity) {
      return res.status(404).json({ message: "Entity not found" });
    }

    res.json(updatedEntity);
  } catch (error) {
    console.error("Error updating entity:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;
