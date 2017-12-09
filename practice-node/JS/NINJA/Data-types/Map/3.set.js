// Set – is a collection of values, where each value may occur only once.
// new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}




// Iteration over Set
let set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) alert(value);
// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys, for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
