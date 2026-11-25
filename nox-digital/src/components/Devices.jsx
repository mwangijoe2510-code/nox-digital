import { useId } from 'react'
import { Nav, SiteMock } from './SiteMock.jsx'
import { useImageOk } from './ui.jsx'

// ─────────────────────────────────────────────────────────────
//  Multi-device showcase (iMac + MacBook + iPad + iPhone), drawn as inline
//  SVG with live "screens" on top. Screens show a mock of the project, or the
//  real screenshots when you add them to /public/work/:
//    <slug>.jpg       desktop (iMac)           <slug>-1.jpg  laptop (MacBook)
//    <slug>-m.jpg     phone + tablet screen
// ─────────────────────────────────────────────────────────────

const COPY = {
  nox: { label: 'MODERN WEBSITES', h: ['Build Your', 'Online Presence'], btn: 'Get started', cards: ['Websites', 'Brands', 'POS', 'SEO'], page: 'Our services', brand: 'NOX DIGITAL', links: ['Home', 'Services', 'Work'] },
  trail: { label: 'POTENTIAL TO PERFORMANCE', h: ['Build Better', 'Leaders.'], btn: 'Explore solutions', cards: ['Leadership', 'Teams', 'Impact', 'Insights'], page: 'Our solutions', brand: 'TRAILBLAZE 360', links: ['About', 'Solutions', 'Impact'] },
  mane: { label: 'GENUINE GEAR ONLY', h: ['Gear Up.', 'Play Bold.'], btn: 'Order on WhatsApp', cards: ['Boots', 'Jerseys', 'Gloves', 'Balls'], page: 'Shop the range', brand: 'MANE SPORTS', links: ['Shop', 'Categories', 'About'] },
  bright: { label: 'INSURANCE AGENCY', h: ['Cover that', 'moves with you.'], btn: 'Get an instant quote', cards: ['Medical', 'Motor', 'Travel', 'General'], page: 'Our covers', brand: 'BRIGHTHILL', links: ['Medical', 'Motor', 'Travel'] },
  velo: { label: 'IT SOLUTIONS', h: ['Technology that', 'keeps you ahead.'], btn: 'Talk to an expert', cards: ['Networks', 'Software', 'Support', 'Cloud'], page: 'Our services', brand: 'VELOPRIME', links: ['Services', 'About', 'Support'] },
  nature: { label: 'NATURALLY BETTER', h: ['Nature, beyond', 'the ordinary.'], btn: 'Discover more', cards: ['Pure', 'Local', 'Honest', 'Wild'], page: 'Our story', brand: 'BEEYOND NATURE', links: ['Home', 'Story', 'Offer'] },
  agro: { label: 'TODAY’S SALES', h: ['KES 48,250', ''], btn: 'Pay & print receipt', cards: ['Sales', 'Stock', 'Products', 'Reports'], page: 'Stock overview', brand: 'AGROVET POS', links: ['Sales', 'Stock', 'Reports'] },
}

function MobileMock({ kind, wide }) {
  const c = COPY[kind] || COPY.nox
  return (
    <div className={`mk mk-${kind} mm ${wide ? 'wide' : ''}`}>
      <div className="mm-bar">
        <b>{c.brand}</b>
        <span className="mm-burger">
          <i />
          <i />
        </span>
      </div>
      <small className="mm-label">{c.label}</small>
      <h4 className="mm-h">
        {c.h[0]}
        {c.h[1] && (
          <>
            <br />
            {c.h[1]}
          </>
        )}
      </h4>
      <i className="mm-btn">{c.btn}</i>
      <div className="mm-cards">
        {c.cards.map((t, i) => (
          <span key={t}>
            <small>No. 0{i + 1}</small>
            <b>{t}</b>
          </span>
        ))}
      </div>
    </div>
  )
}

function InnerMock({ kind }) {
  const c = COPY[kind] || COPY.nox
  return (
    <div className={`mk mk-${kind} mk-inner`}>
      <Nav brand={c.brand} items={c.links} cta="Contact" />
      <h4 className="mk-ih">{c.page}</h4>
      <p className="mk-ip">Everything you need, clearly presented.</p>
      <div className="mk-cards four">
        {c.cards.slice(0, 3).map((t, i) => (
          <span key={t}>
            <small>No. 0{i + 1}</small>
            <b>{t}</b>
          </span>
        ))}
      </div>
      <div className="mk-banner">
        <b>Let’s talk about your project</b>
        <i>Contact →</i>
      </div>
    </div>
  )
}

function Shot({ src, alt, fallback }) {
  const ok = useImageOk(src)
  return ok ? <img className="shot" src={src} alt={alt} loading="lazy" /> : fallback
}

