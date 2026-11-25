import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CTA, PageHero, useDocTitle } from '../components/shared.jsx'
import { ProjectCard } from '../components/cards.jsx'
import { Icon, Reveal } from '../components/ui.jsx'
import { projects } from '../data.js'

const FILTERS = ['All', ...Array.from(new Set(projects.map((p) => p.filter)))]

export default function Portfolio() {
  useDocTitle('Portfolio')
  const [f, setF] = useState('All')
  const list = projects.filter((p) => f === 'All' || p.filter === f)

  return (
    <>
      <PageHero
        kicker="Portfolio"
        bgText="PORTFOLIO"
        title="A look at what we’ve built."
        lede="Websites, stores, POS systems and brands we have built. Open any project to see the full story."
      />

      <section className="section portfolio">
        <div className="wrap">
          <div className="filters" role="tablist" aria-label="Filter projects">
            {FILTERS.map((x) => (
              <button key={x} role="tab" aria-selected={f === x} className={f === x ? 'on' : ''} onClick={() => setF(x)}>
                {x}
                <small>{x === 'All' ? projects.length : projects.filter((p) => p.filter === x).length}</small>
              </button>
            ))}
          </div>

          <div className="pgrid" key={f}>
            {list.map((p, i) => (
              <ProjectCard key={p.slug} p={p} i={i} delay={i * 0.08} />
            ))}
            <Reveal delay={list.length * 0.08} className="pcard pcard-next">
              <Link to="/contact" className="pcard-link">
                <span className="script">Your project here?</span>
                <b>Let’s make it the next one.</b>
                <span className="pcard-go">
                  <Icon name="arrow" size={22} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
