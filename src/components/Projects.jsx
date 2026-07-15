import { projects } from '../data/site'
import Card from '../styles/elements/Card'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section section--projects" id="projects">
      {/* Decorative line-drawn map of the island of Newfoundland, seated
          behind the tiles and hanging off the left edge of the section.
          Traced clockwise from Cape Norman: the Great Northern Peninsula,
          White Bay, Notre Dame and Bonavista Bays, the Avalon and its
          narrow isthmus, the Burin boot, the south-coast fjords, and back
          up the west coast past the Port au Port and Bay of Islands. */}
      <svg
        className="projects__map"
        viewBox="30 0 740 810"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M410 27 L455 30 L442 65 L415 91 L390 164 L325 342 L385 281
             L453 271 L440 342 L525 327 L560 380 L653 388 L635 433 L695 471
             L665 521 L610 603 L705 552 L679 619 L687 672 L722 605 L738 651
             L693 781 L664 769 L642 707 L584 757 L604 693 L601 603 L545 646
             L486 725 L420 751 L415 717 L485 596 L420 657 L415 585 L390 646
             L238 635 L87 643 L70 634 L60 590 L152 512 L142 494 L73 506
             L125 468 L205 430 L160 395 L210 350 L220 286 L265 167 L322 91
             L332 76 Z"
        />
        {/* Fogo Island off the Notre Dame Bay coast */}
        <path d="M572 308 L590 303 L596 315 L578 321 Z" />
      </svg>

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
                  <img className="project__photo" src={p.image} alt="" loading="lazy" />
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
