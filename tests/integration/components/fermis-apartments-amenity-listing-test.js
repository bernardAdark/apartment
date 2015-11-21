import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fermis-apartments-amenity-listing', 'Integration | Component | fermis apartments amenity listing', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{fermis-apartments-amenity-listing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#fermis-apartments-amenity-listing}}
      template block text
    {{/fermis-apartments-amenity-listing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
