import { services } from '../data/site'
import { Icon } from './Icons'
import Carousel from '../styles/elements/Carousel'
import './Services.css'

/* Each rounded corner of a card is wrapped in depth by short strips
   whose top edges chord the corner arc, folded back 90° through
   --card-depth. Five segments keep the chord within ~0.6px of the
   true curve. Positions are in units of --card-radius so the same
   geometry serves every breakpoint; computed once at module load. */
const CORNER_SEGMENTS = Array.from({ length: 5 }, (_, k) => {
  const a0 = (k * Math.PI) / 10
  const a1 = ((k + 1) * Math.PI) / 10
  return {
    left: 1 - Math.sin(a1),
    top: 1 - Math.cos(a1),
    // 5% overlength so neighbouring strips overlap instead of seaming
    width: 2 * Math.sin((a1 - a0) / 2) * 1.05,
    rotate:
      (Math.atan2(Math.cos(a1) - Math.cos(a0), Math.sin(a1) - Math.sin(a0)) * 180) / Math.PI,
  }
})

function CardCorners() {
  return ['tl', 'tr', 'bl', 'br'].map((corner) => (
    <span key={corner} className={`card__corner card__corner--${corner}`} aria-hidden="true">
      {CORNER_SEGMENTS.map((s, i) => (
        <span
          key={i}
          className="card__seg"
          style={{
            left: `calc(var(--card-radius) * ${s.left.toFixed(4)})`,
            top: `calc(var(--card-radius) * ${s.top.toFixed(4)})`,
            width: `calc(var(--card-radius) * ${s.width.toFixed(4)})`,
            transform: `rotate(${s.rotate.toFixed(2)}deg) rotateX(-90deg)`,
          }}
        />
      ))}
    </span>
  ))
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">What We Build</p>
          <h2 className="section__title">Full-scope heavy civil capabilities</h2>
          <p className="section__sub">
            From the first cut of earth to final paving, we self-perform the core disciplines that
            keep your project accountable, coordinated, and on schedule.
          </p>
        </div>
      </div>

      {/* Full-bleed so neighbouring slides stay visible past the container */}
      <Carousel
        slides={services.map((s) => (
          <article className="card" key={s.title}>
            {['left', 'right', 'top', 'bottom'].map((edge) => (
              <span key={edge} className={`card__edge card__edge--${edge}`} aria-hidden="true" />
            ))}
            <CardCorners />
            <span className="card__glass" aria-hidden="true" />
            <div className="card__content">
              <span className="card__icon">
                <Icon name={s.icon} />
              </span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__text">{s.description}</p>
            </div>
          </article>
        ))}
      />
    </section>
  )
}
