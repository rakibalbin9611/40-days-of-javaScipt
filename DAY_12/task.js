// 1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

// In this code, user.age is undefined. The nullish coalescing operator ?? checks if the value is null or undefined and, if the value is true then execute left side If false execute right side,so outPut will be Not provided.

// 2. What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

// In this code, if we try to modify it, it won't modify. Because the Object.freeze() method makes the object immutable, you can't add, remove, or change its properties.

// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring.
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name,
  company,
  company: {
    location: { city },
  },
} = person;
console.log(name); // Tapas

/** 4: Build a Student Management System
Store student details in an object (name, age, grades).
Implement a method to calculate the average grade using a function.
*/
const student = {
  name: "Rakib",
  age: 25,
  subject: {
    math: 85,
    chemisty: 80,
    biology: 70,
    Physics: 60,
  },
};

const getAvg = (student) => {
  const s = student.subject;
  console.log(s);
};
