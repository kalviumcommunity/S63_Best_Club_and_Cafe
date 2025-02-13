require("dotenv").config();
const express = require("express");
const connectDB = require("./MongoDB");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MongoDB Atlas is connected to the server!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
