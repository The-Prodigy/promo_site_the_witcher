let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 1,
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
        540: {
          slidesPerView: 2,
        }
    }
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header');
menuBtn.addEventListener('click', function() {
    menu.classList.toggle('header-active');
    menuBtn.classList.toggle('menu-btn-active');
});