let billion = 1e9;
let ms = 1e-6;
console.log( billion, ms );


// Hex, binary and octal numbers
// Hex 0x :
console.log(0xff);
console.log(0xFF);


// to String(base)
let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 1111111

// The base can vary from 2 to 36. By default it's 10.
// base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.
// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
// base=36 is the maximum, digits can be 0..9 or A..Z. Short url.


// Math.foor - Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil - Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round - Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4 and -1.1 becomes -1.
// Math.trunc - Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

console.log( "x" +  Math.floor(1.23456 * 100) / 100 );
console.log( "X" + 123.124.toFixed(2) );

// Number() ==> +num.toFixed(5) -> He return String


// Imprecise calculations
console.log(+(0.1 + 0.2).toFixed(2));


// Tests: isFinite and isNaN
isNaN(NaN); // true
isNaN("str"); // true

// will be true unless you enter Infinity, -Infinity or not a number
isFinite('15') // true


alert( parseInt('100px') ); // 100
alert( parseInt('0xff', 16) ); // 255
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

// not including 1
alert( Math.random() ); // 0.1234567894322

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

alert( Math.pow(2, 10) ); // 2 in power 10 = 1024
