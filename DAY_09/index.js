// for var
// console.log("Name is", name);
// var name;
// name = "tom";
// console.log("Name is", name);
// for let
// console.log("Name is", name);
let name = "tom";

console.log("Name is", name);

// Temporal Dead Zone (TDZ)

{
  // === name variable's TDZ start here
  //
  //
  console.log(name); // Refference Error
  //
  //
  //
  let name = "tapaScript"; // === name variable TDZ end here.
  //
  //
  //
}

// 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
{
  // === TDZ for firstName, lastName starts here ===
  // 'nickname' is declared with var — no TDZ for var

  console.log(nickname); //  undefined (var is hoisted and initialized)
  console.log(firstName); //  ReferenceError (TDZ)
  console.log(lastName); //  ReferenceError (TDZ)

  var nickname = "Tapper"; // var: no TDZ, hoisted as undefined, now assigned
  let firstName = "Tapa"; // TDZ for firstName ends here
  const lastName = "Script"; // TDZ for lastName ends here

  console.log(nickname); // "Tapper"
  console.log(firstName); // "Tapa"
  console.log(lastName); // "Script"
}
