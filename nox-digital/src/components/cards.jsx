import { Link } from 'react-router-dom'
import { posts, readTime, fmtDate } from '../posts.js'
import { Icon, Reveal } from './ui.jsx'
import { yr } from '../data.js'
import { DevicePanel } from './Devices.jsx'

export function PostCover({ post }) {
  const i = posts.findIndex((p) => p.slug === post.slug)
  return (
    <div className={`cover cover-${i % 3}`} aria-hidden="true">
      <span className="cover-cat mono">{post.category}</span>
      <span className="cover-n">{String(i + 1).padStart(2, '0')}</span>
      <svg viewBox="0 0 200 120" preserveAspectRatio="none">
        <path d="M-5 100 L70 40 L150 85 L210 20" />
        <path d="M-5 115 L90 60 L160 100 L210 50" />
      </svg>
    </div>
  )
}

export function PostCard({ post, delay = 0, big = false }) {
  return (
    <Reveal delay={delay} className={`post ${big ? 'post-big' : ''}`}>
      <Link to={`/journal/${post.slug}`} className="post-link">
        <PostCover post={post} />
        <div className="post-body">
          <div className="post-meta mono">
            <span>{fmtDate(post.date)}</span>
            <span>·</span>
            <span>{readTime(post)} min read</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <span className="link-arrow">
            Read article <Icon name="arrow" size={16} />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}

export function ProjectCard({ p, i = 0, delay = 0 }) {
  return (
    <Reveal delay={delay} className="pcard">
      <Link to={`/work/${p.slug}`} className="pcard-link" data-hot>
        <DevicePanel project={p} />
        <div className="pcard-info">
          <div>
            <h3>{p.name}</h3>
            <span>
              {p.category}{yr(p)}
            </span>
          </div>
          <span className="pcard-go">
            <Icon name="arrowUR" size={20} />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
