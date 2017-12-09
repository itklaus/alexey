// The "While" loop
while (condition) {
  // code
}


// The "Do..while" loop
do {

} while (condition);


// The for loop the most often used one.
for (begin; condition; step) {
  // loop body
}


// Breaking the loop
while (true) {
  if (!value) break;
}


// Countinue
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
}


// Labels for break/continue
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (!input) break outer;
  }
}
