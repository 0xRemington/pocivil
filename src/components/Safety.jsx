import { company } from '../data/site'
import './Safety.css'

export default function Safety() {
  return (
    <section className="safety" id="safety">
      <div className="container safety__inner">
        <div className="safety__content">
          <p className="eyebrow eyebrow--light">Safety Culture</p>
          <h2 className="section__title">Everyone goes home safe — every shift, every site.</h2>
          <p className="safety__text">
            Safety isn&rsquo;t a binder on a shelf; it&rsquo;s how we plan the work and run the
            iron. Every scope is engineered around the people performing it — hazards identified
            before the first stake, controls in place before production starts, and a crew trained
            and empowered to shut it down the moment something looks wrong.
          </p>
          <ul className="safety__list">
            <li>Daily job hazard analyses with every crew before work begins</li>
            <li>NLCSA-trained supervisors, safety-certified field staff on every crew</li>
            <li>Company-wide stop-work authority — anyone, anytime, no questions</li>
            <li>Third-party COR™ audits and a comprehensive drug &amp; alcohol program</li>
          </ul>
        </div>

        <div className="safety__metric">
          <span className="safety__metric-frame" aria-hidden="true" />
          {['tl', 'tr', 'bl', 'br'].map((c) => (
            <span key={c} className={`safety__tick safety__tick--${c}`} aria-hidden="true" />
          ))}

          {/* Title-block strip echoing the hero drafting sheet */}
          <div className="safety__metric-tb">
            <span className="safety__metric-tb-name">Safety Record</span>
            <span className="safety__metric-tb-sheet">S-000</span>
          </div>

          <span className="safety__big">0.61</span>
          <span className="safety__big-label">TRIF — Total Recordable Injury Frequency</span>
          <p className="safety__metric-note">
            Less than half the industry average — a direct measure of how we plan, staff,
            and run every jobsite.
          </p>

          <ul className="safety__facts">
            <li>
              <span className="safety__facts-num">COR™</span>Certified
            </li>
            <li>
              <span className="safety__facts-num">{company.founded}</span>Established
            </li>
            <li>
              <span className="safety__facts-num">480+</span>Projects
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
