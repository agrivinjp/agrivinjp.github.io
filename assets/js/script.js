'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}
/**
 * BAHASA
 */

function redirectToPage() {
  var select = document.getElementById("lang");
// Misalnya, Anda memiliki elemen select dengan id "lang"
var selectedValue = document.getElementById("lang").value;

if (selectedValue === "id") {
  // Jika yang dipilih adalah "id", arahkan ke index.html
  window.location.href = "index.html";
} else if (selectedValue === "en") {
  // Jika yang dipilih adalah "en", arahkan ke index2.html
  window.location.href = "index2.html";
} else {
  // Jika tidak ada yang cocok, tambahkan logika tambahan atau penanganan kesalahan
  console.log("Invalid selection");
}
}

/* ==== DISABLE KLIK KANAN =====*/

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);

/* ==== DISABLE shourtcut view page source =====*/
document.onkeydown = function(e) {
  if (e.ctrlKey && 
      (e.keyCode === 86 || 
       e.keyCode === 85 || 
       e.keyCode === 117)) {
      
      return false;
  } else {
      return true;
  }
};