console.log("DAY 02");

//  Task Assignment :

/* 1️⃣  Original values */
const person = { name: "Rakib", city: "Dhaka" };
const scores = [85, 90, 92];

console.log("original:", person, scores);

/* 2️⃣  Assign to new variables (still same underlying reference) */
const aliasPerson = person; // no copy, just a new label
const aliasScores = scores; // same here

/* 3️⃣  Mutate through the aliases */
aliasPerson.city = "Bogura";
aliasScores.push(95);

console.log("after alias mutation:");
console.log("person      :", person); // city changed ➜ "Bogura"
console.log("aliasPerson :", aliasPerson); // identical (same reference)

console.log("scores      :", scores); // now [85, 90, 92, 95]
console.log("aliasScores :", aliasScores); // identical (same reference)

/* 4️⃣  Create REAL copies so changes don't leak */
const copyPerson = { ...person }; // spread → shallow copy
const copyScores = [...scores]; // spread → new array

copyPerson.name = "Amin";
copyScores.pop(); // remove 95

console.log("after editing the copies:");
console.log("person     :", person); // still {name:"Rakib", city:"Bogura"}
console.log("copyPerson :", copyPerson); // independent change

console.log("scores     :", scores); // still [85, 90, 92, 95]
console.log("copyScores :", copyScores); // independent change
