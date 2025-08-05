// console.log("Day 15: JavaScript Array Master Course");

// const mixedArray = [100, true, "tapaScript", {}];

// // index = The position of an element in the array is known as its index.
// // index starts with 0
// // index end with length - 1

// const salad = [
//   "tomato",
//   "mushroom",
//   "broccoli",
//   "cucumber",
//   "corn",
//   "carrot",
//   "avocado",
// ];

// function Car(model) {
//   this.model = model;
// }

// const bmwCar = new Car("BMW X1");
// console.log(bmwCar);

// const anotherSalad = new Array(
//   "tomato",
//   "mushroom",
//   "broccoli",
//   "cucumber",
//   "corn",
//   "carrot",
//   "avocado"
// );

// console.log("Salad", salad);
// console.log("Another Salad", anotherSalad);

// console.log(salad === anotherSalad);

// const two = new Array(1, 2);
// console.log(two); // [1, 2]

// // const element = array[index]

// console.log(salad[0]); // 'tomato'
// console.log(salad[2]); // 'broccoli'
// console.log(salad[5]); // 'carrot'

// // const salad = ['tomato', 'mushroom', 'broccoli', 'cucumber', 'corn', 'carrot', 'avocado'];

// for (let i = 0; i <= salad.length - 1; i++) {
//   console.log(`Element at index ${i} is ${salad[i]}`);
// }

// // push() - end
// const ret = salad.push("peanut");
// console.log(ret); // 8
// console.log(salad);

// // unshift() - start

// const unRet = salad.unshift("peanut");
// console.log(unRet); // 9
// console.log(salad);

// // pop - end
// console.log(salad);
// const popRet = salad.pop();
// console.log(popRet);
// console.log(salad);

// // shift() - start
// console.log(salad);
// const shiftRet = salad.shift();
// console.log(shiftRet);
// console.log(salad);

// // slice() - copy

// // salad = ['tomato', 'mushroom', 'broccoli', 'cucumber', 'corn', 'carrot', 'avocado'];s
// const saladCopy = salad.slice();
// console.log("Salad Before Copy", salad);
// console.log("Salad After Copy", saladCopy);
// console.log(salad === saladCopy); // false

// // Deletermine if Array
// Array.isArray([
//   "tomato",
//   "mushroom",
//   "broccoli",
//   "cucumber",
//   "corn",
//   "carrot",
//   "avocado",
// ]); // true;
// console.log(Array.isArray("🍅")); // returns false
// Array.isArray({ tomato: "🍅" }); // returns false
// Array.isArray([]); // returns true

// const arr = [1, 2, 3, 4];
// Array.isArray(arr); // true

// // array destructuring
// // const [tomato, mushroom, broccoli] = salad;
// // console.log(tomato, mushroom, broccoli);

// // skip element if you want
// const [tomato, , carrot] = ["🍅", "🍄", "🥕"];
// // console.log(tomato, carrot);

// // Nested Array
// // [1 ,2, [4, [6, 8, ['q']]]]

// let fruits = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];
// const veg = fruits[4]; // ['🍅', '🍄', '🥕']
// const carrot1 = veg[2]; // '🥕'

// fruits[4][2]; // '🥕'

// let [, , , , [, , carrot2]] = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];
// // console.log(carrot1, carrot2);

// {
//   // Rest and Spread operator
//   //rest
//   const [tomato, mashroom, ...rest] = [
//     "🍅",
//     "🍄",
//     "🥦",
//     "🥒",
//     "🌽",
//     "🥕",
//     "🥑",
//   ];
//   // console.log(tomato, mashroom, rest);
// }
// // spread
// const mySalad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
// const mySaaladCopy = [...mySalad];
// // console.log(mySalad, mySaaladCopy);

// // Swapping
// {
//   let first = "😔";
//   let second = "🙂";

//   [first, second] = [second, first];

//   // console.log(first); // '🙂'
//   // console.log(second); // '😔'
// }

// // Merge

// {
//   const emotions = ["🙂", "😔"];
//   const veggies = ["🥦", "🥒", "🌽", "🥕"];

//   const emotionalVeggies = [...emotions, ...veggies];

//   // console.log(emotionalVeggies);
// }

