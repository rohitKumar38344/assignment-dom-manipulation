let allPara;
const inint = function () {
  const parentEl = document.querySelector(".container");
  for (let i = 65; i <= 90; i++) {
    const paraEl = document.createElement("p");
    paraEl.textContent = String.fromCharCode(i);
    parentEl.appendChild(paraEl);
  }
  allPara = document.querySelectorAll("p");
};

const highLight = function (ev) {
  allPara.forEach((pEl) => {
    if (pEl.textContent.toLocaleLowerCase() === ev.key) {
      pEl.classList.toggle("bg-color");
    }
  });
};

window.addEventListener("load", inint);
document.addEventListener("keypress", highLight);
