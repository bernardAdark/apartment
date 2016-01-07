import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('deputy', 'Unit | Model | deputy', {
  needs: ['model:suburb']
});

test('suburb relationship', function(assert) {
  let Deputy = this.store().modelFor('deputy');
  let relationship = Ember.get(Deputy, 'relationshipsByName').get('suburb');

  assert.equal(relationship.key, 'suburb');
  assert.equal(relationship.kind, 'belongsTo');
});
