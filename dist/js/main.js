"use strict";

var catalogBtn = document.querySelector('.btn--catalog');
var catalog = document.querySelector('.catalog-nav');
catalogBtn.addEventListener("click", function (e) {
  catalog.classList.toggle('active');
  e.preventDefault();
});