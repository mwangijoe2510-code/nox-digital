import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CTA, PageHero, useDocTitle } from '../components/shared.jsx'
import { Icon, Reveal } from '../components/ui.jsx'
import BookCall from '../components/Book.jsx'
import { auditQuestions as Q, brand } from '../data.js'
import { waLink } from '../lib/money.js'

export default function Audit() {
  useDocTitle('Free website audit')
  const [a, setA] = useState({})
  const [done, setDone] = useState(false)
  const answered = Object.keys(a).length
  const yes = Object.values(a).filter(Boolean).length
  const score = Math.round((yes / Q.length) * 100)
  const gaps = Q.filter((_, i) => a[i] === false)
  const grade = score >= 80 ? 'Strong foundation' : score >= 50 ? 'Room to grow' : 'Big opportunity'
  const msg = `Hi NOX Digital! I did the website audit and scored ${score}%.\nTop gaps:\n${gaps.slice(0, 4).map((g) => '- ' + g.q).join('\n')}\nCan you help me fix these?`

  return (
    <>
      <PageHero kicker="Free tool" bgText="AUDIT" title="Is your website working for you?" lede="Ten honest yes/no questions. Get a score and a personal to-do list of what to fix first. Takes two minutes." />
      <section className="section">
        <div className="wrap audit">
          {!done ? (
            <>
              <ol className="audit-list">
                {Q.map((x, i) => (
                  <Reveal as="li" key={x.q} className="audit-q">
                    <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                    <p>{x.q}</p>
                    <div className="yn" role="group" aria-label={x.q}>
                      <button className={a[i] === true ? 'on' : ''} aria-pressed={a[i] === true} onClick={() => setA((s) => ({ ...s, [i]: true }))}>Yes</button>
                      <button className={a[i] === false ? 'on no' : ''} aria-pressed={a[i] === false} onClick={() => setA((s) => ({ ...s, [i]: false }))}>No / Not sure</button>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <div className="audit-bar">
                <span className="mono">
                  {answered}/{Q.length} answered
                </span>
                <button className="btn btn-dark btn-lg" disabled={answered < Q.length} onClick={() => { setDone(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                  See my score <Icon name="arrow" size={18} />
                </button>
              </div>
            </>
          ) : (
            <div className="audit-result">
              <div className="score">
                <b>{score}</b>
                <span>/100</span>
              </div>
              <h2 className="h2">{grade}.</h2>
              <p className="lede">
                You answered yes to {yes} of {Q.length}. {gaps.length ? 'Here is what to fix, in order:' : 'Nothing major to fix. Keep it up!'}
              </p>
              <ul className="gaps">
                {gaps.map((g) => (
                  <li key={g.q}>
                    <Icon name="bolt" size={18} />
                    <div>
                      <b>{g.q}</b>
                      <p>{g.tip}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="phero-actions">
                <a className="btn btn-dark btn-lg" href={waLink(brand.whatsapp, msg)} target="_blank" rel="noreferrer">
                  <Icon name="whatsapp" size={18} /> Get help fixing this
                </a>
                <BookCall className="btn btn-ghost btn-lg" />
                <button className="btn btn-ghost btn-lg" onClick={() => { setDone(false); setA({}) }}>
                  Start again
                </button>
              </div>
              <p className="price-note">
                Want a full expert review? <Link className="u" to="/contact">Ask for a free audit</Link>.
              </p>
            </div>
          )}
        </div>
      </section>
      <CTA />
    </>
  )
}
