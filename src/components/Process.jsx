import { process } from '../data/site'
import './Process.css'

export default function Process() {
  return (
    <section className="section section--muted" id="process">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Lorem Ipsum</p>
          <h2 className="section__title">Sed do eiusmod tempor incididunt</h2>
          <p className="section__sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
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
