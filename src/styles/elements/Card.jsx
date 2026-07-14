/* ----------------------------------------------------------------
   Slab card element — "neo surface" tile (adapted from
   https://codepen.io/Kan3an/pen/YPpyVWd) in the site's blue palette.
   A gradient face over an inset glass plane, wrapped in real depth:
   a back face, flat walls along the straight edges, and segmented arc
   strips around each rounded corner, so it reads as one closed solid
   block from any angle it is turned (carousel fan, hover tilt).
   Styles live in ./card.css (imported via styles/index.css).
   ---------------------------------------------------------------- */

/* Each rounded corner is wrapped in depth by short strips whose top
   edges chord the corner arc, folded back 90° through --card-depth.
   Five segments keep the chord within ~0.6px of the true curve.
   Positions are in units of --card-radius so the same geometry serves
   every size and breakpoint; computed once at module load. */
const CORNER_SEGMENTS = Array.from({ length: 5 }, (_, k) => {
  const a0 = (k * Math.PI) / 10
  const a1 = ((k + 1) * Math.PI) / 10
  return {
    left: 1 - Math.sin(a1),
    top: 1 - Math.cos(a1),
    // 5% overlength so neighbouring strips overlap instead of seaming
    width: 2 * Math.sin((a1 - a0) / 2) * 1.05,
    rotate:
      (Math.atan2(Math.cos(a1) - Math.cos(a0), Math.sin(a1) - Math.sin(a0)) * 180) / Math.PI,
  }
})

function CardCorners() {
  return ['tl', 'tr', 'bl', 'br'].map((corner) => (
    <span key={corner} className={`card__corner card__corner--${corner}`} aria-hidden="true">
      {CORNER_SEGMENTS.map((s, i) => (
        <span
          key={i}
          className="card__seg"
          style={{
            left: `calc(var(--card-radius) * ${s.left.toFixed(4)})`,
            top: `calc(var(--card-radius) * ${s.top.toFixed(4)})`,
            width: `calc(var(--card-radius) * ${s.width.toFixed(4)})`,
            transform: `rotate(${s.rotate.toFixed(2)}deg) rotateX(-90deg)`,
          }}
        />
      ))}
    </span>
  ))
}

export default function Card({ className = '', children }) {
  return (
    <article className={`card ${className}`.trim()}>
      {['left', 'right', 'top', 'bottom'].map((edge) => (
        <span key={edge} className={`card__edge card__edge--${edge}`} aria-hidden="true" />
      ))}
      <CardCorners />
      <span className="card__glass" aria-hidden="true" />
      <div className="card__content">{children}</div>
    </article>
  )
}
