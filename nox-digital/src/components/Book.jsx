import { brand } from '../data.js'
import { waLink } from '../lib/money.js'
import { Icon } from './ui.jsx'

// "Book a call": opens your booking link if set in data.js, else WhatsApp.
export default function BookCall({ className = 'btn btn-outline-light btn-lg', label = 'Book a call' }) {
  const href = brand.bookingUrl || waLink(brand.whatsapp, 'Hi NOX Digital! I would like to book a call to discuss a project. What times are free?')
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <Icon name="calendar" size={18} /> {label}
    </a>
  )
}
