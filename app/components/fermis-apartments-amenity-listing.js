import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['amenity'],
  classNameBindings: ['isAvailable:available:unavailable'],
  isAvailable: function () {
    return this.get('amenity.available'); 
  }.property('amenity'),
  amenityIconPath: function () {
    var amenity = this.get('amenity');
    return '/assets/images/amenity-' + Ember.String.dasherize(amenity.name).replace('/','-') + '-icon-gray.png';
  }.property()
});
