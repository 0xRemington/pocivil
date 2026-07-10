import { process } from '../data/site'
import './Process.css'

export default function Process() {
  return (
    <section className="section section--muted" id="process">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">How We Deliver</p>
          <h2 className="section__title">One accountable team, start to finish</h2>
          <p className="section__sub">
            A disciplined process that removes surprises and keeps your project moving from the first
            estimate to final handover.
          </p>
        </div>

        <div className="process">
          {process.map((p) => (
            <div className="process__step" key={p.step}>
              <span className="process__num">{p.step}</span>
              <h3 className="process__title">{p.title}</h3>
              <p className="process__text">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
