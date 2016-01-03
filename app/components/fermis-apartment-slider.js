import Ember from 'ember';

const {
  Component,
  computed,
  run: { bind }
} = Ember;

export default Component.extend({
  name: 'default',
  behaviour: 'drag-tap',
  tooltips: true,
  range: computed('min', 'max', function() {
    return {
      min: this.get('min'),
      max: this.get('max')
    }
  }),

  start: computed('openHandle', 'closeHandle', function() {
    return [this.get('openHandle'), this.get('closeHandle')];
  }),

  didInsertElement() {
    this._super(...arguments);
    let slider = this.$().get(0);
    let options = this.getProperties('start', 'connect', 'range', 'behaviour', 'step', 'margin');

    noUiSlider.create(slider, options);
    slider.noUiSlider.on(`set.${name}`, bind(this, 'bubbleUp'));
  },

  bubbleUp(values) {
    values.push(this.get('name'));
    this.sendAction('action', values);
  }
});
