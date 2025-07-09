console.log("Day-11 of 40 days of javaScript");

// Closures : A function that allowed to access to their outer function even after the outer function has been executed

function outer() {
  let x = 20;
  return function inner() {
    console.log(x);
  };
}
const func = outer();
func();

// lets anoter example........
function outerCount() {
  let count = 0;
  return function innerCount() {
    count++;
    console.log(count);
  };
}
const retVal = outerCount();
retVal();
retVal();
retVal();

//_____________Real World Example__________________
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposite: (amount) => {
      balance = balance + amount;
      console.log("Deposited", amount, "Current balance", balance);
    },
    withdraw: (amount) => {
      if (amount > balance) {
        console.warn("Insifficient balance");
      } else {
        balance = balance - amount;
        console.log("Withdrawn", amount, "Current balance", balance);
      }
    },
    checkBalance: () => {
      console.log("Current Balance", balance);
    },
  };
}

const tapaScriptAccount = createBankAccount(500);
console.log(tapaScriptAccount.withdraw(200));
console.log(tapaScriptAccount.withdraw(50));
console.log(tapaScriptAccount.withdraw(20));
console.log(tapaScriptAccount.checkBalance());

// ________Timer Example_________
function timer() {
  let secs = 0;

  return function () {
    secs++;
    console.log("elaspsed seconds ", secs);
  };
}

const timerInstance = timer();
timerInstance(); // 1
timerInstance(); // 2
timerInstance(); // 3

// Closure in Event handler

// function setupButton() {
//   let clickCount = 0;

//   document.getElementById("myButton").addEventListener("click", function () {
//     clickCount++;
//     console.log(`Button clicked ${clickCount} times`);
//   });
// }

// setupButton();
