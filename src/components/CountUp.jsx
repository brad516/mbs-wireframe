import { useEffect, useRef, useState } from 'react'

// Counts up to a figure like "1,600" or "50,000+" the first time it scrolls
// into view. Anything around the digits is kept as-is.
export default function CountUp({ value, duration = 1400 }) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/)
  const target = match ? Number(match[2].replace(/,/g, '')) : null
  const ref = useRef(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (target === null || !el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setShown(`${match[1]}${Math.round(target * eased).toLocaleString('en-US')}${match[3]}`)
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration])

  // Reserve the final width so neighbours do not shift while counting.
  return (
    <span ref={ref} className="inline-grid tabular-nums">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">{value}</span>
      <span className="col-start-1 row-start-1">{shown}</span>
    </span>
  )
}
