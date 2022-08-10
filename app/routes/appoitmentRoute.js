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

const returnAppoitementWithDoctor = async (appoitemnt) =>{
  const doctor = await doctorsService.getById(appoitemnt.doctor_id);//get doctor by doctp id
  return _mapDoctorToAppointment(appoitemnt, doctor);//map appotiemnt
}

router.get("/", async (req, res, next) => {
  const appointments = await appoitmentService.getAll();/** Get list all appoitments */
  appointmentDoctorsIds = appointments.map((appointment) => appointment.doctor_id);/** get all idS of list doctors */
  const doctors = await doctorsService.getByIds(appointmentDoctorsIds);/** Get All doctors who is in  appoitments*/
  const result = _mapDoctorsToAppointments(appointments, doctors);
  return res.status(200).json(result);
});

router.get("/:id", async (req, res, next) => {
  const appoitemnt = await appoitmentService.getById(req.params.id);//get appoitemnt by id
  return res.status(200).json(await returnAppoitementWithDoctor(appoitemnt));
});

router.delete("/:id", async (req, res, next) => {
  const appoitemnt =  await appoitmentService.deleteById(req.params.id)
  return res.status(200).json(await returnAppoitementWithDoctor(appoitemnt));
});

router.post("/", async (req, res, next) => {
  const appoitemnt = await appoitmentService.create(req.body)
  return res.status(200).json(await returnAppoitementWithDoctor(appoitemnt));
});

router.put("/", async (req, res, next) => {
  const appoitemnt = await appoitmentService.update(req.body)
  return res.status(200).json(await returnAppoitementWithDoctor(appoitemnt));
});


module.exports = router;
