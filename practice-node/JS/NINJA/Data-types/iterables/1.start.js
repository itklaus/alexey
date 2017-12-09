// Iterables
// Iterable objects is a generalization of arrays. That’s a concept that allows to make any object useable in a for..of loop.

let range = {
  from: 1,
  to: 5
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {

  // 2. ...it returns the iterator:
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// now it works!
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// works!
for (let char of "test") {
  console.log( char ); // t, then e, then s, then t
}
