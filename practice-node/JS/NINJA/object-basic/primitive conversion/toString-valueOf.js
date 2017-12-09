// it there's no Symbol.toPrimitive then JavaScript tries to find them and try in the order:
// -- toString => valueOf
// -- valueOf => toString

// For instance
let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500



// Often we want a single "catch-all" place to handle all primitive coversions.
let user = {
  name: "John",

  toString() {
    return this.name;
  }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500
