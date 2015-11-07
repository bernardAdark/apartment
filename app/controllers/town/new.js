import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend({
  actions: {
    createSuburb(model) {
      var newSuburb = this.store.createRecord('suburb', {
        name: this.get('name'),
        description: this.get('description'),
        slug: Ember.String.dasherize(this.get('name'))
      });

      model.get('suburbs').addObject(newSuburb);
      newSuburb.save().
        then((suburb) => {
          model.save();
          this.transitionToRoute('town', model);
        }).
        catch((error) => {
          console.error(error.errors);
          newSuburb.deleteRecord();
        });
    }
  }
});
