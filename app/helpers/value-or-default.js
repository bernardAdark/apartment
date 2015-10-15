import Ember from 'ember';

export function valueOrDefault(params/*, hash*/) {
  var value = params[0],
      defaultValue = params[1] || '-';
  
  return (value) ? value : defaultValue;
}

export default Ember.Helper.helper(valueOrDefault);
