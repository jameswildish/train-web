'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type SanityMember = {
  _id: string
  name: string
  role: string
  bio: string
  department: string
  isFounder?: boolean
  image?: unknown
  linkedin?: string
  twitter?: string
  email?: string
  publications?: string
  github?: string
}

const LinkedInIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V10h2.5v8zM7.25 8.8a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18 18h-2.5v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18H10V10h2.4v1.1h.03a2.65 2.65 0 0 1 2.4-1.3c2.55 0 3.02 1.7 3.02 3.9V18z" />
  </svg>
)
const XIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5-6.5L4.5 21H1.5l8-9.2L1.5 3h6.8l4.5 6 5.2-6z" />
  </svg>
)
const EmailIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)
const PublicationsIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4Z" />
    <path d="M4 4v12a4 4 0 0 0 4 4" />
  </svg>
)
const GitHubIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.57.1.78-.25.78-.55v-2.03c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18A11 11 0 0 1 12 6.8c.98 0 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.78.55 4.57-1.52 7.86-5.83 7.86-10.92C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const DEPT_TO_CATS: Record<string, string[]> = {
  'Founders': ['founders'],
  'Surgeons': ['surgeons'],
  'Researchers': ['researchers'],
  'Postdocs': ['postdocs'],
  'Technology': ['data-ai'],
  'Clinical': ['clinical'],
  'Advisory': ['clinical'],
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'founders', label: 'Founders' },
  { key: 'surgeons', label: 'Surgeons' },
  { key: 'researchers', label: 'Researchers' },
  { key: 'postdocs', label: 'Postdocs & Fellows' },
  { key: 'data-ai', label: 'Data & AI' },
  { key: 'clinical', label: 'Clinical staff' },
]

export default function TeamContent({ sanityMembers }: { sanityMembers: SanityMember[] }) {
  const [activeFilter, setActiveFilter] = useState('all')

  if (sanityMembers.length === 0) {
    return (
      <>
        <section style={{ padding: '64px 0 96px', background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}>
          <div className="wrap">
            <p style={{ color: 'var(--ink-2)', fontSize: '15px' }}>Team coming soon.</p>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <div className="cta-card">
              <h2>Join a team building the science of better living.</h2>
              <div className="right">
                <p>We&apos;re looking for clinicians, researchers, and data specialists who believe good science should change how people live. Come build something that matters.</p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-primary">Get in touch <span className="arrow">→</span></Link>
                  <Link href="/about" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>About the research group</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  const getMemberCats = (m: SanityMember) => {
    const base = DEPT_TO_CATS[m.department] ?? ['researchers']
    if (m.isFounder && !base.includes('founders')) return ['founders', ...base]
    return base
  }

  const filtered = activeFilter === 'all'
    ? sanityMembers
    : sanityMembers.filter(m => getMemberCats(m).includes(activeFilter))

  const counts: Record<string, number> = { all: sanityMembers.length }
  FILTERS.slice(1).forEach(f => {
    counts[f.key] = sanityMembers.filter(m => getMemberCats(m).includes(f.key)).length
  })

  return (
    <>
      <section style={{ padding: '32px 0 96px', background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="team-filter" role="tablist">
            {FILTERS.map(({ key, label }) => (
              <button key={key} className={activeFilter === key ? 'active' : ''} onClick={() => setActiveFilter(key)}>
                {label} <span className="count">{counts[key] ?? 0}</span>
              </button>
            ))}
          </div>

          <div className="team-grid">
            {filtered.map(member => (
              <article key={member._id} className="team-card">
                <div className="portrait">
                  {member.image ? (
                    <Image
                      src={urlFor(member.image).width(400).height(400).url()}
                      alt={member.name}
                      width={400}
                      height={400}
                    />
                  ) : (
                    <div className="placeholder-stripe"><span>Photo placeholder</span></div>
                  )}
                  {(member.isFounder || getMemberCats(member).includes('founders')) && (
                    <span className="role-pill">Founder</span>
                  )}
                </div>
                <div className="info">
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <p>{member.bio}</p>
                  <div className="socials">
                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">{LinkedInIcon}</a>}
                    {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">{XIcon}</a>}
                    {member.email && <a href={`mailto:${member.email}`} aria-label="Email">{EmailIcon}</a>}
                    {member.publications && <a href={member.publications} target="_blank" rel="noopener noreferrer" aria-label="Publications">{PublicationsIcon}</a>}
                    {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">{GitHubIcon}</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="team-empty">No team members match that filter — try another category.</p>
          )}
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="cta-card">
            <h2>Join a team building the science of better living.</h2>
            <div className="right">
              <p>We&apos;re looking for clinicians, researchers, and data specialists who believe good science should change how people live. Come build something that matters.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Get in touch <span className="arrow">→</span></Link>
                <Link href="/about" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>About the research group</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
