/**
 To find out whether a number is contained in the range
 exclusively/inclusively bounded by the numbers in the
 array

 ```javascript
 within([1, 10], 4, true); // true
 within([10, 1], 4, true); // true
 within([1, 10], 0, true); // false
 within([4, 10], 4, true); // true
 within([4, 10], 4, false); // false
 ```

 @method within
 @for Ember.Controller
 @param {Ember.Array} bounds
 @param {Number} n
 @return {boolean}
 @public
 */
export default function within(bounds, n, incl=true) {
  bounds.sort((a, b) => { return a > b });
  return incl
    ? (n >= bounds[0] && n <= bounds[1])
    : (n >  bounds[0] && n <  bounds[1]);
}
