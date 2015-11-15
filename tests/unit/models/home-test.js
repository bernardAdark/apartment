import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('home', 'Unit | Model | home', {
  needs: [
    'model:town',
    'model:host',
    'model:suburb',
    'model:deputy',
    'ember-validations@validator:local/presence',
    'ember-validations@validator:local/numericality',
    'ember-validations@validator:local/length'
  ]
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
    model.set('period', 2);
  });

  assert.equal(model.get('monthly'), Math.round(12000/2)-0.01);
});

test('town (computed)', function(assert) {
  let model = this.subject(),
      store = this.store(),
      GHOST_TOWN_NAME = 'Ghost Town',
      GHOST_SUBURB_NAME = 'Ghost Suburb',
      ghostTown,
      ghostSuburb;

  Ember.run(function() {
    store.createRecord('town', {
      name: 'Dummy Town',
      description: 'Dummy Town located downtown'
    });

    ghostTown = store.createRecord('town', {
      name: GHOST_TOWN_NAME,
      description: 'Weird, but not even ghosts live in Ghost Town'
    });

    store.createRecord('town', {
      name: 'Dummy New Town',
      description: 'Dummy New Town is downhill'
    });

    ghostSuburb = store.createRecord('suburb', {
      name: GHOST_SUBURB_NAME,
      description: 'Weird, but the Ghost Suburb is in Ghost Town'
    });

    ghostTown.get('suburbs').addObject(ghostSuburb);
    ghostSuburb.get('homes').addObject(model);
  });

  assert.equal(model.get('suburb').get('name'), GHOST_SUBURB_NAME);
  assert.equal(model.get('town').get('name'), GHOST_TOWN_NAME);
});
