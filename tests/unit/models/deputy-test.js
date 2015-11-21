import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('deputy', 'Unit | Model | deputy', {
  needs: ['model:suburb']
});

test('suburb relationship', function() {
  let Deputy = this.store().modelFor('deputy');
  let relationship = Ember.get(Deputy, 'relationshipsByName').get('suburb');

  equal(relationship.key, 'suburb');
  equal(relationship.kind, 'belongsTo');
});
