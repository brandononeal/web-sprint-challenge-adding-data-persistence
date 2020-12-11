const express = require("express");
const router = express.Router();

const Task = require("./model");

router.post("/", (req, res) => {
  Task.add(req.body)
    .then((task) => {
      if (task.completed == 0) {
        task.completed = false;
      } else if (task.completed == 1) {
        task.completed = true;
      }
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/", (req, res) => {
  Task.getTasks()
    .then((tasks) => {
      tasks.map((task) => {
        if (task.completed == 0) {
          task.completed = false;
        } else if (task.completed == 1) {
          task.completed = true;
        }
      });
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
