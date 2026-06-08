'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const LANGUAGES = [
  { code: 'nl', label: 'Nederlands' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'zh-CN', label: '中文' },
]

function encodeHost(host: string) {
  return host.replace(/-/g, '--').replace(/\./g, '-')
}

function decodeHost(encoded: string) {
  return encoded.replace(/--/g, '\x00').replace(/-/g, '.').replace(/\x00/g, '-')
}

function getOriginalUrl(): string {
  const { hostname, pathname, search } = window.location
  if (!hostname.endsWith('.translate.goog')) return window.location.href
  const original = decodeHost(hostname.replace('.translate.goog', ''))
  const params = new URLSearchParams(search)
  params.delete('_x_tr_sl')
  params.delete('_x_tr_tl')
  params.delete('_x_tr_hl')
  params.delete('_x_tr_hist')
  const qs = params.toString()
  return `https://${original}${pathname}${qs ? '?' + qs : ''}`
}

function buildGoogUrl(langCode: string): string {
  const original = new URL(getOriginalUrl())
  const encoded = encodeHost(original.hostname)
  const qs = original.search ? original.search + '&' : '?'
  return `https://${encoded}.translate.goog${original.pathname}${qs}_x_tr_sl=en&_x_tr_tl=${langCode}&_x_tr_hl=en-GB`
}

function TranslatePicker() {
  const [open, setOpen] = useState(false)
  const [activeLang, setActiveLang] = useState<string | null>(null)

  useEffect(() => {
    const { hostname, search } = window.location
    if (!hostname.endsWith('.translate.goog')) return

    const tl = new URLSearchParams(search).get('_x_tr_tl')
    if (tl) setActiveLang(tl)

    // Next.js intercepts link clicks for client-side routing, which breaks the
    // translate.goog proxy. Capture all internal link clicks first and force
    // a full page load to the proxy URL instead.
    function interceptLinks(e: MouseEvent) {
      const anchor = (e.target as Element).closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('http') || href.startsWith('//') || href.startsWith('#') || href.startsWith('mailto:')) return

      e.preventDefault()
      e.stopImmediatePropagation()

      const lang = new URLSearchParams(window.location.search).get('_x_tr_tl') || 'en'
      window.location.href = `https://${hostname}${href}?_x_tr_sl=en&_x_tr_tl=${lang}&_x_tr_hl=en-GB`
    }

    document.addEventListener('click', interceptLinks, true)
    return () => document.removeEventListener('click', interceptLinks, true)
  }, [])

  function translate(code: string) {
    setOpen(false)
    window.location.href = buildGoogUrl(code)
  }

  function resetToEnglish() {
    setOpen(false)
    window.location.href = getOriginalUrl()
  }

  const activeLabel = LANGUAGES.find(l => l.code === activeLang)?.label

  return (
    <div className="translate-picker">
      <button className="translate-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9"/>
          <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/>
        </svg>
        {activeLabel ?? 'Translate'}
      </button>
      {open && (
        <div className="translate-dropdown">
          {activeLang && (
            <button className="translate-back-btn" onClick={resetToEnglish}>
              English (original)
            </button>
          )}
          {LANGUAGES.map(l => (
            <button key={l.code} onClick={() => translate(l.code)} className={activeLang === l.code ? 'active' : ''}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="brand-col">
            <Link href="/" className="logo">
              <span className="mark">T</span>
              <span className="word">TRAIN</span>
            </Link>
            <p>Science-driven, medically grounded lifestyle. Built by surgeons. Driven by research.</p>
          </div>
          <div>
            <h5>Pillars</h5>
            <ul>
              <li><Link href="/sleep">Sleep</Link></li>
              <li><Link href="/activity">Activity</Link></li>
              <li><Link href="/mental-health">Mental Health</Link></li>
              <li><Link href="/nutrition">Nutrition</Link></li>
            </ul>
          </div>
          <div>
            <h5>Science</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/about#target">TARGet group</Link></li>
              <li><Link href="/about#publications">Publications</Link></li>
              <li><Link href="/about#collaborate">Collaborators</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h5>Projects</h5>
            <ul>
              <li><Link href="/projects/data-donation-monitoring-ddm">Data Donation Platform</Link></li>
              <li><Link href="/projects/gen-taad">GEN-TAAD</Link></li>
              <li><Link href="/projects/genie-ta">GENIE-TA</Link></li>
              <li><Link href="/projects/apecx">APECx Study</Link></li>
              <li><Link href="/projects/after-the-storm">After the Storm</Link></li>
              <li><Link href="/projects/sukh">SUKH Healing Garden</Link></li>
              <li><Link href="/projects/diversity-prevention">Diversity & Prevention</Link></li>
              <li><Link href="/projects/trainletic">TRAINletic</Link></li>
              <li><Link href="/projects/aviation">Aviation & Aortic</Link></li>
            </ul>
            <ul style={{ marginTop: '28px' }}>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Newsletter</h5>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginBottom: '14px', maxWidth: '280px' }}>
              Science, distilled. One short note a month — no spam.
            </p>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 TRAIN Health Awareness · Built by surgeons · Driven by science.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <TranslatePicker />
            <div className="socials">
              <a href="#" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V10h2.5v8zM7.25 8.8a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18 18h-2.5v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18H10V10h2.4v1.1h.03a2.65 2.65 0 0 1 2.4-1.3c2.55 0 3.02 1.7 3.02 3.9V18z"/>
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5-6.5L4.5 21H1.5l8-9.2L1.5 3h6.8l4.5 6 5.2-6zm-1 16h1.7L7.1 4.9H5.2L17 19z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="4"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
