import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTown() {
      var newTown = this.store.createRecord('town', {
        name: this.get('name'),
        description: this.get('description')
      });

      newTown.save().
        catch(function(error) {
          console.log(error.errors);
          // Stay here. Record wasn't successfully created.
        });

      this.transitionToRoute('town', newTown.get('lowercased_name'));
    },

    updateTown(model) {
      model.setProperties({
        name: this.get('model.name'),
        description: this.get('model.description')
      })

      model.save().catch((error) => {
        console.log(error.errors);
      })

      this.transitionToRoute('town', model.get('lowercased_name'));
    }
  }
});
