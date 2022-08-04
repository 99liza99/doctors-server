import Router from "express";
import DoctorService from "../services/doctorsSrvice.js";

const router = new Router();

router.get("/", async (req, res) => {
  const doctors = await DoctorService.getAll();
  res.status(200).json(doctors);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const doctor = await DoctorService.getById(id);
  res.status(200).json(doctor);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json("Id not foun");
  }
  const deletedDoctor = await DoctorService.deleteById(id);
  res.status(200).json(deletedDoctor);
});

router.post("/", async (req, res) => {
  const newDoctor = await DoctorService.create(req.body);
  res.status(200).json(newDoctor);
});

router.put("/", async (req, res) => {
  const updatedDoctor = await DoctorService.update(req.body);
  res.status(200).json(updatedDoctor);
});

export default router;
