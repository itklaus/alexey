// Map is a collection of keyed data items. Just like an Object. But the main difference is that Map allows keys of any type.

// The main methods are:
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – clears the map
// map.size – is the current elements count.

// For instance:
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3




// Map can also use objects as keys.
let john = { name: "John" };
// for every user, let's store his visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);
console.log( visitsCountMap.get(john) ); // 123


// !!To test values for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as the strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
