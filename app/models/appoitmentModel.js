const mongoose = require("mongoose");

const Appoitment = mongoose.Schema({
  name: { type: String, required: true },
  _id: { type: String, required: true }
  
});

module.exports = mongoose.model("Appoitment", Appoitment);

