// Problem 01 : Odd or Even?
function isoddOrEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
  } else {
    console.log(`${num} is an odd number.`);
  }
}
isoddOrEven(10); // 10 is an even number.

// Problem 02 : Driving license eligibility
let age = 20;
if (age >= 18) {
  console.log("Your are eligible for driving license.");
} else {
  console.log("You are not eligible for driving license.");
}

// Problem 03: Calculate CTC with bonus
let monthlySalary = 12300;
const yearlySalary = monthlySalary * 12;
const bonus = yearlySalary * (100 / 20);
const totalCTC = yearlySalary + bonus;
console.log("After 20% bonus your total CTC is " + totalCTC);

// Problem 04 :Write a program for the Traffic Light Simulation.
let color = "Red";
if (color === "Red") {
  console.log("Traveller need to stop");
} else if (color === "Green") {
  console.log("Traveller will go");
} else {
  console.log("Invalid color");
}

// Problem 05 :  Create an Electricity Bill Calculator.
let units = 5; // units consumed per day
let unitCost = 150;

// Monthly bill
let monthlyBill = units * unitCost * 30;
console.log("Monthly Bill: " + monthlyBill + " rupees");

// Annual bill with 20% discount
let annualBill = monthlyBill * 12;
let discountedAnnualBill = annualBill * 0.8;
console.log(
  "Annual Bill with 20% discount: " + discountedAnnualBill + " rupees"
);

// Problem 06: Leap Year Checker
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("NOt leap Year");
}

// Problem 07 : Max of Three Number
const findMaxNum = (p, q, r) =>
  p > q && p > r
    ? console.log("P is the Max number")
    : q > p && q > r
    ? console.log("Q is the Max number")
    : console.log("R is the Max number");

findMaxNum(3, 44, 5); // Output: Q is the Max number

// Problem 08 : Bitwise Doubling
let count1 = 5;
console.log(count1 << 3);
