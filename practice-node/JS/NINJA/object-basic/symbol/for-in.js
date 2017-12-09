// Symbols are skipped by for..in
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log( "Direct: " + user[id] );



// Object.assign
let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);
console.log( clone[id] ); // 123



// Property keys of other types are coerced to string
let obj = {
  0: "test" // same as "0": "test"
}
console.log(obj['0']); // test
console.log(obj[0]); // test
