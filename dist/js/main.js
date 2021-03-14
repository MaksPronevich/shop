'use strict'; // ================================================= functions ==================================================    

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
  });
  document.addEventListener('mouseover', function (e) {
    if (!e.target.closest('.catalog-nav')) deactivateSubNav();
  });
};

var slider = function slider() {
  new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}; // ================================================= functions call ================================================== 


toggleCatalog();
catalogSubNavigation();
slider();