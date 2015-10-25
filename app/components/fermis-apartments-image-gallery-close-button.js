import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['close-button'],
  //Events
  click: function () {
    this.get('closeGallery')();
  }
});
