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

type StaticMember = {
  name: string
  role: string
  bio: string
  cats: string[]
  isFounder?: boolean
  socials: { label: string; icon: React.ReactNode }[]
}

const STATIC_MEMBERS: StaticMember[] = [
  { name: 'Prof. Dr. Nimrat Grewal', role: 'Cardiothoracic Surgeon · Co-founder', bio: 'Cardiothoracic surgeon and clinician-scientist leading the TARGet research group. 20+ years in aortic surgery, prevention, and translational research.', cats: ['founders', 'surgeons'], isFounder: true, socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'X', icon: XIcon }, { label: 'Email', icon: EmailIcon }, { label: 'Publications', icon: PublicationsIcon }] },
  { name: 'Dr. Simran Grewal', role: 'Orthopaedic Trauma Surgeon · Co-founder', bio: 'Orthopaedic trauma surgeon focused on musculoskeletal recovery, longevity, and the intersection of physical activity and chronic disease prevention.', cats: ['founders', 'surgeons'], isFounder: true, socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'X', icon: XIcon }, { label: 'Email', icon: EmailIcon }, { label: 'Publications', icon: PublicationsIcon }] },
  { name: 'Dr. Joris van der Meulen', role: 'Cardiothoracic Surgeon · Aortic specialist', bio: 'Lead surgeon on the APECx adaptive multicentre study. Focused on perioperative outcomes and global practice variation in adult cardiac surgery.', cats: ['surgeons'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'Email', icon: EmailIcon }, { label: 'Publications', icon: PublicationsIcon }] },
  { name: 'Dr. Adeel Khan', role: 'Cardiothoracic Surgeon · International collaboration', bio: 'Cardiac surgery, AIIMS New Delhi. Leading aortic-disease research and clinical trials across South Asia, with a focus on diversity in cardiovascular care.', cats: ['surgeons', 'clinical'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'X', icon: XIcon }, { label: 'Email', icon: EmailIcon }] },
  { name: 'Dr. Eline Vermeer', role: 'Vascular Surgeon · Aortic dissection lead', bio: 'Vascular surgeon and co-investigator on the After the Storm patient-experience programme. Bridging clinical practice with patient-reported outcomes research.', cats: ['surgeons'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'Email', icon: EmailIcon }, { label: 'Publications', icon: PublicationsIcon }] },
  { name: 'Dr. Maria Rodrigues', role: 'Senior Researcher · Genetic epidemiology', bio: 'Principal investigator on GEN-TAAD. Leads large-scale GWAS work and polygenic risk score development for thoracic aortic disease.', cats: ['researchers'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'X', icon: XIcon }, { label: 'Email', icon: EmailIcon }, { label: 'Publications', icon: PublicationsIcon }] },
  { name: 'Dr. Priya Iyer', role: 'Senior Researcher · Diversity & Prevention', bio: 'Public-health researcher leading the Diversity & Prevention community-health programme. Co-creation methodology and cultural sensitivity in cardiovascular care.', cats: ['researchers'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'X', icon: XIcon }, { label: 'Email', icon: EmailIcon }] },
  { name: 'Dr. Tom Bakker', role: 'Senior Researcher · Molecular biology', bio: 'Molecular biologist focused on aortic tissue analysis, single-cell sequencing, and the cellular mechanisms underlying GENIE-TA and GEN-TAAD.', cats: ['researchers'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'Email', icon: EmailIcon }, { label: 'Publications', icon: PublicationsIcon }] },
  { name: 'Dr. Amara Okonkwo', role: 'Postdoctoral Researcher · After the Storm', bio: 'Mixed-methods researcher exploring patient-reported experience after cardiovascular events. Co-leads the artistic-research strand of After the Storm.', cats: ['postdocs', 'researchers'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'X', icon: XIcon }, { label: 'Email', icon: EmailIcon }] },
  { name: 'Dr. Elias Larsson', role: 'Clinical Research Fellow · Sleep & recovery', bio: 'Clinical research fellow studying sleep architecture, autonomic function, and recovery in patients with cardiovascular and metabolic risk factors.', cats: ['postdocs', 'researchers'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'Email', icon: EmailIcon }, { label: 'Publications', icon: PublicationsIcon }] },
  { name: 'Aarav Shah', role: 'Lead Data Scientist · DDM platform', bio: "Builds the Data Donation Platform's longitudinal data pipelines. Specialises in wearable-derived metrics, privacy-by-design and federated analytics.", cats: ['data-ai'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'GitHub', icon: GitHubIcon }, { label: 'Email', icon: EmailIcon }] },
  { name: 'Dr. Karolina Novak', role: 'ML Engineer · Personalised lifestyle', bio: "Machine-learning engineer designing the personalisation engine for TRAIN's adaptive sessions across sleep, mindfulness, and movement.", cats: ['data-ai'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'GitHub', icon: GitHubIcon }, { label: 'Email', icon: EmailIcon }] },
  { name: 'Anna de Vries', role: 'Lead Research Nurse · Clinical trials', bio: 'Research nurse coordinating patient enrolment, data collection, and follow-up across the TARGet clinical study portfolio in Amsterdam UMC.', cats: ['clinical'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'Email', icon: EmailIcon }] },
  { name: 'Manpreet Singh', role: 'Clinical Trial Coordinator · International sites', bio: 'Clinical trial coordinator managing global site activation, ethics submissions, and operational delivery across the APECx multicentre study.', cats: ['clinical'], socials: [{ label: 'LinkedIn', icon: LinkedInIcon }, { label: 'X', icon: XIcon }, { label: 'Email', icon: EmailIcon }] },
]

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
  const hasSanity = sanityMembers.length > 0

  if (hasSanity) {
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
      <MemberGrid
        filtered={filtered.map(m => ({
          name: m.name,
          role: m.role,
          bio: m.bio,
          cats: getMemberCats(m),
          isFounder: m.isFounder || getMemberCats(m).includes('founders'),
          image: m.image,
          linkedin: m.linkedin,
          twitter: m.twitter,
          email: m.email,
          publications: m.publications,
          github: m.github,
        }))}
        counts={counts}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    )
  }

  const filtered = activeFilter === 'all'
    ? STATIC_MEMBERS
    : STATIC_MEMBERS.filter(m => m.cats.includes(activeFilter))

  const counts: Record<string, number> = { all: STATIC_MEMBERS.length }
  FILTERS.slice(1).forEach(f => {
    counts[f.key] = STATIC_MEMBERS.filter(m => m.cats.includes(f.key)).length
  })

  return (
    <MemberGrid
      filtered={filtered.map(m => ({ name: m.name, role: m.role, bio: m.bio, cats: m.cats, isFounder: m.isFounder, socials: m.socials }))}
      counts={counts}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
    />
  )
}

