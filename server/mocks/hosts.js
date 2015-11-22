/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var hostsRouter = express.Router();

  hostsRouter.get('/', function(req, res) {
    res.send({
      'hosts': []
    });
  });

  hostsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  hostsRouter.get('/:id', function(req, res) {
    res.send({
      'hosts': {
        id: req.params.id
      }
    });
  });

  hostsRouter.put('/:id', function(req, res) {
    res.send({
      'hosts': {
        id: req.params.id
      }
    });
  });

  hostsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/hosts', require('body-parser'));
  app.use('/api/hosts', hostsRouter);
};
