import Ember from 'ember';

export function showAmenity(params, namedArgs) {
  var amenity = params[0] || {
    name: namedArgs.name,
    available: namedArgs.available
  };

  if (!amenity) {
    return 'Bad';
  } else {
    var amenityMarkup = `<div class="amenity`;
    if (!amenity.available) {
      amenityMarkup += ` unavailable">`;
    } else {
      amenityMarkup += ` available"><img src="/assets/images/amenity-` + Ember.String.dasherize(amenity.name) + `-icon-gray.png">`;
    }
    amenityMarkup += `<span class="name">` + amenity.name + `</span>`;
    amenityMarkup += `</div>`;
    return Ember.String.htmlSafe(amenityMarkup);
  }
}

export default Ember.Helper.helper(showAmenity);
