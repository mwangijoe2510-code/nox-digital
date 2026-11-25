import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { about, manifesto, projects, services, yr } from '../data.js'
import { BrushEdge, Icon, Reveal, SectionLabel } from './ui.jsx'
import { DevicePanel } from './Devices.jsx'
import { Head } from './shared.jsx'

/* ───────── words that light up as you scroll ───────── */
function Word({ p, a, b, children }) {
  const o = useTransform(p, [a, b], [0.14, 1])
  return <motion.span style={{ opacity: o }}>{children} </motion.span>
}

export function Manifesto() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] })
  const words = manifesto.split(' ')
  return (
    <section className="section manifesto">
      <div className="wrap">
        <Reveal>
          <SectionLabel>What we do</SectionLabel>
        </Reveal>
        <p ref={ref} className="manifesto-p">
          {words.map((w, i) => (
            <Word key={i} p={scrollYProgress} a={i / words.length} b={(i + 1) / words.length}>
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  )
}

/* ───────── about teaser with the big 10+ ───────── */
export function AboutTeaser({ link = true, label = 'About NOX Digital', num = '01' }) {
  return (
    <section className="section about">
      <div className="wrap about-grid">
        <Reveal className="about-years">
          <div className="about-num" aria-label="Over 10 years">
            <span>10</span>
            <i>+</i>
          </div>
          <div className="about-years-l mono">Years of digital experience</div>
          <div className="about-script script">Smart solutions. Real impact.</div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <SectionLabel num={num}>{label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2">{about.headline}</h2>
          </Reveal>
          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="lede">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <ul className="ticks ticks-dark about-ticks">
              {about.pillars.map((p) => (
                <li key={p}>
                  <Icon name="check" size={18} stroke={2.2} /> {p}
                </li>
              ))}
            </ul>
          </Reveal>
          {link && (
            <Reveal delay={0.3} className="about-actions">
              <Link to="/about" className="btn btn-dark btn-lg">
                More about us <Icon name="arrow" size={18} />
              </Link>
              <Link to="/contact" className="btn btn-ghost btn-lg">
                Start a project
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

/* ───────── services bento ───────── */
export function Bento({ num = '02' }) {
  const glow = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--gx', e.clientX - r.left + 'px')
    e.currentTarget.style.setProperty('--gy', e.clientY - r.top + 'px')
  }
  return (
    <section className="section dark services">
      <BrushEdge side="top" seed={14} />
      <div className="wrap">
        <Head
          label="Our services"
          num={num}
          lede="One studio, one point of contact. From your first logo to a full online store, we build the digital side of your business end to end."
        >
          Everything your brand needs to <span className="underbrush">grow online</span>.
        </Head>
        <div className="bento">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.07} className="bento-item">
              <Link to={`/services#${s.slug}`} className="bento-card" onMouseMove={glow}>
                <div className="bento-top">
                  <span className="bento-icon">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <span className="bento-num mono">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="chips">
                  {s.chips.map((c) => (
                    <span key={c} className="chip chip-dark">
                      {c}
                    </span>
                  ))}
                </div>
                <span className="bento-go">
                  <Icon name="arrowUR" size={20} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="center-row">
          <Link to="/services" className="btn btn-light btn-lg">
            Explore all services <Icon name="arrow" size={18} />
          </Link>
        </Reveal>
      </div>
      <BrushEdge side="bottom" seed={6} />
    </section>
  )
}

/* ───────── pinned horizontal showcase ───────── */
export function HShowcase() {
  const outer = useRef(null)
  const track = useRef(null)
  const [desk, setDesk] = useState(false)
  const [dist, setDist] = useState(0)
  const [vh, setVh] = useState(800)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 981px)')
    const measure = () => {
      setDesk(mq.matches)
      setVh(window.innerHeight)
      if (track.current) setDist(Math.max(0, track.current.scrollWidth - window.innerWidth))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (track.current) ro.observe(track.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={outer} className="hs" style={desk ? { height: dist + vh } : undefined}>
      <div className="hs-sticky">
        <div className="wrap hs-head">
          <div>
            <SectionLabel num="03">Selected work</SectionLabel>
            <h2 className="h2">Websites that work as hard as the businesses behind them.</h2>
          </div>
          <Link to="/work" className="link-arrow hs-all">
            All case studies <Icon name="arrow" size={16} />
          </Link>
        </div>

        <motion.div ref={track} className="hs-track" style={desk ? { x } : undefined}>
          {projects.map((p, i) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="hs-panel" data-hot>
              <DevicePanel project={p} />
              <div className="hs-info">
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.name}</h3>
                  <small>
                    {p.category}{yr(p)}
                  </small>
                </div>
                <span className="pcard-go">
                  <Icon name="arrowUR" size={20} />
                </span>
              </div>
            </Link>
          ))}
          <Link to="/contact" className="hs-panel hs-end">
            <span className="script">Your brand is next.</span>
            <b>Start a project</b>
            <span className="pcard-go">
              <Icon name="arrow" size={22} />
            </span>
          </Link>
        </motion.div>

        {desk && (
          <div className="wrap hs-prog" aria-hidden="true">
            <motion.span style={{ scaleX: bar }} />
          </div>
        )}
      </div>
    </section>
  )
}
