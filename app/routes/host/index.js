import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('host', this.paramsFor('host').host_id);
  }
});
