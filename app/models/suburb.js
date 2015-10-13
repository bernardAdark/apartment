import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  slug: DS.attr('string'),

  // Association.
  town: DS.belongsTo('town', {async: true }),
  homes: DS.hasMany('home', { async: true })
});
