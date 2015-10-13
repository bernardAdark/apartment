import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log(params);
    return this.store.query('suburb', {orderBy: 'slug', equalTo: params.suburb_slug}).objectAt(0);
  }
});
