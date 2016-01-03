/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: [
        'FIREBASE_URL',
        'MAPBOX_ACCESS_TOKEN',
        'AWS_ACCESS_KEY_ID',
        'AWS_SECRET_ACCESS_KEY',
        'AWS_S3_BUCKET_NAME',
        'AWS_REGION',
        'IMGIX_URL'
      ]
    }
  });

  app.import('vendor/custom-bootstrap/js/bootstrap.js'); 
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('vendor/custom-font-awesome/font-awesome.min.css');
  app.import('bower_components/animate.css/animate.min.css');
  app.import('bower_components/mapbox.js/mapbox.js');
  app.import('bower_components/mapbox.js/mapbox.css');
  app.import('bower_components/nouislider/distribute/nouislider.min.js');
  app.import('bower_components/nouislider/distribute/nouislider.min.css');
  app.import('vendor/aws-sdk/aws-sdk-2.2.26.min.js');

  return app.toTree();
};
