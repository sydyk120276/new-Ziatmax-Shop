import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../scss/swiper.scss";

// Добавление классов слайдера

function bildSliders() {
  let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)')
  if (sliders) {
    sliders.forEach(slider => {
      slider.parentElement.classList.add('swiper')
      slider.classList.add('swiper-wrapper')
      for (const slide of slider.children) {
        slide.classList.add('swiper-slide')
      }
    })
  }
}
// Инициализация слайдера
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders()

  // Перечень слайдеров
  if (document.querySelector(".main-block__slider")) {
    new Swiper(".main-block__slider", {
      // Подключаем модули слайдера для конкретного случая
      modules: [Navigation, Pagination, Parallax, Autoplay],
      // effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      observer: true,
      observerParents: true,
      slidesPerView: 1,
      spaceBetween: 1000,
      parallax: true,
      // autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //silulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      //Dotts,
      pagination: {
        el: ".controll-main-block__dotts",
        clickable: true,
      },
      on: {
        init: function (swiper) {
          const allSlides = document.querySelector('.fraction-controll__all')
          const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)')
          allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length
          console.log(swiper)
        },
        slideChange: function (swiper) {
          const currentSlides = document.querySelector('.fraction-controll__current')
          currentSlides.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1
        }
      }
      // Arrows
      // navigation: {
      //   nextEl: ".about__more .more__item_next",
      //   prevEl: "about__more .more__item_prev",
      // },
    });
  }

  //=========================================================================================================

  if (document.querySelector(".products-slider")) {
    new Swiper(".products-slider__slider", {
      // Подключаем модули слайдера для конкретного случая
      modules: [Navigation, Pagination, Autoplay],
      // effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      observer: true,
      watchOverflow: true,
      observerParents: true,
      slidesPerView: 4,
      spaceBetween: 42,
      parallax: true,
      // autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //silulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      //Dotts,
      pagination: {
        el: ".products-slider__dotts",
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        520: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1370: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      on: {},
      // Arrows
      // navigation: {
      //   nextEl: ".about__more .more__item_next",
      //   prevEl: "about__more .more__item_prev",
      // },
    });
  }

  //======================================
  if (document.querySelector(".products-new")) {
    new Swiper(".products-new__slider", {
      // Подключаем модули слайдера для конкретного случая
      modules: [Navigation, Pagination, Autoplay],
      // effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      observer: true,
      watchOverflow: true,
      observerParents: true,
      slidesPerView: 3,
      spaceBetween: 42,
      parallax: true,
      // autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //silulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      //Dotts,
      pagination: {
        el: ".products-new__dotts",
        clickable: true,
        // dynamicBullets: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        520: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1370: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      on: {},
      // Arrows
      // navigation: {
      //   nextEl: ".about__more .more__item_next",
      //   prevEl: "about__more .more__item_prev",
      // },
    });
  }

 if (document.querySelector(".thumbs-images")) {
   const thumbsSwiper = new Swiper(".thumbs-images__slider", {
     // Подключаем модули слайдера для конкретного случая
     modules: [Navigation, Pagination, Autoplay, Thumbs],
     // effect: 'fade',
     observer: true,
     watchOverflow: true,
     observerParents: true,
     slidesPerView: 3,
     spaceBetween: 16,
     parallax: true,
     // autoHeight: true,
     speed: 800,
     //touchRatio: 0,
     //silulateTouch: false,
     // loop: true,
     //preloadImages: false,
     //lazy: true,
     //Dotts,
     breakpoints: {
       992: {
         slidesPerView: 3,
       },
       1370: {
         slidesPerView: 4,
         spaceBetween: 16,
       },
     },
     on: {},
     // Arrows
     // navigation: {
     //   nextEl: ".about__more .more__item_next",
     //   prevEl: "about__more .more__item_prev",
     // },
   });
   new Swiper(".images-product__slider", {
     // Подключаем модули слайдера для конкретного случая
     modules: [Navigation, Pagination, Autoplay, Thumbs],
     // effect: 'fade',
     autoplay: {
       delay: 3000,
       disableOnInteraction: false,
     },
     thumbs: {
       swiper: thumbsSwiper,
     },
     observer: true,
     watchOverflow: true,
     observerParents: true,
     slidesPerView: 1,
     spaceBetween: 16,
     // autoHeight: true,
     speed: 800,
     //touchRatio: 0,
     //silulateTouch: false,
     // loop: true,
     //preloadImages: false,
     //lazy: true,
     //Dotts,
     // pagination: {
     //   el: ".products-new__dotts",
     //   clickable: true,
     //   // dynamicBullets: true,
     // },
     // breakpoints: {
     //   320: {
     //     slidesPerView: 1,
     //     spaceBetween: 0,
     //     autoHeight: true,
     //   },
     //   520: {
     //     slidesPerView: 1,
     //     spaceBetween: 0,
     //     autoHeight: true,
     //   },
     //   768: {
     //     slidesPerView: 2,
     //     spaceBetween: 20,
     //   },
     //   992: {
     //     slidesPerView: 2,
     //     spaceBetween: 20,
     //   },
     //   1370: {
     //     slidesPerView: 3,
     //     spaceBetween: 30,
     //   },
     // },
     on: {},
     // Arrows
     // navigation: {
     //   nextEl: ".about__more .more__item_next",
     //   prevEl: "about__more .more__item_prev",
     // },
   });
 }
}

function initSlidersScroll() { }

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдера
  initSliders()
  //Запуск инициализации скролла на базе слайдера(по классу swiper_scroll)
  //initSlidersScroll()
})