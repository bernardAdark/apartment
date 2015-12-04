import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fermis-mapbox-map', 'Integration | Component | fermis mapbox map', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{fermis-mapbox-map}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#fermis-mapbox-map}}
      template block text
    {{/fermis-mapbox-map}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
