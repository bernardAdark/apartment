import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href'],
  //Properties
  href: '',
  //Events
  click: function (e) {
    e.preventDefault();
    this.send('openGallery');
  },
  //Actions
  actions: {
    openGallery: function() {
      var viewRegistry = this._viewRegistry;
      for (var key in viewRegistry) {
        var view = viewRegistry[key];
        var classNames = view.classNames.join('|');
        if (classNames.indexOf('image-gallery') !== -1) {
          view.send('open'); 
        }
      }
    }
  }
});
