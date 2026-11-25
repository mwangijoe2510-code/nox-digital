import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, brand } from '../data.js'
import Logo from './Logo.jsx'
import { Icon } from './ui.jsx'
import { useLang } from '../lib/i18n.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => {
      window.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" aria-label="NOX Digital home">
            <Logo sub={false} />
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                {t(n.to, n.label)}
              </NavLink>
            ))}
          </nav>
          <button className="lang" onClick={() => setLang(lang === 'en' ? 'sw' : 'en')} aria-label={lang === 'en' ? 'Badili kwenda Kiswahili' : 'Switch to English'}>
            {lang === 'en' ? 'SW' : 'EN'}
          </button>
          <Link to="/contact" className="btn btn-dark nav-cta">
            {t('start', 'Start a Project')} <Icon name="arrow" size={16} />
          </Link>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile">
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                    <span className="mono">0{i + 1}</span>
                    {t(n.to, n.label)}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="menu-foot">
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
