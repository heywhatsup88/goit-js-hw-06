const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", (e) => {
  const size = inputEl.value;

  textEl.style.fontSize = size + "px";
});
