'use strict';

{
    const catalogBtnElem = document.querySelector('.btn-catalog');
    const catalogElem = document.querySelector('.catalog-wrap');

    catalogBtnElem.addEventListener("click", e => {
        catalogElem.classList.toggle('active');
        e.preventDefault();
    });
}


{
    const navLinkElems = document.querySelectorAll('.catalog-nav__link');
    const subNavListElems = document.querySelectorAll('.catalog-sub-nav__list');

    const deactivateSubNav = () => subNavListElems.forEach(subNavListElem => subNavListElem.classList.remove('active'));

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
}


{
    new Swiper('.intro-slider', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });
}


{
    new Swiper('.partners-slider', {
        loop: false,
        navigation: {
            nextEl: '.partners-slider__btn-next',
            prevEl: '.partners-slider__btn-prev',
        },
        slidesPerView: 6,
    });
}


// const getProducts = async () => {
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


{
    const popupLink = document.querySelector('.popup-link');
    const popup = document.querySelector('.popup');


    const modalClose = () => {
        popup.classList.remove('open');
    };

    const modalOpen = () => {
        popup.classList.add('open');
    };


    popupLink.addEventListener("click", modalOpen);
    popup.addEventListener("click", e => {
        const target = e.target;
        if (target.classList.contains('open') || target.classList.contains('popup__close')) {
            modalClose();
        }
    });

}