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


const slider = () => {
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
            img: 'img/card/product.png',
            title: 'Кирпич облицовочный М95 Воткинский',
            description: 'Кол-во на поддоне, шт. - 297 Формат одинарный',
            delivery: 'бесплатная доставка',
            availability: 'в наличии',
            price: 4500,
        },
        {
            ribbonText: 'Лидер продаж',
            img: 'img/card/product.png',
            title: 'Кирпич облицовочный М95 Воткинский',
            description: 'Кол-во на поддоне, шт. - 29790- Формат одинарный',
            delivery: 'бесплатная доставка',
            availability: 'в наличии',
            price: 4900,
        },
    ];

    const fragment = document.createDocumentFragment();
    const cont = document.querySelector('.special-offers-content');

    const createCardTemplate = ({ ribbonText, img, title, description, delivery, availability, price } = {}) => {
        const сard = document.createElement('div');
        const сardContainer = document.createElement('div');
        const cardImgWrap = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardTitle = document.createElement('h4');
        const cardDescr = document.createElement('p');
        const cardInfo = document.createElement('div');
        const cardInfoDelivery = document.createElement('p');
        const cardInfoAvailability = document.createElement('p');
        const cardPrice = document.createElement('div');
        const cardBtns = document.createElement('div');
        const cardBtnBuy = document.createElement('a');
        const cardBtnBasket = document.createElement('a');

        сard.classList.add('product-card');
        сardContainer.classList.add('product-card__container');
        cardImgWrap.classList.add('product-card__img');
        // cardImg.classList.add('');
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


    data.forEach(card => {
        const сard = createCardTemplate(card);
        fragment.append(сard);
        cont.append(fragment);
    });
};





















// ================================================= functions call ================================================== 
toggleCatalog();
catalogSubNavigation();
slider();
productCard();



