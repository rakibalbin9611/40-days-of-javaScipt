// Task 01 : Generate a Pyramid Pattern using Nested Loop as it is shown below:

for (let i = 1; i <= 5; i++) {
  let row = ""; //every line start empty string
  for (let j = 1; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}

// Task 02 : Create Multiplication table
let n = 3;
for (let i = 1; i <= 10; i++) {
  let mul = n * i;
  console.log(n + " X " + i + " = " + mul);
}

// Task 03: Find the all odd numbers between 1 to 500 and print them on console.

let sum = 0;
for (let i = 1; i <= 500; i += 2) {
  sum += i;
}
console.log(sum);

// Task 04 : Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// Task 05 : Reverse Digits of a Number (Using while loop)
function reverseDigits(n) {
  let rev = 0;
  while (n != 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}

console.log(reverseDigits(9876)); // Output: 6789
