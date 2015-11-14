import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('home', 'Unit | Model | home', {
  needs: ['model:host', 'model:suburb', 'ember-validations@validator:local/presence']
});


test('host relationship', function() {
  const Home = this.store().modelFor('home');
  const relationship = Ember.get(Home, 'relationshipsByName').get('host');
  
  equal(relationship.key, 'host');
  equal(relationship.kind, 'belongsTo');
});

test('suburb relationship', function() {
  const Home = this.store().modelFor('home');
  const relationship = Ember.get(Home, 'relationshipsByName').get('suburb');

  equal(relationship.key, 'suburb');
  equal(relationship.kind, 'belongsTo');
});

test('summary should be required', function() {
  const model = this.subject();
  Ember.run(function() {
    model.set('summary', null);
  });
  
  equal(model.get('isValid'), false, 'Home is valid without a `summary`');
});

test('description should be required', function() {
  const model = this.subject();
  Ember.run(function() {
    model.set('description', '');
  });

  equal(model.get('isValid'), false, 'Home is valid without a `description`');
});

test('should have at least one bedroom', function() {
  const model = this.subject();
  Ember.run(function() {
    model.set('bedrooms', 0);
  });

  equal(model.get('isValid'), false, 'Home is valid with no bedrooms');
});

test('should not have negative bedrooms', function() {
  const model = this.subject();
  Ember.run(function() {
    model.set('bedrooms', -9);
  });

  equal(model.get('isValid'), false, 'Home is valid with negative number of bedrooms');
})

test('monthly (computed) should be price/months', function(assert) {
  const model = this.subject();
  Ember.run(function() {
    model.set('price', 12000);
    model.set('months', 2);
  });

  assert.equal(model.get('monthly'), Math.round(12000/2)-0.01);
});

test('town (computed)', function(assert) {
  assert.ok(true); //TODO: Test
});
