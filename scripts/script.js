// JavaScript Document
console.log("hi");

// codepent https://codepen.io/shooft/pen/BaKGKwm?editors=1010

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}