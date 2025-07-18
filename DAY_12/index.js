console.log("________40 Days of javaScript day 12_______");

// const car = prompt("Which is your favorite");

// let favCars = {
//   [car]: 5,
// };
// console.log(favCars);

// Construtor Function
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A3");
console.log(bmwCar);
console.log(audiCar);

// Function factory :
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(this.name);
    },
  };
}

const user1 = createUser("tapas", 39);
console.log(user1);
console.log(user1.name);

let profile = {
  name: "tapas",
  company: "CreoWis",
  message: function () {
    console.log(`${this.name} works at this ${this.company}`);
  },
};

console.log(profile.name); // tapas
console.log(profile.company); // creoWis

profile.message();

// object compare their references
let fruit = { name: "mango" };
const fruit1 = { name: "mango" };

console.log(fruit == fruit1); // false
console.log(fruit === fruit1); // false

fruit = fruit1;

console.log(fruit == fruit1); // true
console.log(fruit === fruit1); // true

// Static methods
// const target = { p: 1, q: 2 };
// const source = { a: 3, b: 5 };
const target = { p: 1, a: 2 };
const source = { a: 3, b: 5 };

const returnedObj = Object.assign(target, source);
console.log(returnedObj);

const obj = { name: "tapaScript" };
const obj2 = Object.assign({}, obj);

console.log(obj2); // {name:'tapaScript'}

const obj3 = {
  a: 1,
  b: { c: 3 },
};
const obj4 = Object.assign({}, obj3);
console.log(obj4); // {a: 1,b: { c: 3 }}

obj3.a = 5;
obj4.a = 100;
console.log(obj4.a); // 100
console.log(obj3.a); // 5

obj4.b.c = 40;

console.log(obj4.b.c); // 40
console.log(obj3.b.c); // 40 cause nested object cant hold different reference

// Object.entries: use => translate object to an Array
const myObj = {
  a: "tapaScript",
  b: 32,
};
const myArr = Object.entries(myObj);
console.log(myArr);
