import Ember from 'ember';
import DS from 'ember-data';
import EmberValidations from 'ember-validations';
import ENV from 'apartment/config/environment';

const { computed } = Ember;
const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend(EmberValidations, {

  validations: {
    firstName: { presence: true, length: {minimum: 1} },
    lastName: { presence: true, length: {minimum: 1} },
    phoneNumbers: { presence: true },
    married: { presence: true, inclusion: {in: [true, false, 0, 1]}},
    photo: { presence: true },
    story: { presence: true, length: {minimum: 1} }
  },

  title: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  gender: attr('string'),
  phoneNumbers: attr(),
  married: attr('boolean'),
  spouseTitle: attr('string'),
  spouseFirstName: attr('string'),
  spouseLastName: attr('string'),
  occupation: attr('string'),
  religion: attr('string'),
  photo: attr(),
  story: attr('string'),
  createdAt: attr('date', { defaultValue() { return new Date(); } }),
  updatedAt: attr('date', { defaultValue() { return new Date(); } }),

  // Associations.
  homes: hasMany('home', {async: true}),

  // Computed.
  fullName: computed('title', 'firstName', 'lastName', function() {
    return `${this.get('title')} ${this.get('firstName')} ${this.get('lastName')}`;
  }),

  photoFullURL: computed('photo', function() {
    return `${ENV.IMGIX_URL}/${this.get('photo')}`;
  }),

  homeLabelName: computed('firstName', 'spouseFirstName', function() {
    const _lbl = [this.get('firstName')];
    let spouse = this.get('spouseFirstName') || '';

    if (!!spouse.trim()) {
      let op = this.get('gender') === 'M' ? 'unshift' : 'push';
      _lbl[op](spouse);
    }

    return _lbl.join(' & ');
  }),

  spouseFullName: computed('spouseTitle', 'spouseFirstName', 'spouseLastName', function() {
    return `${this.get('spouseTitle')} ${this.get('spouseFirstName')} ${this.get('spouseLastName')}`;
  })
});
