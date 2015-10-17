import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
		return Ember.RSVP.hash({
      towns: this.store.findAll('town'),
      suburbs: this.store.findAll('suburb'),
      homes: this.store.findAll('home')
		});
  }
});
