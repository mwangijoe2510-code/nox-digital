import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo.jsx'
import Snake from './Snake.jsx'
import { BrushEdge } from './ui.jsx'

export default function Loader({ onDone }) {
  const [n, setN] = useState(0)
  const played = useRef(false)
  const [hold, setHold] = useState(false)

  useEffect(() => {
    let raf
    let timer
    const start = performance.now()
    const D = 3400
    const tick = (t) => {
      const p = Math.min(1, (t - start) / D)
      setN(Math.round((1 - Math.pow(1 - p, 2)) * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else if (played.current) setHold(true)
      else timer = setTimeout(onDone, 300)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
    }
  }, [onDone])

  return (
    <motion.div
      className="loader"
      initial={{ y: 0 }}
      exit={{ y: '-105%' }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      role="status"
      aria-label="Loading"
    >
      <button className="loader-skip mono" onClick={onDone}>
        Skip intro →
      </button>
      <div className="loader-inner">
        <motion.div
          className="loader-logo"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <Logo />
        </motion.div>

        <Snake onStart={() => (played.current = true)} />

        <div className="loader-bar">
          <span style={{ transform: `scaleX(${n / 100})` }} />
        </div>
        <div className="loader-row">
          <span>Smart solutions. Real impact.</span>
          <span className="loader-count">{String(n).padStart(3, '0')}</span>
        </div>
        {hold && (
          <button className="btn btn-light loader-enter" onClick={onDone}>
            Enter site →
          </button>
        )}
      </div>
      <BrushEdge side="bottom" seed={3} />
    </motion.div>
  )
}
