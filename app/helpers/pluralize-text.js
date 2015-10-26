import Ember from 'ember';

export function pluralizeText(params, namedArgs) {
  var word = params[0];
  return namedArgs.count === 0 || namedArgs.count > 1 ? word + 's' : word;
}

export default Ember.Helper.helper(pluralizeText);
