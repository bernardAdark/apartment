import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateTown(model) {
      model.setProperties({
        name: this.get('model.name'),
        description: this.get('model.description'),
        slug: Ember.String.dasherize(this.get('model.name'))
      });

      model.save().catch((error) => {
        console.log(error.errors);
      })

      this.transitionToRoute('town', model.get('slug'));
    }
  }
});
