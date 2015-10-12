import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'towns',

  model(params) {
    return this.store.findRecord('town', params.town_id);
  }
});
