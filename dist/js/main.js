'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // functions    
  var toggleCatalog = function toggleCatalog() {
    var catalogBtnElem = document.querySelector('.btn--catalog');
    var catalogElem = document.querySelector('.catalog-nav');
    catalogBtnElem.addEventListener("click", function (e) {
      catalogElem.classList.toggle('active');
      e.preventDefault();
    });
  };

  var catalogDropdown = function catalogDropdown() {
    var catalogNavLinkElems = document.querySelectorAll('.catalog-nav-list__item-link');
    var catalogSubNavListElems = document.querySelectorAll('.catalog-sub-nav-list');

    var deactivate = function deactivate() {
      catalogSubNavListElems.forEach(function (catalogSubNavListElem) {
        return catalogSubNavListElem.classList.remove('active');
      });
    };

    catalogNavLinkElems.forEach(function (catalogNavLinkElem, i) {
      catalogNavLinkElem.addEventListener("mouseover", function () {
        deactivate();
        catalogSubNavListElems[i].classList.add('active');
      });
    });
    document.addEventListener('mouseover', function (e) {
      if (!(e.target === profileBlock || profileBlock.contains(e.target)) && !(e.target === profileLink || profileLink.contains(e.target)) && profileBlock.classList.contains('active')) {
        toggleProfileBlock();
      }
    });
  }; // functions call


  toggleCatalog();
  catalogDropdown();
});