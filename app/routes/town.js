import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('town', {
        orderBy: 'slug',
        equalTo: Ember.String.dasherize(params.town_name)
      }).
      then((towns) => { return towns.objectAt(0) }).
      catch((error) => { console.log('Found nothing') });
  }
});
