import Ember from 'ember';

export default Ember.Controller.extend({
  photo: '',
  gender: 'M',
  religion: null,
  phoneNumbers: [],

  actions: {
    imageLoaded(fileName) {
      this.set('photo', fileName);
    },

    createHost() {
      let params = {
        title: this.get('title'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        married: this.get('married'),
        occupation: this.get('occupation'),
        photo: this.get('photo'),
        phoneNumbers: this.get('phoneNumbers'),
        gender: this.get('gender'),
        religion: this.get('religion')
      };

      if (this.get('married') === 0) {
        if (this.get('spouseTitle') || this.get('spouseFirstName') || this.get('spouseLastName')) {
          console.error('Unmarried host cannot have spouse details');
          this.transitionToRoute('new-host');
        }
      }

      if (this.get('married') === 1) {
        params['spouseTitle'] = this.get('spouseTitle');
        params['spouseFirstName'] = this.get('spouseFirstName');
        params['spouseLastName'] = this.get('spouseLastName');
      }

      let newHost = this.store.createRecord('host', params);
      newHost.save().
        then(this.transitionToRoute('homes')).
        catch(e => console.log(e.errors));
    }
  }
});
