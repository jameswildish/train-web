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

export default function ProjectsContent({ sanityProjects }: { sanityProjects: SanityProject[] }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const hasSanity = sanityProjects.length > 0

  const tags = hasSanity
    ? Array.from(new Set(sanityProjects.map(p => p.tag).filter(Boolean)))
    : []

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

          {hasSanity && tags.length > 1 && (
            <div className="projects-filter">
              <button className={activeFilter === 'all' ? 'active' : undefined} onClick={() => setActiveFilter('all')}>All</button>
              {tags.map(tag => (
                <button key={tag} className={activeFilter === tag ? 'active' : undefined} onClick={() => setActiveFilter(tag)}>
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {hasSanity ? (
        <section style={{ padding: '0 0 96px' }}>
          <div className="wrap">
            <div className="projects-grid">
              {sanityProjects
                .filter(p => activeFilter === 'all' || p.tag === activeFilter)
                .map(p => (
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
                      <span className="tag">{p.tag} · {p.status}</span>
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
