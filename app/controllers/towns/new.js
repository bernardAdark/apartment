import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  validations: {
    'model.name': { presence: true },
    'model.description': { presence: true }
  },

  actions: {
    createTown() {
      let newTown = this.store.createRecord('town', {
        name: this.get('name'),
        description: this.get('description'),
        slug: Ember.String.dasherize(this.get('name'))
      });

      console.warn(newTown);

      newTown.save().
        then((town) => {
          this.transitionToRoute('town', newTown.get('slug'));
        }).
        catch(function(error) {
          console.error(error.errors);
          return newTown.deleteRecord();
        });
    }
  }
});
