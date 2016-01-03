import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('home', params.home_id);
  },

  afterModel(model) {
    return Ember.RSVP.hash({
      host: model.get('host'),
      suburb: model.get('suburb'),
      town: model.get('town')
    })
  }
});
