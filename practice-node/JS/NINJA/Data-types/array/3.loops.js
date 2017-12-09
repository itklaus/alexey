let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
// or
for (let key in arr) {
  console.log( arr[key] ); // Apple, Orange, Pear
}
