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
  createdAt: DS.attr('date', { defaultValue() { return new Date(); } }),
  updatedAt: DS.attr('date', { defaultValue() { return new Date(); } })
});
