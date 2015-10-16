import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  slug: DS.attr('string'),
  createdAt: DS.attr('date', { defaultValue() { return new Date(); } }),
  updatedAt: DS.attr('date', { defaultValue() { return new Date(); } }),

  // Associations.
  suburbs: DS.hasMany('suburb', { async: true })
});
