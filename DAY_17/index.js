console.log("Day 17 - Introduction to DOM");

/*
- What is DOM?
- Understanding DOM Types
- Accessing DOM
- Mini Project(s)
- DevTools and DOM
- Tasks
*/

// DOM Types
// 1. Document - Represents the entire page and it is the root node of the DOM tree.
console.log(document);
// 2. Node - A generic term for any elements in the DOM tree. Element Node, Text Node, Attribute Node.
// 3. Element - A specific type of node that represents HTML tags/elements
// 4. NodeList - An array of Nodes.
// 5. Attr - repesents the attribute of a node.
// <img src="/" alt="some image" />
// 6. NameNodeMap - A collection of Attr.

// mini project -
function highlightText() {
  let elements = document.querySelectorAll("p.info");
  elements.forEach((element) => {
    element.style.backgroundColor = "yellow";
  });
}

function filterList() {
  const inputElem = document.getElementById("searchInput");
  const input = inputElem.value;

  const items = document.querySelectorAll("ul#itemList li");

  items.forEach((item) => {
    item.style.display = item.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? "block"
      : "none";
  });
}
