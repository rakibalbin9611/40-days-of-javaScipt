// 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
{
  // === TDZ for firstName, lastName starts here ===
  // 'nickname' is declared with var — no TDZ for var

  console.log(nickname); //  undefined (var is hoisted and initialized)
  console.log(firstName); //  ReferenceError (TDZ)
  console.log(lastName); //  ReferenceError (TDZ)

  var nickname = "Tapper"; // var: no TDZ, hoisted as undefined, now assigned
  let firstName = "Tapa"; // TDZ for firstName ends here
  const lastName = "Script"; // TDZ for lastName ends here

  console.log(nickname); // "Tapper"
  console.log(firstName); // "Tapa"
  console.log(lastName); // "Script"
}

// 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.
// === Hoisting Example ===

console.log(a); // undefined (var is hoisted & initialized)
console.log(b); // ReferenceError (TDZ)
console.log(c); // ReferenceError (TDZ)

console.log(sayHello()); // Works! Function declaration is fully hoisted

var a = 10;
let b = 20;
const c = 30;

function sayHello() {
  return "Hello, Hoisting!";
}

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
