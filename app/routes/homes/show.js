import Ember from 'ember';

export default Ember.Route.extend({
  model(params) { return this.store.find('home', params.home_id); },

  actions: {
    error(error, transition) {
      console.log(error);
      this.transitionTo('homes');
    }
  }
});
