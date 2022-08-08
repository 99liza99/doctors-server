const mongoose = require("mongoose");

const Appoitment = mongoose.Schema({
  name: { type: String, required: true },
  doctor: { type: String, required: true }
  /** add other fields */
});

module.exports = mongoose.model("Appoitment", Appoitment);

