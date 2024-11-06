import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default function sliders() {
  const moreServicesSlider = document.querySelector(".more-services__slider");
  if (moreServicesSlider) {
    const swiper = new Swiper(moreServicesSlider, {
      speed: 700,
      modules: [Navigation, Autoplay],
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
        nextEl: ".more-services .slider-nav__btn--next",
        prevEl: ".more-services .slider-nav__btn--prev",
      },
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        577: {
          autoplay: false
        }
      }
    });
  }
}
