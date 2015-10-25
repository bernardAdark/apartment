import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      host: this.store.findRecord('host', params.host_id),
      suburbs: this.store.findAll('suburb')
    });
  }
});
