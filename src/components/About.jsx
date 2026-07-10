import { values, company } from '../data/site'
import './About.css'

export default function About() {
  return (
    <section className="section section--dark" id="about">
      <div className="container about__grid">
        <div className="about__intro">
          <p className="eyebrow eyebrow--light">Who We Are</p>
          <h2 className="section__title">
            A builder's company, run by people who came up through the field.
          </h2>
          <p className="about__text">
            Founded in {company.founded}, {company.name} grew from a single grading crew into a
            full-service heavy civil contractor. We still operate the way we started — owners on the
            jobsite, decisions made fast, and a crew that takes pride in work that holds up under
            traffic, weather, and time.
          </p>
          <p className="about__text">
            Because we self-perform the majority of our scope, we own the schedule and the quality.
            That accountability is why public agencies and private developers keep bringing us
            back.
          </p>
          <a href="#contact" className="btn btn--accent">
            Start a Conversation
          </a>
        </div>

        <div className="values">
          {values.map((v) => (
            <div className="value" key={v.title}>
              <h3 className="value__title">{v.title}</h3>
              <p className="value__text">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
