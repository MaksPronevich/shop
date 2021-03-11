'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // ================================================= functions ==================================================    
  var toggleCatalog = function toggleCatalog() {
    var catalogBtnElem = document.querySelector('.btn-catalog');
    var catalogElem = document.querySelector('.catalog-wrap');
    catalogBtnElem.addEventListener("click", function (e) {
      catalogElem.classList.toggle('active');
      e.preventDefault();
    });
  };

  var catalogSubNavigation = function catalogSubNavigation() {
    var navLinkElems = document.querySelectorAll('.catalog-nav-list__item-link');
    var subNavListElems = document.querySelectorAll('.catalog-sub-nav-list');
    var container = document.querySelector('.catalog-nav');

    var deactivateSubNav = function deactivateSubNav() {
      subNavListElems.forEach(function (subNavListElem) {
        return subNavListElem.classList.remove('active');
      });
    };

    navLinkElems.forEach(function (navLinkElem, i) {
      navLinkElem.addEventListener("mouseover", function () {
        deactivateSubNav();
        subNavListElems[i].classList.add('active');
      });
      navLinkElem.addEventListener("click", function (e) {
        return e.preventDefault();
      });
    }); // document.addEventListener('mouseover', e => {
    //     const target = e.target;
    //     if (
    //         // !target.classList.contains('catalog-nav') &&
    //         // !target.classList.contains('catalog-nav-nav-list') &&
    //         // !target.classList.contains('catalog-nav-list__item') &&
    //         // !target.classList.contains('catalog-nav-list__item-link') &&
    //         // !target.classList.contains('catalog-sub-nav') &&
    //         // !target.classList.contains('catalog-sub-nav-list') &&
    //         // !target.classList.contains('catalog-sub-nav-list__item') &&
    //         // !target.classList.contains('catalog-sub-nav-list__item-link') &&
    //         // !target.classList.contains('catalog-sub-nav-list__item-title')
    //     ) {
    //         deactivateSubNav();
    //     }
    // });

    document.addEventListener('mouseover', function (e) {
      var target = e.target;

      if (container.contains(target)) {
        deactivateSubNav();
        e.stopPropagation();
      }
    });
  }; // ================================================= functions call ================================================== 


  toggleCatalog();
  catalogSubNavigation();
});