// // length
// {
//   const arr1 = [11, 21, 73];
//   const arr2 = new Array(7);
//   // console.log(arr1.length); // 3
//   // console.log(arr2.length); // 7

//   // 2**32-1
//   arr1.length = 9;
//   // console.log(arr1);
// }

// // concat
// {
//   const first = [1, 2, 3];
//   const second = [4, 5, 6];
//   const merged = first.concat(second);
//   // console.log(merged);

//   // array.concat(arr1, arr2,..,..,..,arrN);
// }

// // join()
// {
//   const emotions = ["🙂", "😍", "🙄", "😟"];

//   const joined = emotions.join("<=>");
//   console.log(joined);

//   [].join(); // return ""
// }

// // fill
// {
//   const colors = ["red", "blue", "green", "purple", "yellow"];
//   // colors.fill("pink");
//   colors.fill("tomato", 1, 4);
//   // console.log(colors);
// }

// // includes()
// {
//   const names = ["tom", "alex", "bob", "john"];

//   console.log(names.includes("tom"));
//   console.log(names.includes("july"));
// }

// // indexOf() and lastIndexOf()
// {
//   const names = ["tom", "alex", "bob", "tom"];

//   names.indexOf("alex"); // 1
//   names.indexOf("rob"); // -1

//   names.indexOf("tom"); // 0
//   names.lastIndexOf("tom"); // 3
// }

// // reverse()
// {
//   const names = ["tom", "alex", "bob"];
//   console.log(names.reverse());
// }

// //  sort()
// // The default sort() method converts the element types into strings
// //  The default sorting order is ascending.

// {
//   const names = ["tom", "alex", "bob"];
//   console.log("After default sorting", names.sort());

//   const artists = [
//     "John White Abbott",
//     "Leonardo da Vinci",
//     "Charles Aubry",
//     "Anna Atkins",
//     "Barent Avercamp",
//   ];

//   console.log("Default sorting of artists array", artists.sort());

//   artists.sort(function (a, b) {
//     return a === b ? 0 : a > b ? -1 : 1;
//   });

//   console.log("Sort the artist names(Descending)", artists);

//   let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

//   console.log(
//     "age with default sorting",
//     ages.sort(function (a, b) {
//       return a === b ? 0 : a > b ? 1 : -1;
//     })
//   );
// }

// // splice()
// // splice (start, deleteCount, item1, item2, item3)

// {
//   const names = ["alex", "bob", "mob"];
//   names.splice(0, 1, "john");
//   console.log(names);

//   //names.splice(1, 0, 'zack');

//   names.splice(2, 1, "zack");
//   console.log(names);
// }

// // at()
// {
//   const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];

//   junkFoodILove.at(-2); // "🌮"
//   junkFoodILove.at(-7); // "🍔"
//   console.log(junkFoodILove.at(2)); // "🍟"
//   junkFoodILove.at(-8); // '🥖'
//   junkFoodILove.at(10); // undefined
// }

// // copyWithin()
// // copyWithin (target, start, end)
// {
//   const array = [1, 2, 3, 4, 5, 6, 7];
//   array.copyWithin(0, 2, 6);
//   console.log(array);
//   array.copyWithin(2, 5);
//   console.log(array);
// }

// // flat()
// {
//   const arr1 = [0, 1, 2, [3, 4]];
//   console.log(arr1.flat());

//   const arr2 = [0, 1, [2, [3, [4, 5]]]];
//   console.log(arr2.flat()); // [0,1,2]
//   console.log(arr2.flat(2)); // [0,1,2,3]
//   console.log(arr2.flat(Infinity));
// }
// // immutibility method
// /**
//  * toReversed()
//  * toSorted()
//  * toSplice()
//  */
// {
//   const items = [1, 2, 3];
//   const reversedItem = items.toReversed();
//   console.log("reversed items", reversedItem);
//   console.log("Original items", items);
// }

// // toSorted ()
// {
//   const months = ["jan", "feb", "Dem", "oct"];
//   const sortedMonths = months.toSorted();
//   console.log(sortedMonths);
//   console.log(months);
// }

// // toSpliced()
// {
//   const months = ["Jan", "Mar", "Apr", "May"];

