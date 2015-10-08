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

      newHome.save().
        catch(function(error) {
          console.log(error.errors);
        // Stay in the same place but show a flash message to acknowledge the error.
        });

      this.transitionToRoute('homes');
    }
  }
});
