import DS from 'ember-data';
const { computed } = Ember;
const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({
  title: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  gender: attr('string'),
  phoneNumbers: attr(),
  maritalStatus: attr('boolean'),
  spouseTitle: attr('string'),
  spouseFirstName: attr('string'),
  spouseLastName: attr('string'),
  occupation: attr('string'),
  photo: attr(),
  story: attr('string'),
  createdAt: attr('date', { defaultValue() { return new Date() } }),
  updatedAt: attr('date', { defaultValue() { return new Date() } }),

  // Associations.
  homes: hasMany('home', {async: true}),

  // Computed.
  fullName: computed('title', 'firstName', 'lastName', function() {
    return `${this.get('title')} ${this.get('firstName')} ${this.get('lastName')}`;
  }),

  homeLabelName: computed('firstName', 'spouseFirstName', function() {
    const _lbl = [this.get('firstName')];
    if (!!spouseFirstName.trim()) {
      this.get('gender') === 'M' ? _lbl.unshift(spouseFirstName) : _lbl.push(spouseFirstName);
    }

    return _lbl.join(' & ');
  })
});
