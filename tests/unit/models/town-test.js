import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('town', 'Unit | Model | town', {
  needs: ['model:suburb']
});

test('suburbs relationship', (assert) => {
  let Town = this.store().modelFor('town');
  let relationship = Ember.get(Town, 'relationshipsByName').get('suburbs');

  assert.equal(relationship.key, 'suburbs');
  assert.equal(relationship.kind, 'hasMany');
});
