// everything in javaScript is an object

// Constructor functions are the function that are used to create and object.

var a = new Array(3, 2, 1);
// here Array is an constructor fucntion
console.log(a);
//using simple technique as we do in other langauges
var b = [1, 2, 3];
console.log(b);
console.log(b.length);

var c = [1, 2, 3, "Hello"];
console.log(c);
// This is possible bcz everything in JS is object
// hence internally this array would also be stored as an object
// so all of this is a key value pair so 0th mapped to 1 ,1th mapped to 2 and so on
// 3rd is mapped to "Hello";
console.log(typeof c); // object type
// we can even have a fucntion inside an Array in JS;

var d = [1, 2, 3, 4, 5];
// How to empty this Array;

var e = d; // e pointing to same memory where d is pointing
console.log(e);
// var d = [];
console.log(d, e);
// we have just made d reffer to some other location that's why
// d = [] but e is still non empty

// Hence to make this empty;
d.length = 0;
console.log(e, d);

var x = [1, 2, 3];
x.length = 2;
console.log(x);
x.length = 5;
console.log(x);
// values would be filled with 'undefined'

var dogs = ["fiddo", "tommy", "loie"];
dogs.length = 2;
console.log(dogs);
