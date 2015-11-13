import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('home', 'Unit | Model | home', {
  needs: ['model:host', 'model:suburb']
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
