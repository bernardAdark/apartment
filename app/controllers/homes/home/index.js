import Ember from 'ember';

export default Ember.Controller.extend({
  coverImage() {
    this.get('model.coverImage')
  }
});
