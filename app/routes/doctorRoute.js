const router = require("express").Router();
const doctorService = require("../services/doctorsSrvice");

router.get("/", async (req, res) => {
  return await doctorService
    .getAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.get("/:id", async (req, res) => {
  return await doctorService
    .getById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.delete("/:id", async (req, res) => {
  return await doctorService
    .deleteById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.post("/", async (req, res) => {
  return await doctorService
    .create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.put("/", async (req, res) => {
  return await doctorService
    .update(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

module.exports = router;
