import Ember from 'ember';

export default Ember.Helper.helper(function(value, options) {
  let amenity = value[0] || {
    name: options.name,
    available: options.available
  };

  if (!amenity) {
    return 'Bad';
  } else {
    let amenityMarkup = `<div class="amenity`;
    if (!amenity.available) {
      amenityMarkup += ` unavailable"><img src="/assets/images/amenity-` + Ember.String.dasherize(amenity.name).replace('/','-') + `-icon-gray.png">`;
    } else {
      amenityMarkup += ` available"><img src="/assets/images/amenity-` + Ember.String.dasherize(amenity.name).replace('/','-') + `-icon-gray.png">`;
    }
    amenityMarkup += `<span class="name">` + amenity.name + `</span>`;
    amenityMarkup += `</div>`;
    return Ember.String.htmlSafe(amenityMarkup);
  }
});
