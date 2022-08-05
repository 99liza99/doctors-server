const router = require("express").Router();
const appoitmentService = require("../services/appoitmentService");

router.get("/", async (req, res, next) => {
  return await appoitmentService
    .getAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
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
