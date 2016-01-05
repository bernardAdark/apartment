import Ember from 'ember';
import within from '../../metal/within';

export default Ember.Controller.extend({
  actions: {
    goToSuburb(suburbId) {
      let suburb = this.store.peekRecord('suburb', suburbId);
      return this.transitionToRoute('suburb', suburb);
    },

    search(features) {
      let __a = [],
          __r = [],
          __o = 'price period couple furnished pets kitchen christian muslim atheist others'.w();

      Object.keys(features).forEach((f) => {
        features[f] && (
          __o.contains(f) ? __r.push(f) : __a.push(f)
        ) || delete features[f];
      });

      __r.removeObjects(['price', 'period']);

      this.set('results', this.store.filter('home', function(home) {
        let __amn = home.get('amenities'),
            __rules = home.get('rules') || {};

        return within(features.price, home.get('price')) &&
               within(features.period, home.get('period')) &&
               !__a.any((a) => { return !__amn[a]['available'] }) &&
               !__r.any((r) => { return console.log(__rules[r]), !__rules[r] });
      }));
    }
  }
});
