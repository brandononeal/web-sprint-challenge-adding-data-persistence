const express = require("express");
const router = express.Router();

const Project = require("./model");

router.post("/", (req, res) => {
  Project.add(req.body)
    .then((project) => {
      if (project.completed == 0) {
        project.completed = false;
      } else if (project.completed == 1) {
        project.completed = true;
      }
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/", (req, res) => {
  Project.getProjects()
    .then((projects) => {
      projects.map((project) => {
        if (project.completed == 0) {
          project.completed = false;
        } else if (project.completed == 1) {
          project.completed = true;
        }
      });
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
