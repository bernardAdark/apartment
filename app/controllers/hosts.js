import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createHost() {
      let newHost = this.store.createRecord('host', {
        title: this.get('title'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        maritalStatus: this.get('maritalStatus'),
        occupation: this.get('occupation'),
        spouseTitle: this.get('spouseTitle'),
        spouseFirstName: this.get('spouseFirstName'),
        spouseLastName: this.get('spouseLastName'),
        story: this.get('story')
      });

      newHost.save().catch(error => console.log(error.errors));
      this.transitionToRoute('homes.new');
    }
  }
});
