console.log(".......Task......");

// 1. What will be the output of the following code?
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name); // ReferenceError
}

// 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

function processPayment(amount) {
  let balance = 500;
  try {
    if (amount <= 0) throw new Error("Amount should be greater than zero");
    if (amount > balance) throw new Error("Amount cannot exceed balance");
    console.log("Your amount is :", amount);
  } catch (error) {
    console.error("An error has occurred", error.message);
  }
}
processPayment(200); // Your amount is : 200
processPayment(600); // Amount can't exceed balance

// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
UserError;
PaymentError;
ServerError;
EmailError;

// UserError
function UserError(message) {
  this.name = "UserError";
  this.message = message;
}

// PaymentError
function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message;
}

// ServerError
function ServerError(message) {
  this.name = "ServerError";
  this.message = message;
}

// EmailError
function EmailError(message) {
  this.name = "EmailError";
  this.message = message;
}

// Example functions

function loginUser(username) {
  if (!username) {
    throw new UserError("Username is required.");
  }
  return `Welcome, ${username}`;
}

function processPayment(amount) {
  if (amount < 1) {
    throw new PaymentError("Invalid payment amount.");
  }
  return "Payment successful.";
}

function fetchData() {
  let serverDown = true;
  if (serverDown) {
    throw new ServerError("Cannot connect to server.");
  }
  return "Data fetched.";
}

function sendEmail(email) {
  if (!email.includes("@")) {
    throw new EmailError("Invalid email address.");
  }
  return "Email sent successfully.";
}

// Example try-catch blocks

try {
  console.log(loginUser(""));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

try {
  console.log(processPayment(0));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

try {
  console.log(fetchData());
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

try {
  console.log(sendEmail("wrong-email-format"));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {
  if (!url.startsWith("https")) {
    throw new Error("Invalid URL");
  }
  return "Data fetched from " + url;
}

try {
  console.log(fetchData("http://example.com"));
} catch (error) {
  console.error("Error:", error.message);
}

try {
  console.log(fetchData("https://example.com"));
} catch (error) {
  console.error("Error:", error.message);
}

// 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors.

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function validationForm(formData) {
  if (!formData.username) throw new ValidationError("Username required");
  if (typeof formData.age !== "number" || formData.age < 0)
    throw new ValidationError("Valid age required");
  return "Form is valid";
}

try {
  const userInput = { username: "rakib", age: -25 };
  console.log(validationForm(userInput));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources
function readFile(filePath) {
  let fileExists = filePath === "data.txt"; // Simulate file existence
  let ioResourceOpen = false;
  try {
    console.log("Opening IO resource...");
    ioResourceOpen = true;
    if (!fileExists) {
      throw new Error("File not found");
    }
    console.log(`Reading file: ${filePath}`);
    // Simulate file content
    return "File content here";
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    if (ioResourceOpen) {
      console.log("Releasing IO resource...");
    }
  }
}

// Example usage:
readFile("data.txt"); // Should simulate reading
readFile("missing.txt"); // Should throw and handle error

// 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return "Invalid JSON";
  }
}

console.log(parseJson('{"name":"rakib"}')); // { name: 'rakib' }
console.log(parseJson('{name:"rakib"}')); // Invalid JSON

// 8. What is the purpose of throw in JavaScript?
// It catches an error
// It stops the execution of a program
// It creates a new error manually
//  the answer is it creates a new error manually

// 9. What does the finally block do in a try...catch statement?
// Runs only if an error occurs
// Runs only if no error occurs
// Runs regardless of whether an error occurs or not
// Stops the execution of the script
// The answer is it rusn whether an error occurs or not.

// 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object
/*
| Keyword / Object | Usage / Description                                                                 |
|------------------|------------------------------------------------------------------------------------|
| try              | Used to wrap code that may throw an error. If an error occurs, control moves to catch. |
| catch            | Handles errors thrown in the try block. Receives the error object as a parameter.      |
| throw            | Manually throws a custom error or exception.                                           |
| rethrow          | Used inside catch to throw the caught error again, allowing it to be handled elsewhere.|
| error object     | Contains information about the error (name, message, stack). Used in catch blocks.     |
*/
