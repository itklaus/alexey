// splice
// delete arr[1] // arr[1] // undefined
let arr = ['I', 'study', 'JavaScript'];
// from index 1 remove 1 element
arr.splice(1, 1);
// remove 1 first elements and replace them with another
arr.splice(0, 1, "Let's", "dance");
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
console.log(arr);



// slice, new array
let str = "test";
let arr1 = ["t", "e", "s", "t"];

console.log( str.slice(1, 3) ); // es
console.log( arr1.slice(1, 3) ); // e,s

console.log( str.slice(-2) ); // st
console.log( arr1.slice(-2) ); // s,t



// Concat
let arr = [1, 2];
// merge arr with [3,4]
alert( arr.concat([3, 4])); // 1,2,3,4
// merge arr with [3,4] and [5,6]
// merge arr with [3,4], then add values 5 and 6
alert( arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
alert( arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// concat is don't Symbol
let arr = [1, 2];
let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert( arr.concat(arrayLike) ); // 1,2,something,else




// Seatching in array
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true


// !!!
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
alert( arr.includes(NaN) );// true (correct)




// find and findIndex
// Возвращает тру, если нашел и прекращает
let result = arr.find(function(item, index, array) {
  // should return true if the item is what we are looking for
});




// The find method looks for a single (first) element that makes the function return true.
// возращает все элементы, которые вернули тру
let results = arr.filter(function(item, index, array) {
  // should return true if the item passes the filter
});

// применяет к каждому элементу и возращает их
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});



// sort
let arr = [ 1, 2, 15 ];
arr.sort(); // the method reorders the content of arr (and returns it)
alert( arr );  // 1, 15, 2
// add
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}




let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1




let arr = names.split(', ');
let str = arr.join(';');



// reduce/reduceRight
let value = arr.reduce(function(previousValue, item, index, arr) {
  // ...
}, initial);

item – is the current array item.
index – is its position.
arr – is the array.

previousValue – is the result of the previous function call, initial for the first call.




// iterate forEach
arr.forEach(function(item, index, array) {
  // ... do something with item
});



Array.isArray
alert(typeof {}); // object
alert(typeof []); // same

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true






arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg is the optional last argument
