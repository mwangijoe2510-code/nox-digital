import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const PATHS = {
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  search: 'M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-5-5',
  megaphone: 'M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1zM15 9a4 4 0 010 6M18 6a8 8 0 010 12',
  pos: 'M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zM8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01',
  cart: 'M3 4h2l2.4 11h10.2l2-8H6M9 20h.01M17 20h.01',
  phone: 'M7 3h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2',
  palette:
    'M12 3a9 9 0 100 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A3.6 3.6 0 0021 11c0-4.4-4-8-9-8zM7.5 11h.01M10 7.5h.01M14.5 7.5h.01',
  pen: 'M4 20l4-1 11-11a2.1 2.1 0 00-3-3L5 16l-1 4zM14 6l3 3',
  sliders: 'M4 6h10M18 6h2M4 12h2M10 12h10M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  arrowUR: 'M7 17L17 7M8 7h9v9',
  whatsapp:
    'M21 12a9 9 0 01-13.4 7.8L3 21l1.3-4.4A9 9 0 1121 12zM9 9c0 3 3 6 6 6l1-1.5-2-1-1 .8c-.8-.4-1.6-1.2-2-2l.8-1-1-2L9 9z',
  mail: 'M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM3 7l9 6 9-6',
  pin: 'M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  shield: 'M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zM9 12l2 2 4-4',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
  users: 'M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2 20c0-3.3 3-6 7-6s7 2.7 7 6M16 4.5a3.5 3.5 0 010 6.5M18 14.3c2.3.7 4 2.7 4 5.7',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z',
  menu: 'M4 8h16M4 16h16',
  close: 'M6 6l12 12M18 6L6 18',
  check: 'M5 12l5 5 9-10',
  plus: 'M12 5v14M5 12h14',
  globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.500 18.400 12 21c-2.500-2.600-3.800-5.600-3.800-9S9.500 5.600 12 3z',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v5M16 3v5',
  send: 'M3 11l18-8-8 18-2-8-8-2z',
}

export function Icon({ name, size = 22, stroke = 1.7, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}

export function Reveal({ children, delay = 0, y = 36, as = 'div', className = '', ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionLabel({ children, num }) {
  return (
    <div className="label">
      <span className="label-line" />
      <span>{children}</span>
      {num && <span className="label-num">{num}</span>}
    </div>
  )
}

export function Counter({ to, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration, ease: [0.2, 0.7, 0.2, 1], onUpdate: (x) => setV(Math.round(x)) })
    return () => c.stop()
  }, [inView, to, duration])
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  )
}

// Checks whether an optional image exists (e.g. a screenshot dropped in /public).
export function useImageOk(src) {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    if (!src) return
    let alive = true
    const img = new Image()
    img.onload = () => alive && setOk(img.naturalWidth > 10)
    img.onerror = () => alive && setOk(false)
    img.src = src
    return () => {
      alive = false
    }
  }, [src])
  return ok
}

// A rough, hand-brushed edge used to separate light and dark sections.
function rng(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function BrushEdge({ side = 'top', seed = 7 }) {
  const d = useMemo(() => {
    const r = rng(seed * 9973 + 13)
    const W = 1440
    const H = 90
    let p = `M0 ${H} L0 ${30 + r() * 20}`
    for (let x = 0; x <= W; x += 6 + Math.floor(r() * 9)) {
      const wave = Math.sin(x / 170 + seed) * 9 + Math.sin(x / 47 + seed * 2) * 3
      const y = 38 + wave + (r() - 0.5) * 7
      // occasional soft bristle flick
      const flick = r() > 0.94 ? -(5 + r() * 8) : 0
      p += ` L${x} ${Math.max(6, y + flick)}`
    }
    p += ` L${W} ${H} Z`
    return p
  }, [seed])
  return (
    <svg
      className={`brush-edge brush-edge-${side}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} fill="currentColor" />
    </svg>
  )
}

export function useScrollTo() {
  return (e, href) => {
    if (!href?.startsWith('#')) return
    const el = document.querySelector(href)
    if (el) {
      e?.preventDefault()
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
      history.replaceState(null, '', href)
    }
  }
}
