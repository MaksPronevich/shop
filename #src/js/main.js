'use strict';
// ================================================= functions ==================================================    
const toggleCatalog = () => {
    const catalogBtnElem = document.querySelector('.btn-catalog');
    const catalogElem = document.querySelector('.catalog-wrap');

    catalogBtnElem.addEventListener("click", e => {
        catalogElem.classList.toggle('active');
        e.preventDefault();
    });
};


const catalogSubNavigation = () => {
    const navLinkElems = document.querySelectorAll('.catalog-nav-list__item-link');
    const subNavListElems = document.querySelectorAll('.catalog-sub-nav-list');

    const deactivateSubNav = () => {
        subNavListElems.forEach(subNavListElem => subNavListElem.classList.remove('active'));
    };

    navLinkElems.forEach((navLinkElem, i) => {
        navLinkElem.addEventListener("mouseover", () => {
            deactivateSubNav();
            subNavListElems[i].classList.add('active');
        });
        navLinkElem.addEventListener("click", e => e.preventDefault());
    });

    document.addEventListener('mouseover', e => {
        if (!e.target.closest('.catalog-nav')) {
            deactivateSubNav();
        }
    });
};


const initSlider = () => {
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};


const productCard = () => {
    const data = [
        {
            ribbonText: 'Лидер продаж',
            ribbonColor: '#F2994A',
            img: 'img/card/product.png',
            title: 'Кирпич облицовочный М95 Воткинский',
            description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
            delivery: 'бесплатная доставка',
            availability: 'в наличии',
            price: 4500,
        },
        {
            ribbonText: 'Лучшая цена',
            ribbonColor: '#D41A36',
            img: 'img/card/product.png',
            title: 'Кирпич облицовочный М95 Воткинский',
            description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
            delivery: 'бесплатная доставка',
            availability: 'в наличии',
            price: 4500,
            priceWithDiscount: 4300,
        },
        {
            ribbonText: 'Привезём сегодня',
            ribbonColor: '#219653',
            img: 'img/card/product.png',
            title: 'Кирпич облицовочный М95 Воткинский',
            description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
            delivery: 'бесплатная доставка',
            availability: 'в наличии',
            price: 4900,
        },
        {
            ribbonText: '',
            ribbonColor: 'none',
            img: 'img/card/product.png',
            title: 'Кирпич облицовочный М95 Воткинский',
            description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
            delivery: 'бесплатная доставка',
            availability: 'в наличии',
            price: 4900,
        },
    ];

    const fragment = document.createDocumentFragment();
    const cont = document.querySelector('.special-offers-content');

    const createCardTemplate = ({ ribbonText, ribbonColor, img, title, description, delivery, availability, price } = {}) => {
        const сard = document.createElement('div');
        const cardRibbon = document.createElement('span');
        const cardFavoritesLink = document.createElement('a');
        const cardFavoritesImg = document.createElement('img');
        const cardImgWrap = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardTitle = document.createElement('h4');
        const cardDescr = document.createElement('p');
        const cardInfo = document.createElement('div');
        const cardInfoDelivery = document.createElement('p');
        const cardInfoAvailability = document.createElement('p');
        const cardPrice = document.createElement('div');
        const cardBtns = document.createElement('div');
        const cardBuyBtn = document.createElement('a');
        const cardBasketBtn = document.createElement('a');
        const cardBasketImg = document.createElement('img');

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
        cardPrice.innerHTML = `<span>${price}</span> ₽ / шт.`;
        cardBuyBtn.textContent = 'Купить в 1 клик';

        cardBtns.append(cardBuyBtn, cardBasketBtn);
        cardInfo.append(cardInfoDelivery, cardInfoAvailability);
        cardImgWrap.append(cardImg);
        cardFavoritesLink.append(cardFavoritesImg);
        cardBasketBtn.append(cardBasketImg);
        сard.append(cardRibbon, cardFavoritesLink, cardImgWrap, cardTitle, cardDescr, cardInfo, cardPrice, cardBtns);

        return сard;
    };


    data.forEach(card => {
        const сard = createCardTemplate(card);
        fragment.append(сard);
        cont.append(fragment);
    });
};





















// ================================================= functions call ================================================== 
toggleCatalog();
catalogSubNavigation();
initSlider();
productCard();



