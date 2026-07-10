import './Safety.css'

export default function Safety() {
  return (
    <section className="safety">
      <div className="container safety__inner">
        <div className="safety__content">
          <p className="eyebrow eyebrow--light">Safety First, Always</p>
          <h2 className="section__title">Everyone goes home the same way they came.</h2>
          <p className="safety__text">
            Safety isn't a program for us — it's how we run every jobsite. Daily toolbox talks,
            certified equipment operators, and a culture where any worker can stop work keep our
            Experience Modification Rate among the best in heavy civil.
          </p>
          <ul className="safety__list">
            <li>Dedicated safety managers on every major project</li>
            <li>OSHA 30 trained supervision across all crews</li>
            <li>Comprehensive site-specific safety planning</li>
            <li>Continuous equipment inspection &amp; maintenance program</li>
          </ul>
        </div>
        <div className="safety__metric">
          <span className="safety__big">0.61</span>
          <span className="safety__big-label">EMR Rating</span>
          <p>Well below the 1.0 industry baseline — a measure of our commitment to people first.</p>
        </div>
      </div>
    </section>
  )
}
