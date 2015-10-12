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
      newSuburb.set('town', suburbOf);
      newSuburb.save().
        catch((error) => { console.log(error.errors); });

      this.transitionToRoute('town.suburbs', suburbOf.lowercased_name);
    }
  }
});
