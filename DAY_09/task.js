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
