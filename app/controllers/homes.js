import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['u'],
  u: null,
  suburb: null,

  actions: {
    createHome() {
      var newHome = this.store.createRecord('home', {
        description: this.get('description'),
        price: this.get('price'),
        period: this.get('period'),
        rooms: this.get('rooms'),
        kitchen: this.get('kitchen'),
        bathroom: this.get('bathroom')
      });

      var s = this.store.peekRecord('suburb', this.get('suburb'));
      s.get('homes').addObject(newHome);
      newHome.save().then(() => { return s.save();  })

      this.transitionToRoute('homes.home', newHome);
    },

    updateHome(model) {
    }
  }
});