//   const months2 = months.toSpliced(1, 0, "Feb");

//   console.log("Original Array", months);
//   console.log("Spliced Array", months2);
// }

// // with()
// {
//   const numbers = [1, 2, 3, 4, 5];

//   // numbers[2] = 6;

//   const newArray = numbers.with(2, 6);

//   console.log(numbers); // Unchanged => [1, 2, 3, 4, 5];
//   console.log(newArray); // Changed(A new copy) => [1, 2, 6, 4, 5];

//   // numbers[-2] = 8 // undefined
//   const anotherArray = numbers.with(-2, 8);
//   console.log(numbers);
//   console.log(anotherArray); // [1, 2, 3, 8, 5]
//   // with(index, value)
// }

// // Array Like
// {
//   // {key: "value"} // object
//   // [1,2,3] // array

//   const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };

//   console.log(arr_like);

//   arr_like[2]; // 'array-like'
//   arr_like.length; // 3

//   console.log("is arr_like is an array?", Array.isArray(arr_like)); // false

//   console.log("is arr_like is an object?", arr_like instanceof Object); // true

//   function checkArgs() {
//     console.log("Array like Args", arguments); // Object
//     const argArr = [...arguments]; // Array
//     console.log("Converted array args", argArr);
//     argArr.forEach((item) => {
//       console.log(item);
//     });
//   }
//   checkArgs(1, 34);
// }

// // Array Like
// {
//   console.log(
//     "HTML COllection as Array Like",
//     document.getElementsByTagName("li")
//   );
//   const collectionArr = Array.from(document.getElementsByTagName("li"));
//   console.log("Converted Array", collectionArr);
// }

// // fromAsync()
// {
//   // const collectionPromise = Array.fromAsync(
//   //   document.getElementsByTagName("li")
//   // );
//   // console.log("Converted Array", collectionPromise);
//   // collectionPromise.then((value) => console.log(value));
//   // const ret = Array.fromAsync({
//   //   0: Promise.resolve("tapaScript"),
//   //   1: Promise.resolve("Google"),
//   //   2: Promise.resolve("Apple"),
//   //   length: 3,
//   // }).then((value) => console.log(value));
//   // console.log(ret);
// }

// // of
// {
//   const a = new Array(2, 3, 4);
//   const b = [1, 3, 4, 5];
//   const c = Array.of(2, "test", true, { name: "Alex" }, [1, 2, 3, 4]);
//   console.log(a, b, c);
// }

// {
//   let customers = [
//     {
//       id: 1,
//       f_name: "Abby",
//       l_name: "Thomas",
//       gender: "M",
//       married: true,
//       age: 32,
//       expense: 500,
//       purchased: ["Shampoo", "Toys", "Book"],
//     },
//     {
//       id: 2,
//       f_name: "Jerry",
//       l_name: "Tom",
//       gender: "M",
//       married: true,
//       age: 64,
//       expense: 100,
//       purchased: ["Stick", "Blade"],
//     },
//     {
//       id: 3,
//       f_name: "Dianna",
//       l_name: "Cherry",
//       gender: "F",
//       married: true,
//       age: 22,
//       expense: 1500,
//       purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//     },
//     {
//       id: 4,
//       f_name: "Dev",
//       l_name: "Currian",
//       gender: "M",
//       married: true,
//       age: 82,
//       expense: 90,
//       purchased: ["Book"],
//     },
//     {
//       id: 5,
//       f_name: "Maria",
//       l_name: "Gomes",
//       gender: "F",
//       married: false,
//       age: 7,
//       expense: 300,
//       purchased: ["Toys"],
//     },
//   ];

//   // filter() - Get 'Senior Citizens' by Filtering out other customers

//   const seniorCustomers = customers.filter((customer) => {
//     return customer.age >= 60;
//   });
//   console.log("Senior Customer list", seniorCustomers);

//   // map() - Transform to add title and full name

//   const customersWithFullName = customers.map((customer) => {
//     let title = "";

//     if (customer.gender === "M") {
//       title = "Mr.";
//     } else if (customer.gender === "F" && customer.married) {
//       title = "Mrs.";
//     } else {
//       title = "Miss";
//     }

//     customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;

//     return customer;
//   });

