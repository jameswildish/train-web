'use client'

import Link from 'next/link'

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
              <li><Link href="/projects/ddm">Data Donation Platform</Link></li>
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
    </footer>
  )
}
