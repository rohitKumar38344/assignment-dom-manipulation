const inputEl = document.getElementById("user-input");
const getUserInput = () => {
  return Number(document.getElementById("user-input").value);
};

document.querySelector(".btn--incr").addEventListener("click", () => {
  let value = getUserInput();
  value += 1;
  inputEl.value = value;
});
document.querySelector(".btn--decr").addEventListener("click", () => {
  let value = getUserInput();
  value -= 1;
  inputEl.value = value;
});
document
  .querySelector(".btn--reset")
  .addEventListener("click", () => (inputEl.value = 0));
