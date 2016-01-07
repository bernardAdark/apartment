import Ember from 'ember';

const {
  Component,
  run: {
    bind
  }
} = Ember;


export default Component.extend({
  action: 'search',
  water: false,
  gated: false,
  cable: false,
  internet: false,
  laundry: false,
  garage: false,
  ac: false,
  garden: false,
  priceOpenHandle: 100,
  priceCloseHandle: 500,
  periodOpenHandle: 3,
  periodCloseHandle: 12,

  didInsertElement() {
    this._super(...arguments);
    this.toggleFilterButton = $('#filter-toggle');
    this.moreFilters = $('#more-filters');
    this.toggleFilterButton.on('click', bind(this, 'toggleFilter'));

    // TODO: Can we use the current configuration of the slider and other
    // options to retrieve the search results?
  },

  toggleFilter(e) {
    this.moreFilters.toggle();
    if (this.moreFilters.is(':visible')) {
      this.toggleFilterButton.text('Less Filters');
    } else {
      this.set('water', false);
      this.set('gated', false);
      this.set('cable', false);
      this.set('internet', false);
      this.set('laundry', false);
      this.set('garage', false);
      this.set('ac', false);
      this.set('garden', false);
      this.set('christian', false);
      this.set('muslim', false);
      this.set('atheist', false);
      this.set('others', false);

      this.toggleFilterButton.text('More Filters');
      this.send('search');
    }
  },

  change(e) {
    this.send('search');
  },

  actions: {
    search(values) {
      if (values) {
        let key = values.pop();
        this.set(key,
          values.map((n) => Number[key === 'rent' ? 'parseFloat' : 'parseInt'](n))
        );
      }

      const f = this.getProperties([
                  'water',     'gated',  'dstv',    'internet', 'laundry',
                  'garage',    'ac',     'garden',  'couple',   'kitchen',
                  'furnished', 'pets',   'price',   'period',
                  'christian', 'muslim', 'atheist', 'others'
                ]);

      f['period'] = f['period'] || [this.get('periodOpenHandle'), this.get('periodCloseHandle')];
      f['price'] = f['price'] || [this.get('priceOpenHandle'), this.get('priceCloseHandle')]

      this.sendAction('action', f);
    }
  }
  
});
