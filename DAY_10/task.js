// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
  function inner() {
    console.log(user); // Bob
  }
  let user = "Bob";
  inner();
}

outer();
/**
 * In this code, the output will be ‘Bob’ because of the scope chain rule and variable shadowing.
Inside the outer function, there is an inner function inner that logs user.
When inner is called, JavaScript looks for the variable user in its nearest scope.
Here, let user = "Bob" is declared inside outer, so inner finds this local user first instead of the global user = "Alice".
Therefore, console.log(user) outputs ‘Bob’.
 */

// 2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
/**
 * In this code, the variable total is declared globally (let total = 0;). This is bad practice because global variables can be accessed and modified by any part of the code, which makes bugs and accidental overwrites more likely.

A better approach is to declare total inside the function scope, so it’s protected and only managed where it’s needed.
In this case, since add() is meant to add numbers to total, total should be inside a function or returned properly, or better yet, managed with parameters and return values.
 */

// 3. Create a function with a nested function and log a variable from the parent function.
function parent() {
  let message = "inside parent";
  function child() {
    console.log(message);
  }
  child();
}
parent();

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
/**
 * The anser is no,We cant access it from outside.Variables declared with let or const are block-scoped, which means they only exist inside the {} block where they are declared.
 */

// 5. Write a function that tries to access a variable declared inside another function.
function outer() {
  let secret = "This is a secret!";

  function inner() {
    console.log(secret); // This works — inner can access outer
  }

  inner();
}

function another() {
  console.log(secret); // Error — secret is not defined here
}

outer();
another();

// 6. What will be the output and why?
// console.log(a);
let a = 10;

// its will give reference Error because a is not declared when a is log.ReferenceError: Cannot access 'a' before initialization.let and const are hoisted but they are not initialized.

// 7. Where is the age variable accessible?
function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);

// age variable is accessible in function scope (Only inside showAge)  line numbe 80.

// 8. What will be the output and explain the output?
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message); // "Hi"
  }

  inner();
}

outer();

// 9. What will be the output and why?
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x); // "Inner"
  }

  inner();
}

outer();
// Output will be Inner

// 10. What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
// OutPut will be -1,-2
// Closures let a nested function remember and access variables from its parent function’s scope, even after the parent function has finished executing.
