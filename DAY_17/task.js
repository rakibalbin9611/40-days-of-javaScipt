console.log("DAY_17 TASK");

// 1. Find the Most Frequent Word in a Paragraph

// Step 1: Get the text from the div
const paragraph = document.getElementById("text").textContent;

// Step 2: Make it lowercase and remove punctuation manually
const cleanText = paragraph
  .toLowerCase()
  .replaceAll(".", "")
  .replaceAll(",", "");
// console.log(cleanText);

// Step 3: Split the text into words
const words = cleanText.split(" ");
// console.log(words);

// Step 4: Count the frequency of each word
const wordCounts = {};
for (let i = 0; i < words.length; i++) {
  const word = words[i];

  if (wordCounts[word]) {
    wordCounts[word] += 1;
  } else {
    wordCounts[word] = 1;
  }
}

// Step 5: Find the word with the highest count
let mostFrequentWord = "";
let highestCount = 0;

for (let word in wordCounts) {
  if (wordCounts[word] > highestCount) {
    mostFrequentWord = word;
    highestCount = wordCounts[word];
  }
}

// Step 6: Show the result
document.getElementById("result").textContent =
  "Most frequent word: " + mostFrequentWord + " (" + highestCount + " times)";

// 2. Create a zebra pattern
// Step 1: Select all <li> elements inside the <ul id="cars">
const carList = document.querySelectorAll("#cars li");

// Step 2: Loop through each item and apply zebra pattern
for (let i = 0; i < carList.length; i++) {
  if (i % 2 === 0) {
    // Even index (0, 2, 4...): white text on black background
    carList[i].style.color = "white";
    carList[i].style.backgroundColor = "black";
  } else {
    // Odd index (1, 3, 5...): black text on white background
    carList[i].style.color = "black";
    carList[i].style.backgroundColor = "white";
  }
}

// 3. Write different ways we can access DOM and what they returns
// ✅ 1. document.getElementById("id")
// Returns: A single element with the given id
// Type returned: HTMLElement or null (if not found)
// Example:
const title = document.getElementById("mainTitle");

// ✅ 2. document.getElementsByClassName("class")
// Returns: A live collection of all elements with the given class name
// Type returned: HTMLCollection
// Example:
const items = document.getElementsByClassName("car");

// ✅ 3. document.getElementsByTagName("tag")
// Returns: A live collection of all elements with the given tag name
// Type returned: HTMLCollection
// Example:
const paragraphs = document.getElementsByTagName("p");

// ✅ 4. document.querySelector("CSS selector")
// Returns: The first element that matches the CSS selector
// Type returned: Element or null
// Example:
const firstItem = document.querySelector(".car");

// ✅ 5. document.querySelectorAll("CSS selector")
// Returns: A static collection of all matching elements
// Type returned: NodeList
// Example:
const allItems = document.querySelectorAll(".car");

// 4. Find and Replace Text Inside a Page
// Write a script that finds all occurrences of a word inside a <p> tag and replaces them with another word dynamically.

function findAndReplace() {
  const findWord = document.getElementById("findWord").value;
  const replaceWord = document.getElementById("replaceWord").value;

  // Select all <p> tags
  const paragraphs = document.querySelectorAll("p");

  // Loop through each <p> and replace text
  paragraphs.forEach(function (paragraph) {
    const originalText = paragraph.innerHTML;

    // Replace all occurrences using RegExp with global flag (g)
    const updatedText = originalText.split(findWord).join(replaceWord);

    // Update the paragraph
    paragraph.innerHTML = updatedText;
  });
}
