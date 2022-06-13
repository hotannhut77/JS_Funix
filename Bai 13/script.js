const pEl = document.getElementById("P1");
const leftDiv = document.getElementById("left");
const mainDiv = document.getElementById("main");

pEl.addEventListener(
  "click",
  function () {
    alert("Xin chào P1");
  },
  true
);

leftDiv.addEventListener(
  "click",
  function () {
    alert("Xin chào Left Div");
  },
  true
);

mainDiv.addEventListener(
  "click",
  function () {
    alert("Xin chào Main Div");
  },
  true
);
