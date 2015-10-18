import DS from 'ember-data';
const { computed } = Ember;
const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  price: attr('number'),
  kitchen: attr('boolean', { defaultValue: false }),
  bathroom: attr('boolean', { defaultValue: false }),
  internet: attr('boolean', { defaultValue: false }),
  bedrooms: attr('number', { defaultValue: 1 }),
  halls: attr('number', { defaultValue: 0 }),
  kitchen: attr(),
  bathroom: attr('boolean', { defaultValue: false }),
  available: attr('boolean', { defaultValue: true }),
  period: attr('number'),
  description: attr('string'),
  address: attr('string'),
  furnished: attr('boolean'),
  amenities: attr(),
  summary: attr('string'),
  houseRules: attr(),
  banner: attr(),
  photos: attr(),
  createdAt: attr('date', { defaultValue() { return new Date() } }),
  updatedAt: attr('date', { defaultValue() { return new Date() } }),

  // Associations.
  host: belongsTo('host', { async: true }),
  suburb: belongsTo('suburb', { async: true }),

  // Computed.
  town: computed('suburb', function() { return this.get('suburb').get('town') }),
  pricePerMonth: computed('price', 'period', function() {
    return Math.round(this.get('price') / this.get('period')) - 0.01;
  })
});
