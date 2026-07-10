import { company } from '../data/site'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <h1 className="hero__title">
          We move earth, raise structures,
          <br />
          and build what lasts.
        </h1>
        <p className="hero__lede">
          {company.name} is a self-performing heavy civil contractor delivering highways, bridges,
          earthwork, and underground utilities across the region — on schedule, on budget, and
          built to endure.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--accent btn--lg">
            Request a Bid
          </a>
          <a href="#projects" className="btn btn--ghost btn--lg">
            View Our Work
          </a>
        </div>
        <div className="hero__badges">
          <span>Bonded &amp; Insured</span>
          <span>DBE / MBE Certified</span>
          <span>OSHA Compliant</span>
        </div>
      </div>
    </section>
  )
}
