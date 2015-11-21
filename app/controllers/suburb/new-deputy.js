import Ember from 'ember';

export default Ember.Controller.extend({
  photo: '',

  actions: {
    imageLoaded(image) {
      this.set('photo', image);
    },

    createDeputy(suburb) {
      var newDeputy = this.store.createRecord('deputy', {
        title: this.get('title'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        idType: this.get('idType'),
        idNumber: this.get('idNumber'),
        occupation: this.get('occupation'),
        education: this.get('education'),
        photo: this.get('photo'),
        phoneNumber: this.get('phoneNumber'),
        story: this.get('story')
      });

      suburb.get('deputies').addObject(newDeputy);
      newDeputy.save().
        then((d) => {
          suburb.save();
          this.transitionToRoute('suburb', suburb.get('id'));
        }).
        catch((e) => {
          console.error(e.errors);
          newDeputy.deleteRecord();
        });
    }
  }
});
