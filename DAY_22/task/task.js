// 1. Pass a function to greet a user and then thank them
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function sayThankYOu() {
  console.log("Thank You");
}

greet("Rakib", sayThankYOu);

// 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract
function calculator(a, b, operationCallback) {
  return operationCallback(a, b); // Call the callback with a & b
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divided(x, y) {
  return y !== 0 ? x / y : "Error : Divison by zero";
}

// Test
console.log(calculator(5, 3, add)); // 8
console.log(calculator(5, 3, subtract)); // 2
console.log(calculator(5, 3, multiply)); // 15
console.log(calculator(5, 3, divided)); // 1.66...

// 3. Create a delayedMessage function that prints a message after a delay using setTimeout
function delayedMessage(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
    if (callback) {
      callback();
    }
  }, delay);
}

delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"));
