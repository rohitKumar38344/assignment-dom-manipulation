const imgEl = document.querySelector("img");

const scaleUp = function () {
  imgEl.classList.toggle("scaleup");
};

imgEl.addEventListener("dblclick", scaleUp);
