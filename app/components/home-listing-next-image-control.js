import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['next-image-control', 'image-control'],
  classNameBindings: ['show:show:hide'],
  attributeBindings: ['href'],
  //Properties
  href: '',
  show: false,
  //Events
  click: function (e) {
    e.preventDefault();
    this.get('nextImage')();
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
