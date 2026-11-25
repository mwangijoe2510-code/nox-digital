import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CTA, FAQ, PageHero, Process, useDocTitle } from '../components/shared.jsx'
import { Icon, Reveal } from '../components/ui.jsx'
import { projects, services } from '../data.js'

export default function ServicesPage() {
  useDocTitle('Services')
  const [active, setActive] = useState(services[0].slug)

  useEffect(() => {
    const els = services.map((s) => document.getElementById(s.slug)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -55% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <PageHero
        kicker="Services"
        bgText="SERVICES"
        title="Everything digital, under one roof."
        lede="Nine services, one team. Pick one, or combine them into a complete digital presence for your business."
      />

      <section className="section svcpage">
        <div className="wrap svcpage-grid">
          <aside className="svc-side" aria-label="Service navigation">
            <ul>
              {services.map((s, i) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`} className={active === s.slug ? 'is-on' : ''}>
                    <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="svc-main">
            {services.map((s, i) => (
              <article key={s.slug} id={s.slug} className="svcx">
                <Reveal>
                  <div className="svcx-head">
                    <span className="svcx-icon">
                      <Icon name={s.icon} size={30} />
                    </span>
                    <span className="mono svcx-num">{String(i + 1).padStart(2, '0')} / 09</span>
                  </div>
                  <h2 className="h2">{s.title}</h2>
                  <p className="svcx-long">{s.long}</p>
                </Reveal>
                <Reveal delay={0.05} className="svcx-cols">
                  <div>
                    <h4 className="mono">What’s included</h4>
                    <ul className="ticks ticks-dark">
                      {s.includes.map((x) => (
                        <li key={x}>
                          <Icon name="check" size={18} stroke={2.2} /> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mono">Best for</h4>
                    <p>{s.forWho}</p>
                    <h4 className="mono">Highlights</h4>
                    <div className="chips">
                      {s.chips.map((c) => (
                        <span key={c} className="chip">
                          {c}
                        </span>
                      ))}
                    </div>
                    {projects.some((x) => x.serves?.includes(s.slug)) && (
                      <>
                        <h4 className="mono">Related work</h4>
                        <div className="related-work">
                          {projects
                            .filter((x) => x.serves?.includes(s.slug))
                            .map((x) => (
                              <Link key={x.slug} to={`/work/${x.slug}`} className="chip chip-link">
                                {x.name} <Icon name="arrowUR" size={13} />
                              </Link>
                            ))}
                        </div>
                      </>
                    )}
                    <Link to={`/contact?service=${s.slug}`} className="btn btn-dark svcx-btn">
                      Start this project <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Process num="02" />
      <FAQ num="03" />
      <CTA />
    </>
  )
}
