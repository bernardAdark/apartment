import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('host', 'Unit | Model | host', {
  needs: ['model:home']
});

test('home relationship', function() {
  let Host = this.store().modelFor('host');
  let relationship = Ember.get(Host, 'relationshipsByName').get('homes');

  equal(relationship.key, 'homes');
  equal(relationship.kind, 'hasMany');
});
