// Function expression
// A Function Expression is created when the execution reaches it and is usable from then on.

let age = prompt('What is your age?', 18);

let welcome;

if (age < 18) {
  welcome = function() {
    console.log("Hello!");
  };
} else {
  welcome = function() {
    console.log('Greetings!');
  };
}

welcome(); // ok now, dec not found


// Arrow Function
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome(); // ok now



