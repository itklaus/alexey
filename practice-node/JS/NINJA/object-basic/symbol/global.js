// read from the global refistry
let id = Symbol.for('id'); // if the symbol did not exist, it is created

// read it again
let idAgain = Symbol.for('id');

console.log( id === idAgain ); // true!



// Symbol.keyFor
let sym = Symbol.for('name');
let sym2 = Symbol.for('id');
// get name from symbol
// So it doesn't work for non-global symbols
console.log(Symbol.keyFor(sym));  // name
console.log(Symbol.keyFor(sym2)); // id
