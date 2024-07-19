// script.js

document.addEventListener("DOMContentLoaded", function () {
    const ptButton = document.getElementById("pt-button");
    const enButton = document.getElementById("en-button");
    const menuPt = document.querySelector(".menu-pt");
    const menuEn = document.querySelector(".menu-en");
  
    ptButton.addEventListener("click", function () {
      menuPt.style.display = "block";
      menuEn.style.display = "none";
    });
  
    enButton.addEventListener("click", function () {
      menuPt.style.display = "none";
      menuEn.style.display = "block";
    });
});
  