// Mathematij.toString() and obj.valueOf(), whatever existscal operations perform ToNumber coversion:
let obj = {
  toString() {
    return '2';
  }
}
console.log(obj * 2 ); // 4, ToPrimitive gives "2", then it becomes 2
console.log(obj + 2);  // 22 (ToPrimitive returned string => concatenation)
