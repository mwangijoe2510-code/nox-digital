import { PageHero, useDocTitle } from '../components/shared.jsx'
import { brand } from '../data.js'

const DOCS = {
  privacy: {
    title: 'Privacy policy',
    intro: 'How NOX Digital handles information on this website.',
    sections: [
      ['What we collect', 'This website does not store what you type into the contact form. When you submit it, your message opens in WhatsApp or your email app so you can send it to us yourself. We only receive what you choose to send.'],
      ['How we use it', 'We use the details you send to reply to your enquiry, prepare quotes and deliver the work you ask for. We do not sell your information.'],
      ['Cookies and tracking', 'This website does not use advertising trackers. It may use your browser’s local storage for small conveniences, such as remembering that you have seen the intro.'],
      ['Third-party services', 'Links to WhatsApp, email and client websites take you to services that have their own privacy practices.'],
      ['Your choices', `You can ask us to delete the details you have shared with us at any time by contacting ${brand.email}.`],
    ],
  },
  terms: {
    title: 'Terms of use',
    intro: 'The simple rules for using this website.',
    sections: [
      ['Using this site', 'You may browse and share this website for lawful purposes. Please do not misuse it or attempt to disrupt it.'],
      ['Our content', 'The text, designs, logos and code on this site belong to NOX Digital or the respective clients and may not be copied or reused without permission.'],
      ['Project work', 'Services are provided under a separate written agreement or quote for each project. Prices, timelines and deliverables are agreed before work starts.'],
      ['Accuracy', 'We work to keep information on this site accurate and current, but it is provided for general information and may change without notice.'],
      ['Contact', `Questions about these terms? Email ${brand.email} or call ${brand.phone}.`],
    ],
  },
}

export default function Legal({ doc }) {
  const d = DOCS[doc]
  useDocTitle(d.title)
  return (
    <>
      <PageHero kicker="Legal" bgText="LEGAL" title={d.title} lede={d.intro} />
      <section className="section article">
        <div className="article-in">
          <p className="mono legal-date">Last updated 29 October 2026</p>
          {d.sections.map(([h, t]) => (
            <div key={h}>
              <h2>{h}</h2>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
