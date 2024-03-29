import Ember from 'ember';
import UuidInitializer from '../../../initializers/uuid';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | uuid', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  UuidInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
