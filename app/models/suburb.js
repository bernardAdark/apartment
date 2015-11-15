import Ember from 'ember';
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend(EmberValidations, {

  validations: {
    name: {presence: true, length: {minimum: 1, maximum: 50}},
    description: {presence: true, length: {minimum: 1, maximum: 2000}}
  },

  name: attr('string'),
  description: attr('string'),
  slug: attr('string'),

  // Association.
  town: belongsTo('town', {async: true }),
  homes: hasMany('home', { async: true }),
  deputies: hasMany('deputy', {async: true }),
});
