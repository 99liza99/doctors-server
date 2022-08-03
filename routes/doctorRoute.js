import Router from "express";
import doctorModel from "../models/doctorModel.js";

const router = new Router();

router.get("/", async (req, res) => {
  const doctors = await doctorModel.find();
  res.status(200).json(doctors);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, description, specialization, age } = req.body;
  const newDoctor = await doctorModel.create({
    name,
    description,
    specialization,
    age,
  });
  res.status(200).json(newDoctor);
});

export default router;
