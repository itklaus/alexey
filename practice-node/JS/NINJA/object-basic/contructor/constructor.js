function User(name) {
  // this = {}
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false





function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new User
alert(john.name); // John




// RETURN:
function BigUser() {
  this.name = "John";
  return { name: "Godzilla" };  // <-- returns an object
}
alert( new BigUser().name );  // Godzilla, got that object ^^


function SmallUser() {
  this.name = "John";
  return; // finishes the execution, returns this
}
alert( new SmallUser().name );  // John



// METHOD:
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}
