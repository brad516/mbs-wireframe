import { useEffect, useRef, useState } from 'react'

// Shows its content in place, then pins a copy to the bottom of the window
// once the original has scrolled out of view above. The pinned copy can be
// dismissed for the rest of the visit to that page.
export default function StickyBar({ children, className = 'bg-red py-3' }) {
  const ref = useRef(null)
  const [pinned, setPinned] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const update = () => {
      const el = ref.current
      if (!el) return
      // Step aside at the very bottom so the footer's last line is not covered.
      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      setPinned(el.getBoundingClientRect().bottom < 0 && !atPageEnd)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const show = pinned && !dismissed

  return (
    <>
      <section ref={ref} className={className}>
        {children}
      </section>
      <div
        aria-hidden={!show}
        inert={show ? undefined : ''}
        className={`fixed bottom-0 inset-x-0 z-40 shadow-[0_-4px_20px_rgb(8_21_41/0.25)] transition-transform duration-300 ${className} ${show ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {children}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/15 text-lg leading-none transition"
        >
          &times;
        </button>
      </div>
    </>
  )
}
