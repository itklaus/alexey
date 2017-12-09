function makeUser(name, age) {
  return {
    name, // same as name: name
    age   // same as age: age
  }
}

let user = makeUser('John', 30);
console.log(user.name);


// We can use both normal properties and shorthands in the same object
let user = {
  name, // same as name: name
  age: 30
}
