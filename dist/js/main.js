'use strict';

{
  var catalogBtnElem = document.querySelector('.btn-catalog');
  var catalogElem = document.querySelector('.catalog-wrap');
  catalogBtnElem.addEventListener("click", function (e) {
    catalogElem.classList.toggle('active');
    e.preventDefault();
  });
}
{
  var navLinkElems = document.querySelectorAll('.catalog-nav__link');
  var subNavListElems = document.querySelectorAll('.catalog-sub-nav__list');

  var deactivateSubNav = function deactivateSubNav() {
    return subNavListElems.forEach(function (subNavListElem) {
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
}
{
  new Swiper('.intro-slider', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });
}
{
  new Swiper('.partners-slider', {
    loop: false,
    navigation: {
      nextEl: '.partners-slider__btn-next',
      prevEl: '.partners-slider__btn-prev'
    },
    slidesPerView: 6
  });
}
{
  var data = [{
    id: '01',
    ribbonText: 'Лидер продаж',
    ribbonColor: '#F2994A',
    img: 'img/product/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4500
  }, {
    id: '02',
    ribbonText: 'Лучшая цена',
    ribbonColor: '#D41A36',
    img: 'img/product/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4500,
    priceWithDiscount: 4300
  }, {
    id: '03',
    ribbonText: 'Привезём сегодня',
    ribbonColor: '#219653',
    img: 'img/product/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4900
  }, {
    id: '04',
    ribbonText: '',
    ribbonColor: 'none',
    img: 'img/product/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4900
  }, {
    id: '05',
    ribbonText: 'Привезём сегодня',
    ribbonColor: '#219653',
    img: 'img/product/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4900
  }, {
    id: '06',
    ribbonText: '',
    ribbonColor: 'none',
    img: 'img/product/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4900
  }, {
    id: '07',
    ribbonText: 'Лидер продаж',
    ribbonColor: '#F2994A',
    img: 'img/product/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4500
  }, {
    id: '08',
    ribbonText: 'Лучшая цена',
    ribbonColor: '#D41A36',
    img: 'img/product/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4500,
    priceWithDiscount: 4300
  }, {
    id: '09',
    ribbonText: '',
    ribbonColor: 'none',
    img: 'img/product/product.png',
    title: 'Кирпич облицовочный М95 Воткинский',
    description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
    delivery: 'бесплатная доставка',
    availability: 'в наличии',
    price: 4900
  }];
  var fragment = document.createDocumentFragment();
  var container = document.querySelector('.special-offers__content');

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
    var cardCartBtn = document.createElement('a');
    сard.classList.add('product');
    cardRibbon.classList.add('product__ribbon');
    cardFavoritesLink.classList.add('product__favorites');
    cardFavoritesLink.setAttribute('href', '#');
    cardImgWrap.classList.add('product__img');
    cardImg.setAttribute('src', img);
    cardImg.setAttribute('alt', 'Кирпич');
    cardTitle.classList.add('product__title');
    cardDescr.classList.add('product__description');
    cardInfo.classList.add('product__info');
    cardInfoDelivery.classList.add('product__delivery');
    cardInfoAvailability.classList.add('product__availability');
    cardPrice.classList.add('product__price');
    cardBtns.classList.add('product__btns');
    cardBuyBtn.classList.add('product__btn-buy', 'btn', 'btn-buy');
    cardBuyBtn.setAttribute('href', '#');
    cardCartBtn.classList.add('product__btn-cart');
    cardCartBtn.setAttribute('href', '#');
    cardRibbon.textContent = ribbonText;
    cardRibbon.style.background = ribbonColor;
    cardTitle.textContent = title;
    cardDescr.textContent = description;
    cardInfoDelivery.textContent = delivery;
    cardInfoAvailability.textContent = availability;
    cardPrice.innerHTML = "<span>".concat(price, "</span> \u20BD / \u0448\u0442.");
    cardBuyBtn.textContent = 'Купить в 1 клик';
    cardBtns.append(cardBuyBtn, cardCartBtn);
    cardInfo.append(cardInfoDelivery, cardInfoAvailability);
    cardImgWrap.append(cardImg);
    сard.append(cardRibbon, cardFavoritesLink, cardImgWrap, cardTitle, cardDescr, cardInfo, cardPrice, cardBtns);
    return сard;
  };

  data.forEach(function (card) {
    var сard = createCardTemplate(card);
    fragment.append(сard);
    container.append(fragment);
  });
}