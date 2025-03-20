const express = require("express");
const Post = require("../models/Post"); // Create Post model if not exists

const router = express.Router();

// Create a new post
router.post("/posts", async (req, res) => {
  try {
    const { userId, title, content, image } = req.body;

    const newPost = new Post({ userId, title, content, image });
    await newPost.save();

    res.status(201).json({ message: "Post uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
