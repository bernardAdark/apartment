import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['previous-image-control', 'image-control'],
  classNameBindings: ['show:show:hide'],
  attributeBindings: ['href'],
  //Properties
  href: '',
  show: false,
  //Events
  click: function (e) {
    e.preventDefault();
    this.get('previousImage')();
  },
  //Actions
  actions: {
    showControl: function () {
      this.set('show', true);
    },
    hideControl: function () {
      this.set('show', false);
    }
  }
});
