const paraEl = document.querySelector(".joke-area");

const addJokes = function (obj) {
  paraEl.textContent = obj.joke;
};
const requestJoke = function () {
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      addJokes(jsonData);
    })
    .catch((error) => {
      console.log("error occured ", error);
    });
};

document.querySelector("button").addEventListener("click", requestJoke);
