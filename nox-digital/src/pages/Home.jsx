import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import { AboutTeaser, Bento, HShowcase, Manifesto } from '../components/Showcase.jsx'
import { Areas, CTA, FAQ, Head, Process, Why, useDocTitle } from '../components/shared.jsx'
import Kenya from '../components/Kenya.jsx'
import { PostCard } from '../components/cards.jsx'
import { Icon, Reveal } from '../components/ui.jsx'
import { posts } from '../posts.js'
import { testimonials } from '../data.js'

function Tools() {
  const items = [
    { to: '/estimator', icon: 'bolt', t: 'Cost estimator', d: 'Get a realistic price range in under a minute.' },
    { to: '/audit', icon: 'shield', t: 'Free website audit', d: 'Score your site and see what to fix first.' },
    { to: '/demo', icon: 'globe', t: 'Live POS demo', d: 'Try a working agrovet point-of-sale right here.' },
    { to: '/pricing', icon: 'star', t: 'Pricing', d: 'Clear starting prices for every package.' },
  ]
  return (
    <section className="section dark tools">
      <div className="wrap">
        <Head label="Free tools" num="06">
          Try before
          <br />
          <span className="dim">you talk to us.</span>
        </Head>
        <div className="tools-grid">
          {items.map((x, i) => (
            <Reveal key={x.to} delay={i * 0.07}>
              <Link to={x.to} className="tool">
                <Icon name={x.icon} size={30} stroke={1.4} />
                <h3>{x.t}</h3>
                <p>{x.d}</p>
                <Icon name="arrowUR" size={20} className="tool-go" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home({ ready }) {
  useDocTitle('')
  return (
    <>
      <Hero ready={ready} />
      <Manifesto />
      <AboutTeaser />
      <Bento />
      <HShowcase />
      <Why />
      <Process num="04" />
      <Kenya />
      <Tools />
      <Areas num="07" />
      <section className="section journal-teaser">
        <div className="wrap">
          <Head label="From the journal" num="08" lede="Practical advice on websites, SEO, branding and selling online in Kenya.">
            Ideas worth
            <br />
            <span className="dim">putting to work.</span>
          </Head>
          <div className="post-grid">
            {posts.slice(0, 3).map((p, i) => (
              <PostCard key={p.slug} post={p} delay={i * 0.08} />
            ))}
          </div>
          <Reveal className="center-row">
            <Link to="/journal" className="btn btn-dark btn-lg">
              Read the journal <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
      {testimonials.length > 0 && (
        <section className="section dark testimonials">
          <div className="wrap">
            <Head label="Kind words" num="09">
              What clients say.
            </Head>
            <div className="tgrid">
              {testimonials.map((t) => (
                <Reveal key={t.name} className="tcard">
                  <p>“{t.quote}”</p>
                  <b>{t.name}</b>
                  <small>{t.role}</small>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      <FAQ num="10" />
      <CTA />
    </>
  )
}
