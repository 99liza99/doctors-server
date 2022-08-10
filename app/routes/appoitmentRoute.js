const router = require("express").Router();
const appoitmentService = require("../services/appoitmentService");
const doctorsService = require("../services/doctorsSrvice");

const _mapDoctorsToAppointments = (appointments, doctors) => {
  return appointments.map((a) => ({
    ...a.toObject(),
    doctor: doctors.find((d) => d._id.equals(a.doctor_id)),
  }));
};

const _mapDoctorToAppointment = (appointment, doctor) => {
  return ({...appointment.toObject(), doctor:doctor});
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
  const appoitemnt = await appoitmentService.getById(req.params.id);//get appoitemnt by id
  const docotr = await doctorsService.getById(appoitemnt.doctor_id);//get doctor by doctp id
  const newAppoitment = _mapDoctorToAppointment(appoitemnt, docotr);//map appotiemnt
  return res.status(200).json(newAppoitment);
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
