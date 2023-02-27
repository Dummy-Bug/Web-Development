// var obj = new Object();

// var obj = {};

var dog = {
  name: "ramu",
  breed: "pitbull",
  bark: function () {
    console.log("Bow,Bow");
  }
};
// console.log(dog.name);
// console.log(dog["name"]);

var c = "name";

console.log(dog.c);
// This gives undefined
console.log(dog[c]);
// this would work also called dynamic key;

console.log(dog.bark());

function test() {
  console.log(arguments);
  // no need to receive three params;
  // just use arguments keyword;
  console.log(typeof arguments);
  // we can think of arguments as an Array;
}
test(1, 2, "Hello");
