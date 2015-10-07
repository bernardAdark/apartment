import { moduleForModel, test } from 'ember-qunit';

moduleForModel('home', 'Unit | Model | home', {
  // Specify the other units that are required for this test.
  needs: [],
  unit: true
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});
