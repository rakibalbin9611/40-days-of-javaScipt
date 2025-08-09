// console.log("Event Bubbling");

// Bubbling
document.getElementById("grand-parent").addEventListener("click", function () {
  console.log("Grand parent clicked");
});
document.getElementById("parent").addEventListener("click", function () {
  console.log("parent clicked");
});
document.getElementById("child").addEventListener("click", function () {
  console.log("Child clicked");
});

// capturing

// In event capturing, the event flow from the outmost ancestor down to the target element.It happens befor the actual target handles the event.

document.getElementById("grand-parent").addEventListener(
  "click",
  () => {
    console.log("grand parent captured");
  },
  true
);
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent captured");
  },
  true
);
document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Child captured");
  },
  true
);

// Delegation

// Event Delegation - it is a technique where you add a single event listener to a parent element instead of each child. It uses event bubbling to handle events from dynamically added or existing child elements.

document.getElementById("itemList").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You clicked on ${event.target.textContent}`);
  }
});

// Dynamically add a new list item
let newItemElem = document.createElement("li");
newItemElem.textContent = "Item 3";
document.getElementById("itemList").appendChild(newItemElem);

// event.stopPropagation() - event.stopPropagation() is a method used inside an event handler to stop the event from bubbling up (or propagating further) through the DOM tree

document.getElementById("father").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("son").addEventListener("click", (e) => {
  // e.stopPropagation();
  console.log("Child clicked");
});
