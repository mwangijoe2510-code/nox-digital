import { Link } from 'react-router-dom'
import { CTA, FAQ, PageHero, useDocTitle } from '../components/shared.jsx'
import { Icon, Reveal } from '../components/ui.jsx'
import { pricing } from '../data.js'
import { kes } from '../lib/money.js'

export default function Pricing() {
  useDocTitle('Pricing')
  return (
    <>
      <PageHero kicker="Pricing" bgText="PRICING" title="Clear prices. No surprises." lede="Starting prices for our most common projects. Every project is different, so you always get a fixed, written quote before we start.">
        <div className="phero-actions">
          <Link to="/estimator" className="btn btn-light btn-lg">
            Get an instant estimate <Icon name="arrow" size={18} />
          </Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="price-grid">
            {pricing.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className={`price ${p.popular ? 'is-pop' : ''}`}>
                {p.popular && <span className="price-flag mono">Most chosen</span>}
                <h3>{p.name}</h3>
                <div className="price-from">
                  <small className="mono">From</small>
                  <b>{kes(p.from)}</b>
                </div>
                <p className="price-for">{p.for}</p>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={16} /> {f}
                    </li>
                  ))}
                </ul>
                <div className="price-time mono">Typical timeline · {p.time}</div>
                <Link to={`/estimator?type=${p.slug === 'custom' ? 'pos' : p.slug === 'business' ? 'brochure' : 'brochure'}`} className={`btn ${p.popular ? 'btn-light' : 'btn-dark'}`}>
                  Estimate this <Icon name="arrow" size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="price-note">
            Prices are starting points in Kenyan shillings. Hosting, domain and third-party fees are quoted separately. Not sure what fits? <Link className="u" to="/contact">Talk to us</Link> and we’ll recommend the right option.
          </p>
        </div>
      </section>
      <FAQ num="02" />
      <CTA />
    </>
  )
}
