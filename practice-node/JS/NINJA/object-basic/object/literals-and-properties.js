let user = {
  name: 'John',
  age: 30
}

console.log(user.name);
console.log(user['name']);

user.isAdmin = true; // add
delete user.isAdmin; // delete

// next square brackets
user['likes birds'] = true; // add

let key = 'name a variable';
user[key] = true;


// computed properties
let fruit = 'apple';
let bag = { // or baf = {} 
  [fruit]: 5
};
console.log(bag.apple); // 5, if fruit='apple'
