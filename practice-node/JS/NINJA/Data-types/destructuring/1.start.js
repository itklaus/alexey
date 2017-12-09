// Array destructuring
// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]

// destructuring assignment
let [firstName, surname] = arr;
// let [firstName, surname] = "Ilya Kantor".split(' ');

console.log(firstName); // Ilya
console.log(surname);  // Kantor



// ingroe first elements
let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log( title ); // Consul


// Works with any iterable on the right-side
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);


// Assign to anything at the left-side
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');
alert(user.name); // Ilya




// In the previous chapter we saw the Object.entries(obj) method.
let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}



// If we want not just to get first values, but also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2




// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];




// runs only prompt for surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];
alert(name);    // Julius (from array)
alert(surname); // whatever prompt gets
