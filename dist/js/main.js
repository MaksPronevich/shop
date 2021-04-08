'use strict';

var bodyLock = function bodyLock() {
  document.body.classList.add('lock');
};

var bodyUnLock = function bodyUnLock() {
  document.body.classList.remove('lock');
};

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
      disableOnInteraction: true
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
  var popupLinkElems = document.querySelectorAll('.popup-link');
  var popupElems = document.querySelectorAll('.popup');

  var popupOpen = function popupOpen(curentPopup) {
    curentPopup.classList.add('open');
  };

  var popupClose = function popupClose(popupElem) {
    popupElem.classList.remove('open');
  };

  popupLinkElems.forEach(function (popupLinkElem) {
    return popupLinkElem.addEventListener("click", function (e) {
      var popupName = popupLinkElem.getAttribute('href').replace('#', '');
      var curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      bodyLock();
      e.preventDefault();
    });
  });
  popupElems.forEach(function (popupElem) {
    return popupElem.addEventListener("click", function (e) {
      var target = e.target;

      if (target.classList.contains('open') || target.classList.contains('popup__close')) {
        popupClose(popupElem);
        bodyUnLock();
        e.preventDefault();
      }
    });
  });
}
{
  var wallLength = document.querySelector('.wall-length');
  var wallHeight = document.querySelector('.wall-height');
  var anotherArea = document.querySelector('.another-area');
  var quantityResult = document.querySelector('.quantity__result');
  var totalResult = document.querySelector('.total__result');
  var inputs = document.querySelectorAll('.calc');

  var strToNumber = function strToNumber(str) {
    return str.value ? parseInt(str.value) : 0;
  };

  var calculation = function calculation() {
    var result = Math.round((strToNumber(wallLength) * strToNumber(wallHeight) - strToNumber(anotherArea)) / 0.01625);
    quantityResult.textContent = result;
    totalResult.textContent = result * 4500;
  };

  inputs.forEach(function (input) {
    return input.addEventListener("input", function () {
      if (input.value < 0) input.value = "";
      calculation();
    });
  });
} // const getProducts = async () => {
//     const result = await fetch('db/db.json');
//     if (!result.ok) {
//         throw `Error: ${result.status}`;
//     }
//     return result.json();
// };
// const getGoods = async () => {
//     const result = await fetch('db/db.json');
//     if (!result.ok) {
//         throw `Error: ${result.status}`;
//     }
//     return result.json();
// };
// {
//     const data = [
//         {
//             id: '01',
//             ribbonText: 'Лидер продаж',
//             ribbonColor: '#F2994A',
//             img: 'img/product/product.png',
//             title: 'Кирпич облицовочный М95 Воткинский',
//             description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
//             delivery: 'бесплатная доставка',
//             availability: 'в наличии',
//             price: 4500,
//         },
//         {
//             id: '02',
//             ribbonText: 'Лучшая цена',
//             ribbonColor: '#D41A36',
//             img: 'img/product/product.png',
//             title: 'Кирпич облицовочный М95 Воткинский',
//             description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
//             delivery: 'бесплатная доставка',
//             availability: 'в наличии',
//             price: 4500,
//             priceWithDiscount: 4300,
//         },
//         {
//             id: '03',
//             ribbonText: 'Привезём сегодня',
//             ribbonColor: '#219653',
//             img: 'img/product/product.png',
//             title: 'Кирпич облицовочный М95 Воткинский',
//             description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
//             delivery: 'бесплатная доставка',
//             availability: 'в наличии',
//             price: 4900,
//         },
//         {
//             id: '04',
//             ribbonText: '',
//             ribbonColor: 'none',
//             img: 'img/product/product.png',
//             title: 'Кирпич облицовочный М95 Воткинский',
//             description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
//             delivery: 'бесплатная доставка',
//             availability: 'в наличии',
//             price: 4900,
//         },
//         {
//             id: '05',
//             ribbonText: 'Привезём сегодня',
//             ribbonColor: '#219653',
//             img: 'img/product/product.png',
//             title: 'Кирпич облицовочный М95 Воткинский',
//             description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
//             delivery: 'бесплатная доставка',
//             availability: 'в наличии',
//             price: 4900,
//         },
//         {
//             id: '06',
//             ribbonText: '',
//             ribbonColor: 'none',
//             img: 'img/product/product.png',
//             title: 'Кирпич облицовочный М95 Воткинский',
//             description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
//             delivery: 'бесплатная доставка',
//             availability: 'в наличии',
//             price: 4900,
//         },
//         {
//             id: '07',
//             ribbonText: 'Лидер продаж',
//             ribbonColor: '#F2994A',
//             img: 'img/product/product.png',
//             title: 'Кирпич облицовочный М95 Воткинский',
//             description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
//             delivery: 'бесплатная доставка',
//             availability: 'в наличии',
//             price: 4500,
//         },
//         {
//             id: '08',
//             ribbonText: 'Лучшая цена',
//             ribbonColor: '#D41A36',
//             img: 'img/product/product.png',
//             title: 'Кирпич облицовочный М95 Воткинский',
//             description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
//             delivery: 'бесплатная доставка',
//             availability: 'в наличии',
//             price: 4500,
//             priceWithDiscount: 4300,
//         },
//         {
//             id: '09',
//             ribbonText: '',
//             ribbonColor: 'none',
//             img: 'img/product/product.png',
//             title: 'Кирпич облицовочный М95 Воткинский',
//             description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
//             delivery: 'бесплатная доставка',
//             availability: 'в наличии',
//             price: 4900,
//         },
//     ];
//     const fragment = document.createDocumentFragment();
//     const container = document.querySelector('.special-offers__content');
//     const createCardTemplate = ({ ribbonText, ribbonColor, img, title, description, delivery, availability, price } = {}) => {
//         const сard = document.createElement('div');
//         const cardRibbon = document.createElement('span');
//         const cardFavoritesLink = document.createElement('a');
//         const cardImgWrap = document.createElement('div');
//         const cardImg = document.createElement('img');
//         const cardTitle = document.createElement('h4');
//         const cardDescr = document.createElement('p');
//         const cardInfo = document.createElement('div');
//         const cardInfoDelivery = document.createElement('p');
//         const cardInfoAvailability = document.createElement('p');
//         const cardPrice = document.createElement('div');
//         const cardBtns = document.createElement('div');
//         const cardBuyBtn = document.createElement('a');
//         const cardCartBtn = document.createElement('a');
//         сard.classList.add('product');
//         cardRibbon.classList.add('product__ribbon');
//         cardFavoritesLink.classList.add('product__favorites');
//         cardFavoritesLink.setAttribute('href', '#');
//         cardImgWrap.classList.add('product__img');
//         cardImg.setAttribute('src', img);
//         cardImg.setAttribute('alt', 'Кирпич');
//         cardTitle.classList.add('product__title');
//         cardDescr.classList.add('product__description');
//         cardInfo.classList.add('product__info');
//         cardInfoDelivery.classList.add('product__delivery');
//         cardInfoAvailability.classList.add('product__availability');
//         cardPrice.classList.add('product__price');
//         cardBtns.classList.add('product__btns');
//         cardBuyBtn.classList.add('product__btn-buy', 'btn', 'btn-buy');
//         cardBuyBtn.setAttribute('href', '#');
//         cardCartBtn.classList.add('product__btn-cart');
//         cardCartBtn.setAttribute('href', '#');
//         cardRibbon.textContent = ribbonText;
//         cardRibbon.style.background = ribbonColor;
//         cardTitle.textContent = title;
//         cardDescr.textContent = description;
//         cardInfoDelivery.textContent = delivery;
//         cardInfoAvailability.textContent = availability;
//         cardPrice.innerHTML = `<span>${price}</span> ₽ / шт.`;
//         cardBuyBtn.textContent = 'Купить в 1 клик';
//         cardBtns.append(cardBuyBtn, cardCartBtn);
//         cardInfo.append(cardInfoDelivery, cardInfoAvailability);
//         cardImgWrap.append(cardImg);
//         сard.append(cardRibbon, cardFavoritesLink, cardImgWrap, cardTitle, cardDescr, cardInfo, cardPrice, cardBtns);
//         return сard;
//     };
//     data.forEach(card => {
//         const сard = createCardTemplate(card);
//         fragment.append(сard);
//         container.append(fragment);
//     });
// }