import Ember from 'ember';

export default Ember.Component.extend({
  // Events
  mouseEnter: function () {
    this.send('showControls');
  },
  mouseLeave: function () {
    this.send('hideControls');
  },
  actions: {
    showControls: function () {
      this.childViews.forEach(function (view) {
        var classNames = view.classNames.join('|');
        if (classNames.indexOf('image-control') !== -1) {
          view.send('showControl');
        }
      });
    },
    hideControls: function () {
      this.childViews.forEach(function (view) {
        var classNames = view.classNames.join('|');
        if (classNames.indexOf('image-control') !== -1) {
          view.send('hideControl');
        }
      });
    },
    showNextImage: function () {
      var currentImageIndex = this.get('currentImageIndex'),
          numberOfImages = this.get('images').length;

      if (currentImageIndex === numberOfImages - 1) {
        this.set('currentImageIndex', 0);
      } else {
        this.set('currentImageIndex', ++currentImageIndex);
      }
    },
    showPreviousImage: function () {
      var currentImageIndex = this.get('currentImageIndex'),
          numberOfImages = this.get('images').length;

      if (currentImageIndex === 0) {
        this.set('currentImageIndex', numberOfImages-1);
      } else {
        this.set('currentImageIndex', --currentImageIndex);
      }
    }
  }
});