//   console.log("Customer after adding fullname", customersWithFullName);
// }

// {
//   //  reduce() - The average age of the Customers who have purchased the Item, 'Book'.
//   /*arr.reduce(
//     reducer(
//        accumulator,
//        currentValue,
//        index,
//        array),
//     initialValue);
// // A reducer function which is also called as callback function to be called on each element of the array.

// const ret = function reducer(accumulator, currentValue, index, array) {
//     // do something with accumulator and currentvalue
//     // You get a result
//     // You return that result
// }
// */
//   // {
//   //   const arr = [1, 2, 3, 4, 5];
//   //   const result = arr.reduce((accumulator, currentValue) => {
//   //     return accumulator + currentValue;
//   //   }, 0);
//   //   console.log(result);
//   // }
//   // let count = 0;
//   // const total = customers.reduce((accumulator, customer) => {
//   //   if (customer.purchased.includes("Book")) {
//   //     accumulator = accumulator + customer.age;
//   //     count = count + 1;
//   //   }
//   //   return accumulator;
//   // }, 0);
//   // console.log("Customer Avg age Purchased Book:", Math.floor(total / count));
// }

// // reduceRight() -- To reduce from the right

// let number = [100, 40, 15];

// const subsResult = number.reduceRight((accumulator, current) => {
//   return accumulator - current;
// });

// console.log("Subs", subsResult);

// // some() - Do we have a Young Customer(age less than 10 years)?

// {
//   const hasYoungCustomer = customers.some((customer) => {
//     return customer.age < 10;
//   });
// }
// console.log("Has Young Customer(Age < 10):", hasYoungCustomer);

// // every() - Every Customer is Married?

// const isAllMarried = customers.every((customer) => {
//   return customer.married;
// });

// console.log("All Customer Married?:", isAllMarried);

// // find() - Find the youngest customer

// const foundYoungCustomer = customers.find((customer) => {
//   return customer.age < 10;
// });

// console.log("Found Young Customer(Age < 10): ", foundYoungCustomer);

// // findIndex() method
// const youngCustomerIndex = customers.findIndex((customer) => {
//   return customer.age < 10;
// });

// console.log("Found Young Customer Index: ", youngCustomerIndex);

// // findLast() method

// const lastFoundYoungCustomer = customers.findLast((customer) => {
//   return customer.age < 10;
// });
// console.log(
//   "[find] Last Found Young Customer(Age < 10): ",
//   lastFoundYoungCustomer
// );

// // Array method Chaining

// // Use Case: Get the total amount spent by Married Customers

// // reduce()
// // map()
// // filter()

// // Find all the married customers

// const totalExpense = customers
//   .filter((customer) => {
//     return customer.married;
//   })
//   .map((marriedCustomer) => {
//     return marriedCustomer.expense;
//   })
//   .reduce((accum, expense) => {
//     return accum + expense;
//   }, 0);

// console.log("Total Expense of Married Customers in INR: ", totalExpense);
// {
//   const arr = [1, 2, 3, 4, 5];

//   // forEach()
//   let sum = 0;
//   arr.forEach((elem) => {
//     sum = sum + elem;
//     //console.log(elem)
//   });
//   console.log("Sum using forEach", sum);

//   // entries()
//   const arrItr = arr.entries();
//   /*console.log("Array Iterator", arrItr.next().value) // [0, 1]
// console.log("Array Iterator", arrItr.next().value) // [1, 2]*/

//   for (const [index, element] of arrItr) {
//     console.log(index, element);
//   }
// }

// // values()

// const arrItr2 = arr.values();

// for (const value of arrItr2) {
//   console.log(value);
// }

// // flatMap()

// const arr1 = [1, 2, 3, 4];

// console.log(
//   "simple map",
//   arr1.map((item) => item * 2)
// );
// console.log(
//   "simple flatmap",
//   arr1.flatMap((item) => item * 2)
// );

// console.log(
//   "complex map",
//   arr1.map((item) => [item * 2])
// ); //[[2], [4], [6],..]
// console.log(
//   "complex flat map",
//   arr1.flatMap((item) => [item * 2])
// );

// arr1.map((item) => [[item * 2]]);
// arr1.flatMap((item) => [[item * 2]]);