export default function DeviceStage({ project: p, className = '' }) {
  const id = useId().replace(/:/g, '')
  const g = (n) => `url(#${id}${n})`
  const defs = (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f4f2" />
          <stop offset="1" stopColor="#c9c9c5" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b9b9b5" />
          <stop offset=".5" stopColor="#ececea" />
          <stop offset="1" stopColor="#b3b3af" />
        </linearGradient>
        <linearGradient id={`${id}c`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9e9e6" />
          <stop offset="1" stopColor="#a9a9a5" />
        </linearGradient>
      </defs>
    </svg>
  )

  return (
    <div className={`dstage ${className}`} role="img" aria-label={`${p.name} shown on desktop, laptop, tablet and phone`}>
      {defs}
      <div className="dstage-glow" aria-hidden="true" />

      {/* iMac */}
      <div className="dev d-imac">
        <svg viewBox="0 0 1000 850" aria-hidden="true">
          <path d="M392 640h216l34 150H358z" fill={g('b')} />
          <ellipse cx="500" cy="816" rx="250" ry="22" fill="rgba(0,0,0,.22)" />
          <rect x="262" y="790" width="476" height="30" rx="14" fill={g('c')} />
          <rect x="1.5" y="1.5" width="997" height="657" rx="30" fill="#0e0e0e" stroke="#4a4a48" strokeWidth="3" />
          <path d="M0 568h1000v62a30 30 0 01-30 30H30a30 30 0 01-30-30z" fill={g('a')} />
          <circle cx="500" cy="614" r="9" fill="#9a9a96" />
          <circle cx="500" cy="18" r="3.5" fill="#2a2a2a" />
        </svg>
        <div className="dscreen" style={{ left: '3.4%', top: '4%', width: '93.2%', height: '62%' }}>
          <Shot src={`/work/${p.slug}.jpg`} alt={`${p.name} desktop`} fallback={<SiteMock kind={p.kind} />} />
        </div>
      </div>

      {/* MacBook */}
      <div className="dev d-mac">
        <svg viewBox="0 0 1000 640" aria-hidden="true">
          <ellipse cx="500" cy="618" rx="470" ry="14" fill="rgba(0,0,0,.2)" />
          <rect x="96.500" y="1.5" width="807" height="557" rx="30" fill="#101010" stroke="#4a4a48" strokeWidth="3" />
          <circle cx="500" cy="13" r="3.2" fill="#2c2c2c" />
          <path d="M0 560h1000l-26 40a22 22 0 01-18 10H44a22 22 0 01-18-10z" fill={g('a')} />
          <path d="M410 560h180v10a10 10 0 01-10 10H420a10 10 0 01-10-10z" fill="#bdbdb9" />
        </svg>
        <div className="dscreen" style={{ left: '11.6%', top: '3.9%', width: '76.8%', height: '82%' }}>
          <Shot src={`/work/${p.slug}-1.jpg`} alt={`${p.name} laptop`} fallback={<InnerMock kind={p.kind} />} />
        </div>
      </div>

      {/* iPad */}
      <div className="dev d-pad">
        <svg viewBox="0 0 560 760" aria-hidden="true">
          <rect x="0" y="0" width="560" height="760" rx="54" fill="#0f0f0f" stroke="#c4c4c0" strokeWidth="5" />
          <circle cx="280" cy="22" r="5" fill="#2c2c2c" />
        </svg>
        <div className="dscreen r14" style={{ left: '6%', top: '5.2%', width: '88%', height: '89.6%' }}>
          <Shot src={`/work/${p.slug}-m.jpg`} alt={`${p.name} tablet`} fallback={<MobileMock kind={p.kind} wide />} />
        </div>
      </div>

      {/* iPhone */}
      <div className="dev d-phone">
        <svg viewBox="0 0 280 580" aria-hidden="true">
          <rect x="2" y="2" width="276" height="576" rx="50" fill="#0b0b0b" stroke="#cfcfcb" strokeWidth="5" />
          <rect x="104" y="22" width="72" height="20" rx="10" fill="#000" />
        </svg>
        <div className="dscreen r30" style={{ left: '5.4%', top: '2.6%', width: '89.2%', height: '94.8%' }}>
          <Shot src={`/work/${p.slug}-m.jpg`} alt={`${p.name} phone`} fallback={<MobileMock kind={p.kind} />} />
        </div>
      </div>
    </div>
  )
}

const DARK = ['trail', 'velo', 'nox']
export function DevicePanel({ project, className = '' }) {
  return (
    <div className={`dpanel ${DARK.includes(project.kind) ? 'dark' : ''} ${className}`}>
      <DeviceStage project={project} />
    </div>
  )
}
