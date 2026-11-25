import { brand } from '../data.js'
import { Icon } from './ui.jsx'

// Full card list (Contact page) or compact inline list (CTA / footer).
export default function ReplyTimes({ inline = false }) {
  const href = (id) => (id === 'call' ? `tel:${brand.phone.replace(/\s/g, '')}` : id === 'wa' ? `https://wa.me/${brand.whatsapp}` : `mailto:${brand.email}`)
  if (inline) {
    return (
      <ul className="reply-inline" aria-label="Typical reply times">
        {brand.replyTimes.map((r) => (
          <li key={r.id}>
            <Icon name={r.icon} size={15} />
            {r.label}: <b className={r.fast ? 'hot' : ''}>{r.time}</b>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className="reply">
      {brand.replyTimes.map((r) => (
        <a key={r.id} href={href(r.id)} target={r.id === 'wa' ? '_blank' : undefined} rel="noreferrer" className={`reply-row ${r.fast ? 'fast' : ''}`}>
          {r.fast && <span className="reply-flag mono">Fastest for messages</span>}
          <span className="reply-ico">
            <Icon name={r.icon} size={20} />
          </span>
          <span>
            <b>{r.label}</b>
            <small>{r.note}</small>
          </span>
          <span className="reply-time">
            {r.id === 'call' && <i className="dot-live" />} {r.time}
          </span>
        </a>
      ))}
      <p className="reply-note">
        <strong>Tip:</strong> WhatsApp is faster than email. <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">Message us now →</a>
      </p>
    </div>
  )
}
