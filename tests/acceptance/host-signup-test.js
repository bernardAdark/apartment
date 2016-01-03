import { test } from 'qunit';
import moduleForAcceptance from 'apartment/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | host signup');

test('Unmarried host should not have spouse details', (assert) => {
  visit('/p/new');
  fillIn('input.title', 'Mr.');
  fillIn('input.firstname', 'Stephen');
  fillIn('input.lastname', 'Abdulla');
  fillIn('select.gender', 'M');
  fillIn('input.married', 0);

  fillIn('input.spouse-title', 'Mr.');
  fillIn('input.spouse-firstname', 'Thomas');
  fillIn('input.spouse-lastname', 'Oduro');

  fillIn('input.occupation', 'Engineer');
  fillIn('textarea.story',
         'A young man who got rich really early, built a couple of estates');
  fillIn('select.religion', 'Christian');

  // click('button.submit');

  andThen(() => {
    assert.equal(find('p.spouse-details').is(':visible'), false);
  });
});


test('Married host should have spouse details', (assert) => {
  visit('/p/new');
  fillIn('input.title', 'Mrs.');
  fillIn('input.firstname', 'Agnes');
  fillIn('input.lastname', 'Oduro');
  fillIn('select.gender', 'F');
  fillIn('input.married', 1);

  fillIn('input.spouse-title', 'Mr.');
  fillIn('input.spouse-firstname', 'Thomas');
  fillIn('input.spouse-lastname', 'Oduro');

  fillIn('input.occupation', 'Economist');
  fillIn('textarea.story', 'An industrous and illustrous wife and mother');
  fillIn('select.religion', 'Prefer not to say');

  click('button.submit');

  andThen(() => {
    assert.equal(currentPath(), 'homes.index');
  });
});
