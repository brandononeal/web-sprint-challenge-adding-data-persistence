const express = require("express");
const router = express.Router();

const Project = require("./model");

router.post("/", (req, res) => {
  Project.add(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/", (req, res) => {
  Project.getProjects()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
