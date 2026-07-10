import { projects } from '../data/site'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Featured Work</p>
          <h2 className="section__title">Infrastructure that carries the region</h2>
          <p className="section__sub">
            A selection of recent projects spanning highways, structures, utilities, and large-scale
            site development.
          </p>
        </div>

        <div className="projects">
          {projects.map((p) => (
            <article className="project" key={p.title}>
              <div className="project__visual" style={{ '--accent-project': p.accent }}>
                <span className="project__tag">{p.category}</span>
              </div>
              <div className="project__body">
                <h3 className="project__title">{p.title}</h3>
                <p className="project__scope">{p.scope}</p>
                <p className="project__blurb">{p.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
