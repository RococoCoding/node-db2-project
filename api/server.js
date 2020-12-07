const express = require('express');
const db = require("../data/dbConfig");

function getCars(id) {
  if (id) {
    return db('cars3')
      .where('id', id)
  } else {
    return db('cars3');
  }
}

function editCars(id, changes) {
  return db('cars3')
    .where({id})
    .update(changes);
}

function addCars(body) {
  return db('cars3')
    .insert(body);
}

const server = express();
server.use(express.json());

server.get("/cars", validateID, (req, res) => {
  res.status(200).json(res.data);
});

server.get("/cars/:id", validateID, (req, res) => {
  res.status(200).json(res.data);
})

server.put("/cars/:id", validateID, (req, res) => {
  editCars(req.params.id, req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500);
    })
})

server.post("/cars", validateID, (req, res) => {
  addCars(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(500);
    })
})

function validateID(req, res, next) {
  getCars(req.params.id)
    .then(data => {
      res.data = data;
      next();
    })
    .catch(err => {
      console.log(err);
    })
}

module.exports = server;