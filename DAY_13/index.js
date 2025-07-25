"use strict";
console.log("Day 13 : The This keyword");

console.log("This is at the global", this);

// Inside of an object - Implicit Binding
const employee = {
  firstName: "Alex",
  id: "A10043",
  lastName: "B",

  returnThis: function () {
    return this;
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName} `;
  },
};
console.log("Employee id is", employee.id);
console.log("this inside the employee object", employee.returnThis());
console.log("Full constructed name this", employee.getFullName());

// Another example of Implicit Binding
const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "Jerry",
  age: 4,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old.`);
  };
  console.log(obj);
}
greetMe(tom);
tom.logMessage();

// Inside Function
function sayName() {
  console.log("this inside a function", this); // undefined
}

sayName();

function outer(a) {
  console.log("this inside an outer function", this); // undefined

  return function inner(b) {
    console.log("this inside an inner function", this); // undefined
  };
}
const outerResult = outer(5);
outerResult(3);

// Inside the Arrow Function

const getFood = () => this;

console.log(
  "this inside the arrow function defined in global scope",
  getFood()
);

// const food = {
//   name: "mango",
//   color: "yellow",

//   // getDesc: () => `${this.name} is ${this.color}`,
//   getDesc: function () {
//     return `${this.name} is ${this.color}`;
//   },
// };

// console.log(food.getDesc()); // undefine : cuz arrow function don't have own ["This"]
/**
 * To solve this.......use regular function that would solve this problem.
 * use arrow function.....> use this arrow fucntion one step down,cuz it finds his lexical scope or parent scope.
 */
const food = {
  name: "mango",
  color: "yellow",

  // getDesc: () => `${this.name} is ${this.color}`,
  getDesc: function () {
    return () => `${this.name} is ${this.color}`;
  },
};
const descFunc = food.getDesc();
console.log(descFunc());

// Explicit - Binding : call,apply,bind

// the call method
function greeting() {
  console.log(`Hello,${this.name} belongs to ${this.address} `);
}

const user = {
  name: "tapaScript",
  address: "All of YOU",
};

greeting.call(user);

const likes = function (hobby1, hobby2) {
  console.log(this.name + " " + "likes" + " " + hobby1 + " " + hobby2);
};

const person = {
  name: "tapas",
};

likes.call(person, "Eating", "sleeping");

// Use apply
const hobbyToApply = ["Teaching", "Programming"];
likes.apply(person, hobbyToApply);

// bind method
const newHobbies = function (hobby1, hobby2) {
  console.log(this.name + " " + "likes" + " " + hobby1 + " " + hobby2);
};

const officer = {
  name: "Bob",
};

const newFn = newHobbies.bind(officer, "Dancing", "sleeping");
newFn();

// the new binding [Constructor function]
const Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;
  this.log = function () {
    console.log(`${this.name} is a ${this.animal}`);
  };
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();
const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();
