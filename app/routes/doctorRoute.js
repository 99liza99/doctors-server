const router = require("express").Router();
const doctorRoutes = require("../services/doctorsSrvice");

router.get("/", async (req, res) => {
  const doctors = await doctorRoutes.getAll();
  res.status(200).json(doctors);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const doctor = await doctorRoutes.getById(id);
  res.status(200).json(doctor);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json("Id not foun");
  }
  const deletedDoctor = await doctorRoutes.deleteById(id);
  res.status(200).json(deletedDoctor);
});

router.post("/", async (req, res) => {
  const newDoctor = await doctorRoutes.create(req.body);
  res.status(200).json(newDoctor);
});

router.put("/", async (req, res) => {
  const updatedDoctor = await doctorRoutes.update(req.body);
  res.status(200).json(updatedDoctor);
});

module.exports = router;
