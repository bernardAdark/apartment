import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fermis-apartments-home-listing-photos-grid-open-gallery-link', 'Integration | Component | fermis apartments home listing photos grid open gallery link', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fermis-apartments-home-listing-photos-grid-open-gallery-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fermis-apartments-home-listing-photos-grid-open-gallery-link}}
      template block text
    {{/fermis-apartments-home-listing-photos-grid-open-gallery-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
