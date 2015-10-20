import Ember from 'ember';

export default Ember.Controller.extend({
  suburb: null,

  actions: {
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
