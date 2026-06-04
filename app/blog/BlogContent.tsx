'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  readTime: number
  publishedAt: string
  mainImage?: unknown
  author?: { name: string; role: string }
}

const STATIC_POSTS = [
  { _id: 's1', title: 'Stress less, live more — managing stress for heart health.', slug: { current: 'stress' }, category: 'Mental Health', excerpt: 'The biology of chronic stress, and short daily practices proven to shift you into rest-and-recover.', readTime: 4, publishedAt: '2026-05-04', hue: 40 },
  { _id: 's2', title: 'The power of small changes — building habits that last.', slug: { current: 'habits' }, category: 'Movement', excerpt: 'Why daily movement quality and consistency may matter more than structured exercise alone.', readTime: 5, publishedAt: '2026-04-22', hue: -20 },
  { _id: 's3', title: 'Beyond diets: dietary patterns and cardiovascular risk.', slug: { current: 'dietary-patterns' }, category: 'Nutrition', excerpt: 'How long-term eating patterns — not individual foods — shape your metabolic health.', readTime: 7, publishedAt: '2026-04-08', hue: 15 },
  { _id: 's4', title: 'Aortic surgery and the patient experience.', slug: { current: 'aortic-surgery' }, category: 'Clinical', excerpt: 'From survival to recovery — understanding life beyond an acute aortic event.', readTime: 8, publishedAt: '2026-03-27', hue: 60 },
  { _id: 's5', title: 'The truth about caffeine — when it stops being useful.', slug: { current: 'caffeine' }, category: 'Sleep', excerpt: 'Adenosine, sleep pressure, and why the 6-hour rule is more important than most people realise.', readTime: 5, publishedAt: '2026-03-14', hue: -40 },
  { _id: 's6', title: 'Why muscle is medicine — strength and healthy ageing.', slug: { current: 'muscle' }, category: 'Movement', excerpt: 'Sarcopenia, myokines, and the most underrated predictor of longevity.', readTime: 6, publishedAt: '2026-02-28', hue: 80 },
  { _id: 's7', title: 'Five minutes is enough — the dose-response of mindfulness.', slug: { current: 'mindfulness' }, category: 'Mental Health', excerpt: "You don't need an hour. Short, consistent practice produces measurable physiological change.", readTime: 4, publishedAt: '2026-02-12', hue: 120 },
  { _id: 's8', title: "Reading your own bloodwork — a clinician's guide.", slug: { current: 'bloodwork' }, category: 'Clinical', excerpt: 'Lipids, HbA1c, inflammation markers — what to actually look at when you get your annual results.', readTime: 9, publishedAt: '2026-01-30', hue: 200 },
  { _id: 's9', title: 'Mediterranean, DASH, or just real food?', slug: { current: 'mediterranean' }, category: 'Nutrition', excerpt: 'Why the most-studied dietary patterns all converge on the same simple foundations.', readTime: 5, publishedAt: '2026-01-18', hue: -60 },
]

const FEATURED_STATIC = {
  _id: 'f1',
  title: 'Why sleep is your best medicine — the science of recovery.',
  slug: { current: 'sleep-science' },
  category: 'Sleep',
  excerpt: 'How your circadian rhythm regulates everything from blood sugar to immune function — and the eight evidence-based habits that protect it.',
  readTime: 6,
  publishedAt: '2026-05-12',
  author: { name: 'Prof. Dr. Nimrat Grewal', role: 'Cardiothoracic surgeon · Co-founder' },
}

const TABS = ['All', 'Sleep', 'Movement', 'Mental Health', 'Nutrition', 'Clinical', 'Research']

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function categoryMatches(cat: string, tab: string) {
  if (tab === 'All') return true
  return cat?.toLowerCase() === tab.toLowerCase()
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  const [activeTab, setActiveTab] = useState('All')
  const hasSanity = posts.length > 0

  const featured = hasSanity ? posts[0] : FEATURED_STATIC
  const articles: typeof STATIC_POSTS | Post[] = hasSanity ? posts.slice(1) : STATIC_POSTS
  const filtered = articles.filter((p) => categoryMatches((p as Post).category, activeTab))

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

      {/* Featured */}
      <section style={{ padding: '64px 0 32px' }}>
        <div className="wrap">
          <Link href={hasSanity ? `/blog/${featured.slug.current}` : '/blog/article'} className="featured-post">
            <div className="thumb anemone"></div>
            <div className="body">
              <div className="meta">
                <span className="pill">{featured.category}</span>
                <span className="date">{formatDate(featured.publishedAt)}</span>
                <span className="muted">· {featured.readTime} min read</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              {featured.author && (
                <div className="byline">
                  <div className="avatar"></div>
                  <div>
                    <div className="name">{featured.author.name}</div>
                    <div className="role">{featured.author.role}</div>
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
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
            {filtered.map((post, i) => {
              const hue = 'hue' in post ? (post as typeof STATIC_POSTS[0]).hue : (i * 40)
              const href = hasSanity ? `/blog/${(post as Post).slug.current}` : '/blog/article'
              return (
                <article key={post._id} className="article">
                  <Link href={href} className="thumb anemone" style={{ filter: `hue-rotate(${hue}deg)` }}></Link>
                  <div className="body">
                    <div className="meta">
                      <span className="pill">{post.category}</span>
                      <span className="date">{formatDate(post.publishedAt)}</span>
                      <span className="muted">· {post.readTime} min</span>
                    </div>
                    <h3><Link href={href}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pillar-cta">
        <div className="wrap">
          <div className="card">
            <h2>Science, distilled. One short note a month.</h2>
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
