let fruits = ["Banana"]
let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true
arr.push("Pear"); // modify the array by reference
alert( fruits ); // Banana, Pear - 2 items now
