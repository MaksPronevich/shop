'use strict';
document.addEventListener("DOMContentLoaded", () => {

    // functions    
    const toggleCatalog = () => {
        const catalogBtnElem = document.querySelector('.btn--catalog');
        const catalogElem = document.querySelector('.catalog-nav');

        catalogBtnElem.addEventListener("click", e => {
            catalogElem.classList.toggle('active');
            e.preventDefault();
        });
    };


    const catalogNavigation = () => {
        const navLinkElems = document.querySelectorAll('.catalog-nav-list__item-link');
        const subNavListElems = document.querySelectorAll('.catalog-sub-nav-list');

        const deactivateSubNavList = () => {
            subNavListElems.forEach(subNavListElem => subNavListElem.classList.remove('active'));
        };

        navLinkElems.forEach((navLinkElem, i) => {
            navLinkElem.addEventListener("mouseover", e => {
                deactivateSubNavList();
                subNavListElems[i].classList.add('active');
                e.preventDefault();
            });
        }); 

        

    };


    // functions call
    toggleCatalog();
    catalogNavigation();
});


