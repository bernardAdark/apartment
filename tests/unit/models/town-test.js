import { moduleForModel, test } from 'ember-qunit';

moduleForModel('town', 'Unit | Model | town', {
  needs: ['model:suburb']
});

test('suburbs relationship', function() {
  let Town = this.store().modelFor('town');
  let relationship = Ember.get(Town, 'relationshipsByName').get('suburbs');

  equal(relationship.key, 'suburbs');
  equal(relationship.kind, 'hasMany');
});
