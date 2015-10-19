import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'homes',

  model(params) {
    return this.store.findRecord('home', params.home_id);
  },

  afterModel(model) {
    return model.get('host') && model.get('suburb');
  }
});
