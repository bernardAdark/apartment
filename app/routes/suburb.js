import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('suburb', {orderBy: 'slug', equalTo: params.suburb_slug}).then((subs) => {
      console.log(subs.objectAt(0).get('name'));
      return subs.objectAt(0);
    }).catch((error) => { console.log(error.errors) });
  }
});
