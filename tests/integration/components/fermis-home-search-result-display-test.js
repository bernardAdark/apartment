import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fermis-home-search-result-display', 'Integration | Component | fermis home search result display', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{fermis-home-search-result-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#fermis-home-search-result-display}}
      template block text
    {{/fermis-home-search-result-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
