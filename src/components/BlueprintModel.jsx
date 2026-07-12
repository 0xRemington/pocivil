import { useEffect, useRef } from 'react'

/* ============================================================
   BlueprintModel
   ------------------------------------------------------------
   Rotating 3D wireframe of a cast-in-place foundation, drawn
   as white drafting linework on <canvas>. Geometry is defined
   in feet (y up, origin at slab center) and projected with a
   simple perspective camera — no 3D library needed.
   ============================================================ */

const INK = '#eaf2ff'

// Push the 12 edges of an axis-aligned box into `edges`.
function box(edges, x0, x1, y0, y1, z0, z1) {
  const corners = [
    [x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1],
    [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1],
  ]
  const pairs = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ]
  for (const [a, b] of pairs) edges.push([corners[a], corners[b]])
}

function buildModel() {
  const solid = [] // primary object lines
  const light = [] // secondary/inner lines
  const dashed = [] // centerlines
  const rebar = []

  // Perimeter strip footing: 40' x 26' footprint, 3'-0" wide, 1'-6" deep
  box(solid, -20, 20, 0, 1.6, -13, 13)
  box(light, -17, 17, 0, 1.6, -10, 10)

  // Stem wall on footing centerline: 1'-2" thick, to el. +7
  box(solid, -19.1, 19.1, 1.6, 7, -12.1, 12.1)
  box(light, -17.9, 17.9, 1.6, 7, -10.9, 10.9)

  // Interior spread footings with piers
  for (const px of [-9, 9]) {
    box(light, px - 3, px + 3, 0, 1.6, -3, 3)
    box(solid, px - 1, px + 1, 1.6, 7, -1, 1)
    // Pier dowels
    for (const dx of [-0.6, 0.6]) {
      for (const dz of [-0.6, 0.6]) {
        rebar.push([[px + dx, 7, dz], [px + dx, 9.2, dz]])
      }
    }
  }

  // Wall dowels along the stem-wall centerline (half-dims 18.5 x 11.5),
  // each with a short hook bent toward the slab interior.
  const dowel = (x, z) => {
    rebar.push([[x, 7, z], [x, 9.2, z]])
    const len = Math.hypot(x, z) || 1
    const hx = (-x / len) * 0.9
    const hz = (-z / len) * 0.9
    rebar.push([[x, 9.2, z], [x + hx, 9.2, z + hz]])
  }
  for (let x = -16; x <= 16; x += 4) {
    dowel(x, -11.5)
    dowel(x, 11.5)
  }
  for (let z = -8; z <= 8; z += 4) {
    dowel(-18.5, z)
    dowel(18.5, z)
  }

  // Dashed centerlines through the pier line and cross axis
  dashed.push([[-24, 0, 0], [24, 0, 0]])
  dashed.push([[0, 0, -16], [0, 0, 16]])

  // Dimension strings (drawn with extension lines + arch ticks)
  const dims = [
    {
      a: [-20, 0, 17], b: [20, 0, 17], label: "40'-0\"",
      ext: [
        [[-20, 0, 13.7], [-20, 0, 18]],
        [[20, 0, 13.7], [20, 0, 18]],
      ],
    },
    {
      a: [23.6, 0, -13], b: [23.6, 0, 13], label: "26'-0\"",
      ext: [
        [[20.7, 0, -13], [24.6, 0, -13]],
        [[20.7, 0, 13], [24.6, 0, 13]],
      ],
    },
  ]

  return { solid, light, dashed, rebar, dims }
}

const MODEL = buildModel()

export default function BlueprintModel() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const holder = canvas.parentElement
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let raf = 0

    const PITCH = 0.46
    const DIST = 115
    const Y_CENTER = 3.2
    const sinP = Math.sin(PITCH)
    const cosP = Math.cos(PITCH)

    let project = null

    const makeProjector = (angle) => {
      const sinA = Math.sin(angle)
      const cosA = Math.cos(angle)
      const f = Math.min(w, h * 1.35) * 2.05
      const s = f / DIST // orthographic: constant scale so parallel edges stay parallel
      return ([x, y, z]) => {
        const rx = x * cosA - z * sinA
        const rz = x * sinA + z * cosA
        const py = y - Y_CENTER
        const ry = py * cosP - rz * sinP
        return [w / 2 + rx * s, h / 2 - ry * s]
      }
    }

    const line = (a, b) => {
      const [ax, ay] = project(a)
      const [bx, by] = project(b)
      ctx.moveTo(ax, ay)
      ctx.lineTo(bx, by)
    }

    const strokeGroup = (edges, alpha, width, dash) => {
      ctx.globalAlpha = alpha
      ctx.lineWidth = width
      ctx.setLineDash(dash || [])
      ctx.beginPath()
      for (const [a, b] of edges) line(a, b)
      ctx.stroke()
      ctx.setLineDash([])
    }

    const drawDim = (dim) => {
      ctx.globalAlpha = 0.55
      ctx.lineWidth = 1
      ctx.beginPath()
      line(dim.a, dim.b)
      for (const [a, b] of dim.ext) line(a, b)
      ctx.stroke()

      // Architectural tick marks: short 45° slashes across each end
      const [ax, ay] = project(dim.a)
      const [bx, by] = project(dim.b)
      const len = Math.hypot(bx - ax, by - ay) || 1
      const ux = (bx - ax) / len
      const uy = (by - ay) / len
      const tx = (ux - uy) * 4.5
      const ty = (uy + ux) * 4.5
      ctx.beginPath()
      ctx.moveTo(ax - tx, ay - ty)
      ctx.lineTo(ax + tx, ay + ty)
      ctx.moveTo(bx - tx, by - ty)
      ctx.lineTo(bx + tx, by + ty)
      ctx.stroke()

      ctx.globalAlpha = 0.8
      ctx.fillText(dim.label, (ax + bx) / 2, (ay + by) / 2 - 7)
    }

    const render = (angle) => {
      ctx.clearRect(0, 0, w, h)
      project = makeProjector(angle)
      ctx.strokeStyle = INK
      ctx.fillStyle = INK
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      ctx.font = '500 11px ui-monospace, "Cascadia Mono", Consolas, monospace'
      ctx.textAlign = 'center'

      strokeGroup(MODEL.dashed, 0.4, 1, [7, 6])
      strokeGroup(MODEL.light, 0.42, 1)
      strokeGroup(MODEL.solid, 0.9, 1.3)
      strokeGroup(MODEL.rebar, 0.62, 1)
      for (const dim of MODEL.dims) drawDim(dim)
      ctx.globalAlpha = 1
    }

    const STATIC_ANGLE = -0.62
    const SPEED = 0.00012 // rad per ms — one slow, steady drift

    const resize = () => {
      const rect = holder.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (reduced) render(STATIC_ANGLE)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(holder)
    resize()

    if (!reduced) {
      const start = performance.now()
      const tick = (now) => {
        render(STATIC_ANGLE + (now - start) * SPEED)
        raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__model-canvas" aria-hidden="true" />
}
