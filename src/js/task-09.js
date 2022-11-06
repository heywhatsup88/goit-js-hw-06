const refs = {
  body: document.body,
  changeColorBtn: document.querySelector(".change-color"),
  spanArrayColor: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanArrayColor.textContent = refs.body.style.backgroundColor;
}
