let id = Symbol('id');

// If we want to use a symbol in an object literal, we need square brackets.
let user = {
  name: 'John',
  [id]: 123 // not just "id: 123"
}

console.log(user);