type GridMember = {
  name: string
  role: string
  bio: string
  cats: string[]
  isFounder?: boolean
  image?: unknown
  linkedin?: string
  twitter?: string
  email?: string
  publications?: string
  github?: string
  socials?: { label: string; icon: React.ReactNode }[]
}

function MemberGrid({ filtered, counts, activeFilter, setActiveFilter }: {
  filtered: GridMember[]
  counts: Record<string, number>
  activeFilter: string
  setActiveFilter: (f: string) => void
}) {
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
              <article key={member.name} className="team-card">
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
                    {member.socials?.map(social => (
                      <a key={social.label} href="#" aria-label={social.label}>{social.icon}</a>
                    ))}
                    {!member.socials && (
                      <>
                        {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">{LinkedInIcon}</a>}
                        {member.twitter && <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">{XIcon}</a>}
                        {member.email && <a href={`mailto:${member.email}`} aria-label="Email">{EmailIcon}</a>}
                        {member.publications && <a href={member.publications} target="_blank" rel="noopener noreferrer" aria-label="Publications">{PublicationsIcon}</a>}
                        {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">{GitHubIcon}</a>}
                      </>
                    )}
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
            <h2>Want to join the TRAIN team?</h2>
            <div className="right">
              <p>We&apos;re always interested in hearing from clinicians, researchers, and data specialists with a passion for translational health science.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Get in touch <span className="arrow">→</span></Link>
                <Link href="/science" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>About the research group</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
