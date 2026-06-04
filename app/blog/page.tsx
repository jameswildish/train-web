'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <>
      <section className="science-hero" data-screen-label="01 Blog Hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Blog</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Insights · Plain-language explainers</div>
          <h1>From science to daily life.</h1>
          <p className="lead">Plain-language explainers from our clinician-scientists. What the latest research actually means for your sleep, energy, stress, and long-term health — without the jargon.</p>
        </div>
      </section>

      <nav className="section-anchor-nav">
        <div className="wrap">
          <a href="#all" className={activeTab === 'all' ? 'active-tab' : ''} onClick={() => setActiveTab('all')}>All</a>
          <a href="#sleep" className={activeTab === 'sleep' ? 'active-tab' : ''} onClick={() => setActiveTab('sleep')}>Sleep</a>
          <a href="#movement" className={activeTab === 'movement' ? 'active-tab' : ''} onClick={() => setActiveTab('movement')}>Movement</a>
          <a href="#mental" className={activeTab === 'mental' ? 'active-tab' : ''} onClick={() => setActiveTab('mental')}>Mental Health</a>
          <a href="#nutrition" className={activeTab === 'nutrition' ? 'active-tab' : ''} onClick={() => setActiveTab('nutrition')}>Nutrition</a>
          <a href="#clinical" className={activeTab === 'clinical' ? 'active-tab' : ''} onClick={() => setActiveTab('clinical')}>Clinical</a>
        </div>
      </nav>

      {/* ============ FEATURED ============ */}
      <section style={{ padding: '64px 0 32px' }} data-screen-label="02 Featured">
        <div className="wrap">
          <Link href="/blog/article" className="featured-post">
            <div className="thumb anemone"></div>
            <div className="body">
              <div className="meta">
                <span className="pill">Sleep</span>
                <span className="date">May 12, 2026</span>
                <span className="muted">· 6 min read</span>
              </div>
              <h2>Why sleep is your best medicine — the science of recovery.</h2>
              <p>How your circadian rhythm regulates everything from blood sugar to immune function — and the eight evidence-based habits that protect it.</p>
              <div className="byline">
                <div className="avatar"></div>
                <div>
                  <div className="name">Prof. Dr. Nimrat Grewal</div>
                  <div className="role">Cardiothoracic surgeon · Co-founder</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ ARTICLE GRID ============ */}
      <section style={{ padding: '32px 0 96px' }} data-screen-label="03 Article Grid">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '40px' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>More articles</div>
              <h2>The latest from TRAIN.</h2>
            </div>
            <p>Short, evidence-based pieces — written by surgeons, researchers, and the TRAIN team.</p>
          </div>

          <div className="insights-grid blog-grid">
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" style={{ filter: 'hue-rotate(40deg)' }}></Link>
              <div className="body">
                <div className="meta"><span className="pill">Mental Health</span><span className="date">May 04, 2026</span><span className="muted">· 4 min</span></div>
                <h3><Link href="/blog/article">Stress less, live more — managing stress for heart health.</Link></h3>
                <p>The biology of chronic stress, and short daily practices proven to shift you into rest-and-recover.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" style={{ filter: 'hue-rotate(-20deg) saturate(.9)' }}></Link>
              <div className="body">
                <div className="meta"><span className="pill">Movement</span><span className="date">Apr 22, 2026</span><span className="muted">· 5 min</span></div>
                <h3><Link href="/blog/article">The power of small changes — building habits that last.</Link></h3>
                <p>Why daily movement quality and consistency may matter more than structured exercise alone.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" style={{ filter: 'hue-rotate(15deg) brightness(.9)' }}></Link>
              <div className="body">
                <div className="meta"><span className="pill">Nutrition</span><span className="date">Apr 08, 2026</span><span className="muted">· 7 min</span></div>
                <h3><Link href="/blog/article">Beyond diets: dietary patterns and cardiovascular risk.</Link></h3>
                <p>How long-term eating patterns — not individual foods — shape your metabolic health.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" style={{ filter: 'hue-rotate(60deg) brightness(.85)' }}></Link>
              <div className="body">
                <div className="meta"><span className="pill">Clinical</span><span className="date">Mar 27, 2026</span><span className="muted">· 8 min</span></div>
                <h3><Link href="/blog/article">Aortic surgery and the patient experience.</Link></h3>
                <p>From survival to recovery — understanding life beyond an acute aortic event.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" style={{ filter: 'hue-rotate(-40deg)' }}></Link>
              <div className="body">
                <div className="meta"><span className="pill">Sleep</span><span className="date">Mar 14, 2026</span><span className="muted">· 5 min</span></div>
                <h3><Link href="/blog/article">The truth about caffeine — when it stops being useful.</Link></h3>
                <p>Adenosine, sleep pressure, and why the 6-hour rule is more important than most people realise.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" style={{ filter: 'hue-rotate(80deg) brightness(.9)' }}></Link>
              <div className="body">
                <div className="meta"><span className="pill">Movement</span><span className="date">Feb 28, 2026</span><span className="muted">· 6 min</span></div>
                <h3><Link href="/blog/article">Why muscle is medicine — strength and healthy ageing.</Link></h3>
                <p>Sarcopenia, myokines, and the most underrated predictor of longevity.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" style={{ filter: 'hue-rotate(120deg)' }}></Link>
              <div className="body">
                <div className="meta"><span className="pill">Mental Health</span><span className="date">Feb 12, 2026</span><span className="muted">· 4 min</span></div>
                <h3><Link href="/blog/article">Five minutes is enough — the dose-response of mindfulness.</Link></h3>
                <p>You don't need an hour. Short, consistent practice produces measurable physiological change.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" style={{ filter: 'hue-rotate(200deg) brightness(.85)' }}></Link>
              <div className="body">
                <div className="meta"><span className="pill">Clinical</span><span className="date">Jan 30, 2026</span><span className="muted">· 9 min</span></div>
                <h3><Link href="/blog/article">Reading your own bloodwork — a clinician's guide.</Link></h3>
                <p>Lipids, HbA1c, inflammation markers — what to actually look at when you get your annual results.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" style={{ filter: 'hue-rotate(-60deg) saturate(.8)' }}></Link>
              <div className="body">
                <div className="meta"><span className="pill">Nutrition</span><span className="date">Jan 18, 2026</span><span className="muted">· 5 min</span></div>
                <h3><Link href="/blog/article">Mediterranean, DASH, or just real food?</Link></h3>
                <p>Why the most-studied dietary patterns all converge on the same simple foundations.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER CTA ============ */}
      <section className="pillar-cta" data-screen-label="04 Newsletter CTA">
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
