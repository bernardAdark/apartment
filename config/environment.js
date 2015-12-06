/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'apartment',
    environment: environment,
    contentSecurityPolicy: {
      'frame-src': "'self' https://*.firebaseio.com",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com https://*.mapbox.com",
      'script-src': "'self' https://*.firebaseio.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'img-src': "'self' data: https://*.muscache.com https://*.mapbox.com"
    },
    firebase: 'https://blinding-torch-8228.firebaseio.com',
    baseURL: '/',
    locationType: 'auto',
    MAPBOX_ACCESS_TOKEN: 'pk.eyJ1IjoieWF3Ym9ha3llIiwiYSI6Ijc2YjM5ZjZhZmY4OTE1NDdmNWYyNTBjNTk4MDE1MjYyIn0.kBscFIVJdBzENTw5SoByFg',

    ACCRA_GEO_COORDS: ["5.623284", "-0.176357"],
    MAP_DEFAULT_ZOOM_LEVEL: 15,
    MAP_DEFAULT_TYPE: 'mapbox.streets',
    MAP_MARKER_SIZE: 'large',
    MAP_MARKER_COLOR: '#E12269',
    MAP_MARKER_SYMBOLS: {
      TOWN: 'town'
    },

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
