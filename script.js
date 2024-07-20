// script.js

document.addEventListener("DOMContentLoaded", function () {
  const ptButton = document.getElementById("pt-button");
  const enButton = document.getElementById("en-button");
  const itButton = document.getElementById("it-button");
  const esButton = document.getElementById("es-button");

  const menuPt = document.querySelector(".menu-pt");
  const menuEn = document.querySelector(".menu-en");
  const menuIt = document.querySelector(".menu-it");
  const menuEs = document.querySelector(".menu-es");

  ptButton.addEventListener("click", function () {
    menuPt.style.display = "block";
    menuEn.style.display = "none";
    menuIt.style.display = "none";
    menuEs.style.display = "none";
  });

  enButton.addEventListener("click", function () {
    menuPt.style.display = "none";
    menuEn.style.display = "block";
    menuIt.style.display = "none";
    menuEs.style.display = "none";
  });

  itButton.addEventListener("click", function () {
    menuPt.style.display = "none";
    menuEn.style.display = "none";
    menuIt.style.display = "block";
    menuEs.style.display = "none";
  });

  esButton.addEventListener("click", function () {
    menuPt.style.display = "none";
    menuEn.style.display = "none";
    menuIt.style.display = "none";
    menuEs.style.display = "block";
  });
});
