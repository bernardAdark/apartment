/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'apartment',
    environment: environment,
    contentSecurityPolicy: {
      'frame-src': "'self' https://*.firebaseio.com",
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com https://*.mapbox.com https://the-grocers-other-assets.s3.amazonaws.com",
      'script-src': "'self' https://*.firebaseio.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'img-src': "'self' data: https://*.muscache.com https://*.mapbox.com https://the-grocers-other-assets.s3.amazonaws.com https://fermis-apartment-img.imgix.net"
    },
    firebase: process.env.FIREBASE_URL,
    baseURL: '/',
    locationType: 'auto',
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,

    ACCRA_GEO_COORDS: ["5.623284", "-0.176357"],
    MAP_DEFAULT_ZOOM_LEVEL: 12,
    MAP_DEFAULT_TYPE: 'mapbox.streets',
    MAP_MARKER_SIZE: 'large',
    MAP_MARKER_COLOR: '#E12269',
    MAP_MARKER_SYMBOLS: {
      TOWN: 'town'
    },
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_S3_BUCKET: process.env.AWS_S3_BUCKET_NAME,
    AWS_REGION: process.env.AWS_REGION,
    IMGIX_URL: 'https://' + process.env.IMGIX_URL,

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      DEFAULT_FETCH_LIMIT: 20,
      imgix: {
        source: process.env.IMGIX_URL
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.imgix.debug = true;
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
