const express = require("express");
const mongoose = require("mongoose");
const doctorRoutes = require("./app/routes/doctorRoute");
const appoitmentsRoutes = require("./app/routes/appoitmentRoute");



const app = express();
const DB_URL =
  "mongodb+srv://user11:user11@cluster0.fk8v0.mongodb.net/?retryWrites=true&w=majority";
const PORT = 3000;

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allows-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({});
  }
  next();
})

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
