import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['u'],
  u: null,

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

      newHome.save().catch((error) => {
        console.log(error.errors);
      })
    }
  }
});
