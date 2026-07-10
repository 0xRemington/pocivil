import { useState } from 'react'
import { company, nav } from '../data/site'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="navbar">
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
            <strong>P.Okeke</strong>
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
