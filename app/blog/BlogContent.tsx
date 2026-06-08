'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  readTime: number
  publishedAt: string
  featured: boolean
  mainImage?: SanityImageSource
  author?: { name: string; role: string; image?: SanityImageSource }
}

const TABS = ['All', 'Sleep', 'Movement', 'Mental Health', 'Nutrition', 'Clinical', 'Research']

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  const [activeTab, setActiveTab] = useState('All')

  const featured = posts.find(p => p.featured) ?? posts[0] ?? null
  const rest = posts.filter(p => p._id !== featured?._id)
  const filtered = activeTab === 'All' ? rest : rest.filter(p => p.category === activeTab)

  return (
    <>
      <nav className="section-anchor-nav">
        <div className="wrap">
          {TABS.map(tab => (
            <a
              key={tab}
              href="#"
              className={activeTab === tab ? 'active-tab' : ''}
              onClick={(e) => { e.preventDefault(); setActiveTab(tab) }}
            >
              {tab}
            </a>
          ))}
        </div>
      </nav>

      {featured && (
        <section style={{ padding: '64px 0 32px' }}>
          <div className="wrap">
            <Link href={`/blog/${featured.slug.current}`} className="featured-post">
              <div className="thumb">
                {featured.mainImage
                  ? <Image src={urlFor(featured.mainImage).width(800).height(480).url()} alt={featured.title} width={800} height={480} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <div className="anemone" style={{ width: '100%', height: '100%' }}></div>
                }
              </div>
              <div className="body">
                <div className="meta">
                  <span className="pill">{featured.category}</span>
                  <span className="date">{formatDate(featured.publishedAt)}</span>
                  {featured.readTime && <span className="muted">· {featured.readTime} min read</span>}
                </div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                {featured.author && (
                  <div className="byline">
                    <div className="avatar">
                      {featured.author.image && (
                        <Image
                          src={urlFor(featured.author.image).width(48).height(48).url()}
                          alt={featured.author.name}
                          width={48}
                          height={48}
                          style={{ borderRadius: '50%', objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div>
                      <div className="name">{featured.author.name}</div>
                      {featured.author.role && <div className="role">{featured.author.role}</div>}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section style={{ padding: '32px 0 96px' }}>
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: '40px' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: '18px' }}>More articles</div>
                <h2>The latest from TRAIN.</h2>
              </div>
              <p>Short, evidence-based pieces — written by surgeons, researchers, and the TRAIN team.</p>
            </div>

            <div className="insights-grid blog-grid">
              {filtered.map(post => (
                <article key={post._id} className="article">
                  <Link href={`/blog/${post.slug.current}`} className="thumb">
                    {post.mainImage
                      ? <Image src={urlFor(post.mainImage).width(400).height(240).url()} alt={post.title} width={400} height={240} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <div className="anemone" style={{ width: '100%', height: '100%' }}></div>
                    }
                  </Link>
                  <div className="body">
                    <div className="meta">
                      <span className="pill">{post.category}</span>
                      <span className="date">{formatDate(post.publishedAt)}</span>
                      {post.readTime && <span className="muted">· {post.readTime} min</span>}
                    </div>
                    <h3><Link href={`/blog/${post.slug.current}`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <p style={{ color: 'var(--ink-2)', fontSize: '15px' }}>No articles in that category yet.</p>
            )}
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <section style={{ padding: '64px 0 96px' }}>
          <div className="wrap">
            <p style={{ color: 'var(--ink-2)', fontSize: '15px' }}>Articles coming soon.</p>
          </div>
        </section>
      )}

      <section className="pillar-cta">
        <div className="wrap">
          <div className="card">
            <h2>Science, distilled. One short note a month.</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '20px', maxWidth: '400px' }}>The best of the research — without the jargon. Join readers building healthier habits grounded in evidence.</p>
            <div className="actions">
              <form className="newsletter inline-newsletter" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="you@email.com" />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
