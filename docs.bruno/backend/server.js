require("dotenv").config();
const express = require("express");
const connectDB = require("./MongoDB");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  // Check if MongoDB is connected
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected ✅" : "Not Connected ❌";
  
  res.json({
    message: "MongoDB Atlas is connected to the server!",
    database_status: dbStatus
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
