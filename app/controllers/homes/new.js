import Ember from 'ember';

export default Ember.Controller.extend({
  suburb: null,
  internet: false,
  mains: false,
  water: false,
  gated: false,
  pool: false,
  ac: false,
  laundry: false,
  standby: false,
  reservoir: false,
  garage: false,
  dstv: false,
  garden: false,
  microwave: false,
  photos: [],

  actions: {
    filesLoaded(file) {
      console.log('Setting the banner image to the current picture');
      this.get('photos').addObject(file);
    },

    createHome() {
      var newHome = this.store.createRecord('home', {
        summary: this.get('summary'),
        description: this.get('description'),
        period: this.get('period'),
        price: this.get('price'),
        bedrooms: this.get('bedrooms'),
        halls: this.get('halls'),
        address: this.get('address'),
        bathroom: {quantity: this.get('bathrooms'), shared: this.get('shared')},
        amenities: {
          internet: {name: 'Internet', available: this.get('internet')},
          mains: { name: 'Main Power', available: this.get('mains') },
          water: { name: 'Running Water', available: this.get('water') },
          gated: { name: 'Gated/Fenced', available: this.get('gated') },
          pool: { name: 'Swimming Pool', available: this.get('pool') },
          ac: { name: 'Room air conditioning', available: this.get('ac') },
          laundry: { name: 'Washing machine', available: this.get('laundry') },
          standy: { name: 'Power Generator', available: this.get('standby') },
          tank: { name: 'Water Reservoir', available: this.get('reservoir') },
          garage: { name: 'Garage', available: this.get('garage') },
          dstv: { name: 'DSTv', available: this.get('dstv') },
          garden: { name: 'Garden', available: this.get('garden') },
          microwave: { name: 'Microwave', available: this.get('microwave') }
        },
        photos: this.get('photos')
      });

      var s = this.store.peekRecord('suburb', this.get('suburb'));
      s.get('homes').addObject(newHome);
      newHome.save().then(() => { return s.save() });

      this.transitionToRoute('homes.home', newHome.id);
    }
  }
});
