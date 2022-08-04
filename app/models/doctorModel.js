const mongoose = require("mongoose");

const Doctor = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  specialization: { type: String, required: true },
  img: { type: String, required: true, default: "assets/images/d1.jpg" },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("Doctor", Doctor);

