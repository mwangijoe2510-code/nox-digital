import { Link, useParams } from 'react-router-dom'
import { CTA, PageHero, useDocTitle } from '../components/shared.jsx'
import { Gallery, useHasGallery } from '../components/SiteMock.jsx'
import { DevicePanel } from '../components/Devices.jsx'
import { Icon, Reveal, SectionLabel } from '../components/ui.jsx'
import { projects } from '../data.js'
import NotFound from './NotFound.jsx'

export default function CaseStudy() {
  const { slug } = useParams()
  const i = projects.findIndex((p) => p.slug === slug)
  const p = projects[i]
  useDocTitle(p ? p.name : 'Not found')
  const hasGallery = useHasGallery(p || { slug: '' })
  if (!p) return <NotFound />
  const next = projects[(i + 1) % projects.length]

  return (
    <>
      <PageHero kicker={`Case study · ${p.category}`} bgText={String(i + 1).padStart(2, '0')} title={p.name} lede={p.blurb}>
        <dl className="meta">
          <div>
            <dt className="mono">Client</dt>
            <dd>{p.sector}</dd>
          </div>
          {p.year && (
            <div>
              <dt className="mono">Year</dt>
              <dd>{p.year}</dd>
            </div>
          )}
          <div>
            <dt className="mono">What we did</dt>
            <dd>{p.scope.join(', ')}</dd>
          </div>
          {p.slug === 'agrovet-pos' && (
            <div>
              <dt className="mono">Live demo</dt>
              <dd>
                <Link to="/demo" className="meta-link">
                  Try the POS <Icon name="arrowUR" size={16} />
                </Link>
              </dd>
            </div>
          )}
          {p.url && (
            <div>
              <dt className="mono">Live site</dt>
              <dd>
                <a href={p.url} target="_blank" rel="noreferrer" className="meta-link">
                  {p.host} <Icon name="arrowUR" size={16} />
                </a>
              </dd>
            </div>
          )}
        </dl>
      </PageHero>

      <section className="cs-visual">
        <div className="wrap">
          <Reveal y={60}>
            <DevicePanel project={p} />
          </Reveal>
        </div>
      </section>

      {hasGallery && (
        <section className="cs-gallery">
          <div className="wrap gallery-grid">
            <Gallery project={p} />
          </div>
        </section>
      )}

      <section className="section cs-brief">
        <div className="wrap cs-grid">
          <Reveal>
            <SectionLabel num="01">The brief</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="cs-lead">{p.challenge}</p>
          </Reveal>
        </div>
      </section>

      <section className="section cs-approach">
        <div className="wrap">
          <Reveal>
            <SectionLabel num="02">Our approach</SectionLabel>
          </Reveal>
          <div className="approach">
            {p.approach.map(([t, d], k) => (
              <Reveal key={t} delay={k * 0.08} className="approach-item">
                <span className="approach-n">{String(k + 1).padStart(2, '0')}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark cs-built">
        <div className="wrap">
          <Reveal>
            <SectionLabel num="03">What we built</SectionLabel>
          </Reveal>
          <ul className="built">
            {p.built.map((b, k) => (
              <Reveal as="li" key={b} delay={(k % 2) * 0.06}>
                <span className="mono">{String(k + 1).padStart(2, '0')}</span>
                {b}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cs-out">
        <div className="wrap">
          <Reveal>
            <SectionLabel num="04">The result</SectionLabel>
          </Reveal>
          <div className="outcomes">
            {p.outcomes.map((o, k) => (
              <Reveal key={o} delay={k * 0.08} className="outcome">
                <Icon name="check" size={26} stroke={2} />
                <p>{o}</p>
              </Reveal>
            ))}
          </div>
          <div className="chips cs-tags">
            {p.scope.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Link to={`/work/${next.slug}`} className="nextcase dark" data-hot>
        <div className="wrap nextcase-in">
          <span className="mono">Next case study</span>
          <b>{next.name}</b>
          <span className="pcard-go">
            <Icon name="arrow" size={24} />
          </span>
        </div>
      </Link>

      <CTA />
    </>
  )
}
