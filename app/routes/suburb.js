import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('suburb', {orderBy: 'slug', equalTo: params.suburb_slug}).then((subs) => {
      return subs.objectAt(0);
    });
  },

  afterModel(model) {
    return model.get('homes');
  }
});
