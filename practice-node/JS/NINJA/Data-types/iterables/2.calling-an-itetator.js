// Calling an iterator explicitly
// Normally, internals of iterables are hidden from the external code. There’s a for..of loop, that works, that’s all it needs to know.
// But to understand things a little bit deeper let’s see how to create an iterator explicitly.

let str = "Hello!";

// does the same as
// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while(true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}
