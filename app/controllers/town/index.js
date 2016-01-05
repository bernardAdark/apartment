import Ember from 'ember';
import within from '../../metal/within';

export default Ember.Controller.extend({
  actions: {
    goToSuburb(suburbId) {
      let suburb = this.store.peekRecord('suburb', suburbId);
      return this.transitionToRoute('suburb', suburb);
    },

    search(features) {
      let __amenities = [],
          __other = 'price period couple furnished pets kitchen'.w();

      Object.keys(features).forEach((f) => {
        if (!__other.contains(f)) {
          (features[f] && __amenities.push(f)) || delete features[f];
        }
      });

      let self = this;
      this.set('results', this.store.filter('home', function(home) {
        let __amn = home.get('amenities');
        return self.within(features['price'], home.get('price')) &&
               self.within(features['period'], home.get('period')) && 
               !__amenities.any((a) => { return !__amn[a]['available'] });
      }));
    }
  }
});
