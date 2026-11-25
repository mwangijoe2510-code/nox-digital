import { createContext, useContext, useEffect, useState } from 'react'

// Lightweight English / Kiswahili switch for navigation, calls-to-action and footer.
const SW = {
  '/': 'Mwanzo',
  '/about': 'Kuhusu',
  '/services': 'Huduma',
  '/portfolio': 'Kazi Zetu',
  '/work': 'Miradi',
  '/pricing': 'Bei',
  '/journal': 'Makala',
  '/contact': 'Wasiliana',
  start: 'Anza Mradi',
  chat: 'Ongea nasi',
  ctaTitle: 'Tujenge',
  ctaScript: 'kitu kizuri.',
  ctaText: 'Tuambie kuhusu biashara yako na unachotaka kufikia. Utajibiwa na mtu halisi kutoka timu yetu.',
  whatsapp: 'Tuandikie WhatsApp',
  tagline: 'Tovuti, chapa na mifumo ya kidijitali kwa biashara zinazotaka kukua.',
  navigate: 'Kurasa',
  services: 'Huduma',
  locations: 'Maeneo',
  contact: 'Mawasiliano',
  tools: 'Zana za bure',
  estimator: 'Kadirio la gharama',
  audit: 'Ukaguzi wa tovuti',
  demo: 'Jaribu POS',
  top: 'Rudi juu ↑',
  privacy: 'Faragha',
  terms: 'Masharti',
}

const Ctx = createContext({ lang: 'en', setLang: () => {}, t: (k, d) => d })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('nox-lang') === 'sw' ? 'sw' : 'en'
    } catch {
      return 'en'
    }
  })
  useEffect(() => {
    document.documentElement.lang = lang === 'sw' ? 'sw' : 'en'
    try {
      localStorage.setItem('nox-lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])
  const t = (k, d) => (lang === 'sw' && SW[k]) || d
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}
export const useLang = () => useContext(Ctx)
