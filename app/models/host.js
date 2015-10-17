import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  phoneNumbers: DS.attr(),
  dateOfBirth: DS.attr('date'),
  religion: DS.attr('string'),
  maritalStatus: DS.attr('boolean'),
  occupation: DS.attr('string'),
  education: DS.attr('string'),
  createdAt: DS.attr('date', { defaultValue() { return new Date() } }),
  updatedAt: DS.attr('date', { defaultValue() { return new Date() } }),

  // Associations.
  homes: DS.hasMany('home', {async: true})
});
