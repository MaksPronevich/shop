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

var initSlider = function initSlider() {
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
    ribbonColor: '#F2994A',
    img: 'img/card/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4500
  }, {
    ribbonText: 'Лучшая цена',
    ribbonColor: '#D41A36',
    img: 'img/card/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4500,
    priceWithDiscount: 4300
  }, {
    ribbonText: 'Привезём сегодня',
    ribbonColor: '#219653',
    img: 'img/card/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4900
  }, {
    ribbonText: '',
    ribbonColor: 'none',
    img: 'img/card/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4900
  }];
  var fragment = document.createDocumentFragment();
  var cont = document.querySelector('.special-offers-content');

  var createCardTemplate = function createCardTemplate() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        ribbonText = _ref.ribbonText,
        ribbonColor = _ref.ribbonColor,
        img = _ref.img,
        title = _ref.title,
        description = _ref.description,
        delivery = _ref.delivery,
        availability = _ref.availability,
        price = _ref.price;

    var сard = document.createElement('div');
    var cardRibbon = document.createElement('span');
    var cardFavoritesLink = document.createElement('a');
    var cardFavoritesImg = document.createElement('img');
    var cardImgWrap = document.createElement('div');
    var cardImg = document.createElement('img');
    var cardTitle = document.createElement('h4');
    var cardDescr = document.createElement('p');
    var cardInfo = document.createElement('div');
    var cardInfoDelivery = document.createElement('p');
    var cardInfoAvailability = document.createElement('p');
    var cardPrice = document.createElement('div');
    var cardBtns = document.createElement('div');
    var cardBuyBtn = document.createElement('a');
    var cardBasketBtn = document.createElement('a');
    var cardBasketImg = document.createElement('img');
    сard.classList.add('card');
    cardRibbon.classList.add('card__ribbon');
    cardFavoritesLink.classList.add('card__favorites');
    cardFavoritesLink.setAttribute('href', '#');
    cardFavoritesImg.setAttribute('src', 'img/card/favorites.svg');
    cardFavoritesImg.setAttribute('alt', 'favorites');
    cardImgWrap.classList.add('card__img');
    cardImg.setAttribute('src', img);
    cardImg.setAttribute('alt', 'product1');
    cardTitle.classList.add('card__title');
    cardDescr.classList.add('card__description');
    cardInfo.classList.add('card__info');
    cardInfoDelivery.classList.add('card__delivery');
    cardInfoAvailability.classList.add('card__availability');
    cardPrice.classList.add('card__price');
    cardBtns.classList.add('card__btns');
    cardBuyBtn.classList.add('card__btn-buy', 'btn', 'btn-buy');
    cardBuyBtn.setAttribute('href', '#');
    cardBasketBtn.classList.add('card__btn-basket');
    cardBasketBtn.setAttribute('href', '#');
    cardBasketImg.setAttribute('src', 'img/card/basket.svg');
    cardBasketImg.setAttribute('alt', 'basket');
    cardRibbon.textContent = ribbonText;
    cardRibbon.style.background = ribbonColor;
    cardTitle.textContent = title;
    cardDescr.textContent = description;
    cardInfoDelivery.textContent = delivery;
    cardInfoAvailability.textContent = availability;
    cardPrice.innerHTML = "<span>".concat(price, "</span> \u20BD / \u0448\u0442.");
    cardBuyBtn.textContent = 'Купить в 1 клик';
    cardBtns.append(cardBuyBtn, cardBasketBtn);
    cardInfo.append(cardInfoDelivery, cardInfoAvailability);
    cardImgWrap.append(cardImg);
    cardFavoritesLink.append(cardFavoritesImg);
    cardBasketBtn.append(cardBasketImg);
    сard.append(cardRibbon, cardFavoritesLink, cardImgWrap, cardTitle, cardDescr, cardInfo, cardPrice, cardBtns);
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
initSlider();
productCard();