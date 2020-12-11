const express = require("express");
const router = express.Router();

const Resource = require("./model");

router.post("/", (req, res) => {
  Resource.add(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/", (req, res) => {
  Resource.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
