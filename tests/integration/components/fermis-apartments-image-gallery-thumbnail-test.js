import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fermis-apartments-image-gallery-thumbnail', 'Integration | Component | fermis apartments image gallery thumbnail', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fermis-apartments-image-gallery-thumbnail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fermis-apartments-image-gallery-thumbnail}}
      template block text
    {{/fermis-apartments-image-gallery-thumbnail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
