import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  // A link with a #target (such as /give?fund=lehr#donate) goes to that
  // element; every other navigation starts at the top of the page.
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
