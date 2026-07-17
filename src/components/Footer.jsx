import { company, nav } from '../data/site'
import './Footer.css'

export default function Footer() {
  const tel = `tel:${company.phone.replace(/[^\d]/g, '')}`
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__grid-lines" aria-hidden="true" />

      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" width="34" height="34">
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
          </div>
          <p className="footer__tag">{company.tagline}</p>
          <p className="footer__stamp">
            NL · Est. 2025
          </p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h4>Explore</h4>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>
              <a href={tel}>{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          {/* Sheet-number tab — echoes the hero title block's "S-101" */}
          <span className="footer__copy">
            © {year} {company.name}. All rights reserved.
          </span>
          <span className="footer__creds">
            Bonded &amp; Insured · Certified · OHS Compliant
          </span>
        </div>
      </div>
    </footer>
  )
}
