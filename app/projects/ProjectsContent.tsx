'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type SanityProject = {
  _id: string
  title: string
  slug: { current: string }
  category?: string
  tagline: string
  summary: string
  status: string
  mainImage?: unknown
  featured: boolean
}

export default function ProjectsContent({ sanityProjects }: { sanityProjects: SanityProject[] }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const hasSanity = sanityProjects.length > 0

  const categories = hasSanity
    ? Array.from(new Set(sanityProjects.map(p => p.category).filter(Boolean))) as string[]
    : []

  const filtered = activeFilter === 'All'
    ? sanityProjects
    : sanityProjects.filter(p => p.category === activeFilter)

  return (
    <>
      <section className="projects-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Projects</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Projects</div>
          <h1>From research to real-world impact.</h1>
          <p className="lead">A portfolio of academic, clinical, and community-based initiatives — led by the TARGet research group in collaboration with clinicians, researchers, and institutions worldwide.</p>
        </div>
      </section>

      {hasSanity && categories.length > 1 && (
        <nav className="section-anchor-nav">
          <div className="wrap">
            <a
              href="#projects"
              className={activeFilter === 'All' ? 'active-tab' : ''}
              onClick={(e) => { e.preventDefault(); setActiveFilter('All') }}
            >
              All
            </a>
            {categories.map(cat => (
              <a
                key={cat}
                href="#projects"
                className={activeFilter === cat ? 'active-tab' : ''}
                onClick={(e) => { e.preventDefault(); setActiveFilter(cat) }}
              >
                {cat}
              </a>
            ))}
          </div>
        </nav>
      )}

      {hasSanity ? (
        <section id="projects" style={{ padding: '0 0 96px' }}>
          <div className="wrap">
            <div className="projects-grid">
              {filtered.map(p => (
                <Link key={p._id} href={`/projects/${p.slug.current}`} className="project">
                  <div className="thumb">
                    {p.mainImage ? (
                      <Image
                        src={urlFor(p.mainImage).width(800).height(480).url()}
                        alt={p.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="anemone" style={{ width: '100%', height: '100%' }} />
                    )}
                  </div>
                  <div className="body">
                    <span className="tag">{[p.category, p.status].filter(Boolean).join(' · ')}</span>
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    <span className="more">Learn more <span className="arrow">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section style={{ padding: '64px 0 96px' }}>
          <div className="wrap">
            <p style={{ color: 'var(--ink-2)', fontSize: '15px' }}>Projects coming soon.</p>
          </div>
        </section>
      )}

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
