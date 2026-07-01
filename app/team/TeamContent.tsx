'use client'

import Link from 'next/link'

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

type Department = { _id: string; title: string; count: number }

export default function TeamContent({ sanityMembers, departments = [] }: { sanityMembers: SanityMember[]; departments?: Department[] }) {
  void sanityMembers
  void departments

  return (
    <>
      <section style={{ padding: '0 0 96px', background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <p style={{ color: 'var(--ink-2)', fontSize: '15px' }}>Coming soon.</p>
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
