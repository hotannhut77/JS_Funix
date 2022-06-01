const h1El = document.querySelector("h1");

document.addEventListener("click", myFunc);

function myFunc() {
  console.log(this);
  this.style.backgroundColor = "red";
}
