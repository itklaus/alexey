let user = { name: 'John' };
let admin = user; // copy the refernce


let a = {};
let b = a; // copy the reference
console.log( a == b ); // true
console.log( a === b ); // true


const user {
  name: 'John'
};
user.age = 25;
user = {} // Error (can't reassign user)



// Cloning and merging, Object.assign
// Defoult:
let user = {
  name: "John",
  age: 30
};
let clone = {}; // the new empty object
// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
console.log( user.name ); // still John in the original object

// Object.assign(dest[, src1, src2 ..])
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// overwrite name, add isAdmin
Object.assign(user, { name: "Pete", isAdmin: true });

let clone = Object.assign({}, user); // new Object
