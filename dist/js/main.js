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
    if (!e.target.closest('.catalog-nav')) {
      deactivateSubNav();
    }
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
};

var productCard = function productCard() {
  var data = [{
    ribbonText: 'Лидер продаж',
    img: 'img/card/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4500
  }];
  var fragment = document.createDocumentFragment();

  var createCardTemplate = function createCardTemplate() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        ribbonText = _ref.ribbonText,
        img = _ref.img,
        title = _ref.title,
        description = _ref.description,
        delivery = _ref.delivery,
        availability = _ref.availability,
        price = _ref.price;

    var сard = document.createElement('div');
    var сardContainer = document.createElement('div');
    var cardImgWrap = document.document.createElement('div');
    var cardImg = document.document.createElement('img');
    var cardTitle = document.document.createElement('h4');
    var cardDescr = document.document.createElement('p');
    var cardInfo = document.document.createElement('div');
    var cardInfoDelivery = document.document.createElement('p');
    var cardInfoavailability = document.document.createElement('p');
    var cardPrice = document.document.createElement('div');
    var cardBtns = document.document.createElement('div');
  };

  data.forEach(function (card) {
    var сard = createCardTemplate(card);
  });
}; // ================================================= functions call ================================================== 


toggleCatalog();
catalogSubNavigation();
slider();
productCard();