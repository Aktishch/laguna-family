const setAccordion = (element: HTMLElement): void => {
  const accordion = element as HTMLElement
  const toggle = accordion.querySelector('*[data-accordion-toggle]') as HTMLElement
  const content = accordion.querySelector('*[data-accordion-content]') as HTMLElement
  let timeOut: NodeJS.Timeout

  const setAccordionHeight = (duration = true): void => {
    if (timeOut) clearTimeout(timeOut)

    const transition: number = duration ? Math.max(content.scrollHeight / 2, 100) : 0

    content.style.height = `${content.scrollHeight}px`
    content.style.transitionDuration = duration ? `${transition / 1000}s` : '0s'

    switch (accordion.dataset.accordion) {
    case 'hidden': {
      content.classList.add('overflow-hidden')

      timeOut = setTimeout(
        (): void => {
          content.style.height = '0'
        },
        duration ? 10 : 0
      )
      break
    }

    case 'active': {
      timeOut = setTimeout((): void => {
        content.style.height = ''
        content.classList.remove('overflow-hidden')
      }, transition)
      break
    }
    }
  }

  toggle.classList.add('cursor-pointer')
  setAccordionHeight(false)

  toggle.addEventListener('click', ((): void => {
    switch (accordion.dataset.accordion) {
    case 'hidden': {
      accordion.dataset.accordion = 'active'
      setAccordionHeight()
      break
    }

    case 'active': {
      accordion.dataset.accordion = 'hidden'
      setAccordionHeight()
      break
    }
    }
  }) as EventListener)

  switch (accordion.dataset.accordionClose) {
  case 'click': {
    document.addEventListener('click', ((event: Event): void => {
      if (
        (event.target as HTMLElement).closest('[data-accordion-close="click"]') !== accordion &&
          accordion.dataset.accordion === 'active'
      ) {
        accordion.dataset.accordion = 'hidden'
        setAccordionHeight()
      }
    }) as EventListener)

    break
  }

  case 'scroll': {
    document.addEventListener('scroll', ((): void => {
      if (accordion.dataset.accordion === 'active') {
        accordion.dataset.accordion = 'hidden'
        setAccordionHeight()
      }
    }) as EventListener)

    break
  }

  default: {
    return
  }
  }
}

export default (): void => {
  const accordions = document.querySelectorAll('*[data-accordion]') as NodeListOf<Element>

  accordions.forEach((element: Element): void => {
    const accordion = element as HTMLElement

    if (accordion) setAccordion(accordion)
  })
}
