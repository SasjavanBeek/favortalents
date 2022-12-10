// JavaScript Document

// aanspreken van elementen
var hamburgerMenu = document.querySelector(".hamburger");
var deButton = document.querySelector(".hamburger i");
var navButton = document.querySelector("nav:first-of-type i:last-of-type");
// audio
var audio = document.querySelector("#audio");

// dat weghalen, css
function removeMenu() {
  hamburgerMenu.classList.remove("toonmenu");
  audio.play();
}

deButton.addEventListener("click", removeMenu);

// dat toevoegen, css
function showMenu() {
  hamburgerMenu.classList.add("toonmenu");
  audio.play();
}

navButton.addEventListener("click", showMenu);

// codepent https://codepen.io/shooft/pen/BaKGKwm?editors=1010
