import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home-listing-previous-image-control', 'Integration | Component | home listing previous image control', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{home-listing-previous-image-control}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#home-listing-previous-image-control}}
      template block text
    {{/home-listing-previous-image-control}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
