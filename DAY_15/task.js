console.log("...............Task..................");

// T-001: Create an array of 5 elements using the Array Constructor.
const arr5 = new Array(1, 2, 3, 4, 5);
console.log("T-001:", arr5);

// T-002: Create an array of 3 empty slots.
const emptyArr = new Array(3);
console.log("T-002:", emptyArr);

// T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const arrSixElements = [1, 2, 3, 4, 5, 6];
const fourthElement = arrSixElements[3];
console.log("T-003:", fourthElement);

// T-004: Use the for loop on the above array to print elements in the odd index.
console.log("T-004: Elements at odd indices:");
for (let i = 1; i < arrSixElements.length; i += 2) {
  console.log(arrSixElements[i]);
}

// T-005: Add one element at the front and the end of an array.
arrSixElements.unshift(0); // Add at the front
arrSixElements.push(7); // Add at the end
console.log("T-005:", arrSixElements);

// T-006: Remove an element from the front and the end of an array.
arrSixElements.shift(); // Remove from the front
arrSixElements.pop(); // Remove from the end
console.log("T-006:", arrSixElements);

// T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const favouriteFoods = [
  "Pizza",
  "Sushi",
  "Burger",
  "Pasta",
  "Tacos",
  "Ramen",
  "Steak",
  "Salad",
  "Ice Cream",
  "Curry",
];
const [, , , , , sixthFood] = favouriteFoods;
console.log("T-007:", sixthFood);

// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [firstFood, secondFood, ...restFood] = favouriteFoods;
console.log("T-008: Rest Food", restFood);

// T-009: Clone an Array(Shallow cloning)
{
  const arr = [1, 2, 3, 4, 5];
  const shallowCloneArr = [...arr];
  console.log("T-009:", shallowCloneArr);
}

// T-010: Empty an array using its length property
{
  let arr = [1, 2, 3, 4, 5];
  arr.length = 0;
  console.log("T-010:", arr);
}

// T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      const resizedArr = arr.slice(0, 6);
      console.log("T-011", resizedArr);
      break;
    }
  }
}

// T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const afterSplice = arr.splice(0, arr.length);
  console.log(afterSplice); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log("T-012", arr); // []
}
// T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?

// arr.length = 0 is considered the best and most efficient way to empty an array in-place, and here’s exactly why :
// Setting the length property to 0 instantly removes all elements.
// It's a constant-time operation — no looping, no reindexing.
// It doesn’t create a new array, so any reference to the original array is also emptied.

// T-014: What happens when you concatenate two empty arrays?
{
  const empArr1 = [];
  const empArr2 = [];
  const concatenate = empArr1.concat(empArr2);
  console.log("T-014", concatenate); // []
  // concat() is used to combine arrays.
  // If you concatenate two empty arrays, the result is simply another empty array.
}

// T-015: How can you check if a value is partially matching with any of the elements of an Array?

// T-016: What is the difference between the slice() and splice() methods.
// The slice() method is used to create a shallow copy of a portion of an array without modifying the original array. It takes two arguments: the start index and the end index (non-inclusive), and returns a new array containing the selected elements. On the other hand, the splice() method is used to modify the original array by adding, removing, or replacing elements. It takes a starting index, a delete count, and optionally items to insert. Unlike slice(), splice() mutates the original array and returns the removed elements.

// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

{
  const fruits = ["apple3", "banana1", "apple1", "banana2", "mango5"];
  const ascending = fruits.toSorted();
  console.log("Acending order", ascending);

  const descending = fruits.toReversed();
  console.log("Descending", descending);
  console.log("Original", fruits);
}

//  T-018: Can you give examples of sparse and dense arrays?
// A **dense array** in JavaScript is an array where all the indices between `0` and `length - 1` are filled with values, meaning there are no gaps or "holes." For example, `[1, 2, 3, 4]` is a dense array because every index from 0 to 3 has a defined value. On the other hand, a **sparse array** has one or more missing elements — positions that are empty or uninitialized. For instance, `[1, , 3]` or `const arr = []; arr[3] = 'hello';` are sparse arrays because they skip certain indices. Sparse arrays can behave unexpectedly with methods like `.map()` or `.forEach()`, which may skip over these empty slots. Dense arrays are more efficient and predictable, while sparse arrays are generally avoided unless intentionally used for specific cases.

