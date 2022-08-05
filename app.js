const express = require("express");
const mongoose = require("mongoose");
const doctorRoutes = require("./app/routes/doctorRoute");
const doctorRoutes = require("./app/routes/appoitmentRoute");



const app = express();
const DB_URL =
  "mongodb+srv://user11:user11@cluster0.fk8v0.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;

app.use(express.json());
app.use("/doctors", doctorRoutes);
app.use("/appoitment", appoitmentsRoutes);


async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT" + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
