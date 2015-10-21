import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  title: attr('string'),
  content: attr('string'),
  imageName: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});
