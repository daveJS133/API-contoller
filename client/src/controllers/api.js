var express = require('express');
var filmRouter = express.Router();

var films = require('../models/films')();
var filmsArray = films;

filmRouter.get('/films', function(req, res){
  res.json(filmsArray);
});

filmRouter.get('/:id', function(req, res){
  res.json(filmsArray[req.params.id]);
});

filmRouter.post('/', function(req, res) {
  filmsArray.push(new Film(req.body));
  res.json(filmsArray);
});

filmRouter.put('/:id', function(req, res) {
  filmArray[req.params.id] = req.body.film;
  res.json(filmsArray);
});

filmRouter.delete('/:id', function(req, res) {
  filmsArray.splice(req.params.id, 1);
  res.json(filmsArray);
});

module.exports = filmRouter;