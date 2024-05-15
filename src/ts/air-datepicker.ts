import AirDatepicker from 'air-datepicker'
import localeRu from 'air-datepicker/locale/ru'

declare global {
  interface Window {
    AirDatepicker: typeof AirDatepicker
    excludeDates: number[]
  }
}

window.AirDatepicker = AirDatepicker

export default (): void => {
  const calendars = document.querySelectorAll('*[data-input="calendar"]') as NodeListOf<Element>

  calendars.forEach((element: Element) => {
    const calendar = element as HTMLInputElement

    new window.AirDatepicker(calendar, {
      locale: localeRu,
      isMobile: true,
      autoClose: true,
      minDate: new Date(),
    })
  })
}
