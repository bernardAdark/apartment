import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToSuburb(suburbId) {
      let suburb = this.store.peekRecord('suburb', suburbId);
      return this.transitionToRoute('suburb', suburb);
    },

    search(features) {
      Object.keys(features).forEach((f) => {
        !features[f] && (delete features[f])
      });

      console.log('Got here...');
      this.set('results', this.store.peekAll('home'));
      // return this.store.filter('home', (home) => {
      //   home.get()
      // });
    }
  }
});
