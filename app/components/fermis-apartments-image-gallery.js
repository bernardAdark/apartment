import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['image-gallery', 'container-fluid'],
  classNameBindings: ['show:show:hide'],
  //Properties
  show: false,
  imageList: function () {
    var images = this.get('images') || [
      {
        url: 'https://a1.muscache.com/im/pictures/12978691/c0308441_original.jpg?aki_policy=x_large'
      },
      {
        url: 'https://a2.muscache.com/im/pictures/12978640/7d58d55d_original.jpg?aki_policy=xx_large'
      },
      {
        url: 'https://a1.muscache.com/im/pictures/12978842/62aafa33_original.jpg?aki_policy=x_large'
      }
    ];
    return images;
  }.property('images'),
  currentImageIndex: 0,
  currentImage: function () {
    var images = this.get('imageList'),
        currentImageIndex = this.get('currentImageIndex');

    return images[currentImageIndex].url;
  }.property('currentImageIndex'),
  didInsertElement(){
    // Make the div tabbable and give it the focus
    // so it can receive keyboard events
    // this.$().attr('tabindex',0);
    // this.$().focus();
  },
  //Events
  keyUp: function (e) {
    if (e.keyCode === 27) { // esc key
      this.send('close');
    } else if (e.keyCode === 37) {
      this.send('showPreviousImage');
    } else if (e.keyCode === 39) {
      this.send('showNextImage');
    }
  },
  //Actions
  actions: {
    open: function () {
      this.set('show', true);
      this.send('focus');
    },
    close: function () {
      this.set('show', false);
    },
    focus: function () {
      var self = this;
      setTimeout(function() { 
        self.$().attr('tabindex',0);
        self.$().focus();
        // console.log('focus done');
      }, 500);
    },
    showNextImage: function () {
      var currentImageIndex = this.get('currentImageIndex'),
          numberOfImages = this.get('imageList').length,
          nextImageIndex;

      if (currentImageIndex === numberOfImages - 1) {
        nextImageIndex = 0;
      } else {
        nextImageIndex = ++currentImageIndex;
      }
      this.send('setCurrentImage', this.get('imageList')[nextImageIndex]);
    },
    showPreviousImage: function () {
      var currentImageIndex = this.get('currentImageIndex'),
          numberOfImages = this.get('imageList').length,
          nextImageIndex;

      if (currentImageIndex === 0) {
        nextImageIndex = numberOfImages-1;
      } else {
        nextImageIndex = --currentImageIndex;
      }
      this.send('setCurrentImage', this.get('imageList')[nextImageIndex]);
    },
    setCurrentImage: function (image) {
      var images = this.get('imageList');
      var index = images.indexOf(image); 
      this.set('currentImageIndex', index);
    }
  }
});