// T-019: Give a practical usages of the .fill() method
// Create an array of 5 elements, all initialized to 0
const scores = new Array(5).fill(0);
console.log(scores); // [0, 0, 0, 0, 0]
// Useful when we need a placeholder for user scores, empty cells, game grids, or flags in algorithms.

// T-020: How to convert an array to a string?
{
  const number = [1, 2, 3];

  console.log(number.toString()); // 1,2,3

  // to convert an array to string use toString() method,we also use join() method.
}

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];
// T-021: Can you filter employees who work in the "Engineering" department?

const engineeringDept = departments.find((dep) => dep.name === "Engineering");
console.log(engineeringDept);
const engineeringEmployees = employees.filter(
  (emp) => emp.departmentId === engineeringDept.id
);

console.log("T-021", engineeringEmployees);

// T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const employeeWithDept = employees.map((emp) => {
  const dept = departments.find((dep) => dep.id === emp.departmentId);
  return `${emp.name} (${dept.name})`;
});
console.log("T-022", employeeWithDept);

// T-023: Find the highest salary among employees.
const highestSalary = employees.reduce((max, emp) => {
  return emp.salary > max ? emp.salary : max;
}, 0);
console.log("T-023", highestSalary);

// T-024: Check if there is at least one employee in the "Sales" department.
const salesDept = departments.find((dep) => dep.name === "Sales");
const hasSalesEmployee = employees.some(
  (emp) => emp.departmentId === salesDept.id
);
console.log("T-024", hasSalesEmployee); // true

// T-025: Write a function to filter employees earning more than 6000.
const moreThenSixthousandSalary = employees.filter((emp) => {
  return emp.salary > 6000;
});
console.log("T-025", moreThenSixthousandSalary);

// T-026: Create an array of employee names only.
const employeeNames = employees.map((emp) => emp.name);
console.log("T-026", employeeNames);

// T-027: Calculate the total salary of all employees using
const totalSalary = employees.reduce((sum, emp) => {
  return sum + emp.salary;
}, 0);
console.log("T-027", totalSalary);

// T-028: Is there any employee earning less than 5000?
const hasLowEarner = employees.some((emp) => emp.salary < 5000);

console.log("T-028", hasLowEarner); // true

// T-029: Find the first employee who earns exactly 5100.
const employeeWith5100 = employees.find((emp) => emp.salary === 5100);
console.log("T-029", employeeWith5100);

// T-030: Find the last employee in the "HR" department.
const hrDepartment = departments.find((dep) => dep.name === "HR");
console.log(hrDepartment);

const lastHrEmployee = employees.findLast(
  (emp) => emp.departmentId === hrDepartment.id
);
console.log("T-030", lastHrEmployee);

// T-031: Find the first employee in the "Marketing" department.
const marketingDept = departments.find((dept) => dept.name === "Marketing");
const firstMarketingEmployee = employees.find(
  (emp) => emp.departmentId === marketingDept.id
);
console.log("T-031", firstMarketingEmployee);

// T-032: Check if all employees earn more than 4000.
const allEarnAbove4000 = employees.every((emp) => emp.salary > 4000);

console.log("T-032", allEarnAbove4000); // true

//  T-033: Find the first employee in the "Sales" and "HR" department.
const hrDeptId = departments.find((dept) => dept.name === "HR").id;
const salesDeptId = departments.find((dept) => dept.name === "Sales").id;

const firstHREmployee = employees.find((emp) => emp.departmentId === hrDeptId);
const firstSalesEmployee = employees.find(
  (emp) => emp.departmentId === salesDeptId
);

console.log("First HR Employee:", firstHREmployee);
console.log("First Sales Employee:", firstSalesEmployee);

// T-034: Verify if all employees belong to a department listed in the departments array.
const departmentIds = departments.map((dept) => dept.id);

const allEmployeesValid = employees.every((emp) =>
  departmentIds.includes(emp.departmentId)
);

console.log("T-034", allEmployeesValid); // true

// T-035: Log each employee's name and department name to the console.
const allNameAndDept = employees.forEach((emp) => {
  const dept = departments.find((dept) => dept.id === emp.departmentId);
  return `${emp.name} ${dept.name}`;
});

// T-036: Extract all employee names into a single array.
const allEmpNames = employees.map((emp) => emp.name);
console.log("T-036", allEmpNames);

