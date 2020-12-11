const express = require("express");
const router = express.Router();

const Task = require("./model");

router.post("/", (req, res) => {
  Task.add(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/", (req, res) => {
  Task.getTasks()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
