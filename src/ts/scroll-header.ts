import { scrolledPage } from './functions/scrolled-page'

export default (): void => {
  const header = document.querySelector('*[data-header]') as HTMLElement

  if (!header) return

  const scrollHeader = (): void => {
    const currentOffsetTop: number = scrolledPage().top

    header.offsetHeight < currentOffsetTop ? header.classList.add('bg-black') : header.classList.remove('bg-black')
  }

  document.addEventListener('scroll', scrollHeader as EventListener)
}
