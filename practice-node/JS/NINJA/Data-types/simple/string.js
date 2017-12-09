let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
// #1
function sum(a, b) {
  return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
// #2
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;


// Special chatacters
// \b
// \f
// \n
// \r
// \t
// \uNNNN
// \u{NNNNNNN}




'string'.length

let str = 'Hello';
str[0]; // H if str[1000] => undefiend
str.charAt(0); // H if str.charAt(1000) => ''
str[str.length - 1]; // 0

str[0] = 'h'; // error

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface





// str.indexOf
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

// two arguments
let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12


// if we need all changes
let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}


// if yes alert( ~-1 ); // 0, the same as -(-1+1)
if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // works
}


// includes, startWith, endsWith
alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, from position 3 there is no "id"
//
alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") );   // true, "Widget" ends with "get"





// Getting a substring: substring, substr and slice
let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
alert( str.slice(2) ); // ringify, from the 2nd position till the end
// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // gif


// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"
// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)


alert( str.substr(2, 4) ); // ring, from the 2nd position get 4 characters
alert( str.substr(-4, 2) ); // gi, from the 4th position get 2 characters



// code
// different case letters have different codes
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

let str = '';
for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ


// The call str.localeCompare(str2):
// Returns 1 if str is greater than str2 according to the language rules.
// Returns -1 if str is less than str2.
// Returns 0 if they are equal.
alert( 'Österreich'.localeCompare('Zealand') ); // -1
