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
        if (e.target.closest('.catalog-nav')) return;
        deactivateSubNav();
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
}




// ================================================= functions call ================================================== 
toggleCatalog();
catalogSubNavigation();
slider();



