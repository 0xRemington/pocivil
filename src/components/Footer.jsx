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
          <p className="footer__tag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
          </p>
        </div>

        <div className="footer__col">
          <h4>Lorem</h4>
          <ul>
            <li>
              <a href="#services">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#projects">Dolor Amet</a>
            </li>
            <li>
              <a href="#about">Consectetur</a>
            </li>
            <li>
              <a href="#process">Adipiscing</a>
            </li>
            <li>
              <a href="#contact">Eiusmod</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Ipsum</h4>
          <ul>
            <li>Consectetur adipiscing</li>
            <li>lorem@ipsum.com</li>
            <li>Ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>
            © {new Date().getFullYear()} Lorem Ipsum Dolor. Sit amet consectetur.
          </span>
          <span>Adipiscing · Elit · Sed Do Eiusmod</span>
        </div>
      </div>
    </footer>
  )
}
