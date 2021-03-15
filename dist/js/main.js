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
  }, {
    ribbonText: 'Лидер продаж',
    img: 'img/card/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 29790- Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4900
  }];
  var fragment = document.createDocumentFragment();
  var cont = document.querySelector('.special-offers-content');

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
    var cardImgWrap = document.createElement('div');
    var cardImg = document.createElement('img');
    var cardTitle = document.createElement('h4');
    var cardDescr = document.createElement('p');
    var cardInfo = document.createElement('div');
    var cardInfoDelivery = document.createElement('p');
    var cardInfoAvailability = document.createElement('p');
    var cardPrice = document.createElement('div');
    var cardBtns = document.createElement('div');
    var cardBtnBuy = document.createElement('a');
    var cardBtnBasket = document.createElement('a');
    сard.classList.add('product-card');
    сardContainer.classList.add('product-card__container');
    cardImgWrap.classList.add('product-card__img'); // cardImg.classList.add('');

    cardTitle.classList.add('product-card__title');
    cardDescr.classList.add('product-card__description');
    cardInfo.classList.add('product-card__info');
    cardInfoDelivery.classList.add('product-card__info-delivery');
    cardInfoAvailability.classList.add('product-card__info-availability');
    cardPrice.classList.add('product-card__price');
    cardBtns.classList.add('product-card__btns');
    cardBtnBuy.classList.add('product-card__btn-buy', 'btn', 'btn-buy');
    cardBtnBasket.classList.add('product-card__btn-basket');
    cardTitle.textContent = title;
    cardDescr.textContent = description;
    cardInfoDelivery.textContent = delivery;
    cardInfoAvailability.textContent = availability;
    cardPrice.textContent = price;
    cardBtnBuy.textContent = 'Купить в 1 клик';
    cardBtns.append(cardBtnBuy, cardBtnBasket);
    cardInfo.append(cardInfoDelivery, cardInfoAvailability);
    cardImgWrap.append(cardImg);
    сardContainer.append(cardImgWrap, cardTitle, cardDescr, cardInfo, cardPrice, cardBtns);
    сard.append(сardContainer);
    return сard;
  };

  data.forEach(function (card) {
    var сard = createCardTemplate(card);
    fragment.append(сard);
    cont.append(fragment);
  });
}; // ================================================= functions call ================================================== 


toggleCatalog();
catalogSubNavigation();
slider();
productCard();