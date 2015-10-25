import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  classNameBindings: ['isCurrentImage:active:not-active'],
  attributeBindings: ['src', 'alt', 'style'],
  //Properties
  src: '',
  alt: '',
  style: function () {
    var image = this.get('image');
    return "background-image: url('" + image.url  + "')";
  }.property('image'),
  isCurrentImage: function () {
    var currentImageUrl = this.get('parentView.currentImage');
    return currentImageUrl === this.get('image').url;
  }.property('parentView.currentImageIndex'),
  //Events
  click: function () {
    this.get('setCurrentImage')(this.get('image'));
  }
});
