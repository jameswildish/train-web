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

type Department = { _id: string; title: string; count: number }

export default function TeamContent({ sanityMembers, departments = [] }: { sanityMembers: SanityMember[]; departments?: Department[] }) {
  const [activeFilter, setActiveFilter] = useState('All')

  // Only show departments that have members
  const activeDepts = departments.filter(d => d.count > 0)

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

  const filtered = activeFilter === 'All'
    ? sanityMembers
    : sanityMembers.filter(m => m.department === activeFilter)

  return (
    <>
      <section style={{ padding: '32px 0 96px', background: 'var(--bg-2)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="team-filter" role="tablist">
            <button className={activeFilter === 'All' ? 'active' : ''} onClick={() => setActiveFilter('All')}>
              All <span className="count">{sanityMembers.length}</span>
            </button>
            {activeDepts.map(dept => (
              <button key={dept._id} className={activeFilter === dept.title ? 'active' : ''} onClick={() => setActiveFilter(dept.title)}>
                {dept.title} <span className="count">{dept.count}</span>
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
                  {member.isFounder && <span className="role-pill">Founder</span>}
                </div>
                <div className="info">
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <p>{member.bio}</p>
                  <div className="socials">
                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">{LinkedInIcon}</a>}
                    {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">{XIcon}</a>}
                    {member.email && <a href={`mailto:${member.email}`} aria-label="Email">{EmailIcon}</a>}
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
