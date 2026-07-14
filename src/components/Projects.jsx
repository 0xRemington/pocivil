import { projects } from '../data/site'
import Card from '../styles/elements/Card'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Selected Work</p>
          <h2 className="section__title">A track record set in concrete</h2>
          <p className="section__sub">
            Self-performed delivery for state, municipal, port, and private clients — highways,
            bridges, drainage, and sitework we take from first stake to closeout ourselves.
          </p>
        </div>

        <div className="projects">
          {/* Static stage per tile: it holds the perspective and the hover
              trigger, so the tilting slab card inside doesn't slide out from
              under the pointer — see the note in Services.css */}
          {projects.map((p, i) => (
            <div className="project" key={p.title} style={{ '--accent-project': p.accent }}>
              <Card>
                {/* Visual reads as a drafting sheet: fine grid, thin frame, a
                    plan-view detail number, and a title-block bar carrying the
                    scope. The per-project accent is the only colour highlight. */}
                <div className="project__visual">
                  <span className="project__glow" aria-hidden="true" />
                  <span className="project__no" aria-hidden="true">{`0${i + 1}`}</span>
                  <span className="project__frame" aria-hidden="true" />
                  <div className="project__titleblock">
                    <span className="project__tb-cat">{p.category}</span>
                    <span className="project__tb-scope">{p.scope}</span>
                    <span className="project__tb-sheet" aria-hidden="true">{`C-10${i + 1}`}</span>
                  </div>
                </div>
                <div className="project__body">
                  <h3 className="project__title">{p.title}</h3>
                  <p className="project__blurb">{p.blurb}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
