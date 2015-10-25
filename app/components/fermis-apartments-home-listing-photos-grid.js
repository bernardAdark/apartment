import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['container-fluid home-listing-photo-grid'],
  photosCount: function () {
    var photos = this.get('home.photos');
    return photos ? photos.length : 0;
  }.property('home.photos.length')
});
