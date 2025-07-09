// 1. What will be the output of the following code and why?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
/**
 * The output will be 1 and then 2.
 * This is because each time the `inner` function is invoked, it increments the `count` variable by 1.
 * The `inner` function has access to the `count` variable defined in the `outer` function due to closure.
 * Since `outer` is called only once, the same `count` variable is shared across all calls to `counter()`.
 * Therefore, the value of `count` is preserved between calls and keeps incrementing with each invocation.
 */

// 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
/**
 * The output will be 100.
 * This is because the `testClosure` function defines a variable `x` with the value 10
 * and returns an inner function that returns `x * x`.
 * When `testClosure()` is called, it returns the inner function.
 * The second `()` immediately invokes that inner function.
 * Due to closure, the inner function still has access to `x` from its outer scope.
 * So it returns 10 * 10, which is 100.
 */

// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

const createClickCounter = () => {
  let countClick = 0;

  document.getElementById("myBtn").addEventListener("click", () => {
    countClick++;
    console.log(`Button clicked ${countClick} times`);
  });
};

createClickCounter();

// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15

// 5. What happens if a closure references an object?
// The object is garbage collected immediately
// The object remains in memory as long as the closure exists
// The object is automatically cloned
// None of the Above.

// Answer is the object remains in memory as long as the closure exists.

// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.
function createCounter() {
  let count = 0; // This value is private

  return {
    increment: function () {
      count++;
      console.log(`Count after increment: ${count}`);
      return count;
    },
    decrement: function () {
      count--;
      console.log(`Count after decrement: ${count}`);
      return count;
    },
    reset: function () {
      count = 0;
      console.log(`Count has been reset to: ${count}`);
      return count;
    },
  };
}

// Example usage:
const counter12 = createCounter();

counter12.increment(); // increment: 1
counter12.increment(); // increment: 2
counter12.decrement(); // decrement: 1
counter12.reset(); // reset to: 0
