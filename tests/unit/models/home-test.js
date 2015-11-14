import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('home', 'Unit | Model | home', {
  needs: ['model:host', 'model:suburb', 'ember-validations@validator:local/presence']
});


test('host relationship', function() {
  let Home = this.store().modelFor('home');
  let relationship = Ember.get(Home, 'relationshipsByName').get('host');
  
  equal(relationship.key, 'host');
  equal(relationship.kind, 'belongsTo');
});

test('suburb relationship', function() {
  let Home = this.store().modelFor('home');
  let relationship = Ember.get(Home, 'relationshipsByName').get('suburb');

  equal(relationship.key, 'suburb');
  equal(relationship.kind, 'belongsTo');
});

test('summary should be required', function() {
  let model = this.subject();
  Ember.run(function() {
    model.set('summary', null);
  });
  
  equal(model.get('isValid'), false, 'Home is valid without a `summary`');
});

test('description should be required', function() {
  let model = this.subject();
  Ember.run(function() {
    model.set('description', '');
  });

  equal(model.get('isValid'), false, 'Home is valid without a `description`');
});

test('should have at least one bedroom', function() {
  let model = this.subject();
  Ember.run(function() {
    model.set('bedrooms', 0);
  });

  equal(model.get('isValid'), false, 'Home is valid with no bedrooms');
});

test('should not have negative bedrooms', function() {
  let model = this.subject();
  Ember.run(function() {
    model.set('bedrooms', -9);
  });

  equal(model.get('isValid'), false, 'Home is valid with negative number of bedrooms');
})
