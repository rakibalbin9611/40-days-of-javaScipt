console.log("40 Days of javaScript : Day - 14");

// What are we going to learn today?

// 1. Different Types of Error in JavaScript
// 2. try...catch syntax and flow
// 3. Real-World Use cases with try...catch
// 4. Throwing Error
// 5. Rethrowing Error
// 6. The try..catch..finally
// 7. Creating Custom Error
// 8. Self Assignment Operator

// parsing error -
// runtime error -

// What is an Exception in JavaScript?
// Ans: Exceptions are runtime errors that disrupt program execution.

// Examples:

// console.log(x); // ReferenceError: x is not defined

// let obj = null;
// console.log(obj.name); // TypeError: Cannot read properties of null

// console.log("hi" // SyntaxError:

// let arr = new Array(-1) // RangeError

// decodeURIComponent("%"); // URIError
// eval("var a = ;"); // EvalError

// try...catch

try {
  // logic or code
} catch (err) {
  // handle error
}

/*
    1. Code inside try gets executed.
    2. If no error in the try block, the catch block will be ignored and will not be
    executed.
    3. If there is an error in the try block, the execution of the try block will be
    suspended and the control will move to the catch block. In the catch block you
    can find the error details and do the needful.
*/
try {
  console.log("Execution start here");
  abc;
  console.log("Execution ends here");
} catch (err) {
  console.error("An error has occured");

  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

// Real world use case :
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error(`can't divided by zero`);
    }
    const result = a / b;
    console.log(`This result is ${result}`);
  } catch (error) {
    console.error("Got a Math error", error.message);
  }
}
divideNumbers(2, 0);

// Another real world example
const person = {
  name: "Tapas",
  address: {
    city: "Bangalore",
  },
};

function getPostalCode(user) {
  try {
    console.log(user.address.country.postalCode);
  } catch (error) {
    console.error("Error accessing property:", error.message);
  }
}

// getPostalCode(person);

function validateAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error(
        `Invalid input: Age must be a number. Your input is ${age}`
      );
    }
    console.log(`User's age is: ${age}`);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }
}

validateAge("Tapas");

// Rethrow
try {
  // do something with logic or code
} catch (error) {
  // do something with error
}

function validateForm(formdata) {
  try {
    if (!formdata.username) throw new Error("Username is mandatory");
    if (!formdata.email.includes("@")) throw new Error("Invalid email format");
  } catch (error) {
    console.error("Validation issues found", error.message);
    throw error; // rethrow
  }
}
// validateForm({ username: "tapas", email: "bademail" });

try {
  validateForm({ username: "Tapas", email: "bademail" });
} catch (error) {
  console.error("Showing error message for user creation", error.message);
}

try {
  // do something with logic or code
} catch (error) {
  // do something with error
} finally {
  // cleanup:
}

function processInformation(information) {
  try {
    console.log("Processing Information...");
    if (!information) throw new Error("No information available to process");
    console.log("Information processed");
  } catch (error) {
    console.error("Error!!", error.message);
  } finally {
    console.log("Cleanup : Closing database connection");
  }
}
processInformation();

// Custom Error

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function seniorCitzen(age) {
  if (age < 60) {
    throw new ValidationError("Your are not senior Citizen");
  }
  return "You are senior Citizen";
}

try {
  const message = seniorCitzen(45);
} catch (error) {
  console.error(`${error.name} ${error.message}`);
}
