const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const newTagEl = document.createElement("li");
  newTagEl.textContent = ingredient;
  newTagEl.classList.add("item");
  return newTagEl;
});

console.log(elements);

ingredientsListEl.append(...elements);
