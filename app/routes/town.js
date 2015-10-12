import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('town', {
        orderBy: 'lowercased_name',
        equalTo: Ember.String.dasherize(params.town_name.toLowerCase())
      }).
      then((towns) => { return towns.objectAt(0); }).
      catch((error) => { console.log('Found nothing') });
  },

  actions: {
    error(error) { console.log(error.errors); }
  }
});
