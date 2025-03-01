const mongoose = require("mongoose");

const entitySchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Entity", entitySchema);
