import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('suburb', 'Unit | Model | suburb', {
  needs: ['model:town', 'model:home', 'model:deputy']
});

test('town relationship', function() {
  let Suburb = this.store().modelFor('suburb');
  let relationship = Ember.get(Suburb, 'relationshipsByName').get('town');

  equal(relationship.key, 'town');
  equal(relationship.kind, 'belongsTo');
});

test('homes relationship', function() {
  let Suburb = this.store().modelFor('suburb');
  let relationship = Ember.get(Suburb, 'relationshipsByName').get('homes');

  equal(relationship.key, 'homes');
  equal(relationship.kind, 'hasMany');
});

test('deputies relationship', function() {
  let Suburb = this.store().modelFor('suburb');
  let relationship = Ember.get(Suburb, 'relationshipsByName').get('deputies');

  equal(relationship.key, 'deputies');
  equal(relationship.kind, 'hasMany');
});
