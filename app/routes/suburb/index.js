import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('suburb', {orderBy: 'slug', equalTo: this.paramsFor('suburb').slug}).
      then((subs) => { return subs.get('firstObject') });
  },

  afterModel(model) {
    return model.get('deputies');
  }
});
