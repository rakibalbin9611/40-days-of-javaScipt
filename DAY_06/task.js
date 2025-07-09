// 1. Write a Function to Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (fahrenheit = (celsius * 9) / 5 + 32);
const result = celsiusToFahrenheit(100);
console.log(result); // 212

// 2. Create a Function to Find the Maximum of Two Numbers
const findMax = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
const maxNum = findMax(-4, -1);
console.log(maxNum);

// 3. Function to Check if a String is a Palindrome
const isPalindrome = (str) => {
  let forward = "";
  let backward = "";
  for (let i = 0; i < str.length; i++) {
    forward += str[i];
  }

  for (let i = str.length - 1; i >= 0; i--) {
    backward += str[i];
  }
  if (forward === backward) {
    console.log("Palindrome");
  } else {
    console.log("is not palindrome");
  }
};
const palindrome1 = isPalindrome("level");
const palindrome2 = isPalindrome("hello");
const palindrome3 = isPalindrome("madam");

// 4. Write a Function to Find Factorial of a Number
let findFactorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
};
const res = findFactorial(5);
console.log(res);

// 5. Write a function to Count Vowels in a String
function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World")); // 3
console.log(countVowels("dania")); // 3
console.log(countVowels("Programming")); // 3

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

const capitalizeWords = (sentence) => {
  let result = "";
  let capitalizeNext = true;
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (capitalizeNext && char !== " ") {
      result = result + char.toUpperCase();
      capitalizeNext = false;
    } else {
      result = result + char;
    }
    if (char === " ") {
      capitalizeNext = true;
    }
  }
  return result;
};
const capitalWord = capitalizeWords("we are looking for a webdevloper");
console.log(capitalWord);

// 7. Use an IIFE to Print “Hello, JavaScript!”
(function () {
  console.log("Hello, JavaScript!");
})();

// 8. Create a Simple Callback Function
function greet(name, callback) {
  callback(name);
}

const sayHello = (name) => {
  console.log("Hello," + name + "!");
};

greet("Rakib", sayHello);

// 9. Create Call Stack Execution Diagram for this flow

/**
 * function f1() {}
function f2() {
    f1();
}
f2();

*Global Execution Context
f2 Execution Context
 f1 Execution Context
 f1 finishes → pops
f2 finishes → pops
 Global finishes → pops
 */

// 10. Create Call Stack Execution Diagram for this flow

// ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
// │             │    │     f2()    │    │             │    │     f3()    │
// │    GEC      │ →  ├─────────────┤ →  │    GEC      │ →  ├─────────────┤
// │             │    │    GEC      │    │             │    │    GEC      │
// └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘

// ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
// │     f1()    │    │     f3()    │    │             │    │     f1()    │
// ├─────────────┤ →  ├─────────────┤ →  │    GEC      │ →  ├─────────────┤
// │     f3()    │    │    GEC      │    │             │    │    GEC      │
// ├─────────────┤    └─────────────┘    └─────────────┘    └─────────────┘
// │    GEC      │
// └─────────────┘
