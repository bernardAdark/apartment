import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['col-lg-1', 'next-image-control'],

  //Events
  click: function () {
    this.get('nextImage')();
  }
});
