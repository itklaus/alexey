// TO STRING
let value = true;
String(value);


// TO NUMBER
// Numeric conversion happens in mathematical functions and expressions automatically.
// Numeric conversion rules:
undefined  => NaN
null       => 0
true/false => 1/0
String     => Whitespaces from the start and th end are removed. Then, if the remaning string is empty, the result is 0. Otherwise, the number is "read" from the string. An error gives NaN.

// !! Addition '+' concatenates strings


// TO BOOLEAN
// It happens in logical operations, but also can be performed manually with the call of Boolean(value).
// The conversion rule:
Values that are intuitively "empty", like 0, an empty string, null, undefined and NaN become false.
Other values become true
 
