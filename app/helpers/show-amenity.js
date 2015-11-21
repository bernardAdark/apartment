import Ember from 'ember';

export default Ember.Helper.helper(function(value, options) {
  let amenity = value[0] || {
    name: options.name,
    available: options.available
  };

  if (!amenity) {
    throw new Error('Helper called without arguments');
  } else {
    let amenityMarkup = [`<div class="amenity`];
    if (!amenity.available) {
      amenityMarkup.push(
        ` unavailable"><img src="/assets/images/amenity-`,
        Ember.String.dasherize(amenity.name).replace('/','-'),
        `-icon-gray.png">`
      );
    } else {
      amenityMarkup.push(
        ` available"><img src="/assets/images/amenity-`,
        Ember.String.dasherize(amenity.name).replace('/','-'),
        `-icon-gray.png">`
      );
    }

    amenityMarkup.push(`<span class="name">`, amenity.name, `</span>`);
    amenityMarkup.push(`</div>`);

    return Ember.String.htmlSafe(amenityMarkup.join(''));
  }
});
