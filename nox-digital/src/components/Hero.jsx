import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { marquee, projects, stats } from '../data.js'
import { Counter, Icon } from './ui.jsx'
import { BrowserFrame, ProjectVisual } from './SiteMock.jsx'

const word = {
  hidden: { y: '110%' },
  show: (i) => ({ y: 0, transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 + i * 0.12 } }),
}

export default function Hero({ ready }) {
  const root = useRef(null)

  const onMove = (e) => {
    const r = root.current?.getBoundingClientRect()
    if (!r) return
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    root.current.style.setProperty('--sx', x + 'px')
    root.current.style.setProperty('--sy', y + 'px')
    root.current.style.setProperty('--mx', (x / r.width - 0.5).toFixed(3))
    root.current.style.setProperty('--my', (y / r.height - 0.5).toFixed(3))
  }

  const state = ready ? 'show' : 'hidden'

  return (
    <section id="home" className="hero" ref={root} onMouseMove={onMove}>
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-giant">NOX</span>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.div
            className="mono hero-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: ready ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            <span>Ideas</span> / <span>Websites</span> / <span>Growth</span>
          </motion.div>

          <h1 className="hero-title">
            <span className="line">
              <motion.span variants={word} initial="hidden" animate={state} custom={0}>
                Your Vision.
              </motion.span>
            </span>
            <span className="line">
              <motion.span variants={word} initial="hidden" animate={state} custom={1}>
                Our <span className="underbrush">Digital</span>
              </motion.span>
            </span>
            <span className="line">
              <motion.span variants={word} initial="hidden" animate={state} custom={2}>
                Solutions.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Websites, brands and digital systems for businesses that want to grow. Over 10 years of turning ideas into
            results across Kenya.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            <Link to="/contact" className="btn btn-light btn-lg">
              Start a project <Icon name="arrow" size={18} />
            </Link>
            <Link to="/work" className="btn btn-outline-light btn-lg">
              See our work
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="fan"
          initial={{ opacity: 0, y: 50 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {projects.filter((p) => p.featured).map((p, i) => (
            <div key={p.slug} className={`fan-card fan-${i + 1}`}>
              <BrowserFrame host={p.host}>
                <ProjectVisual project={p} />
              </BrowserFrame>
              <span className="fan-tag mono">{p.name}</span>
            </div>
          ))}

          <div className="years" aria-label="Over 10 years of experience">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="circ" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" />
              </defs>
              <text>
                <textPath href="#circ" textLength="290" lengthAdjust="spacing">
                  YEARS OF DIGITAL CRAFT · YEARS OF DIGITAL CRAFT ·
                </textPath>
              </text>
            </svg>
            <b>10+</b>
          </div>
        </motion.div>
      </div>

      <div className="wrap hero-stats">
        {stats.map((s) => (
          <div key={s.l} className="hstat">
            <div className="hstat-n">
              <Counter to={s.n} suffix={s.s} />
            </div>
            <div className="hstat-l mono">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, k) => (
            <span key={k}>
              {m}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
