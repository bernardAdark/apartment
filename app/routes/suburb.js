import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('suburb', {orderBy: 'slug', equalTo: params.slug}).
      then((subs) => { return subs.get('firstObject') });
  },

  afterModel(model) {
    return model.get('town');
  }
});
