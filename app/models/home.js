import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr('number'),
  kitchen: DS.attr('boolean',   { defaultValue: false }),
  bathroom: DS.attr('boolean',  { defaultValue: false }),
  internet: DS.attr('boolean',  { defaultValue: false }),
  rooms: DS.attr('number',      { defaultValue: 1 }),
  available: DS.attr('boolean', { defaultValue: true }),
  period: DS.attr('number'),
  description: DS.attr('string'),
  address: DS.attr('string'),
  furnished: DS.attr('boolean'),
  createdAt: DS.attr('date', { defaultValue() { return new Date() } }),
  updatedAt: DS.attr('date', { defaultValue() { return new Date() } }),

  // Associations.
  host: DS.belongsTo('host', { async: true }),
  suburb: DS.belongsTo('suburb', { async: true }),
  town: Ember.computed('suburb', function() { return this.get('suburb').get('town') }),

  // Computed.
  pricePerMonth: Ember.computed('price', 'period', function() {
    return Math.round(this.get('price') / this.get('period')) - 0.01;
  })
});
