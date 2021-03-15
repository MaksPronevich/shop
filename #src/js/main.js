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
    ];

    const fragment = document.createDocumentFragment();

    const createCardTemplate = ({ ribbonText, img, title, description, delivery, availability, price } = {}) => {
        const сard = document.createElement('div');
        const сardContainer = document.createElement('div');
        const cardImgWrap = document.document.createElement('div');
        const cardImg = document.document.createElement('img');
        const cardTitle = document.document.createElement('h4');
        const cardDescr = document.document.createElement('p');
        const cardInfo = document.document.createElement('div');
        const cardInfoDelivery = document.document.createElement('p');
        const cardInfoavailability = document.document.createElement('p');
        const cardPrice = document.document.createElement('div');
        const cardBtns = document.document.createElement('div');

    };


    data.forEach(card => {
        const сard = createCardTemplate(card);
    });
};





















// ================================================= functions call ================================================== 
toggleCatalog();
catalogSubNavigation();
slider();
productCard();



