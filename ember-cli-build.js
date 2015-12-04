/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/custom-bootstrap/js/bootstrap.js'); 
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('vendor/custom-font-awesome/font-awesome.min.css');
  app.import('bower_components/animate.css/animate.min.css');
  app.import('bower_components/mapbox.js/mapbox.js');
  app.import('bower_components/mapbox.js/mapbox.css');

  return app.toTree();
};
