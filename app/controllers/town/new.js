import Ember from 'ember';

export default Ember.Controller.extend({
  geoCoords: null,

  actions: {
    pickSuburbGeoCoordinates(latlng) {
      this.set('geoCoords', {lat: latlng.lat, lng: latlng.lng});
    },

    createSuburb(model) {
      let newSuburb = this.store.createRecord('suburb', {
        name: this.get('name'),
        description: this.get('description'),
        slug: Ember.String.dasherize(this.get('name')),
        geoCoords: this.get('geoCoords')
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
