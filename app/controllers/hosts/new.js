import Ember from 'ember';

export default Ember.Controller.extend({
  photo: '',
  gender: 'M',
  phoneNumbers: [],

  actions: {
    imageLoaded(image) {
      this.set('photo', image);
    },

    createHost() {
      let newHost = this.store.createRecord('host', {
        title: this.get('title'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        married: this.get('married'),
        occupation: this.get('occupation'),
        spouseTitle: this.get('spouseTitle'),
        spouseFirstName: this.get('spouseFirstName'),
        spouseLastName: this.get('spouseLastName'),
        photo: this.get('photo'),
        phoneNumbers: this.get('phoneNumbers'),
        gender: this.get('gender')
      });

      newHost.save().
        then(this.transitionToRoute('homes')).
        catch(e => console.log(e.errors));
    }
  }
});
