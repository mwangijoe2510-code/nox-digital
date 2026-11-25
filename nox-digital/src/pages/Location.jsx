import { Link, useParams } from 'react-router-dom'
import { CTA, FAQ, PageHero, useDocTitle } from '../components/shared.jsx'
import { ProjectCard } from '../components/cards.jsx'
import { Icon, Reveal, SectionLabel } from '../components/ui.jsx'
import { areas, services, projects } from '../data.js'
import NotFound from './NotFound.jsx'

export default function Location() {
  const { slug } = useParams()
  const a = areas.find((x) => x.slug === slug)
  useDocTitle(a ? `Web design & digital services in ${a.city}` : 'Not found')
  if (!a) return <NotFound />
  const remote = a.slug === 'remote'
  const where = remote ? 'anywhere in the world' : `in ${a.city}`
  const faqs = [
    {
      q: `Do you work with businesses ${where}?`,
      a: remote
        ? 'Yes. Everything we do can be done remotely, from the first call to launch and support, using WhatsApp, calls and shared previews.'
        : `Yes. We serve businesses ${where} and across Kenya. Meetings can happen by call, WhatsApp or video, and we are happy to plan an in-person visit where it makes sense.`,
    },
    {
      q: 'Can my customers pay with M-Pesa?',
      a: 'Yes. We build stores and systems that accept M-Pesa or cash on delivery, and can send orders straight to your WhatsApp.',
    },
    {
      q: 'How do we get started?',
      a: 'Send us a message on WhatsApp or use the contact form. We will have a short conversation about your goals and send you a clear plan, timeline and quote.',
    },
  ]

  return (
    <>
      <PageHero
        kicker={`Locations · ${a.city}`}
        bgText={a.city.toUpperCase()}
        title={remote ? 'Digital services, wherever you are.' : `Web design & digital services in ${a.city}.`}
        lede={`Websites, online stores, POS systems, mobile apps and branding for businesses ${where}. Built mobile-first, fast and made to grow your business.`}
      >
        <div className="phero-actions">
          <Link to={`/contact?area=${encodeURIComponent(a.city)}`} className="btn btn-light btn-lg">
            Start a project {where === 'anywhere in the world' ? '' : `in ${a.city}`} <Icon name="arrow" size={18} />
          </Link>
          <Link to="/work" className="btn btn-outline-light btn-lg">
            See our work
          </Link>
        </div>
      </PageHero>

      <section className="section loc-services">
        <div className="wrap">
          <Reveal>
            <SectionLabel num="01">What we do {remote ? 'for you' : `in ${a.city}`}</SectionLabel>
          </Reveal>
          <div className="loc-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link to={`/services#${s.slug}`} className="loc-item">
                  <Icon name={s.icon} size={24} />
                  <b>{s.title}</b>
                  <small>{s.text}</small>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section loc-work">
        <div className="wrap">
          <Reveal>
            <SectionLabel num="02">Recent work</SectionLabel>
          </Reveal>
          <div className="pgrid">
            {projects.filter((p) => p.featured).map((p, i) => (
              <ProjectCard key={p.slug} p={p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <FAQ num="03" items={faqs} />
      <CTA title="Ready to start" script={remote ? 'together?' : `in ${a.city}?`} />
    </>
  )
}
