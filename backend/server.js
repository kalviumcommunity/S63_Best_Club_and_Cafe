require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./MongoDB");
const userRoutes = require("./routes/userRoutes");
const entityRoutes = require("./routes/entityRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Your React frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); // ✅ Ensure this comes before routes

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/users", userRoutes); // ✅ Handles signup & user routes
app.use("/api/entities", entityRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("✅ Server is running & MongoDB is connected!");
});
app.delete("/api/entities/:id", async (req, res) => {
  try {
    const result = await Entity.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "Entity not found" });

    res.status(200).json({ message: "Entity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting entity", error });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
