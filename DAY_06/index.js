console.log("Day 06");

// REST parameter
function calc(a, b, ...rest) {
  console.log(a, b, rest);
}

calc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Nested function
function outer() {
  console.log("Outer");
  return function inner() {
    console.log("inner");
  };
}
const retFunc = outer();
console.log(retFunc());

// Call back function :
function foo(func) {
  console.log("foo");
  func();
}
foo(function () {
  console.log("buz");
});

// Pure function
let greetingMsg = "Hola";
function greeting(name) {
  return greetingMsg + name;
}
console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));

greetingMsg = "Namaste";

console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));

// Higher order function : has two things

// callback functions : takes one or more functions as arguments
function getCamera(camera) {
  camera();
}
getCamera(function () {
  console.log("Sony");
});

// Return function as it's result
function returnFunc() {
  return function () {
    console.log("Hello");
  };
}
const retFun = returnFunc();
retFun();

// IIFE : Immediately Invoke function Expression
(function (count) {
  console.log("IIFE", count);
})(6);

// Recursion

function fetchWater(count) {
  console.log("Fetching water....", count);
  if (count === 0) {
    console.log("No more water is left to fetch....");
    return;
  }
  fetchWater(count - 1);
}

fetchWater(5);
