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
    const navLinkElems = document.querySelectorAll('.catalog-nav__link');
    const subNavListElems = document.querySelectorAll('.catalog-sub-nav__list');

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
    new Swiper('.partners-slider', {
        loop: true,
        navigation: {
            nextEl: '.partners-slider__btn-prev',
            prevEl: '.partners-slider__btn-next',
        },
        slidesPerView: 7,
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
    const container = document.querySelector('.special-offers__content');

    const createCardTemplate = ({ ribbonText, ribbonColor, img, title, description, delivery, availability, price } = {}) => {
        const сard = document.createElement('div');
        const cardRibbon = document.createElement('span');
        const cardFavoritesLink = document.createElement('a');
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

        сard.classList.add('card');
        cardRibbon.classList.add('card__ribbon');
        cardFavoritesLink.classList.add('card__favorites');
        cardFavoritesLink.setAttribute('href', '#');
        cardImgWrap.classList.add('card__img');
        cardImg.setAttribute('src', img);
        cardImg.setAttribute('alt', 'Кирпич');
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
        сard.append(cardRibbon, cardFavoritesLink, cardImgWrap, cardTitle, cardDescr, cardInfo, cardPrice, cardBtns);

        return сard;
    };


    data.forEach(card => {
        const сard = createCardTemplate(card);
        fragment.append(сard);
        container.append(fragment);
    });
};


// const popups = () => {
//     const popupLinks = document.querySelectorAll('.popup-link');


//     console.log(popupLinks);
// };
















// ================================================= functions call ================================================== 
toggleCatalog();
catalogSubNavigation();
initSlider();
productCard();
// popups();




