import Ember from 'ember';

export default Ember.Controller.extend({
  coverImage: function () {
    return this.get('model.photos').objectAt(0);
  }.property('model.photos')
});
