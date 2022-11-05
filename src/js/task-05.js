let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  inputEl = event.currentTarget.value;

  inputEl !== " " ? (outputEl.innerText = inputEl.trim()) : "Anonymous";
}
