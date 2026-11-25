import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CTA, PageHero, useDocTitle } from '../components/shared.jsx'
import { PostCard } from '../components/cards.jsx'
import { Icon, Reveal } from '../components/ui.jsx'
import { brand } from '../data.js'
import { fmtDate, posts, readTime } from '../posts.js'
import NotFound from './NotFound.jsx'

export default function Post() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  const [copied, setCopied] = useState(false)
  useDocTitle(post ? post.title : 'Not found')
  if (!post) return <NotFound />

  const url = typeof window !== 'undefined' ? window.location.href : ''
  const related = posts.filter((p) => p.slug !== slug).slice(0, 2)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <>
      <PageHero kicker={post.category} bgText="JOURNAL" title={post.title}>
        <div className="post-meta mono post-meta-hero">
          <span>{fmtDate(post.date)}</span>
          <span>·</span>
          <span>{readTime(post)} min read</span>
          <span>·</span>
          <span>NOX Digital</span>
        </div>
      </PageHero>

      <article className="section article">
        <div className="article-in">
          <Reveal>
            <p className="article-excerpt">{post.excerpt}</p>
          </Reveal>
          {post.body.map((b, i) => {
            if (b.t === 'h') return <h2 key={i}>{b.x}</h2>
            if (b.t === 'q') return <blockquote key={i}>{b.x}</blockquote>
            if (b.t === 'ul')
              return (
                <ul key={i} className="article-list">
                  {b.x.map((li) => (
                    <li key={li}>
                      <Icon name="check" size={18} stroke={2.2} /> {li}
                    </li>
                  ))}
                </ul>
              )
            return <p key={i}>{b.x}</p>
          })}

          <div className="share">
            <span className="mono">Share</span>
            <a className="btn btn-ghost" href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + url)}`} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={16} /> WhatsApp
            </a>
            <button className="btn btn-ghost" onClick={copy}>
              {copied ? 'Link copied' : 'Copy link'}
            </button>
          </div>

          <aside className="article-cta">
            <span className="script">Need a hand with this?</span>
            <p>We do this every day for businesses across Kenya. Tell us what you are working on.</p>
            <Link to="/contact" className="btn btn-dark">
              Talk to our team <Icon name="arrow" size={16} />
            </Link>
          </aside>
        </div>
      </article>

      <section className="section related">
        <div className="wrap">
          <h2 className="h2 related-title">Keep reading</h2>
          <div className="post-grid post-grid-2">
            {related.map((p, i) => (
              <PostCard key={p.slug} post={p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
