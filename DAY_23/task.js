// 1. Create Your First Promise

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello promises");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result);
});

// 2. Create a Promise that rejects
const errorPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

// Handle the rejection
errorPromise
  .then((result) => {
    console.log(result); // This won't run
  })
  .catch((error) => {
    console.error(error); // Output: Something went wrong!
  });

// 3. Simulate Coin Toss
// Coin Toss Promise
function coinToss() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = Math.random() < 0.5 ? "Heads" : "Tails";
      resolve(result);
    }, 1000); // 1 second delay
  });
}

// Use the promise
coinToss().then((result) => {
  console.log("Coin toss result:", result);
});

// 4. Promise with Condition
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You are an adult");
    } else {
      reject("You are underage");
    }
  });
}

checkAge(20)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// 5. Chain Promises Sequentially
// Step 1
const step1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Step 1 done");
    resolve();
  }, 1000);
});

// Step 2
const step2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 done");
      resolve();
    }, 1000);
  });

// Step 3
const step3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 done");
      resolve();
    }, 1000);
  });

// Chain them
step1
  .then(step2)
  .then(step3)
  .then(() => {
    console.log("All steps completed!");
  });

// 6. Value Transformation in Chain
/* Create a Promise that resolves with 5.
Chain .then() handlers to double it, then square it.
Final output should be 100. */

const numberPromise = new Promise((resolve, reject) => {
  resolve(5);
});

numberPromise
  .then((num) => {
    return num * 2;
  })
  .then((num) => {
    return num * num;
  })
  .then((result) => {
    console.log("Final result is ", result);
  });

/* 7. Chain with Random Rejection
First .then() resolves to "Start".
Second .then() randomly throws an error or returns "Continue".
Handle rejection gracefully. */

const chainPromise = new Promise((resolve, reject) => {
  resolve("Start");
});

chainPromise
  .then((msg) => {
    console.log(msg);
    if (Math.random() < 0.5) {
      throw new Error("Random failure occure");
    } else return "Continue";
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error("Caught error", error.message);
  })
  .finally(() => {
    console.log("Process finished (success or failure).");
  });

/* 8. Multiple then() calls on same Promise
Create a single resolved Promise.
Attach two different .then() handlers to it.
Explain that both run independently. */

// A single resolved Promise
const myPromise1 = Promise.resolve("Hello World");

// Attach first .then()
myPromise1.then((msg) => {
  console.log("First handler:", msg.toUpperCase());
});

// Attach second .then()
myPromise1.then((msg) => {
  console.log("Second handler:", msg.toLowerCase());
});
