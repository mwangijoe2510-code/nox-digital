import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import { useLang } from './lib/i18n.jsx'
import { brand } from './data.js'
import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import { Footer } from './components/shared.jsx'
import { BrushEdge, Icon } from './components/ui.jsx'
import Home from './pages/Home.jsx'
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))
const Work = lazy(() => import('./pages/Work.jsx'))
const CaseStudy = lazy(() => import('./pages/CaseStudy.jsx'))
const Journal = lazy(() => import('./pages/Journal.jsx'))
const Post = lazy(() => import('./pages/Post.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const Location = lazy(() => import('./pages/Location.jsx'))
const Legal = lazy(() => import('./pages/Legal.jsx'))
const Pricing = lazy(() => import('./pages/Pricing.jsx'))
const Estimator = lazy(() => import('./pages/Estimator.jsx'))
const Audit = lazy(() => import('./pages/Audit.jsx'))
const Demo = lazy(() => import('./pages/Demo.jsx'))

function seen() {
  try {
    return sessionStorage.getItem('nox-loaded') === '1'
  } catch {
    return false
  }
}

// Scroll to top (or to #hash) on navigation + a brush "curtain" between pages.
function RouteEffects() {
  const { pathname, hash } = useLocation()
  const first = useRef(true)
  const [wipe, setWipe] = useState(0)

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView(), 60)
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (first.current) {
      first.current = false
      return
    }
    setWipe((w) => w + 1)
  }, [pathname, hash])

  return (
    <AnimatePresence>
      {wipe > 0 && (
        <motion.div
          key={wipe}
          className="wipe"
          initial={{ y: '0%' }}
          animate={{ y: '-108%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          aria-hidden="true"
        >
          <BrushEdge side="bottom" seed={wipe % 20} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const { t } = useLang()
  const [loading, setLoading] = useState(() => !seen())
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  const done = useCallback(() => {
    try {
      sessionStorage.setItem('nox-loaded', '1')
    } catch {
      /* private mode: fine */
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">Skip to content</a>
      <AnimatePresence>{loading && <Loader key="loader" onDone={done} />}</AnimatePresence>
      <Cursor />
      <RouteEffects />
      <motion.div className="progress" style={{ scaleX: progress }} />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<div className="route-fallback" />}>
        <Routes>
          <Route path="/" element={<Home ready={!loading} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/:slug" element={<Location />} />
          <Route path="/privacy" element={<Legal doc="privacy" />} />
          <Route path="/terms" element={<Legal doc="terms" />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/estimator" element={<Estimator />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      <a
        className="wa-fab"
        href={`https://wa.me/${brand.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with NOX Digital on WhatsApp"
      >
        <Icon name="whatsapp" size={26} />
        <span>{t('chat', 'Chat with us')}</span>
      </a>
    </MotionConfig>
  )
}
