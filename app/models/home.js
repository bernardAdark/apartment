import DS from 'ember-data';
const { computed } = Ember;
const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  summary: attr('string'),
  description: attr('string'),
  period: attr('number'),
  price: attr('number'),
  bedrooms: attr('number'),
  halls: attr('number'),
  address: attr('string'),
  bathroom: attr(),
  amenities: attr(),
  createdAt: attr('date', { defaultValue() { return new Date } }),
  updatedAt: attr('date', { defaultValue() { return new Date } }),

  // Association.
  host: belongsTo('host', {async: true}),
  suburb: belongsTo('suburb', {async: true}),

  // Computed.
  town: computed('suburb', function() { return this.get('suburb').get('town') }),
  monthly: computed('price', 'period', function() {
    Ember.assert('Period should be greater than 0 months', this.get('period') > 0);
    return Math.round(this.get('price')/this.get('period'))-0.01;
  })
});

// export default Model.extend({
//   price: attr('number'),
//   period: attr('number'),
//   bedrooms: attr('number'),
//   halls: attr('number'),
//   summary: attr('string'),
//   description: attr('string'),
//   address: attr('string'),
//   bathroom: attr(),
//   amenities: attr(),
//   banner: attr(),
//   photos: attr(),
//   createdAt: attr('date', { defaultValue() { return new Date } }),
//   updatedAt: attr('date', { defaultValue() { return new Date } })

//   // Associations
//   host: belongsTo('host', {async: true}),
//   suburb: belongsTo('suburb', {async: true}),

//   // Computed.
//   town: computed('suburb', function() { return this.get('suburb').get('town') }),
// });
