import { values } from '../data/site'
import './About.css'

export default function About() {
  return (
    <section className="section section--dark" id="about">
      <div className="container about__grid">
        <div className="about__intro">
          <p className="eyebrow eyebrow--light">Lorem Ipsum</p>
          <h2 className="section__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
          </h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure
            dolor in reprehenderit.
          </p>
          <p className="about__text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque.
          </p>
          <a href="#contact" className="btn btn--accent">
            Lorem Ipsum Dolor
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
