// All these questions have been asked
// in JS interview because you won't be using
// such questions in your office work

console.log("Hello world");

var a = 5; // defining a variable
console.log(a);

var b = null;
console.log(b);

var c;
// printing unedined value
console.log(c);

console.log(typeof null);
// type of null is an object;

console.log(typeof c);
// type of undefined variable will
// always be undefined
console.log(typeof typeof c);
// type would be string bcz typeof(c)
// would return string "undefined"

console.log(typeof NaN);
// type would be a number
console.log(+"56");
// '+' operator will convert string into a number
// it is called explicit coercion
console.log(+"ABC");
// NaN because this string cannot be converted into number

console.log("Hello" + " ABC");
console.log(8 + "6");
console.log(8 + "8");
console.log(4 + 3 + "Hello");
// bcz '+' is from left to right
// hence first 4+3 = 7 then 7+'hello'
// bcz left operand is int and right is string
// convert left operand into string then concatenate it
// then print the result
console.log(typeof (4 + 3 + "Hello"));
// string type
console.log(typeof +"56");
console.log(typeof (4 + 3 + "55"));

// loosely typed langauge like python
// no need to define variable types
// it is an interpreated langauge
var a = 10;
var b = "10";
console.log(a == b);
// reurned True bcz converted a into
// string
console.log(a === b);
// tripe eqaul to won't autoconvert

var a = null;
var b = undefined;

console.log(a == b);
// both signifies that there is no value hence
// true
console.log(a === b);
// but their type is different hence
// false

var a = NaN;
var b = NaN;

console.log(a == b);
// because not a number can be anything
// except a number
