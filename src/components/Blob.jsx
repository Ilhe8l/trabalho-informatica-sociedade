import { useEffect, useRef } from 'react'

const POINTS = 9
const SIZE = 200

const waves = Array.from({ length: POINTS }, () => ({
  speed: 0.25 + Math.random() * 0.35,
  phase: Math.random() * Math.PI * 2,
}))

function getPoints(time) {
  return waves.map((wave, i) => {
    const angle = (i / POINTS) * Math.PI * 2
    const radius = 78 + Math.sin(time * wave.speed + wave.phase) * 9 + Math.sin(time * wave.speed * 0.6 + i) * 5
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

function Blob({ className }) {
  const pathRef = useRef(null)

  useEffect(() => {
    let frame
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const draw = (now) => {
      pathRef.current.setAttribute('d', toPath(getPoints(now / 1000)))
      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    frame = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <svg className={className} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
      <path ref={pathRef} d={toPath(getPoints(0))} />
    </svg>
  )
}

export default Blob
