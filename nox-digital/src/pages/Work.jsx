import { Link } from 'react-router-dom'
import { CTA, PageHero, Process, useDocTitle } from '../components/shared.jsx'
import DeviceStage from '../components/Devices.jsx'
import { Reveal } from '../components/ui.jsx'
import { projects } from '../data.js'

export default function Work() {
  useDocTitle('Work')
  return (
    <>
      <PageHero
        kicker="Case studies"
        bgText="WORK"
        title="Work that works."
        lede="The story behind each project: the brief, the thinking and what we built. Open any project to see it on desktop, laptop, tablet and phone."
      />

      <section className="section wlist-sec">
        <div className="wrap">
          <ul className="wlist">
            {projects.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 0.06}>
                <Link to={`/work/${p.slug}`} className="wrow">
                  <span className="wrow-n mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="wrow-main">
                    <b>{p.name}</b>
                    <small>{p.blurb}</small>
                  </span>
                  <span className="wrow-cat">
                    {p.category}
                    <small>{p.scope.slice(0, 2).join(' · ')}</small>
                  </span>
                  <span className="wrow-year mono">{p.year || p.filter}</span>
                  <span className="wrow-thumb" aria-hidden="true">
                    <DeviceStage project={p} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Process num="02" />
      <CTA />
    </>
  )
}
