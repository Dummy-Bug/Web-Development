function test() {
  var a = "Inside the function";
  console.log(a);
}
test();

// we can also assign a function to a Variable;

var x = function check() {
  console.log("Hello functions");
};
console.log(x());

// without name as well

var x = function () {
  console.log("Hello functions");
};
console.log(x());
// fucntion can also return a function
console.log("****************");

function test2() {
  var a = "Inside the function";
  console.log(a);
  return function () {
    console.log("yes");
  };
}
var z = test2();
console.log(z());

// we can pass a function as a parameter as well

function temp(z) {
  console.log("passed fucntion z()");
  console.log("executing z()");
  console.log(z());
}
temp(z);
// fucntions arent returning anything that's why printing undefined

// These are called Callbacks

// functions that has no name is called immediatly invoke function

(function (a) {
  console.log(a);
})(10);
// calling with value = 10;

console.log(window);

// everything in JS is attached to wondow object
// Thus window object has everything that is there in JS;

// thus when we define any var say
var a = 29;
// then it can also be accessed using window object;

console.log(window.a);

// but IIF never gets attached to the Window;
