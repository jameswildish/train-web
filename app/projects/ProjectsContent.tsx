'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type SanityProject = {
  _id: string
  title: string
  slug: { current: string }
  tag: string
  tagline: string
  summary: string
  status: string
  mainImage?: unknown
  featured: boolean
}

type StaticProject = {
  href: string
  cat: string
  thumbClass: string
  thumbStyle: React.CSSProperties
  thumbPlaceholder?: boolean
  thumbPlaceholderLabel?: string
  cardClass: string
  tag: string
  title: string
  desc: string
}

const STATIC_PROJECTS: StaticProject[] = [
  { href: '/projects/data-donation-monitoring-ddm', cat: 'data', thumbClass: 'thumb anemone', thumbStyle: {}, cardClass: 'project', tag: 'Data infrastructure · 2026', title: 'Data Donation Platform (DDM)', desc: 'Building inclusive, real-world health data from diverse populations — to make prevention and research more representative.' },
  { href: '/projects/gen-taad', cat: 'genomics', thumbClass: 'thumb anemone', thumbStyle: { filter: 'hue-rotate(-15deg) brightness(.9)' }, cardClass: 'project', tag: 'Genomics · 2024', title: 'GEN-TAAD', desc: 'Genetic and molecular mechanisms behind thoracic aortic disease. 600,000+ individuals studied, polygenic risk scoring under development.' },
  { href: '/projects/sukh', cat: 'wellbeing', thumbClass: 'thumb', thumbStyle: {}, thumbPlaceholder: true, thumbPlaceholderLabel: 'SUKH Healing Garden', cardClass: 'project dark', tag: 'Wellbeing · 2025', title: 'SUKH Healing Garden', desc: 'Nature-inspired, multi-sensory environments designed to support recovery, wellbeing, and resilience in demanding settings.' },
  { href: '/projects/after-the-storm', cat: 'patient', thumbClass: 'thumb anemone', thumbStyle: { filter: 'hue-rotate(20deg) brightness(.85)' }, cardClass: 'project', tag: 'Patient experience · 2026', title: 'After the Storm', desc: 'A research and artistic project translating life after aortic dissection into sound — making the invisible recovery experience shareable.' },
  { href: '/projects/genie-ta', cat: 'genomics', thumbClass: 'thumb anemone', thumbStyle: { filter: 'saturate(.7) brightness(.95)' }, cardClass: 'project', tag: 'Genomics · 2025', title: 'GENIE-TA', desc: 'Whole genome sequencing combined with epigenomic analysis to uncover hidden causes of aortic disease beyond standard testing.' },
  { href: '/projects/apecx', cat: 'clinical', thumbClass: 'thumb anemone', thumbStyle: { filter: 'hue-rotate(60deg) brightness(.85)' }, cardClass: 'project', tag: 'Clinical · 2026', title: 'APECx Study', desc: 'Adaptive multicentre observational study mapping global anaesthesia, perfusion, and surgical practices in cardiac surgery.' },
  { href: '/projects/diversity-prevention', cat: 'community', thumbClass: 'thumb anemone', thumbStyle: { filter: 'hue-rotate(-40deg) brightness(.9)' }, cardClass: 'project', tag: 'Community · 2024', title: 'Diversity & Prevention', desc: 'Community-based health initiatives bringing prevention into trusted cultural and religious spaces — reducing health inequalities.' },
  { href: '/projects/trainletic', cat: 'performance', thumbClass: 'thumb anemone', thumbStyle: { filter: 'hue-rotate(120deg) brightness(.8)' }, cardClass: 'project', tag: 'Performance · 2024', title: 'TRAINletic', desc: 'With the Koninklijke Nederlandse Cricket Bond — translating wearable data into personalised performance and health insights for elite athletes.' },
  { href: '/projects/aviation', cat: 'clinical', thumbClass: 'thumb anemone', thumbStyle: { filter: 'hue-rotate(200deg) brightness(.9)' }, cardClass: 'project', tag: 'Clinical · 2026', title: 'Aviation & Thoracic Aortic Disease', desc: 'Investigating whether commercial air travel is safe for patients with thoracic aortic disease — generating evidence to support clinical counselling.' },
]

const TAG_TO_CAT: Record<string, string> = {
  'Data infrastructure': 'data',
  'Genomics': 'genomics',
  'Clinical': 'clinical',
  'Patient experience': 'patient',
  'Wellbeing': 'wellbeing',
  'Community': 'community',
  'Performance': 'performance',
}

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Data & AI', value: 'data' },
  { label: 'Genomics', value: 'genomics' },
  { label: 'Clinical', value: 'clinical' },
  { label: 'Patient experience', value: 'patient' },
  { label: 'Community', value: 'community' },
  { label: 'Performance', value: 'performance' },
  { label: 'Wellbeing', value: 'wellbeing' },
]

export default function ProjectsContent({ sanityProjects }: { sanityProjects: SanityProject[] }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const hasSanity = sanityProjects.length > 0

  return (
    <>
      <section className="projects-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Projects</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Our Work</div>
          <h1>From research to real-world impact.</h1>
          <p className="lead">A portfolio of academic, clinical, and community-based initiatives — led by the TARGet research group in collaboration with clinicians, researchers, and institutions worldwide.</p>

          <div className="projects-filter">
            {FILTERS.map(({ label, value }) => (
              <button key={value} data-filter={value} className={activeFilter === value ? 'active' : undefined} onClick={() => setActiveFilter(value)}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 96px' }}>
        <div className="wrap">
          <div className="projects-grid">
            {hasSanity ? (
              sanityProjects
                .filter(p => activeFilter === 'all' || TAG_TO_CAT[p.tag] === activeFilter)
                .map(p => (
                  <Link key={p._id} href={`/projects/${p.slug.current}`} className="project">
                    {p.mainImage ? (
                      <Image
                        className="thumb"
                        src={urlFor(p.mainImage).width(600).height(320).url()}
                        alt={p.title}
                        width={600}
                        height={320}
                      />
                    ) : (
                      <div className="thumb anemone"></div>
                    )}
                    <div className="body">
                      <span className="tag">{p.tag} · {p.status}</span>
                      <h3>{p.title}</h3>
                      <p>{p.summary}</p>
                      <span className="more">Learn more <span className="arrow">→</span></span>
                    </div>
                  </Link>
                ))
            ) : (
              STATIC_PROJECTS
                .filter(p => activeFilter === 'all' || p.cat === activeFilter)
                .map(p => (
                  <Link key={p.href} href={p.href} className={p.cardClass} data-cat={p.cat}>
                    <div className={p.thumbClass} style={p.thumbStyle}>
                      {p.thumbPlaceholder && <div className="placeholder-stripe"><span>Photo placeholder</span></div>}
                    </div>
                    <div className="body">
                      <span className="tag">{p.tag}</span>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      <span className="more">Learn more <span className="arrow">→</span></span>
                    </div>
                  </Link>
                ))
            )}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="cta-card">
            <h2>Collaborate with TRAIN.</h2>
            <div className="right">
              <p>The TARGet research group welcomes clinical, academic, and industry partners. Whether you have data, a question, or a co-funded study in mind — we&apos;d like to hear from you.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Get in touch <span className="arrow">→</span></Link>
                <Link href="/about" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>About TRAIN</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
