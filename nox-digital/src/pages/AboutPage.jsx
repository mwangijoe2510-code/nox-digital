import { AboutTeaser } from '../components/Showcase.jsx'
import { Areas, CTA, Head, PageHero, Process, useDocTitle } from '../components/shared.jsx'
import { Counter, BrushEdge, Reveal } from '../components/ui.jsx'
import { marquee, stats, tech, values } from '../data.js'

export default function AboutPage() {
  useDocTitle('About')
  return (
    <>
      <PageHero
        kicker="About"
        bgText="ABOUT"
        title="A studio built on ten years of craft."
        lede="NOX Digital is a Kenyan digital studio. We design and build websites, stores, systems and brands for businesses that want to grow."
      />

      <AboutTeaser link={false} label="Our story" num="01" />

      <section className="section values">
        <div className="wrap">
          <Head label="What we stand for" num="02" lede="Four principles shape every project we take on, from a one-page site to a full custom system.">
            How we <span className="underbrush">work</span>.
          </Head>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.07} className="value">
                <span className="value-n mono">{v.n}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="statband dark">
        <BrushEdge side="top" seed={17} />
        <div className="wrap statband-grid">
          {stats.map((s) => (
            <Reveal key={s.l} className="hstat">
              <div className="hstat-n">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="hstat-l mono">{s.l}</div>
            </Reveal>
          ))}
        </div>
        <div className="techline" aria-label="Technology we use">
          <div className="techline-track">
            {[...tech, ...tech, ...tech].map((t, i) => (
              <span key={i}>
                {t}
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>
        <BrushEdge side="bottom" seed={12} />
      </section>

      <Process num="03" />
      <Areas num="04" />
      <CTA />
    </>
  )
}
