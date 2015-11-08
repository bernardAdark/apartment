import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('suburb', this.paramsFor('suburb').suburb_slug);
  }
});
