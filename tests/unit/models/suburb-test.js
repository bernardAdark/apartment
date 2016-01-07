import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('suburb', 'Unit | Model | suburb', {
  needs: ['model:town', 'model:home', 'model:deputy']
});

test('town relationship', function(assert) {
  let Suburb = this.store().modelFor('suburb');
  let relationship = Ember.get(Suburb, 'relationshipsByName').get('town');

  assert.equal(relationship.key, 'town');
  assert.equal(relationship.kind, 'belongsTo');
});

test('homes relationship', function(assert) {
  let Suburb = this.store().modelFor('suburb');
  let relationship = Ember.get(Suburb, 'relationshipsByName').get('homes');

  assert.equal(relationship.key, 'homes');
  assert.equal(relationship.kind, 'hasMany');
});

test('deputies relationship', function(assert) {
  let Suburb = this.store().modelFor('suburb');
  let relationship = Ember.get(Suburb, 'relationshipsByName').get('deputies');

  assert.equal(relationship.key, 'deputies');
  assert.equal(relationship.kind, 'hasMany');
});
