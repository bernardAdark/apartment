import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'homes',

  model(params) {
    return Ember.RSVP.hash({
      home: this.store.findRecord('home', params.home_id),
      suburbs: this.store.findAll('suburb')
    });
  }
});
