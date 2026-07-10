import { useEffect, useRef, useState } from 'react'

/* ----------------------------------------------------------------
   Tilted carousel element
   Recreated from https://codepen.io/vii120/pen/VYmmdMK
   ("tilted carousel" by Vivi Tseng), dependency-free.
   The active slide sits centered and flat; the others rotate away
   around the Y axis and shrink slightly, giving a 3D fanned look.
   Each slide is rendered twice around a virtual ring, positioned by
   its shortest circular distance from the active cell — so the fan
   stays symmetric to both section edges and navigation loops
   seamlessly in either direction.
   Styles live in ./carousel.css (imported via styles/index.css).
   ---------------------------------------------------------------- */

const ROTATION = 35 // degrees each slide tilts per step from center
const MAX_TILT = 80 // cap so far slides stay edge-on instead of flipping

function ChevronLeft() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export default function Carousel({ slides, startIndex }) {
  const count = slides.length
  const ringSize = count * 2

  const [activeCell, setActiveCell] = useState(() => {
    const start = startIndex ?? Math.floor(count / 2)
    return Math.min(Math.max(start, 0), count - 1)
  })
  const activeIndex = activeCell % count

  // Cells further than this from the active cell sit past the clipped
  // viewport edge (with a one-step margin for transitions); marking
  // them visibility:hidden lets the browser skip rasterizing and
  // compositing them entirely. Measured, so wide screens hide nothing
  // they'd actually show.
  const rootRef = useRef(null)
  const [maxVisible, setMaxVisible] = useState(ringSize)
  useEffect(() => {
    const root = rootRef.current
    const stage = root?.querySelector('.carousel__stage')
    if (!root || !stage) return
    const update = () => {
      const slideW = stage.offsetWidth || 1
      setMaxVisible(Math.ceil(root.offsetWidth / 2 / slideW + 0.5))
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  const prevCellRef = useRef(activeCell)
  const prevCell = prevCellRef.current
  useEffect(() => {
    prevCellRef.current = activeCell
  }, [activeCell])

  // Signed circular distance from `from` to `cell`, in (-ringSize/2, ringSize/2]
  const offsetFrom = (from, cell) => {
    let d = (((cell - from) % ringSize) + ringSize) % ringSize
    if (d > ringSize / 2) d -= ringSize
    return d
  }

  const toPrev = () => setActiveCell((prev) => (prev - 1 + ringSize) % ringSize)
  const toNext = () => setActiveCell((prev) => (prev + 1) % ringSize)

  // Jump to whichever copy of slide i is closest to the current cell
  const toSlide = (i) => {
    setActiveCell((prev) => {
      const a = offsetFrom(prev, i)
      const b = offsetFrom(prev, i + count)
      const d = Math.abs(a) <= Math.abs(b) ? a : b
      return (((prev + d) % ringSize) + ringSize) % ringSize
    })
  }

  return (
    <div className="carousel" ref={rootRef}>
      <div className="carousel__stage">
        <div className="carousel__track">
          {Array.from({ length: ringSize }, (_, cell) => {
            const d = offsetFrom(activeCell, cell)
            const dPrev = offsetFrom(prevCell, cell)
            // A cell crossing the wrap seam would fly across the whole
            // row; teleport it instead (it repositions outside the view).
            const wrapped = Math.abs(d - dPrev) > ringSize / 2
            const tilt = Math.max(-MAX_TILT, Math.min(MAX_TILT, d * -ROTATION))
            // Steeply tilted slides project a narrow sliver, so their
            // untransformed cell box doubles as an enlarged hover/click
            // target; the center three keep the slide as the target.
            const far = Math.abs(d) >= 2
            return (
              <div
                className={`carousel__cell${far ? ' carousel__cell--far' : ''}`}
                key={cell}
                onClick={far ? () => setActiveCell(cell) : undefined}
                style={{
                  transform: `translateX(${d * 100}%)`,
                  zIndex: ringSize - Math.abs(d),
                  transition: wrapped ? 'none' : undefined,
                  visibility: Math.abs(d) > maxVisible ? 'hidden' : undefined,
                }}
              >
                <div
                  className={`carousel__slide${d === 0 ? ' is-active' : ''}`}
                  style={{
                    transform: `rotateY(${tilt}deg) scale(${d === 0 ? 1 : 0.85})`,
                    transition: wrapped ? 'none' : undefined,
                  }}
                  onClick={() => setActiveCell(cell)}
                >
                  {slides[cell % count]}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="carousel__controls">
        <button
          type="button"
          className="carousel__arrow"
          onClick={toPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>

        <div className="carousel__dots">
          {slides.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`carousel__dot${i === activeIndex ? ' is-active' : ''}`}
              onClick={() => toSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel__arrow"
          onClick={toNext}
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
