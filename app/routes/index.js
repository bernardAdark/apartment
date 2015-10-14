import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    // return this.store.findAll('home');
		var self = this;
		return Ember.RSVP.hash({
      towns: self.store.findAll('town'),
      suburbs: self.store.findAll('suburb'),
      homes: self.store.findAll('home')
		});
  }
});
