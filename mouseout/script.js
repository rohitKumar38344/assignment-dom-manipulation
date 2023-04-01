const listEl = document.querySelectorAll("ul li");

listEl.forEach((value) => {
  value.addEventListener("mouseout", (ev) => {
    ev.target.style.color = "orange";
  });

  value.addEventListener("mouseleave", (ev) => {
    setTimeout(() => {
      ev.target.style.color = "black";
    }, 1000);
  });
});
