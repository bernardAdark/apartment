import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  lowercased_name: Ember.computed('name', function() { return Ember.String.dasherize(this.get('name')) }),
  createdAt: DS.attr('date', { defaultValue() { return new Date(); } }),
  updatedAt: DS.attr('date', { defaultValue() { return new Date();  } }),

  // Associations.
  suburbs: DS.hasMany('suburb', { async: true })
});
