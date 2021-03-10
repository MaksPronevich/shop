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


    const catalogDropdown = () => {
        const catalogNavLinkElems = document.querySelectorAll('.catalog-nav-list__item-link');
        const catalogSubNavListElems = document.querySelectorAll('.catalog-sub-nav-list');

        const deactivate = () => {
            catalogSubNavListElems.forEach(catalogSubNavListElem => catalogSubNavListElem.classList.remove('active'));
        };

        catalogNavLinkElems.forEach((catalogNavLinkElem, i) => {
            catalogNavLinkElem.addEventListener("mouseover", () => {
                deactivate();
                catalogSubNavListElems[i].classList.add('active');
            });
        });


        document.addEventListener('mouseover', e => {
            if (
                !(e.target === profileBlock || profileBlock.contains(e.target)) &&
                !(e.target === profileLink || profileLink.contains(e.target)) &&
                profileBlock.classList.contains('active')
            ) {
                toggleProfileBlock();
            }
        });
    };







    // functions call
    toggleCatalog();
    catalogDropdown();
});


