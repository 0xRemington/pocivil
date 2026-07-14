import { values, company } from '../data/site'
import Card from '../styles/elements/Card'
import './About.css'

export default function About() {
  return (
    <section className="section section--dark about" id="about">
      <div className="about__bg" aria-hidden="true" />
      <div className="container about__grid">
        <div className="about__intro">
          <p className="eyebrow eyebrow--light">Who We Are</p>
          <h2 className="section__title">Two decades of self-performed heavy civil in Newfoundland.</h2>
          <p className="about__text">
            Since {company.founded}, {company.name} has self-performed the highways, bridges,
            earthwork, and underground utilities that keep Newfoundland and Labrador moving. We own
            our fleet and employ our crews, so accountability never gets handed off to a
            subcontractor.
          </p>
          <p className="about__text">
            Across 480-plus projects we’ve moved more than 4.7 million cubic metres of earth while
            holding a 0.61 TRIF — proof that production and safety pull in the same direction. We’re
            COR™ certified, fully bonded, and insured for every job we bid.
          </p>
          <a href="#contact" className="btn btn--accent">
            Work With Us
          </a>
          <p className="about__meta" aria-hidden="true">
            EST. {company.founded} · St. John&rsquo;s, NL · COR™ Certified
          </p>
        </div>

        <div className="values">
          {/* The tilt is triggered from this static wrapper, not the card
              itself — see the note in Services.css */}
          {values.map((v) => (
            <div className="value" key={v.title}>
              <Card className="card--amber">
                <h3 className="card__title">{v.title}</h3>
                <p className="card__text">{v.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
