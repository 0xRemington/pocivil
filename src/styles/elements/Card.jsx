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
   Nine segments keep the chord within ~0.2px of the true curve.
   Strip anchors sit exactly on the arc vertices, so neighbours butt
   along a shared edge; the overlength tolerance below only has to
   swallow rasterisation rounding. It must stay subpixel: translucent
   skins (Services' glass box) composite any real overlap into a
   visible double-density seam, while opaque skins would show a bright
   gap line if strips fell short. At 1.5% of a chord it is ~0.13px at
   the largest radius — invisible both ways.
   Positions are in units of --card-radius so the same geometry serves
   every size and breakpoint; computed once at module load. */
const SEGMENT_COUNT = 9
const CORNER_SEGMENTS = Array.from({ length: SEGMENT_COUNT }, (_, k) => {
  const a0 = (k * Math.PI) / (2 * SEGMENT_COUNT)
  const a1 = ((k + 1) * Math.PI) / (2 * SEGMENT_COUNT)
  return {
    left: 1 - Math.sin(a1),
    top: 1 - Math.cos(a1),
    width: 2 * Math.sin((a1 - a0) / 2) * 1.015,
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

/* `image` swaps the face gradient for a photo: it fills the whole face,
   so the glass pane's top-right swoop becomes a window onto it and the
   rest ghosts through the pane. `imagePosition` is an object-position
   value that steers the interesting part of the photo into that
   top-right window. */
export default function Card({ className = '', image, imagePosition, imageAlt = '', children }) {
  return (
    <article className={`card ${image ? 'card--photo' : ''} ${className}`.trim()}>
      {['left', 'right', 'top', 'bottom'].map((edge) => (
        <span key={edge} className={`card__edge card__edge--${edge}`} aria-hidden="true" />
      ))}
      <CardCorners />
      {image && (
        <span className="card__photo">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
        </span>
      )}
      <span className="card__glass" aria-hidden="true" />
      <div className="card__content">{children}</div>
    </article>
  )
}
