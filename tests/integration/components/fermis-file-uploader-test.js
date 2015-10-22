import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fermis-file-uploader', 'Integration | Component | fermis file uploader', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fermis-file-uploader}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fermis-file-uploader}}
      template block text
    {{/fermis-file-uploader}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
