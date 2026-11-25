import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { areas, brand, faqs, nav, process, services, why } from '../data.js'
import Logo from './Logo.jsx'
import { BrushEdge, Icon, Reveal, SectionLabel } from './ui.jsx'
import BookCall from './Book.jsx'
import ReplyTimes from './ReplyTimes.jsx'
import { useLang } from '../lib/i18n.jsx'

export function useDocTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · NOX Digital` : 'NOX Digital — Websites, Branding & Digital Solutions in Eldoret, Kenya'
  }, [title])
}

const word = {
  hidden: { y: '112%' },
  show: (i) => ({ y: 0, transition: { duration: 0.85, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 + i * 0.07 } }),
}

export function PageHero({ kicker, title, lede, bgText, children }) {
  const words = title.split(' ')
  return (
    <section className="phero dark">
      <div className="phero-bg" aria-hidden="true">
        <span>{bgText || kicker}</span>
      </div>
      <div className="wrap phero-in">
        <motion.div className="mono phero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <span className="label-line" /> {kicker}
        </motion.div>
        <h1 className="phero-title" aria-label={title}>
          {words.map((w, i) => (
            <span key={i} className="pw" aria-hidden="true">
              <motion.span variants={word} initial="hidden" animate="show" custom={i}>
                {w}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>
        {lede && (
          <motion.p className="phero-lede" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }}>
            {lede}
          </motion.p>
        )}
        {children && (
          <motion.div className="phero-extra" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
            {children}
          </motion.div>
        )}
      </div>
      <BrushEdge side="bottom" seed={9} />
    </section>
  )
}

export function Head({ label, num, children, lede, light }) {
  return (
    <div className="section-head">
      <div>
        <Reveal>
          <SectionLabel num={num}>{label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h2">{children}</h2>
        </Reveal>
      </div>
      {lede && (
        <Reveal delay={0.1}>
          <p className="lede narrow">{lede}</p>
        </Reveal>
      )}
    </div>
  )
}

export function Why() {
  return (
    <section className="why dark" aria-label="Why choose NOX Digital">
      <BrushEdge side="top" seed={21} />
      <div className="wrap why-grid">
        {why.map((w, i) => (
          <Reveal key={w.top} delay={i * 0.08} className="why-item">
            <Icon name={w.icon} size={34} stroke={1.4} />
            <span>
              {w.top}
              <br />
              {w.bottom}
            </span>
          </Reveal>
        ))}
      </div>
      <BrushEdge side="bottom" seed={8} />
    </section>
  )
}

export function Process({ num = '04' }) {
  return (
    <section className="section process">
      <div className="wrap">
        <Head label="How it works" num={num}>
          A simple process.
          <br />
          <span className="dim">No surprises.</span>
        </Head>
        <ol className="steps">
          {process.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08} className="step">
              <div className="step-n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="script step-note">{s.note}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Areas({ num = '05' }) {
  return (
    <section className="section areas">
      <div className="wrap">
        <Head label="Where we work" num={num} lede="Based in Eldoret, building for businesses across Kenya and beyond. Everything can be done remotely.">
          Local roots.
          <br />
          <span className="dim">Nationwide reach.</span>
        </Head>
        <div className="areas-grid">
          {areas.map((a, i) => (
            <Reveal key={a.city} delay={(i % 5) * 0.05}>
              <Link to={`/locations/${a.slug}`} className="area">
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                <b>{a.city}</b>
                <small>{a.note}</small>
                <Icon name="arrowUR" size={18} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQ({ num = '06', items = faqs }) {
  const [open, setOpen] = useState(0)
  useEffect(() => {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    })
    document.head.appendChild(el)
    return () => el.remove()
  }, [items])
  return (
    <section className="section faq">
      <div className="wrap faq-grid">
        <div className="faq-side">
          <Reveal>
            <SectionLabel num={num}>Questions</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2">Good to know before we start.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              Still wondering about something? Message our team directly on{' '}
              <a className="u" href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              .
            </p>
          </Reveal>
        </div>
        <div className="faq-list">
          {items.map((f, i) => {
            const on = open === i
            return (
              <Reveal key={f.q} delay={i * 0.04} className={`faq-item ${on ? 'is-on' : ''}`}>
                <button aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}>
                  <span>{f.q}</span>
                  <Icon name="plus" size={22} className="faq-plus" />
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CTA({ title = 'Let’s build', script = 'something great.', text }) {
  const { t } = useLang()
  return (
    <section className="cta dark">
      <BrushEdge side="top" seed={31} />
      <div className="wrap cta-in">
        <div>
          <Reveal>
            <h2 className="h1">
              {t('ctaTitle', title)}
              <br />
              <span className="script big">{t('ctaScript', script)}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede">
              {text || t('ctaText', 'Tell us about your business and what you want to achieve. You’ll hear back from a real person on our team, not a ticketing system.')}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="cta-actions">
          <Link to="/contact" className="btn btn-light btn-lg">
            {t('start', 'Start a project')} <Icon name="arrow" size={18} />
          </Link>
          <a className="btn btn-outline-light btn-lg" href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={18} /> {t('whatsapp', 'WhatsApp us')}
          </a>
          <BookCall />
          <a className="cta-mail" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
          <ReplyTimes inline />
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer dark">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{t('tagline', 'Websites, brands and digital systems for businesses that want to grow.')}</p>
          <div className="footer-social">
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Icon name="whatsapp" size={20} />
            </a>
            <a href={`mailto:${brand.email}`} aria-label="Email">
              <Icon name="mail" size={20} />
            </a>
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`} aria-label="Phone">
              <Icon name="phone" size={20} />
            </a>
          </div>
        </div>
        <div>
          <h5 className="mono">{t('navigate', 'Navigate')}</h5>
          <ul>
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{t(n.to, n.label)}</Link>
              </li>
            ))}
            <li>
              <Link to="/estimator">{t('estimator', 'Cost estimator')}</Link>
            </li>
            <li>
              <Link to="/audit">{t('audit', 'Free website audit')}</Link>
            </li>
            <li>
              <Link to="/demo">{t('demo', 'Live POS demo')}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mono">Services</h5>
          <ul>
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to={`/services#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mono">{t('locations', 'Locations')}</h5>
          <ul>
            {areas.slice(0, 6).map((a) => (
              <li key={a.slug}>
                <Link to={`/locations/${a.slug}`}>Web design {a.slug === 'remote' ? 'worldwide' : `in ${a.city}`}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mono">{t('contact', 'Contact')}</h5>
          <ul>
            <li>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            <li>{brand.location}</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base mono">
        <span>© {new Date().getFullYear()} NOX Digital</span>
        <span>Smart solutions. Real impact.</span>
        <span className="footer-legal">
          <Link to="/privacy">{t('privacy', 'Privacy')}</Link>
          <Link to="/terms">{t('terms', 'Terms')}</Link>
        </span>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          {t('top', 'Back to top ↑')}
        </a>
      </div>
    </footer>
  )
}
