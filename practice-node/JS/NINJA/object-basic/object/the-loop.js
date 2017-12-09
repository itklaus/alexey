let user = {
  name: 'John',
  age: 30,
  isAdmin: true
}

for (let key in user) {
  console.log(key); // name, age, isAdmin
  console.log(user[key]); // John, 30, true
}


// if +49 .. non-integer properties are listed in the creation order
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {
  console.log(code); // 1, 41, 44, 49
}
