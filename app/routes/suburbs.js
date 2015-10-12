import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      suburbs: this.store.findAll('suburb'),
      towns: this.store.findAll('town')
    });
  }
});
