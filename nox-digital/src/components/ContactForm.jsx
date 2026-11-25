import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { brand, services } from '../data.js'
import { Icon } from './ui.jsx'

const BUDGETS = ['Not sure yet', 'Small: simple site or design', 'Medium: full website or store', 'Large: custom system or app']
const TIMELINES = ['Flexible', 'As soon as possible', 'Within a month', 'In 2–3 months']

export default function ContactForm() {
  const [params] = useSearchParams()
  const [picked, setPicked] = useState([])
  const [f, setF] = useState({ name: '', contact: '', budget: BUDGETS[0], timeline: TIMELINES[0], message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const s = services.find((x) => x.slug === params.get('service'))
    if (s) setPicked([s.title])
  }, [params])

  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }))
  const toggle = (t) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]))

  const text = () =>
    [
      `Hi NOX Digital! I'm ${f.name || '[name]'}.`,
      `I'm interested in: ${picked.length ? picked.join(', ') : 'a digital project'}.`,
      `Budget: ${f.budget}. Timeline: ${f.timeline}.`,
      f.message && `About the project: ${f.message}`,
      `Reach me on: ${f.contact || '[phone/email]'}`,
    ]
      .filter(Boolean)
      .join('\n')

  const submit = (e) => {
    e.preventDefault()
    if (brand.formEndpoint) {
      // also save the enquiry (Formspree-compatible); WhatsApp still opens either way
      fetch(brand.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...f, services: picked.join(', '), message: text() }),
      }).catch(() => {})
    }
    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text())}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <form className="form" onSubmit={submit}>
      <fieldset>
        <legend>I need help with</legend>
        <div className="pick">
          {services.map((s) => (
            <button type="button" key={s.slug} className={picked.includes(s.title) ? 'on' : ''} aria-pressed={picked.includes(s.title)} onClick={() => toggle(s.title)}>
              {s.title}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input required value={f.name} onChange={set('name')} placeholder="Jane Wanjiru" autoComplete="name" />
        </label>
        <label>
          <span>Phone or email</span>
          <input required value={f.contact} onChange={set('contact')} placeholder="+254 7.. or you@company.com" autoComplete="email" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Budget</span>
          <select value={f.budget} onChange={set('budget')}>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Timeline</span>
          <select value={f.timeline} onChange={set('timeline')}>
            {TIMELINES.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        <span>Tell us about it</span>
        <textarea rows="4" value={f.message} onChange={set('message')} placeholder="What are you building? Who is it for? Any examples you like?" />
      </label>
      <div className="form-actions">
        <button type="submit" className="btn btn-light btn-lg">
          <Icon name="whatsapp" size={18} /> Send on WhatsApp
        </button>
        <a
          className="btn btn-outline-light btn-lg"
          href={`mailto:${brand.email}?subject=${encodeURIComponent('New project enquiry')}&body=${encodeURIComponent(text())}`}
        >
          <Icon name="mail" size={18} /> Email instead
        </a>
      </div>
      {sent && <p className="form-sent">Opening WhatsApp. Your message is ready to send. We usually reply on WhatsApp within 2 hours.</p>}
    </form>
  )
}
