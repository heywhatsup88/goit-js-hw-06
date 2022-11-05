const list = document.querySelectorAll("li.item");

console.log(`Number of categories: ${list.length}`);

const ul = document.querySelectorAll("li.item");

ul.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`
  );
});
1231;
