import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fermis-apartment-search-result', 'Integration | Component | fermis apartment search result', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{fermis-apartment-search-result}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#fermis-apartment-search-result}}
      template block text
    {{/fermis-apartment-search-result}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
