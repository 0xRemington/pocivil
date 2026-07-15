import { useEffect, useRef, useState } from 'react'
import { company, nav } from '../data/site'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)

  const close = () => setOpen(false)

  // While the mobile menu is open: close on Escape, close on a click
  // outside the header (nav links live inside it and close themselves),
  // and lock body scroll. All undone on cleanup.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="navbar" ref={headerRef}>
      <div className="navbar__pill">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="32" height="32">
              <path
                d="M14 44 L32 16 L50 44 Z"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <rect x="12" y="48" width="40" height="5" rx="2.5" fill="var(--accent)" />
            </svg>
          </span>
          <span className="brand__text">
            <strong>P. Okeke</strong>
            <small>Heavy Civil</small>
          </span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href={`tel:${company.phone.replace(/[^\d]/g, '')}`} className="nav__cta">
            {company.phone}
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
