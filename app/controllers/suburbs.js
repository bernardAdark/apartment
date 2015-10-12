import Ember from 'ember';

export default Ember.Controller.extend({
  town: null,
  actions: {
    createSuburb() {
      console.log(this.get('name'));
      console.log(this.get('description'));

      var newSuburb = this.store.createRecord('suburb', {
        name: this.get('name'),
        description: this.get('description')
      });

      var suburbOf = this.store.peekRecord('town', this.get('town'));
      suburbOf.get('suburbs').addObject(newSuburb);
      newSuburb.save().then(() => { return suburbOf.save(); })

      this.transitionToRoute('suburbs');
    }
  }
});
