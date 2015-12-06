import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToSuburb(suburbId) {
      let suburb = this.store.peekRecord('suburb', suburbId);
      return this.transitionToRoute('suburb', suburb);
    }
  }
});
