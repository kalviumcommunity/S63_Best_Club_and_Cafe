const express = require("express");
const router = express.Router();
const Entity = require("../models/Entity");
const { check, validationResult } = require("express-validator");



// Add a new entity
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description must be at least 10 characters").isLength({ min: 10 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, description } = req.body;
      const newEntity = new Entity({ name, description });
      await newEntity.save();
      res.status(201).json(newEntity);
    } catch (error) {
      res.status(500).json({ message: "Error adding entity" });
    }
  }
);


// Get all entities
router.get("/", async (req, res) => {
  try {
    const entities = await Entity.find();
    res.json(entities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entities" });
  }
});


const mongoose = require("mongoose");

router.delete("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid entity ID" });
  }

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


router.put(
  "/:id",
  [
    check("name", "Name is required").optional().not().isEmpty(),
    check("description", "Description must be at least 10 characters").optional().isLength({ min: 10 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);


module.exports = router;
