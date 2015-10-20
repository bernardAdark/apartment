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

  actions: {
    createHome() {

      console.log("THIS", this.get('internet'));

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
        }
      });

      newHome.save().catch(error => console.log(error.errors));
    },

    updateHome(model) {
      model.home.setProperties({
        description: this.get('model.home.description'),
        price: this.get('model.home.price'),
        period: this.get('model.home.period'),
        rooms: this.get('model.home.rooms'),
        kitchen: this.get('model.home.kitchen'),
        bathroom: this.get('model.home.bathroom'),
        updatedAt: new Date()
      });

      var oldSuburb = model.home.get('suburb').get('id');
      var newSuburb = this.store.peekRecord('suburb', this.get('suburb'));

      if (oldSuburb === this.get('suburb')) {
        model.home.save();
      } else {
        oldSuburb = this.store.peekRecord('suburb', oldSuburb);
        oldSuburb.get('homes').removeObject(model.home);
        newSuburb.get('homes').addObject(model.home);
        model.home.save().then(() => {
          newSuburb.save();
          return oldSuburb.save();
        });
      }

      this.transitionToRoute('homes.home', model.home.id);
    }
  }
});
