console.log("DAY 18: DOM Manipulations");

// // Insert elements
// const span = document.createElement("span");
// span.innerText = "I am span";

// const pElem = document.querySelector("p");

// document.body.insertBefore(span, pElem);

// // const h1Elem = document.querySelector("h1");
// // document.body.insertBefore(span, h1Elem);

// // modifying elements

// const divElem = document.querySelector("div");
// // console.log("Inner Text", divElem.innerText);
// // console.log("Text Content", divElem.textContent);

// Remove Elements
{
  let list = document.getElementById("myList");
  const itemToRemove = list.children[0];
  list.removeChild(itemToRemove);
  list.replaceChildren(); // its remove all child

  document.getElementById("removeMe").remove();
}

// Read, write and Remove Attributes
{
  // get attribute
  const imgElem = document.querySelector("img");
  console.log(imgElem.getAttribute("alt"));

  // set attribute
  console.log(imgElem.setAttribute("src", "banner.png"));
  console.log(imgElem.setAttribute("alt", "banner"));

  // remove attribute
}

// Travarsing/Navigating DOM

{
  // parentElement/parentNode
  const spanElem = document.getElementById("text");
  console.log("parentElement", spanElem.parentElement.parentElement);
  console.log("ParentNode", spanElem.parentNode.parentNode);

  // children and childNode
  // children return html collections(element)
  // chilNode return NodeList (everthing in html body)
  // nextSibling
  // nextElementSibling
  // previousSibling
  // previousElementSibling
}

{
  // Mnaipulating Styles
  {
    /*const pElem = document.getElementById("p-id");
    console.log(pElem.style)
    pElem.style.backgroundColor = "pink";
    */
  }

  // Manipulating Classes
  {
    const mainDivElem = document.getElementById("main-id");

    // console.log(mainDivElem.className)
    // mainDivElem.className = "secondary-class";
    // console.log(mainDivElem.className);

    console.log(mainDivElem.classList);

    mainDivElem.classList.add("test");

    mainDivElem.classList.remove("layout");

    // mainDivElem.classList.replace("main-class", "secondary-class");

    console.log("Does it have test?", mainDivElem.classList.contains("test"));

    console.log(
      "Does it have main-class?",
      mainDivElem.classList.contains("main-class")
    );

    mainDivElem.classList.toggle("test");
    mainDivElem.classList.toggle("test");
  }
}
