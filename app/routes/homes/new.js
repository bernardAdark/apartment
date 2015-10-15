import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'homes',

  model() {
    return this.store.findAll('suburb');
  }
});