//  T-037: Increment each employee's salary by 10%
const updatedSalaries = employees.map((emp) => ({
  ...emp,
  salary: emp.salary * 1.1,
}));

console.log(updatedSalaries);

const employeesWithSkills = [
  { name: "Alice", skills: ["Excel", "Management"] },
  { name: "Bob", skills: ["JavaScript", "React"] },
  { name: "Charlie", skills: ["Marketing", "SEO"] },
  { name: "Diana", skills: ["HR", "Recruitment"] },
  { name: "Edward", skills: ["Java", "Spring"] },
  { name: "Fiona", skills: ["Sales", "CRM"] },
  { name: "George", skills: ["Branding", "Advertising"] },
  { name: "Helen", skills: ["Negotiation", "Salesforce"] },
  { name: "Ian", skills: ["Python", "Django"] },
  { name: "Jane", skills: ["Documentation", "Communication"] },
];

// T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const allSkills = employeesWithSkills.flatMap((emp) => emp.skills);

console.log("T-038", allSkills);

// T-039: Find the total salary of all employees working in the "Engineering" department.
const engDept = departments.find((dept) => dept.name === "Engineering");
const totalSalOfEngDept = employees
  .filter((emp) => emp.departmentId === engDept.id)
  .reduce((sum, emp) => {
    return sum + emp.salary;
  }, 0);
console.log("T-039", totalSalOfEngDept);

// T-040: Check if there is any department where all employees earn more than 5000.
const result = departments.some((dept) => {
  const deptEmployees = employees.filter((emp) => emp.departmentId === dept.id);
  return (
    deptEmployees.length > 0 && deptEmployees.every((emp) => emp.salary > 5000)
  );
});

console.log(result);

{
  const employees = [
    { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
    { id: 2, name: "Bob", projects: ["Project B", "Project C"] },
    { id: 3, name: "Charlie", projects: ["Project D"] },
    { id: 4, name: "Diana", projects: ["Project A", "Project D"] },
    { id: 5, name: "Edward", projects: ["Project E"] },
  ];
  //  T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.

  const allProjects = employees.flatMap((emp) => emp.projects);
  const uniqueProjects = new Set(allProjects);
  console.log("Total unique projects:", uniqueProjects.size);
}

// T-042: For each employee, find their department name and return an array of employee names with their department names.

const employeeWithDeptNames = employees.map((emp) => {
  const dept = departments.find((dep) => dep.id === emp.departmentId);
  return `${emp.name} ${dept?.name || "Unknown"} `;
});
console.log("T-042", employeeWithDeptNames);

// T-043: Get a list of names of employees earning more than 6000
const highEarner = employees
  .filter((emp) => emp.salary > 6000)
  .map((emp) => emp.name);
console.log(highEarner);
for (const name of highEarner) {
  console.log("HighEarner :", name);
}

//T-044: Write a for-of loop to print the names of all employees from the employees array
for (const employee of employees) {
  console.log("Employee Name:", employee.name);
}

// T-045: Using a for-of loop, print the names of employees earning more than 5000.
for (const employee of employees) {
  if (employee.salary > 5000) {
    console.log("T-045", employee.name);
  }
}

//T-046: Modify the for-of loop to destructure each employee object and log their name and salary.

for (const { name, salary } of employees) {
  console.log(`${name} earns ${salary}`);
}

// T-047: Write a for-of loop to match employees with their departments and print the results
for (const { name, departmentId } of employees) {
  const dept = departments.find((d) => d.id === departmentId);
  if (dept) {
    console.log(`${name} works in ${dept.name}`);
  }
}
// T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

for (const [index, employee] of employees.entries()) {
  console.log(`Index: ${index}, Name: ${employee.name}`);
}
// const arrayLike = { 0: "First", 1: "Second", length: 2 };
// T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
function convertArgumentsToArray() {
  const argsArray = Array.from(arguments);
  return argsArray;
}

{
  // Example usage:
  const result = convertArgumentsToArray("Apple", "Banana", "Cherry");
  console.log(result); // ["Apple", "Banana", "Cherry"]

  const arrayLike = { 0: "First", 1: "Second", length: 2 };
  const realArray = Array.from(arrayLike);

  console.log(realArray); // ["First", "Second"]
}
