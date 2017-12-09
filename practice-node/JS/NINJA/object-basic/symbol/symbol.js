// "Symbol" value represents a unique identifier
// id is a new symbol
let id1 = Symbol('id');

// id is a symbol with the description "id"
let id2 = Symbol('id');

console.log(id1 == id2); // false

// They don't auto-covert
console.log(id1.toString());
