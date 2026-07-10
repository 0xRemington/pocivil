import { company, nav } from '../data/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
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
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${company.phone.replace(/[^\d]/g, '')}`}>{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>Bonded · Insured · DBE/MBE Certified</span>
        </div>
      </div>
    </footer>
  )
}
