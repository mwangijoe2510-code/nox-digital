import { useImageOk } from './ui.jsx'

// Stylised website previews drawn in code. Everything inside is sized in `cqw`
// so each mock scales perfectly with its container. Drop a real screenshot at
// /public/work/<slug>.jpg and it automatically replaces the mock.

export function Nav({ brand, items, cta }) {
  return (
    <div className="mk-nav">
      <b>{brand}</b>
      <span className="mk-links">
        {items.map((i) => (
          <em key={i}>{i}</em>
        ))}
      </span>
      {cta && <i className="mk-cta">{cta}</i>}
    </div>
  )
}

function Nox() {
  return (
    <div className="mk mk-nox">
      <Nav brand="NOX DIGITAL" items={['Home', 'Services', 'Portfolio', 'Contact']} />
      <div className="mk-hero">
        <h4>
          Build
          <br />
          Your Online
          <br />
          Presence
        </h4>
        <p>Modern websites. Better brands. Real results.</p>
        <i className="mk-btn">Get Started →</i>
      </div>
      <div className="mk-slashes">
        <u />
        <u />
        <u />
      </div>
    </div>
  )
}

function Trail() {
  return (
    <div className="mk mk-trail">
      <Nav brand="TRAILBLAZE 360" items={['About', 'Solutions', 'Impact', 'Insights']} cta="Start a conversation" />
      <div className="mk-hero mk-split">
        <div>
          <small>FROM POTENTIAL TO PERFORMANCE</small>
          <h4>
            Build Better Leaders.
            <br />
            Strengthen Teams.
            <br />
            Improve Performance.
          </h4>
          <i className="mk-btn">Explore solutions</i>
        </div>
        <div className="mk-ring">
          <u />
          <u />
          <u />
        </div>
      </div>
      <div className="mk-ascend">
        {['A', 'S', 'C', 'E', 'N', 'D'].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  )
}

function Mane() {
  return (
    <div className="mk mk-mane">
      <Nav brand="MANE SPORTS" items={['Shop', 'Categories', 'About']} cta="Cart (2)" />
      <div className="mk-hero mk-split">
        <div>
          <small>GENUINE GEAR ONLY</small>
          <h4>
            Gear Up.
            <br />
            Play Bold.
          </h4>
          <i className="mk-btn mk-wa">Order on WhatsApp</i>
        </div>
        <div className="mk-ball">
          <u />
          <u />
        </div>
      </div>
      <div className="mk-cards four">
        {[
          ['No. 01', 'Boots'],
          ['No. 02', 'Jerseys'],
          ['No. 03', 'Gloves'],
          ['No. 04', 'Balls'],
        ].map(([n, t]) => (
          <span key={n}>
            <small>{n}</small>
            <b>{t}</b>
          </span>
        ))}
      </div>
    </div>
  )
}

function Bright() {
  return (
    <div className="mk mk-bright">
      <Nav brand="BRIGHTHILL" items={['Medical', 'Motor', 'Travel', 'General']} cta="Get a quote" />
      <div className="mk-hero mk-split">
        <div>
          <small>INSURANCE AGENCY</small>
          <h4>
            Cover that
            <br />
            moves with you.
          </h4>
          <i className="mk-btn">Get an instant quote</i>
        </div>
        <div className="mk-quote">
          <b>Quick quote</b>
          <span />
          <span />
          <i>Calculate</i>
        </div>
      </div>
      <div className="mk-cards four">
        {['Medical', 'Motor', 'Travel', 'General'].map((t) => (
          <span key={t}>
            <b>{t}</b>
            <small>View plans →</small>
          </span>
        ))}
      </div>
      <div className="mk-chat">
        <span>Hi! How can I help?</span>
        <i />
      </div>
    </div>
  )
}


function Velo() {
  return (
    <div className="mk mk-velo">
      <Nav brand="VELOPRIME" items={['Services', 'About', 'Support', 'Contact']} cta="Get support" />
      <div className="mk-hero mk-split">
        <div>
          <small>IT SOLUTIONS</small>
          <h4>
            Technology that
            <br />
            keeps you ahead.
          </h4>
          <i className="mk-btn">Talk to an expert</i>
        </div>
        <div className="mk-chip">
          <u />
          <u />
          <u />
          <b>IT</b>
        </div>
      </div>
      <div className="mk-cards four">
        {[
          ['Networks', 'Setup & care'],
          ['Software', 'Built for you'],
          ['Support', 'Fast response'],
          ['Cloud', 'Secure & backed up'],
        ].map(([t, d]) => (
          <span key={t}>
            <b>{t}</b>
            <small>{d}</small>
          </span>
        ))}
      </div>
    </div>
  )
}

function Nature() {
  return (
    <div className="mk mk-nature">
      <Nav brand="BEEYOND NATURE" items={['Home', 'Our story', 'Offer', 'Contact']} cta="Get in touch" />
      <div className="mk-hero mk-split">
        <div>
          <small>NATURALLY BETTER</small>
          <h4>
            Nature,
            <br />
            beyond the
            <br />
            ordinary.
          </h4>
          <i className="mk-btn">Discover more</i>
        </div>
        <div className="mk-leaf">
          <u />
          <u />
          <u />
        </div>
      </div>
      <div className="mk-cards four">
        {['Pure', 'Local', 'Honest', 'Wild'].map((t) => (
          <span key={t}>
            <b>{t}</b>
            <small>Learn more →</small>
          </span>
        ))}
      </div>
    </div>
  )
}

function Agro() {
  return (
    <div className="mk mk-agro">
      <div className="mk-pos">
        <aside>
          <b>AGROVET POS</b>
          {['Sales', 'Stock', 'Products', 'Reports', 'Users'].map((t, i) => (
            <em key={t} className={i === 0 ? 'on' : ''}>
              {t}
            </em>
          ))}
        </aside>
        <section>
          <div className="mk-kpis">
            {[
              ['Today’s sales', 'KES 48,250'],
              ['Items sold', '126'],
              ['Low stock', '7'],
            ].map(([t, v]) => (
              <span key={t}>
                <small>{t}</small>
                <b>{v}</b>
              </span>
            ))}
          </div>
          <div className="mk-pos-body">
            <div className="mk-table">
              <small>Current sale</small>
              {[
                ['Dairy meal 70kg', '2'],
                ['Dewormer 100ml', '1'],
                ['Maize seed 2kg', '3'],
              ].map(([n, q]) => (
                <p key={n}>
                  <span>{n}</span>
                  <em>x{q}</em>
                </p>
              ))}
              <i className="mk-btn">Pay &amp; print receipt</i>
            </div>
            <div className="mk-bars">
              {[48, 72, 40, 88, 60, 96, 54].map((h, i) => (
                <u key={i} style={{ height: h + '%' }} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const MOCKS = { nox: Nox, trail: Trail, mane: Mane, bright: Bright, velo: Velo, nature: Nature, agro: Agro }


export function SiteMock({ kind }) {
  const C = MOCKS[kind] || Nox
  return <C />
}

export function BrowserFrame({ host, children, className = '' }) {
  return (
    <div className={`browser ${className}`}>
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <div className="browser-url">{host}</div>
      </div>
      <div className="browser-body">{children}</div>
    </div>
  )
}

export function ProjectVisual({ project }) {
  const src = `/work/${project.slug}.jpg`
  const ok = useImageOk(src)
  return ok ? (
    <img className="shot" src={src} alt={`${project.name} website`} loading="lazy" />
  ) : (
    <SiteMock kind={project.kind} />
  )
}

// Optional extra screenshots: /public/work/<slug>-1.jpg ... -4.jpg
export function Gallery({ project }) {
  return (
    <>
      {[1, 2, 3, 4].map((n) => (
        <GalleryImg key={n} src={`/work/${project.slug}-${n}.jpg`} alt={`${project.name} screenshot ${n}`} />
      ))}
    </>
  )
}

function GalleryImg({ src, alt }) {
  const ok = useImageOk(src)
  if (!ok) return null
  return (
    <figure className="gimg">
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  )
}

export function useHasGallery(project) {
  const a = useImageOk(`/work/${project.slug}-1.jpg`)
  return a
}
