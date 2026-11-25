import { useRef, useState } from 'react'

// Drag-to-compare slider. Pass any two React nodes (images or mockups).
export default function BeforeAfter({ before, after, labels = ['Before', 'After'] }) {
  const [x, setX] = useState(50)
  const ref = useRef(null)
  const move = (clientX) => {
    const r = ref.current.getBoundingClientRect()
    setX(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)))
  }
  return (
    <div
      className="ba"
      ref={ref}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX) }}
      onPointerMove={(e) => e.buttons && move(e.clientX)}
    >
      <div className="ba-layer">{after}</div>
      <div className="ba-layer ba-top" style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}>{before}</div>
      <span className="ba-tag l mono">{labels[0]}</span>
      <span className="ba-tag r mono">{labels[1]}</span>
      <div className="ba-handle" style={{ left: `${x}%` }}>
        <input type="range" min="0" max="100" value={x} onChange={(e) => setX(+e.target.value)} aria-label="Compare before and after" />
        <i />
      </div>
    </div>
  )
}
