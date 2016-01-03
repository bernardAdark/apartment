import Ember from 'ember';
import AwsBucketInitializer from '../../../initializers/aws-bucket';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | aws bucket', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AwsBucketInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
