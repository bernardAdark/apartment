import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  slug: Ember.computed('name', function() { return Ember.String.dasherize(this.get('name')) }),


  // Association.
  town: DS.belongsTo('town', {async: true }),
  homes: DS.hasMany('home', { async: true })
});
