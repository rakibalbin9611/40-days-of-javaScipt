console.log(".......Task.......");
// 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation. Please cover the following situations.
// JavaScript this Keyword — Situation vs Value Table into the index.html file.

// i. At the Global Scope
console.log("Global Scope:", this); // In browser : window object

//  With "use strict":
("use strict");
console.log(this); // undefined

//  ii. Inside an Object Method
const obj1 = {
  name: "Rakib",
  greet: function () {
    console.log(this.name);
  },
};
obj1.greet(); // Output: "Rakib"

// iii. Inside a Standalone Non-Arrow Function
function standaloneFunction() {
  console.log("Standalone Function:", this);
}
standaloneFunction(); // In non-strict mode: window (browser), in strict mode: undefined

// iv. Inside a Standalone Arrow Function
const arrowFunction = () => {
  console.log("Arrow Function:", this);
};
arrowFunction(); // In both strict and non-strict mode: inherits from enclosing scope (global: window in browser, undefined in module/strict)

// v. Arrow Function as Object Method
const objWithArrow = {
  name: "Rakib",
  greet: () => {
    console.log("Arrow Method:", this);
  },
};
objWithArrow.greet(); // Inherits 'this' from enclosing scope (not objWithArrow)

// vi. Inside a Constructor Function
function Person(name) {
  this.name = name;
  console.log("Constructor Function:", this);
}
const person1 = new Person("Rakib"); // 'this' refers to the new instance (person1)

// 2. What is the problem here? Fix it to log the correct name and explain the fix.
// The greet method uses a regular function, so 'this' refers to the user11 object.
// Therefore, this.name correctly logs "tapaScript".
const user11 = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user11.greet(); // Output: Hello, tapaScript!

// 3. Can you explain what is the problem here and fix the issue to log the correct name?
const obj88 = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFunc = obj88.greet;
// Problem: greetFunc is called without an object context, so 'this' is undefined (or window in non-strict mode).
// Solution: Bind the correct context using bind, call, or apply.

greetFunc(); // Incorrect: 'this' is not obj

// Fix 1: Use bind to permanently bind 'this' to obj
const boundGreet = greetFunc.bind(obj88);
boundGreet(); // Output: Hello, Tom!

// Or, call greet with obj as context directly:
greetFunc.call(obj88); // Output: Hello, Tom!

// 4. What is the problem with the following code? Why isn't it logging the name correctly?
const user20 = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

user20.greet();
// This code works as intended and does log the name correctly. Here’s why:
// The greet method defines an arrow function inner().
// Arrow functions do not have their own this; they inherit this from their enclosing scope.
// In this case, this inside inner refers to the user20 object, because greet is called as user20.greet().If we use regular function it would bound to undefined(In strict mood) or window object.

// 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details
const Sports = function (name, playerNumbers) {
  this.name = name;
  this.playerNumbers = playerNumbers;
  this.log = function () {
    console.log(`${this.name} has ${this.playerNumbers} players`);
  };
};
const mumbaiIndians = new Sports("mumbaiIndians", 20);
mumbaiIndians.log();
const kolkataKnightRiders = new Sports("kolkataKnightRiders", 26);
kolkataKnightRiders.log();

// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

// Solution 1: Direct assignment
car2.describe = car1.describe;
car2.describe(); // Output: This car is a BMW X1.

// Solution 2: Using call
car1.describe.call(car2); // Output: This car is a BMW X1

// Solution 3: Using apply
car1.describe.apply(car2); // Output: This car is a BMW X1.

// Solution 4: Using bind
const describeCar2 = car1.describe.bind(car2);
describeCar2(); // Output: This car is a BMW X1.

// 7. What will be the output of the following code and why?
const person4 = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person4.sayHello();
person4.sayHelloArrow();
// Options are:

// A: "Charlie" and "Charlie"
// B: "Charlie" and undefined
// C: "Charlie" and "" (empty string)
// D: undefined and "Charlie"

// Correct answer: B ("Charlie" and undefined)
// Explanation: sayHello uses a regular function, so 'this' refers to person4 and logs "Charlie". sayHelloArrow is an arrow function, so 'this' refers to the global scope (window in browser, undefined in strict mode), so this.name is undefined.

// Actual output:
person4.sayHello(); // "Charlie"
person4.sayHelloArrow(); // undefined
