import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      host: this.store.findRecord('host', this.paramsFor('host').host_id),
      suburbs: this.store.findAll('suburb')
    });
  }
});
