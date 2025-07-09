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
  console.log(name); // Refference Errorr
  //
  //
  //
  let name = "tapaScript"; // === name variable TDZ end here.
  //
  //
  //
}
