const imgEl = document.querySelector("img");

const blurImage = function () {
  imgEl.setAttribute("class", "blur");
};
const nonBlurImage = function () {
  imgEl.setAttribute("class", "non-blur");
};

imgEl.addEventListener("mouseover", blurImage);
imgEl.addEventListener("mouseout", nonBlurImage);
