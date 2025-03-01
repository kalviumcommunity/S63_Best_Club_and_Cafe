require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./MongoDB");
const userRoutes = require("./routes/userRoutes");
const entityRoutes = require("./routes/entityRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
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

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
