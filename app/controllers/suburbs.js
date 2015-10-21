import Ember from 'ember';

export default Ember.Controller.extend({
  town: null,
  actions: {
    createSuburb() {
      let newSuburb = this.store.createRecord('suburb', {
        name: this.get('name'),
        description: this.get('description'),
        slug: Ember.String.dasherize(this.get('name'))
      });

      let suburbOf = this.store.peekRecord('town', this.get('town'));
      suburbOf.get('suburbs').addObject(newSuburb);
      newSuburb.save().then(() => { return suburbOf.save(); })

      this.transitionToRoute('town.suburbs', suburbOf.get('slug'));
    },


    updateSuburb(model) {
      //TODO: Update a suburb...
    }

  }
});
