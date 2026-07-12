import './Safety.css'

export default function Safety() {
  return (
    <section className="safety">
      <div className="container safety__inner">
        <div className="safety__content">
          <p className="eyebrow eyebrow--light">Lorem Ipsum</p>
          <h2 className="section__title">Consectetur adipiscing elit sed do eiusmod.</h2>
          <p className="safety__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
          <ul className="safety__list">
            <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
            <li>Sed do eiusmod tempor incididunt ut labore</li>
            <li>Ut enim ad minim veniam quis nostrud</li>
            <li>Duis aute irure dolor in reprehenderit voluptate</li>
          </ul>
        </div>
        <div className="safety__metric">
          <span className="safety__big-label">Lorem Ipsum</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
        </div>
      </div>
    </section>
  )
}
