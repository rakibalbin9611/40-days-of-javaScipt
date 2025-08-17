const recipes = [
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon.",
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes.",
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill.",
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce.",
  },
];

const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

const displayRecipes = (filteredRecipes) => {
  recipeList.innerHTML = "";
  if (filteredRecipes.length === 0) {
    recipeList.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  filteredRecipes.forEach((recipe) => {
    const recipeItem = document.createElement("div");
    recipeItem.classList.add("recipe-item");

    const recipeTitle = document.createElement("div");
    recipeTitle.classList.add("recipe-title");
    recipeTitle.textContent = recipe.title;

    const recipeDetails = document.createElement("div");
    recipeDetails.classList.add("recipe-details");
    recipeDetails.innerHTML = `
            <h4>Ingredients:</h4>
            <ul>
                ${recipe.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
            </ul>
            <h4>Instructions:</h4>
            <p>${recipe.instructions}</p>
        `;

    recipeTitle.addEventListener("click", () => {
      recipeDetails.classList.toggle("show");
    });

    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeDetails);
    recipeList.appendChild(recipeItem);
  });
};

const filterRecipes = () => {
  const searchTerm = searchInput.value.toLowerCase();
  localStorage.setItem("lastSearchTerm", searchTerm);
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm)
  );
  displayRecipes(filteredRecipes);
};

searchInput.addEventListener("input", filterRecipes);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  localStorage.removeItem("lastSearchTerm");
  displayRecipes(recipes);
});

window.addEventListener("load", () => {
  const lastSearchTerm = localStorage.getItem("lastSearchTerm");
  if (lastSearchTerm) {
    searchInput.value = lastSearchTerm;
    filterRecipes();
  } else {
    displayRecipes(recipes);
  }
});
