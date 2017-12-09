// Terms: Unary, Binary, Operand
// An operand - is what operators are applied to.
// An operator in unary if it has a single operand.
let x = 1;
x = -x; // -1, unary negatin was applied

// An operator is binary if it has two operands. The same minus in the binary from as well:
let x = 1, y = 3;
console.log( y - x ); // 2, binary minus subtracts values


// Numberic conversion, unary +
// Converts non-numbers
console.log( +true  ); // 1
console.log( +""  ); // 0
console.log( +'2' ); // 2


// Operators precedence
// 16 unary plus      + 
// 16 unary negation  - 
// 14 multiplication  *
// 14 division        /
// 13 addition        +
// 13 subtraction     -
// 3 assignment       =


// Assignment
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a);
console.log(c);


// Remainder %
console.log(5 % 2); // 1


// Exponentiation **
console.log( 2**3 ); // 8


// Increment/decrement
counter++; // counter + 1, increment
counter--; // counter - 1, decrement
// Operators ++ and -- can be placed both after and bevore the variable.
// - When the operator goes after the variable, it's called a "postfix form": counter++
// - The "prefix form" is when the operator stands before the variable: ++counter
// IF WE'D LIKE TO INCREMENT, BUT USE THE PREVIOUS VALUE, THEN WE NEED THE POSTFIX FORM:
let counter = 0;
console.log( counter++ ); // 0


// Bitwise operators
// AND - &
// OR |
// XOR ^
// NOT ~
// LEFT SHIFT <<
// RIGHT SHIFT >>
// ZERO-FILL RIGHT SHIFT >>>


// Mofity-in-place
let n = 2;
n += 5;
n *=2; 


// Comma
let a (1 + 2, 3 + 4);
console.log(a); // 7

for (a = 1, b = 3, c = a * b; a < 10; a++){}






