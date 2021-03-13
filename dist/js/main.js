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

  var catalogNavigation = function catalogNavigation() {
    var navLinkElems = document.querySelectorAll('.catalog-nav-list__item-link');
    var subNavListElems = document.querySelectorAll('.catalog-sub-nav-list');

    var deactivateSubNavList = function deactivateSubNavList() {
      subNavListElems.forEach(function (subNavListElem) {
        return subNavListElem.classList.remove('active');
      });
    };

    navLinkElems.forEach(function (navLinkElem, i) {
      navLinkElem.addEventListener("mouseover", function (e) {
        deactivateSubNavList();
        subNavListElems[i].classList.add('active');
        e.preventDefault();
      });
    });
  }; // functions call


  toggleCatalog();
  catalogNavigation();
});