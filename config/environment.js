/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'apartment',
    environment: environment,
    contentSecurityPolicy: {
      'frame-src': "'self' https://*.firebaseio.com",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
      'script-src': "'self' https://*.firebaseio.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'img-src': "'self' data: https://*.muscache.com" // Remove the mustache thing when we are serving our own (actual) home images
    },
    firebase: 'https://blinding-torch-8228.firebaseio.com',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      DEFAULT_FETCH_LIMIT: 20
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
