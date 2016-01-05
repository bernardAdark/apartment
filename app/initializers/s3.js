import ENV from 'apartment/config/environment';

export function initialize(application) {
  let S3 = Ember.Object.extend({
    init() {
      AWS.config.update({
        accessKeyId: ENV.AWS_ACCESS_KEY_ID,
        secretAccessKey: ENV.AWS_SECRET_ACCESS_KEY,
        region: ENV.AWS_REGION
      });

      AWS.config.sslEnabled = true;
      AWS.config.logger = console;

      let __bckt = new AWS.S3({params: {Bucket: ENV.AWS_S3_BUCKET}});
      this.set('bucket', __bckt);
    },
  });

  application.register('s3:main', S3);
  application.inject('component', 's3', 's3:main');
}

export default {
  name: 's3',
  initialize
};
