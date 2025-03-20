const mongoose = require("mongoose");

const entitySchema = new mongoose.Schema({
  name: String,
  description: String,
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to the User model
});

module.exports = mongoose.model("Entity", entitySchema);
