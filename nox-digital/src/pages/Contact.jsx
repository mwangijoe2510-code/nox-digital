import { useSearchParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm.jsx'
import ReplyTimes from '../components/ReplyTimes.jsx'
import { FAQ, PageHero, useDocTitle } from '../components/shared.jsx'
import { Icon, Reveal, SectionLabel } from '../components/ui.jsx'
import { brand } from '../data.js'

const NEXT = [
  ['You tell us', 'Share what you want to build and any examples you like.'],
  ['We reply', 'A real person on our team responds with questions and ideas.'],
  ['You get a plan', 'A clear scope, timeline and quote, with no surprises.'],
]

export default function Contact() {
  useDocTitle('Contact')
  const [params] = useSearchParams()
  const area = params.get('area')

  return (
    <>
      <PageHero
        kicker="Contact"
        bgText="HELLO"
        title="Let’s talk about your project."
        lede={area ? `Building something in ${area}? Tell us about it. We work with businesses everywhere.` : 'Tell us about your business and what you want to achieve. We reply fast and keep it simple.'}
      />

      <section className="section contactpage">
        <div className="wrap contactpage-grid">
          <div className="cinfo">
            <Reveal>
              <SectionLabel num="01">Reach us directly</SectionLabel>
            </Reveal>
            <div className="ccards">
              <Reveal as="div">
                <a className="ccard" href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
                  <Icon name="whatsapp" size={26} />
                  <span>
                    <small className="mono">WhatsApp</small>
                    <b>{brand.phone}</b>
                  </span>
                  <Icon name="arrowUR" size={20} />
                </a>
              </Reveal>
              <Reveal delay={0.06}>
                <a className="ccard" href={`tel:${brand.phone.replace(/\s/g, '')}`}>
                  <Icon name="phone" size={26} />
                  <span>
                    <small className="mono">Call</small>
                    <b>{brand.phone}</b>
                  </span>
                  <Icon name="arrowUR" size={20} />
                </a>
              </Reveal>
              <Reveal delay={0.12}>
                <a className="ccard" href={`mailto:${brand.email}`}>
                  <Icon name="mail" size={26} />
                  <span>
                    <small className="mono">Email</small>
                    <b>{brand.email}</b>
                  </span>
                  <Icon name="arrowUR" size={20} />
                </a>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="ccard ccard-static">
                  <Icon name="pin" size={26} />
                  <span>
                    <small className="mono">Studio</small>
                    <b>{brand.location}</b>
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <h3 className="next-title">How fast we reply</h3>
              <ReplyTimes />
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="next-title">What happens next</h3>
              <ol className="next">
                {NEXT.map(([t, d], i) => (
                  <li key={t}>
                    <span className="mono">0{i + 1}</span>
                    <div>
                      <b>{t}</b>
                      <p>{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="formcard">
            <h2 className="formcard-title">
              Start your project <span className="script">today.</span>
            </h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <FAQ num="02" />
    </>
  )
}
