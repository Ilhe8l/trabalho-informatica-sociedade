import { useEffect, useRef, useState } from 'react'

const SIZE = 200

function createShape(points, irregular) {
  return Array.from({ length: points }, () => ({
    base: 1 - Math.random() * irregular,
    speed: 0.25 + Math.random() * 0.35,
    phase: Math.random() * Math.PI * 2,
  }))
}

function getPoints(shape, time) {
  return shape.map((point, i) => {
    const angle = (i / shape.length) * Math.PI * 2
    const radius =
      78 * point.base +
      Math.sin(time * point.speed + point.phase) * 9 +
      Math.sin(time * point.speed * 0.6 + i) * 5
    return [SIZE / 2 + Math.cos(angle) * radius, SIZE / 2 + Math.sin(angle) * radius]
  })
}

function toPath(points) {
  let path = `M ${points[0][0]} ${points[0][1]}`

  for (let i = 0; i < points.length; i++) {
    const p0 = points[(i - 1 + points.length) % points.length]
    const p1 = points[i]
    const p2 = points[(i + 1) % points.length]
    const p3 = points[(i + 2) % points.length]

    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]

    path += ` C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${p2[0]} ${p2[1]}`
  }

  return path + ' Z'
}

function Blob({ className, style, points = 9, irregular = 0, animated = true }) {
  const pathRef = useRef(null)
  const [shape] = useState(() => createShape(points, irregular))

  useEffect(() => {
    if (!animated) return

    let frame
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const draw = (now) => {
      pathRef.current.setAttribute('d', toPath(getPoints(shape, now / 1000)))
      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    frame = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(frame)
  }, [animated, shape])

  return (
    <svg className={className} style={style} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
      <path ref={pathRef} d={toPath(getPoints(shape, 0))} />
    </svg>
  )
}

export default Blob
