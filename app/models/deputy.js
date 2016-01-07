import Ember from 'ember';
import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  title: attr('string', { defaultValue: '' }),
  firstName: attr('string'),
  lastName: attr('string'),
  idType: attr('string'),
  idNumber: attr('string'),
  occupation: attr('string'),
  education: attr('string'),
  photo: attr('string'),
  story: attr('string'),
  phoneNumber: attr('string'),
  createdAt: attr('date', { defaultValue() { return new Date() } }),
  updatedAt: attr('date', { defaultValue() { return new Date() } }),

  // Associations.
  suburb: belongsTo('suburb', {async: true}),

  // Computed.
  fullName: Ember.computed('title', 'firstName', 'lastName', function() {
    return `${this.get('title')} ${this.get('firstName')} ${this.get('lastName')}`;
  })
});
