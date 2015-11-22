/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var homesRouter = express.Router();

  homesRouter.get('/', function(req, res) {
    res.send({
      'homes': []
    });
  });

  homesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  homesRouter.get('/:id', function(req, res) {
    res.send({
      'homes': {
        id: req.params.id
      }
    });
  });

  homesRouter.put('/:id', function(req, res) {
    res.send({
      'homes': {
        id: req.params.id
      }
    });
  });

  homesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/homes', require('body-parser'));
  app.use('/api/homes', homesRouter);
};
