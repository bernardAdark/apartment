import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fermis-apartment-search', 'Integration | Component | fermis apartment search', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{fermis-apartment-search}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#fermis-apartment-search}}
      template block text
    {{/fermis-apartment-search}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
