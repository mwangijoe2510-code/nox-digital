import { useState } from 'react'
import { CTA, PageHero, useDocTitle } from '../components/shared.jsx'
import { PostCard } from '../components/cards.jsx'
import { posts } from '../posts.js'

const CATS = ['All', ...Array.from(new Set(posts.map((p) => p.category)))]

export default function Journal() {
  useDocTitle('Journal')
  const [c, setC] = useState('All')
  const list = posts.filter((p) => c === 'All' || p.category === c)
  const [first, ...rest] = list

  return (
    <>
      <PageHero
        kicker="Journal"
        bgText="JOURNAL"
        title="Ideas worth putting to work."
        lede="Practical guides on websites, SEO, branding and selling online in Kenya, written for business owners."
      />

      <section className="section journal">
        <div className="wrap">
          <div className="filters" role="tablist" aria-label="Filter articles">
            {CATS.map((x) => (
              <button key={x} role="tab" aria-selected={c === x} className={c === x ? 'on' : ''} onClick={() => setC(x)}>
                {x}
              </button>
            ))}
          </div>

          <div key={c}>
            {first && <PostCard post={first} big />}
            <div className="post-grid">
              {rest.map((p, i) => (
                <PostCard key={p.slug} post={p} delay={i * 0.06} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA title="Need this done" script="for you?" text="Everything in the journal is something we do every day. Tell us what you need and we will handle it." />
    </>
  )
}
