import { services } from '../data/site'
import { Icon } from './Icons'
import Carousel from '../styles/elements/Carousel'
import Card from '../styles/elements/Card'
import './Services.css'

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
          <Card key={s.title}>
            <span className="card__icon">
              <Icon name={s.icon} />
            </span>
            <h3 className="card__title">{s.title}</h3>
            <p className="card__text">{s.description}</p>
          </Card>
        ))}
      />
    </section>
  )
}
