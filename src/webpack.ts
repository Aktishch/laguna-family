import fancybox from './ts/fancybox'
import sliderSwiper from './ts/slider-swiper'
import airDatepicker from './ts/air-datepicker'
import accordion from './ts/accordion'
import scrollHeader from './ts/scroll-header'
import currentTab from './ts/current-tab'
import currentYear from './ts/current-year'
import sidebar from './ts/sidebar'
import scrollTo from './ts/scroll-to'
import animation from './ts/animation'
import waved from './ts/waved'
import movement from './ts/movement'
import submitHandler from './ts/submit-handler'
import inputs from './ts/inputs'
import phoneMask from './ts/phone-mask'
import quantity from './ts/quantity'
import preloader from './ts/preloader'

import './scss/style.scss'

window.addEventListener('DOMContentLoaded', ((): void => {
  fancybox()
  sliderSwiper()
  airDatepicker()
  accordion()
  currentTab()
  currentYear()
  scrollHeader()
  sidebar()
  scrollTo()
  animation()
  waved()
  movement()
  submitHandler()
  inputs()
  phoneMask()
  quantity()
  preloader()
}) as EventListener)
