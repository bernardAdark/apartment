import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fermis-apartment-slider', 'Integration | Component | fermis apartment slider', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{fermis-apartment-slider}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#fermis-apartment-slider}}
      template block text
    {{/fermis-apartment-slider}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
