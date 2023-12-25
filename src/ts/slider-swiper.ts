import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs } from 'swiper'
import { media } from './functions/media'

declare global {
  interface Window {
    Swiper: typeof Swiper
  }
}

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs])
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper

export default (): void => {
  new window.Swiper('.services-slider .swiper', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      [media.sm]: {
        slidesPerView: 1.5,
      },
      [media.md]: {
        slidesPerView: 2,
        spaceBetween: 28,
      },
      [media.xl]: {
        slidesPerView: 3,
        allowTouchMove: false,
      },
    },
  }) as Swiper
}
