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
  createdAt: attr('date', { defaultValue() { return new Date(); } }),
  updatedAt: attr('date', { defaultValue() { return new Date(); } }),

  // Associations.
  suburbs: hasMany('suburb', { async: true })
});
