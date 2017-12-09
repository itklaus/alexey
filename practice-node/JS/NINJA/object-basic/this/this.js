// This in methods
// if we used this.name instead of user.name inside the console.log();, then the code would work.
let user = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(this.name); // user.name
  }
};
user.sayHi(); // John



// The value of 'this' is evaluated during the run-time. And it can be anything.
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same functions in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)



// example:
let hi = user.hi;
hi(); // Error, because this is undefined
// two:
(user.name == "John" ? user.hi : user.bye)(); // Error!



// Arrow function have no "this"
// take it from oyter context
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};
user.sayHi(); // Ilya
