const catalogBtn = document.querySelector('.btn--catalog');
const catalog = document.querySelector('.catalog-nav');

catalogBtn.addEventListener("click", e => {
    catalog.classList.toggle('active');
    e.preventDefault();
});