const router = require("express").Router();
const appoitmentService = require("../services/appoitmentService");
const doctorsService = require("../services/doctorsSrvice");

const _mapDoctorsToAppointments = (appointments, doctors) => {
  return appointments.map((a) => ({
    ...a,
    doctor: doctors.find((d) => d._id.equals(a.doctor_id)),
  }));
};

router.get("/", async (req, res, next) => {
  const appointments = await appoitmentService.getAll();/** Get list all appoitments */
  appointmentDoctorsIds = appointments.map(
    (appointment) => appointment.doctor_id
  );/** get all idS of list doctors */
  const doctors = await doctorsService.getByIds(appointmentDoctorsIds);/** Get All doctors who is in  appoitments*/
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


module.exports = router;
