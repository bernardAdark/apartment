import DS from 'ember-data';
const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  slug: attr('string'),

  // Association.
  town: belongsTo('town', {async: true }),
  homes: hasMany('home', { async: true })
});
