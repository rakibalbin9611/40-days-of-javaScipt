//Global Scope :
var name = "tapas";

function sayName() {
  console.log("Hello", name);
}

sayName();

console.log(name); // tapass

// Function Scope
function toDo() {
  var task = "Learning 40 Days of javaScript";
  console.log(task);
}
toDo();

// console.log(task);

// Scope chain

let globalVar = "I am a global variable";

function outer() {
  let outerVar = "I am an outer variable";

  function inner() {
    let innerVar = "I am an inner variable";
    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }
  inner();
}
outer();

// Variable shadowing

let message = "I am doing great";
function situation() {
  let message = "I am not doing great";
  console.log(message);
}
situation();
console.log(message);
