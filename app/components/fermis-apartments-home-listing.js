import Ember from 'ember';

export default Ember.Component.extend({
  //Properties
  images: [
    'https://a1.muscache.com/im/pictures/110310002/bf11161f_original.jpg?aki_policy=x_medium',
    'https://a0.muscache.com/im/pictures/57704319/a8f7ba16_original.jpg?aki_policy=x_medium',
    'https://a0.muscache.com/im/pictures/19277686/0060a489_original.jpg?aki_policy=x_medium'
  ],  
  currentImageIndex: 0,
  currentImage: function () {
    var images = this.get('images'),
        currentImageIndex = this.get('currentImageIndex');

    return images[currentImageIndex];
  }.property('currentImageIndex'),
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
