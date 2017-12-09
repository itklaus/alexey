let user = {
  name: "John",
  age: 30
};

// Object.keys(user) = [name, age]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]

// loop over values
for (let value of Object.values(user)) {
  console.log(value); // John, then 30
}


// Usually that’s convenient. But if we want symbolic keys too, then there’s a separate method Object.getOwnPropertySymbols that returns an array of only symbolic keys. Also, the method Reflect.ownKeys(obj) returns all keys.
