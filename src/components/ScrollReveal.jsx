import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Fades page sections up as they scroll into view, and staggers the cards in
// any grid inside them. The hidden state is only applied from here, so content
// stays visible without JavaScript or when reduced motion is requested.
export default function ScrollReveal() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target
          observer.unobserve(el)
          el.classList.add('is-visible')
          // Drop the hooks once the entrance has played so hover transitions
          // on cards are not slowed by the stagger delay.
          setTimeout(() => {
            el.removeAttribute('data-reveal')
            el.classList.remove('is-visible')
            el.querySelectorAll('[data-reveal-item]').forEach((item) => {
              item.removeAttribute('data-reveal-item')
              item.style.removeProperty('--i')
            })
          }, 1600)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )

    // The first section is the page hero, which animates on load instead.
    const sections = [...document.querySelectorAll('main section')].slice(1)
    for (const section of sections) {
      for (const block of section.children) {
        if (block.getBoundingClientRect().height < 80) continue
        block.setAttribute('data-reveal', '')
        block.querySelectorAll('.grid').forEach((grid) => {
          ;[...grid.children].forEach((item, i) => {
            item.setAttribute('data-reveal-item', '')
            item.style.setProperty('--i', Math.min(i, 8))
          })
        })
        observer.observe(block)
      }
    }

    return () => {
      observer.disconnect()
      document.querySelectorAll('[data-reveal], [data-reveal-item]').forEach((el) => {
        el.removeAttribute('data-reveal')
        el.removeAttribute('data-reveal-item')
      })
    }
  }, [pathname])

  return null
}
