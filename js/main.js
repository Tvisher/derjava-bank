const headerSlider = new Swiper('.header__slider', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 30,
    mousewheel: {
        eventsTarget: '.header__slider'
    },
})



const timelines = document.querySelectorAll('.timeline__line');
const timelineArrow = document.querySelector('.timeline__arrow');
const prevArrow = document.querySelector('.swiper-button-prev')
const nextArrow = document.querySelector('.swiper-button-next')

const cardsSlider = new Swiper('.cards__slider', {
    slidesPerView: 'auto',
    speed: 1000,
    spaceBetween: 20,
    breakpoints: {
        680: {
            spaceBetween: 60
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        eventsTarget: '.cards__slider'
    },
    on: {
        activeIndexChange(slider) {
            timelineArrow.style.left = `${timelines[slider.activeIndex].dataset.left}%`;
        },
        slideChangeTransitionEnd() {
            const nextSlide = document.querySelector('.cards__slider .swiper-slide-next');
            const prevSlide = document.querySelector('.cards__slider .swiper-slide-prev');
            const nextBtnText = nextSlide ? nextSlide.querySelector('.block__year').innerHTML : '';
            const prevBtnText = prevSlide ? prevSlide.querySelector('.block__year').innerHTML : '';
            nextArrow.innerHTML = nextBtnText;
            prevArrow.innerHTML = prevBtnText;
        },
        init() {
            const nextSlide = document.querySelector('.cards__slider .swiper-slide-next');
            const prevSlide = document.querySelector('.cards__slider .swiper-slide-prev');
            const nextBtnText = nextSlide ? nextSlide.querySelector('.block__year').innerHTML : '';
            const prevBtnText = prevSlide ? prevSlide.querySelector('.block__year').innerHTML : '';
            nextArrow.innerHTML = nextBtnText;
            prevArrow.innerHTML = prevBtnText;
        }
    }
})



const mobBtn = document.querySelector('.mobile-btn');
const headerContent = document.querySelector('.header__content')
mobBtn.addEventListener('click', (e) => headerContent.classList.toggle('show'))

// const infoBtn = document.querySelector('.info__btn');
// const infoPlate = document.querySelector('.info__plate')

// if (infoBtn) {
//     infoBtn.addEventListener('click', (e) => {
//         infoPlate.classList.toggle('show');
//     })
// }



const gallerySliderThumbs = new Swiper(".gallery-thumb-slider", {
    // loop: true,
    // centeredSlides: true,
    speed: 1000,
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
});
const gallerySlider = new Swiper(".gallery-main-slider", {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: gallerySliderThumbs,
    },
});