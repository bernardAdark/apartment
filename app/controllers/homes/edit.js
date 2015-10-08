import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateHome(model) {
      model.setProperties({
        price: this.get('model.price'),
        rooms: this.get('model.rooms'),
        period: this.get('model.period'),
        bathroom: this.get('bathroom'),
        kitchen: this.get('kitchen')
      });

      model.save().
        catch(function(error) {
          console.log(error);
          // Stay on this page. There's something wrong with the inputs.
          // Ideally I should show a flash message, color the wrong input, etc, but I don't
          // know how to do that now :(
        });

      this.transitionToRoute('homes.show', model);
    }
  }
});
