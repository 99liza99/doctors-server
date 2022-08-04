import Router from "express";
import doctorModel from "../models/doctorModel.js";

const router = new Router();

router.get("/", async (req, res) => {
  const doctors = await doctorModel.find();
  res.status(200).json(doctors);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const doctor = await doctorModel.findById(id);
  res.status(200).json(doctor);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json('Id not foun')
  }
  await doctorModel.findById(id).deleteOne();
  res.status(200).json('Doctor was deleted');
});

router.post("/", async (req, res) => {
  const { name, description, specialization, age } = req.body;
  const newDoctor = await doctorModel.create({name,description,specialization,age,});
  res.status(200).json(newDoctor);
});

router.put("/", async (req, res) => {
  const { name, description, specialization, age, id } = req.body;
  const newDoctor = await doctorModel.updateOne(id, {name,description,specialization,age}, {new: true});
  res.status(200).json(newDoctor);
});

export default router;
