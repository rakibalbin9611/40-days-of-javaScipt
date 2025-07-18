const student = {
  name: "Rakib",
  age: 25,
  subject: {
    math: 85,
    chemisty: 80,
    biology: 70,
    physics: 60,
  },
};

function calculateAverage(subjects) {
  const marks = Object.values(subjects);
  console.log(marks);
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}

function printGrade(average) {
  if (average > 80) {
    console.log("Grade is A");
  } else if (average > 60) {
    console.log("Grade is B");
  } else {
    console.log("Grade is C");
  }
}

const average = calculateAverage(student.subject);
console.log(`Average: ${average}`);
printGrade(average);

______________________________________________________________________;
// 1. Store books in an object
const books = {
  "The Alchemist": 3,
  "Atomic Habits": 0,
  "Clean Code": 5,
};

// 2. Function to check if a book is available
function checkAvailability(bookName) {
  if (books[bookName] === undefined) {
    console.log(bookName + " is not found in the inventory.");
  } else if (books[bookName] > 0) {
    console.log(bookName + " is available. Quantity: " + books[bookName]);
  } else {
    console.log(bookName + " is out of stock.");
  }
}

// 3. Function to restock books
function restockBook(bookName, quantity) {
  if (books[bookName] === undefined) {
    books[bookName] = quantity; // add new book
    console.log(bookName + " added with quantity: " + quantity);
  } else {
    books[bookName] += quantity; // increase existing quantity
    console.log(bookName + " restocked. New quantity: " + books[bookName]);
  }
}

// ✅ Example usage
checkAvailability("Atomic Habits"); // out of stock
restockBook("Atomic Habits", 5); // restock it
checkAvailability("Atomic Habits"); // now available

checkAvailability("The Alchemist"); // available
restockBook("New Book", 3); // add new book
checkAvailability("New Book"); // now available

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
const student1 = {
  name: "Rakib",
  age: 20,
  city: "Dhaka",
};

const keys = Object.keys(student);
console.log(keys); // ["name", "age", "city"]

const entries = Object.entries(student);
console.log(entries); // [
//   ["name", "Rakib"],
//   ["age", 20],
//   ["city", "Dhaka"]
// ]

/**
 * Object.keys() return key of this object and Object.entries() return [keys and value]
 * 
 * 
 * ________________________________________________________________________________________
 * 
 * 7. How do you check if an object has a certain property?
 *
  1. in Operator
      The in operator checks if a property exists in the object — including inherited properties.
      const student = {
                    name: "Rakib",
                    age: 20
      };

console.log("name" in student); // true
console.log("city" in student); // false

2. hasOwnProperty() Method
  This method checks if the property exists directly on the object (not inherited).
  console.log(student.hasOwnProperty("name")); // true
  console.log(student.hasOwnProperty("city")); // false

 */

// 8. What will be the output and why?
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
/**
 * The output will be "Doe".In this code person and newperson pointing the same object.JavaScript object are referrences type not copied by value.Since person and newPerson refer to the same object,the change is reflected in both.
 * So, it's log "Doe"
 */

// 9. What’s the best way to deeply copy a nested object? Expalin with examples
// Understanding Deep Copy vs. Shallow Copy
const originalObject = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
  hobbies: ["reading", "hiking"],
};

const deepCopy = JSON.parse(JSON.stringify(originalObject));

console.log("Original:", originalObject);
console.log("Deep Copy:", deepCopy);

// Modify the deep copy
deepCopy.address.city = "Newtown";
deepCopy.hobbies.push("coding");

console.log("\nAfter modification:");
console.log("Original:", originalObject);
console.log("Deep Copy:", deepCopy);

// Output:
// Original: { name: 'Alice', address: { street: '123 Main St', city: 'Anytown' }, hobbies: [ 'reading', 'hiking' ] }
// Deep Copy: { name: 'Alice', address: { street: '123 Main St', city: 'Anytown' }, hobbies: [ 'reading', 'hiking' ] }
//
// After modification:
// Original: { name: 'Alice', address: { street: '123 Main St', city: 'Anytown' }, hobbies: [ 'reading', 'hiking' ] }
// Deep Copy: { name: 'Alice', address: { street: '123 Main St', city: 'Newtown' }, hobbies: [ 'reading', 'hiking', 'coding' ] }

// 10. Loop and print values using Object destructuiring
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (const { name, address, age } of users) {
  console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
}
