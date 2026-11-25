import { Head } from './shared.jsx'
import { Icon, Reveal } from './ui.jsx'
import BeforeAfter from './BeforeAfter.jsx'
import { kenyaFeatures } from '../data.js'

function Old() {
  return (
    <div className="ba-old">
      <div className="ba-old-bar">
        <u>HOME</u><u>ABOUT US</u><u>PRODUCTS</u><u>CONTACT</u>
      </div>
      <h4>WELCOME TO OUR WEBSITE</h4>
      <p>We are a company that sells many things. Please read below about our company history and our many products and services for you.</p>
      <div className="ba-old-boxes"><i /><i /><i /></div>
      <small>Visitors left? Phone number is on page 4.</small>
    </div>
  )
}
function New() {
  return (
    <div className="ba-new">
      <div className="ba-new-bar"><b>BRAND</b><span>Shop</span><span>About</span><em>WhatsApp us</em></div>
      <h4>Fresh produce,<br />delivered today.</h4>
      <p>Order in under a minute. Pay by M-Pesa.</p>
      <span className="ba-new-btn">Order now →</span>
      <div className="ba-new-boxes"><i /><i /><i /></div>
    </div>
  )
}

export default function Kenya() {
  return (
    <section className="section kenya">
      <div className="wrap">
        <Head label="Built for Kenya" num="05" lede="Global design standards, local know-how. We build around how your customers really search, pay and talk to you.">
          Designed for
          <br />
          <span className="dim">real Kenyan customers.</span>
        </Head>
        <div className="kenya-grid">
          <div className="kenya-feats">
            {kenyaFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07} className="kf">
                <Icon name={f.icon} size={28} stroke={1.4} />
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="kenya-ba">
            <BeforeAfter before={<Old />} after={<New />} />
            <p className="mono ba-cap">Illustrative · drag to compare a cluttered site with a focused one</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
