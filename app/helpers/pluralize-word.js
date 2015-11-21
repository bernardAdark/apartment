import Ember from 'ember';

export function pluralizeWord(params, namedArgs) {
  var word = params[0];
  return namedArgs.count === 0 || namedArgs.count > 1 ? Ember.String.pluralize(word) : word;
}

export default Ember.Helper.helper(pluralizeWord);
