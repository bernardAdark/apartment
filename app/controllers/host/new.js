import Ember from 'ember';

export default Ember.Controller.extend({
  suburb: null,
  kitchens: 1,
  halls: 1,
  bedrooms: 1,
  bathrooms: 1,
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
  single: false,
  pets: false,
  christian: false,
  muslim: false,
  atheist: false,
  others: false,
  photos: [],

  actions: {
    imageLoaded(fileName) {
      this.get('photos').addObject(fileName);
    },

    createHome(host) {
      let newHome = this.store.createRecord('home', {
        summary: this.get('summary'),
        description: this.get('description'),
        period: this.get('period'),
        price: this.get('price'),
        bedrooms: this.get('bedrooms'),
        halls: this.get('halls'),
        address: this.get('address'),
        kitchens: this.get('kitchens'),
        bathroom: {quantity: this.get('bathrooms'), shared: !!this.get('shared')},
        amenities: {
          internet: {name: 'Internet', available: this.get('internet')},
          mains: { name: 'Main Power', available: this.get('mains') },
          water: { name: 'Running Water', available: this.get('water') },
          gated: { name: 'Gated/Fenced', available: this.get('gated') },
          pool: { name: 'Swimming Pool', available: this.get('pool') },
          ac: { name: 'Room air conditioning', available: this.get('ac') },
          laundry: { name: 'Washing machine', available: this.get('laundry') },
          standby: { name: 'Power Generator', available: this.get('standby') },
          tank: { name: 'Water Reservoir', available: this.get('reservoir') },
          garage: { name: 'Garage', available: this.get('garage') },
          dstv: { name: 'DSTv', available: this.get('dstv') },
          garden: { name: 'Garden', available: this.get('garden') },
          microwave: { name: 'Microwave', available: this.get('microwave') }
        },
        rules: {
          single: this.get('single'),
          couple: this.get('couple'),
          pets: this.get('pets'),
          christian: this.get('christian'),
          muslim: this.get('muslim'),
          atheist: this.get('atheist'),
          others: this.get('others')
        },
        photos: this.get('photos')
      });

      let suburb = this.store.peekRecord('suburb', this.get('suburb'));
      let town = this.store.peekRecord('town', suburb.get('town').get('id'));

      suburb.get('homes').addObject(newHome);
      town.get('homes').addObject(newHome);
      host.get('homes').addObject(newHome);

      newHome.save().
        then((h) => {
          suburb.save();
          town.save();
          host.save();
          this.transitionToRoute('homes.home', h);
        }).
        catch((e) => {
          console.error(e.errors);
          this.store.unloadRecord(newHome);
        });
    }
  }
});
