'use strict';
document.addEventListener("DOMContentLoaded", () => {

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
        const container = document.querySelector('.catalog-nav');

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


        // document.addEventListener('mouseover', e => {
        //     const target = e.target;
        //     if (
        //         // !target.classList.contains('catalog-nav') &&
        //         // !target.classList.contains('catalog-nav-nav-list') &&
        //         // !target.classList.contains('catalog-nav-list__item') &&
        //         // !target.classList.contains('catalog-nav-list__item-link') &&

        //         // !target.classList.contains('catalog-sub-nav') &&
        //         // !target.classList.contains('catalog-sub-nav-list') &&
        //         // !target.classList.contains('catalog-sub-nav-list__item') &&
        //         // !target.classList.contains('catalog-sub-nav-list__item-link') &&
        //         // !target.classList.contains('catalog-sub-nav-list__item-title')
        //     ) {
        //         deactivateSubNav();
        //     }
        // });
        document.addEventListener('mouseover', e => {
            const target = e.target;
            if (container.contains(target)) {
                deactivateSubNav();
                e.stopPropagation();
            }
        });



    };




    // ================================================= functions call ================================================== 
    toggleCatalog();
    catalogSubNavigation();
});


