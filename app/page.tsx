import Link from 'next/link'
import Image from 'next/image'
import { getLatestPosts, getFeaturedProjects, getAllCollaborators } from '@/sanity/lib/queries'
import type { SanityImageSource } from '@sanity/image-url'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 0

export const metadata = {
  title: 'TRAIN — Science-driven, medically grounded lifestyle',
}

type Collaborator = {
  _id: string
  name: string
  logo?: unknown
  website?: string
}

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  readTime: number
  publishedAt: string
  mainImage?: Parameters<typeof urlFor>[0]
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function HomePage() {
  let posts: Post[] = []
  let featuredProjects: { _id: string; title: string; slug: { current: string }; tag?: string; year?: string; summary?: string; mainImage?: unknown }[] = []
  let collaborators: Collaborator[] = []
  try {
    ;[posts, featuredProjects, collaborators] = await Promise.all([
      getLatestPosts(3),
      getFeaturedProjects(),
      getAllCollaborators(),
    ])
  } catch {
    // Sanity not configured
  }

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-card">
            <div className="bg">
              <Image
                src="/images/hero-bg.jpg"
                alt=""
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
              <div className="bg-overlay" />
            </div>

            <div className="panel">
              <h1 style={{ fontWeight: 700, color: '#fff' }}>
                The science-driven, medically grounded personalised lifestyle app for real life.
              </h1>
              <p className="lead">
                Built by surgeons. Driven by science. TRAIN turns medical and scientific knowledge into practical daily habits designed for how you actually live.
              </p>
              <div className="actions">
                <a href="/contact" className="btn-primary btn">TRAIN App. Coming Soon</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="stats">
        <div className="wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="stats-grid">
            <div className="stat">
              <div className="num">75<span style={{ fontSize: '36px', color: 'var(--muted)' }}>%</span></div>
              <p>of deaths worldwide are caused by chronic lifestyle diseases.</p>
            </div>
            <div className="stat">
              <div className="num">35<span style={{ fontSize: '36px', color: 'var(--muted)' }}>%</span></div>
              <p>of deaths worldwide are caused by cardiovascular disease.</p>
            </div>
            <div className="stat">
              <div className="num">33<span style={{ fontSize: '36px', color: 'var(--muted)' }}>%</span></div>
              <p>of people worldwide do not get enough physical activity.</p>
            </div>
            <div className="stat">
              <div className="num">1<span className="in">in</span>7</div>
              <p>people worldwide experience mental-health conditions.</p>
            </div>
            <div className="stat">
              <div className="num">1<span className="in">in</span>8</div>
              <p>people are affected by joint, muscle and tendon disorders.</p>
            </div>
          </div>
        </div>
        <div className="wrap">
          <p className="preventable-text">
            Medical science shows up to <em>85%</em> of these diseases are preventable through lifestyle changes.
          </p>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      <section className="pillars" id="pillars">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>The foundation of long-term health.</h2>
            </div>
            <p>Every habit in TRAIN connects to one of four scientifically grounded pillars. Together, they determine how you feel, function, and age.</p>
          </div>
          <div className="pillar-grid">
            <Link href="/sleep" className="pillar">
              <div className="ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Sleep</h3>
              <p>Recovery, repair, and resilience. Quality sleep regulates hormones, restores the immune system, and protects long-term cardiovascular health.</p>
              <div className="arrow">Learn more →</div>
            </Link>
            <Link href="/activity" className="pillar">
              <div className="ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Movement</h3>
              <p>Strength, energy, and cardiovascular health. Physical activity regulates metabolism, muscle, and brain. The strongest predictor of healthy ageing.</p>
              <div className="arrow">Learn more →</div>
            </Link>
            <Link href="/mental-health" className="pillar">
              <div className="ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
                </svg>
              </div>
              <h3>Mental Health</h3>
              <p>Focus, stress regulation, and emotional balance. Mindfulness shifts the nervous system from fight-or-flight to rest-and-recover.</p>
              <div className="arrow">Learn more →</div>
            </Link>
            <Link href="/nutrition" className="pillar">
              <div className="ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3c4 0 7 3 7 7 0 6-7 11-7 11S5 16 5 10c0-4 3-7 7-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M15 3c0-1.5-1.5-2.5-3-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Nutrition</h3>
              <p>Fuelling body and brain. Heart-healthy dietary patterns lower blood pressure, improve cholesterol, and reduce systemic inflammation.</p>
              <div className="arrow">Learn more →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="founders" id="team">
        <div className="wrap">
          <div className="founders-grid">
            <div className="founders-photo">
              <Image
                src="/images/nimrat-and-simran-grewal.jpg"
                alt="Prof. Dr. Nimrat Grewal & Dr. Simran Grewal"
                width={1492}
                height={850}
                quality={90}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
              <div className="tag">
                <strong>Prof. Dr. Nimrat Grewal</strong> · Cardiothoracic Surgeon (left)<br />
                <strong>Dr. Simran Grewal</strong> · Orthopaedic Trauma Surgeon (right)
              </div>
            </div>
            <div>
              <h2>The art of living healthy, guided by science and medicine.</h2>
              <p style={{ marginTop: '20px', maxWidth: '480px', color: 'var(--ink-2)', lineHeight: 1.6 }}>
                TRAIN was founded by two surgeon sisters combining clinical care, scientific research, and a mission to improve long-term health.
              </p>
              <div className="quote" style={{ marginTop: '28px' }}>
                As doctors, we see preventable health risks every day. TRAIN helps you understand your body, improve your daily habits, and stay healthier using science and data.
              </div>
              <p className="by">
                — <strong>Prof. Dr. Nimrat Grewal</strong> &amp; <strong>Dr. Simran Grewal</strong>, founders.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
                <Link href="/projects" className="btn btn-primary">Explore our projects <span className="arrow">→</span></Link>
                <Link href="/about" className="btn btn-ghost">About TRAIN</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION CARDS ============ */}
      <section className="mission tight">
        <div className="wrap">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="ico">
                {/* Microscope / flask - research */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3h6M10 9l-4 9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l-4-9"/>
                  <path d="M10 3v6M14 3v6"/>
                </svg>
              </div>
              <h4>20+ years of research</h4>
              <p>Over two decades of clinical experience and translational research in cardiovascular and preventive health.</p>
            </div>
            <div className="mission-card">
              <div className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/>
                </svg>
              </div>
              <h4>Worldwide collaboration</h4>
              <p>Partnerships with leading medical and research institutions across academia, hospitals, and industry.</p>
            </div>
            <div className="mission-card">
              <div className="ico">
                {/* Heart */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h4>Built for your health</h4>
              <p>TRAIN helps you build the habits that protect your health. Grounded in evidence. Designed for real life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="projects-band">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Projects</div>
              <h2>From research to real-world impact.</h2>
            </div>
            <p>TRAIN builds on years of academic research and clinical experience. Its founders lead the TARGet research group, an academic initiative focused on advancing cardiovascular and preventive health through collaboration with clinicians, researchers, and institutions worldwide.</p>
            <Link href="/projects" className="all">All projects <span className="arrow">↗</span></Link>
          </div>

          <div className="projects-grid">
            {featuredProjects.map(p => (
              <Link key={p._id} href={`/projects/${p.slug.current}`} className="project">
                <div className="thumb">
                  {p.mainImage ? (
                    <Image
                      src={urlFor(p.mainImage as SanityImageSource).width(800).height(480).url()}
                      alt={p.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="anemone" style={{ width: '100%', height: '100%' }} />
                  )}
                </div>
                <div className="body">
                  <span className="tag">{[p.tag, p.year].filter(Boolean).join(' · ')}</span>
                  <h3>{p.title}</h3>
                  {p.summary && <p>{p.summary}</p>}
                  <span className="more">Learn more <span className="arrow">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SCROLLING COLLABORATORS ============ */}
      {collaborators.length > 0 && (
        <section className="collab-ticker-section">
          <div className="wrap" style={{ marginBottom: '24px' }}>
            <div className="eyebrow" style={{ textAlign: 'center' }}>Our Collaborators</div>
          </div>
          <div className="collab-ticker">
            <div className="collab-ticker-inner">
              {[...collaborators, ...collaborators].map((c, i) => (
                <div key={i} className={`collab-chip${c.logo ? ' chip-logo' : ''}`}>
                  {c.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={urlFor(c.logo as SanityImageSource).width(480).auto('format').url()}
                      alt={c.name}
                    />
                  ) : (
                    <><span className="dot" />{c.name}</>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ PUBLICATIONS ============ */}
      <section className="pubs-band">
        <div className="wrap">
          <div className="pubs-band-inner">
            <div className="stat-block">
              <div className="stat-num">100+</div>
              <div className="stat-sub">Publications</div>
            </div>
            <div className="text-block">
              <h2>Peer-reviewed research in cardiovascular and preventive health.</h2>
              <p>From genomics and aortic disease to lifestyle medicine and patient experience, published across leading international journals.</p>
              <Link href="/about#publications" className="btn btn-primary" style={{ display: 'inline-flex', marginTop: '8px' }}>
                View publications <span className="arrow" style={{ marginLeft: '6px' }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INSIGHTS ============ */}
      {posts.length > 0 && (
      <section id="insights">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Insights</div>
              <h2>From science to daily life.</h2>
            </div>
            <p>Plain-language explainers, written by clinicians, on what the research actually means for your sleep, energy, stress, and long-term health.</p>
            <Link href="/blog" className="all">View all insights <span className="arrow">↗</span></Link>
          </div>

          <div className="insights-grid three-col">
            {posts.map((post, i) => (
              <article key={post._id} className="article">
                <Link href={`/blog/${post.slug.current}`} className="thumb">
                  {post.mainImage
                    ? <Image src={urlFor(post.mainImage).width(600).height(360).url()} alt={post.title} width={600} height={360} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <div className="anemone" style={{ width: '100%', height: '100%' }}></div>
                  }
                </Link>
                <div className="body">
                  <div className="meta">
                    <span className="pill">{post.category}</span>
                    <span className="date">{formatDate(post.publishedAt)}</span>
                    {post.readTime && <span className="muted">· {post.readTime} min read</span>}
                  </div>
                  <h3><Link href={`/blog/${post.slug.current}`}>{post.title}</Link></h3>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ============ CTA ============ */}
      <section className="cta">
        <div className="wrap">
          <div className="cta-card">
            <h2>Start your journey toward better health. Built on science, powered by research.</h2>
            <div className="right">
              <p>Join thousands of people building lifestyle habits that protect their long-term health. Free to start, science to back it up.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/contact" className="btn btn-primary">TRAIN App. Coming Soon <span className="arrow">→</span></a>
                <Link href="/about" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Learn about TRAIN</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
