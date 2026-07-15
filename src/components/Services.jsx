import { services } from '../data/site'
import { Icon } from './Icons'
import Carousel from '../styles/elements/Carousel'
import Card from '../styles/elements/Card'
import './Services.css'

/* ------------------------------------------------------------
   Background sheet: a plan-view roadway alignment drawn in
   faint black ink. Two tangents joined by a 55° horizontal
   curve — the geometry is real (R = 520 viewBox units, so
   L = R·Δ = 499.18 and T = R·tan(Δ/2) = 270.71, which is what
   the curve table states), with the standard drafting
   furniture: dash-dot centerline, PC/PI/PT ticks, radius
   leaders back to the radius point, station ticks, a
   width dimension, cut/fill slope hatching and a north arrow.
   ------------------------------------------------------------ */
function RoadwayPlan() {
  const curveTable = [
    ['Δ', '55°00′00″'],
    ['R', "520.00'"],
    ['L', "499.18'"],
    ['T', "270.71'"],
  ]

  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" role="presentation">
      <defs>
        <marker
          id="svc-dim-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#0f1c2c" fillOpacity="0.2" />
        </marker>
      </defs>

      {/* Edge of pavement: concentric offsets (R±34) of the centerline */}
      <path className="rd-edge" d="M -60 606 L 700 606 A 486 486 0 0 0 1098.1 398.8 L 1442.2 -92.7" />
      <path className="rd-edge" d="M -60 674 L 700 674 A 554 554 0 0 0 1153.8 437.8 L 1497.9 -53.7" />

      {/* Centerline: tangent — curve — tangent, drafting dash-dot */}
      <path className="rd-center" d="M -60 640 L 700 640 A 520 520 0 0 0 1126 418.3 L 1470.1 -73.2" />

      {/* Tangent construction lines PC → PI → PT */}
      <path className="rd-anno rd-anno--dash" d="M 700 640 L 970.7 640 L 1126 418.3" />
      <circle className="rd-anno" cx="970.7" cy="640" r="2.5" />
      <text className="rd-text rd-text--sm" x="970.7" y="622" textAnchor="middle">
        PI 16+98.21
      </text>

      {/* Radius leaders from the radius point to PC and PT */}
      <line className="rd-anno" x1="700" y1="120" x2="700" y2="640" />
      <line className="rd-anno" x1="700" y1="120" x2="1126" y2="418.3" />
      <text className="rd-text" transform="translate(688 430) rotate(-90)" textAnchor="middle">
        R = 520.00&#8242;
      </text>

      {/* Radius point crosshair + delta angle between the leaders */}
      <line className="rd-anno" x1="688" y1="120" x2="712" y2="120" />
      <line className="rd-anno" x1="700" y1="108" x2="700" y2="132" />
      <circle className="rd-anno" cx="700" cy="120" r="4" />
      <text className="rd-text rd-text--sm" x="716" y="112">
        RP
      </text>
      <path className="rd-anno" d="M 700 180 A 60 60 0 0 0 749.1 154.4" />
      <text className="rd-text rd-text--sm" x="762" y="150">
        &#916; = 55&#176;00&#8242;00&#8243;
      </text>

      {/* PC / PT ticks across the roadway */}
      <line className="rd-anno" x1="700" y1="596" x2="700" y2="684" />
      <text className="rd-text rd-text--sm" x="688" y="592" textAnchor="end">
        PC 14+27.50
      </text>
      <line className="rd-anno" x1="1089.9" y1="393.1" x2="1162" y2="443.5" />
      <text className="rd-text rd-text--sm" transform="translate(1173.4 451.6) rotate(-55)">
        PT 19+26.68
      </text>

      {/* Station ticks along the back tangent */}
      {[
        [160, '10+00'],
        [350, '11+00'],
        [540, '12+00'],
      ].map(([x, sta]) => (
        <g key={sta}>
          <line className="rd-anno" x1={x} y1="632" x2={x} y2="648" />
          <text className="rd-text rd-text--sm" x={x} y="708" textAnchor="middle">
            {sta}
          </text>
        </g>
      ))}

      {/* Roadway width dimension, back-to-back of curbs */}
      <line
        className="rd-anno"
        x1="430"
        y1="609"
        x2="430"
        y2="671"
        markerStart="url(#svc-dim-arrow)"
        markerEnd="url(#svc-dim-arrow)"
      />
      <text className="rd-text rd-text--sm" transform="translate(420 640) rotate(-90)" textAnchor="middle">
        48&#8242;-0&#8243; B&#8211;B
      </text>

      {/* Cut/fill slope hatching outside the outer edge, alternating
          long/short ticks per convention */}
      {Array.from({ length: 21 }, (_, i) => {
        const x = 60 + i * 30
        const long = i % 2 === 0
        return (
          <line
            key={x}
            className="rd-anno"
            x1={x}
            y1="678"
            x2={x + (long ? 8 : 5)}
            y2={long ? 695 : 689}
          />
        )
      })}

      {/* Curve data table, boxed like a sheet callout */}
      <rect className="rd-anno" x="84" y="150" width="190" height="136" />
      <text className="rd-text" x="100" y="176">
        CURVE DATA C-1
      </text>
      {curveTable.map(([label, value], i) => (
        <g key={label}>
          <text className="rd-text rd-text--sm" x="100" y={202 + i * 22}>
            {label}
          </text>
          <text className="rd-text rd-text--sm" x="132" y={202 + i * 22}>
            {value}
          </text>
        </g>
      ))}
      <text className="rd-text rd-text--sm" x="84" y="314">
        SCALE 1&#8243; = 100&#8242;-0&#8243;
      </text>

      {/* North arrow */}
      <circle className="rd-anno" cx="1300" cy="730" r="36" />
      <line className="rd-anno" x1="1300" y1="758" x2="1300" y2="706" />
      <path className="rd-fill" d="M 1300 698 L 1293 714 L 1307 714 z" />
      <text className="rd-text" x="1300" y="688" textAnchor="middle">
        N
      </text>
    </svg>
  )
}

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="services__bg" aria-hidden="true">
        <RoadwayPlan />
      </div>

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
        startIndex={0}
        slides={services.map((s) => (
          <Card
            key={s.title}
            image={s.image}
            imagePosition={s.imagePosition}
            imageAlt={s.imageAlt}
          >
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
