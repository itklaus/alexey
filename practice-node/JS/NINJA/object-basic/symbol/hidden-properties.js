let user = {name: 'John'};
let id = Symbol('id');

// if we want to store an 'identifier' for the object user
user.id = "ID Value";
console.log( user.id );

// Now note that if we used a string "ID" instead of a symbol for the same purpose, then there would be a conflict:
user.id = "new Value";
console.log(user.id); // two value
