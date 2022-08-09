const mongoose = require("mongoose");

const Appoitment = mongoose.Schema({
  name: { type: String, required: true },
  doctor_id:  { type: String, required: true },
  gender: { type: String, required: true },
  picker: { type: String, required: true },
  comment: { type: String, required: true },
});

module.exports = mongoose.model("Appoitment", Appoitment);
