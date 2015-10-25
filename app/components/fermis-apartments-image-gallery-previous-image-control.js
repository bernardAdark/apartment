import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['col-lg-1', 'previous-image-control'],

  //Events
  click: function () {
    this.get('previousImage')();
  }
});
