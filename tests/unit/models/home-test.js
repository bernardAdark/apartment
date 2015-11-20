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

test('host relationship', (assert) => {
  const Home = this.store().modelFor('home');
  const relationship = Ember.get(Home, 'relationshipsByName').get('host');
  
  assert.equal(relationship.key, 'host');
  assert.equal(relationship.kind, 'belongsTo');
});

test('suburb relationship', (assert) => {
  const Home = this.store().modelFor('home');
  const relationship = Ember.get(Home, 'relationshipsByName').get('suburb');

  assert.equal(relationship.key, 'suburb');
  assert.equal(relationship.kind, 'belongsTo');
});

test('summary should be required', (assert) => {
  const model = this.subject();
  Ember.run(() => {
    model.set('summary', null);
  });
  
  assert.equal(model.get('isValid'), false, 'Home is valid without a `summary`');
});

test('description should be required', (assert) => {
  const model = this.subject();
  Ember.run(() => {
    model.set('description', '');
  });

  assert.equal(model.get('isValid'), false, 'Home is valid without a `description`');
});

test('should have at least one bedroom', (assert) => {
  const model = this.subject();
  Ember.run(() => {
    model.set('bedrooms', 0);
  });

  assert.equal(model.get('isValid'), false, 'Home is valid with no bedrooms');
});

test('should not have negative bedrooms', (assert) => {
  const model = this.subject();
  Ember.run(() => {
    model.set('bedrooms', -9);
  });

  assert.equal(model.get('isValid'), false, 'Home is valid with negative number of bedrooms');
});

test('monthly (computed) should be price/months', function(assert) {
  const model = this.subject();
  Ember.run(() => {
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

  Ember.run(() => {
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
