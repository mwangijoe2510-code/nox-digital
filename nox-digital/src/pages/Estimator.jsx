import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CTA, PageHero, useDocTitle } from '../components/shared.jsx'
import { Icon, Reveal } from '../components/ui.jsx'
import BookCall from '../components/Book.jsx'
import { brand, estimator as E } from '../data.js'
import { kes, waLink } from '../lib/money.js'

export default function Estimator() {
  useDocTitle('Cost estimator')
  const [params] = useSearchParams()
  const [type, setType] = useState(E.types.find((t) => t.id === params.get('type'))?.id || 'brochure')
  const [pages, setPages] = useState('p5')
  const [extras, setExtras] = useState([])
  const [speed, setSpeed] = useState('normal')

  const t = E.types.find((x) => x.id === type)
  const showPages = type === 'brochure' || type === 'store'

  const { low, high } = useMemo(() => {
    let sum = t.base
    if (showPages) sum += E.pages.find((p) => p.id === pages).add
    sum += E.extras.filter((x) => extras.includes(x.id)).reduce((a, x) => a + x.add, 0)
    sum *= E.speed.find((s) => s.id === speed).mult
    return { low: Math.round(sum / 1000) * 1000, high: Math.round((sum * 1.3) / 1000) * 1000 }
  }, [t, showPages, pages, extras, speed])

  const toggle = (id) => setExtras((e) => (e.includes(id) ? e.filter((x) => x !== id) : [...e, id]))
  const summary = [
    'Hi NOX Digital! I used your cost estimator.',
    `Project: ${t.label}`,
    showPages && `Size: ${E.pages.find((p) => p.id === pages).label}`,
    extras.length && `Extras: ${E.extras.filter((x) => extras.includes(x.id)).map((x) => x.label).join(', ')}`,
    `Timeline: ${E.speed.find((s) => s.id === speed).label}`,
    `Estimate: ${kes(low)} – ${kes(high)}`,
    'Can we talk about the details?',
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <>
      <PageHero kicker="Cost estimator" bgText="ESTIMATE" title="What will my project cost?" lede="Answer four quick questions and see a realistic price range. No sign-up, no obligation." />
      <section className="section">
        <div className="wrap est">
          <div className="est-steps">
            <Reveal className="est-step">
              <h3><span className="mono">01</span> What do you need?</h3>
              <div className="opt-grid">
                {E.types.map((x) => (
                  <button key={x.id} className={`opt ${type === x.id ? 'on' : ''}`} aria-pressed={type === x.id} onClick={() => setType(x.id)}>
                    <b>{x.label}</b>
                    <small>{x.note}</small>
                  </button>
                ))}
              </div>
            </Reveal>
            {showPages && (
              <Reveal className="est-step">
                <h3><span className="mono">02</span> How big?</h3>
                <div className="opt-grid three">
                  {E.pages.map((x) => (
                    <button key={x.id} className={`opt ${pages === x.id ? 'on' : ''}`} aria-pressed={pages === x.id} onClick={() => setPages(x.id)}>
                      <b>{x.label}</b>
                    </button>
                  ))}
                </div>
              </Reveal>
            )}
            <Reveal className="est-step">
              <h3><span className="mono">03</span> Anything extra?</h3>
              <div className="opt-grid">
                {E.extras.map((x) => (
                  <button key={x.id} className={`opt ${extras.includes(x.id) ? 'on' : ''}`} aria-pressed={extras.includes(x.id)} onClick={() => toggle(x.id)}>
                    <b>{x.label}</b>
                  </button>
                ))}
              </div>
            </Reveal>
            <Reveal className="est-step">
              <h3><span className="mono">04</span> How soon?</h3>
              <div className="opt-grid three">
                {E.speed.map((x) => (
                  <button key={x.id} className={`opt ${speed === x.id ? 'on' : ''}`} aria-pressed={speed === x.id} onClick={() => setSpeed(x.id)}>
                    <b>{x.label}</b>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
          <aside className="est-result dark" aria-live="polite">
            <span className="mono">Your estimate</span>
            <div className="est-price">
              <b>{kes(low)}</b>
              <span>to {kes(high)}</span>
            </div>
            <p>
              For a <strong>{t.label.toLowerCase()}</strong>. This is a guide, not a final quote. After a quick chat we’ll send a fixed written price.
            </p>
            <a className="btn btn-light btn-lg" href={waLink(brand.whatsapp, summary)} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} /> Send this to NOX
            </a>
            <BookCall />
            <Link to="/pricing" className="est-link">
              See all packages →
            </Link>
          </aside>
        </div>
      </section>
      <CTA />
    </>
  )
}
