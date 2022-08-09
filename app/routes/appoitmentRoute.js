const router = require("express").Router();
const appoitmentService = require("../services/appoitmentService");
const doctorsService = require("../services/doctorsSrvice");

router.get("/", async (req, res, next) => {
  // return await appoitmentService
  const appointments = await appoitmentService.getAll();
  appointmentDoctorsIds = appointments.map(
    (appointment) => appointment.doctor_id
  );
  const doctors = await doctorsService.getByIds(appointmentDoctorsIds);
  const result = _mapDoctorsToAppointments(appointments, doctors);
  return res.status(200).json(result);
});

router.get("/:id", async (req, res, next) => {
  return await appoitmentService

    .getById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.delete("/:id", async (req, res, next) => {
  return await appoitmentService
    .deleteById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.post("/", async (req, res, next) => {
  return await appoitmentService
    .create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.put("/", async (req, res, next) => {
  return await appoitmentService
    .update(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

const _mapDoctorsToAppointments = (appointments, doctors) => {
  return appointments.map((appointment) => ({
    ...appointment,
    doctor: doctors.find((d) => d._id.equals(appointment.doctor_id)),
  }));
};

module.exports = router;
