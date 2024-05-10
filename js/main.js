const headerSlider = new Swiper('.header__slider', {
    slidesPerView: 'auto',
    spaceBetween: 30
})



const timelines = document.querySelectorAll('.timeline__line');
const timelineArrow = document.querySelector('.timeline__arrow');

const cardsSlider = new Swiper('.cards__slider', {
    slidesPerView: 'auto',
    speed: 1000,
    spaceBetween: 20,
    breakpoints: {
        680: {
            spaceBetween: 60
        }
    },
    mousewheel: {
        eventsTarget: '.cards__slider'
    },
    on: {
        activeIndexChange(slider) {
            timelineArrow.style.left = `${timelines[slider.activeIndex].dataset.left}%`;
        }
    }
})


