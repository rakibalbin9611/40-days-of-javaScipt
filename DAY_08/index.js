var name = "Tom";

function sayName() {
  console.log(this.name);
}

// -----------------------------------------------
var name = "tom";
function tom() {
  console.log(this.name);
}

tom();

// ----------------------------------------
console.log("Inside Global Execution Context");
var a = 5;
function testMe() {
  console.log("Inside testMe Execution context");
  var b = 10;
  var user = {
    name: "tapas",
    country: "India",
  };
  function testAgain() {
    console.log("Inside testAgain Execution Context");
    console.log("Exeitin testAgain Execution Context");
  }
  testAgain();
  console.log("Exiting testMe execution context");
}
testMe();
console.log("Exiting testme execution context");
