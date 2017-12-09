// -> Iterables are objects that implement the Symbol.iterator method, as described above.
// -> Array-likes are objects that have indexes and length, so they look like arrays.

let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

// Error (no Symbol.iterator)
// for (let item of arrayLike) {}

// Array.from
// works:
let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)

// Array.from(obj[, mapFn, thisArg])
// The second argument mapFn should be the function to apply to each element before adding to the array, and thisArg allows to set this for it.

let str = '𝒳😂';
// splits str into array of characters
let chars = Array.from(str);



// We can even build surrogate-aware slice on it:
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}
let str = '𝒳😂𩷶';
alert( slice(str, 1, 3) ); // 😂𩷶
// native method does not support surrogate pairs
alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)
