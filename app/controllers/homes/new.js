import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createHome() {
      var newHome = this.store.createRecord('home', {
        price: this.get('price'),
        rooms: this.get('rooms'),
        period: this.get('period'),
        kitchen: this.get('kitchen'),
        bathroom: this.get('bathroom')
      });

      newHome.save();
      this.transitionToRoute('homes');
    }
  }
});
