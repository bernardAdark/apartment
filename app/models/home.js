import DS from 'ember-data';
import EmberValidations from 'ember-validations';

const { computed, assert } = Ember;
const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend(EmberValidations, {
  validations: {
      summary: { presence: true, length: {minimum: 1} },
      description: { presence: true, length: {minimum: 1} },
      period: { presence: true, numericality: true },
      bedrooms: { presence: true, numericality: {greaterThanOrEqualTo: 1}},
      halls: { presence: true, numericality: {greaterThanOrEqualTo: 0} },
      kitchen: { presence: true, numericality: {greaterThanOrEqualTo: 0} }
  },

  summary: attr('string'),
  description: attr('string'),
  period: attr('number'),
  price: attr('number'),
  bedrooms: attr('number'),
  halls: attr('number'),
  address: attr('string'),
  kitchens: attr('number'),
  bathroom: attr(),
  amenities: attr(),
  createdAt: attr('date', { defaultValue() { return new Date } }),
  updatedAt: attr('date', { defaultValue() { return new Date } }),

  // Association.
  host: belongsTo('host', {async: true}),
  suburb: belongsTo('suburb', {async: true}),
  photos: attr(),

  // Computed.
  town: computed('suburb', function() { return this.get('suburb').get('town') }),
  monthly: computed('price', 'period', function() {
    assert('Period should be greater than 0 months', this.get('period') > 0);
    return Math.round(this.get('price')/this.get('period'))-0.01;
  })
});
