import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToSuburb(suburbSlug) {
      return this.transitionToRoute('suburb', suburbSlug);
    }
  }
});
