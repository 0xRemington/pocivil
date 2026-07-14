import { process } from '../data/site'
import Card from '../styles/elements/Card'
import './Process.css'

export default function Process() {
  return (
    <section className="section section--muted" id="process">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">How We Work</p>
          <h2 className="section__title">A disciplined path from bid to closeout</h2>
          <p className="section__sub">
            Every project runs the same measured alignment — priced honestly, staged with our own
            crews, tracked daily, and handed over clean. No surprises between the stakes.
          </p>
        </div>

        <div className="process">
          {/* The tilt is triggered from this static wrapper, not the card
              itself — see the note in Services.css */}
          {process.map((p) => (
            <div className="process__step" key={p.step}>
              <Card>
                {/* Survey alignment marker: a station node riding the line
                    that threads all four steps together */}
                <div className="process__marker" aria-hidden="true">
                  <span className="process__sta">STA {p.step}+00</span>
                  <span className="process__node" />
                </div>
                <span className="process__num">{p.step}</span>
                <h3 className="process__title">{p.title}</h3>
                <p className="process__text">{p.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
