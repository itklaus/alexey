// String
// When an operation expects a string, for object-to-string conversions, like alert
let obj = {};
console.log(obj);


// Number
// When an operation expects a number, for object-to-number conversions, like maths:
// explicit coversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;


// To do the conversion, Javascript tries to find and call three object methods:
// 1. Call obj[Symbol.toPrimitive](hint) if the method exists
// 2. Otherwise if hint is "string"
// ---obj.toString() and obj.valueOf(), whatever exists
// 3. Otherwise if hint is "nubmer" or "default"
// ---obj.valueOf() and obj.toString(), whatever exists
