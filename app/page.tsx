import Link from 'next/link'
import Image from 'next/image'
import { getLatestPosts } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60

export const metadata = {
  title: 'TRAIN — Science-driven, medically grounded lifestyle',
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
  try {
    posts = await getLatestPosts(5)
  } catch {
    // Sanity not configured
  }

  const [featured, ...rest] = posts

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-card">
            <div className="bg anemone"></div>
            <span className="corner-tag"><span className="dot"></span> Built by surgeons · Driven by science</span>

            <div className="panel">
              <div className="eyebrow">Welcome to TRAIN Health</div>
              <h1>
                The science-driven, medically grounded <span className="quiet">personalised lifestyle app for real life.</span>
              </h1>
              <p className="lead">
                TRAIN translates medical and scientific knowledge into practical, daily habits — built by surgeons, grounded in research, designed for how you actually live.
              </p>
              <div className="actions">
                <a href="#try" className="btn-primary btn">Start your free trial <span className="arrow">→</span></a>
                <a href="#team" className="btn-outline">Meet the team</a>
              </div>
              <div className="cert-row">
                <span className="label">Backed by</span>
                <span className="pill">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6l-9-4Z"/><path d="m9 12 2 2 4-4"/></svg>
                  20+ years of research
                </span>
                <span className="pill">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/></svg>
                  Peer-reviewed
                </span>
                <span className="pill">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
                  Privacy-by-design
                </span>
              </div>
            </div>

            <div className="stage">
              <a href="#insights" className="featured-article">
                <span className="thumb anemone"></span>
                <span className="body">
                  <span className="row">
                    <span className="pill">Latest · Sleep</span>
                    <span className="date">May 12, 2026</span>
                  </span>
                  <span className="title">Why sleep is your best medicine — the science of recovery.</span>
                  <span className="read">Read article <span className="arrow">→</span></span>
                </span>
              </a>

              <div className="floating-card">
                <span className="title">The case for prevention</span>
                <div className="big-num">85<span className="pct">%</span></div>
                <p className="desc">of chronic lifestyle diseases are preventable through evidence-based daily habits.</p>
                <div className="micro">
                  <div className="m">
                    <div className="v">75%</div>
                    <div className="l">Of global deaths from chronic disease</div>
                  </div>
                  <div className="m">
                    <div className="v">1 in 7</div>
                    <div className="l">Experience mental-health conditions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="stats">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'end', padding: '0 0 32px' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>Why this matters</div>
              <h2 style={{ maxWidth: '760px' }}>We&apos;re here to help you live a healthier life.</h2>
            </div>
            <p className="muted" style={{ maxWidth: '320px', fontSize: '14px' }}>
              TRAIN supports you in building habits that improve your health, your energy, and your overall wellbeing.
            </p>
          </div>
        </div>
        <div className="wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="stats-grid">
            <div className="stat">
              <div className="mono" style={{ color: 'var(--teal)' }}>01 — Chronic</div>
              <div className="num">75<span style={{ fontSize: '36px', color: 'var(--muted)' }}>%</span></div>
              <p>of deaths worldwide are caused by chronic lifestyle diseases.</p>
            </div>
            <div className="stat">
              <div className="mono" style={{ color: 'var(--teal)' }}>02 — Cardiovascular</div>
              <div className="num">35<span style={{ fontSize: '36px', color: 'var(--muted)' }}>%</span></div>
              <p>of deaths worldwide are caused by cardiovascular disease.</p>
            </div>
            <div className="stat">
              <div className="mono" style={{ color: 'var(--teal)' }}>03 — Inactivity</div>
              <div className="num">33<span style={{ fontSize: '36px', color: 'var(--muted)' }}>%</span></div>
              <p>of people worldwide do not get enough physical activity.</p>
            </div>
            <div className="stat">
              <div className="mono" style={{ color: 'var(--teal)' }}>04 — Mental</div>
              <div className="num">1<span className="in">in</span>7</div>
              <p>people worldwide experience mental-health conditions.</p>
            </div>
            <div className="stat">
              <div className="mono" style={{ color: 'var(--teal)' }}>05 — Musculoskeletal</div>
              <div className="num">1<span className="in">in</span>8</div>
              <p>people are affected by joint, muscle and tendon disorders.</p>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="preventable">
            <div className="big">
              Medical science shows up to <em>85%</em> of these diseases are preventable through lifestyle changes.
            </div>
            <div className="pct">85%</div>
          </div>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      <section className="pillars" id="pillars">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>The four pillars</div>
              <h2>The foundation of long-term health.</h2>
            </div>
            <p>Every habit in TRAIN connects back to one of four scientifically grounded pillars — the systems that, together, determine how you feel, function, and age.</p>
          </div>
          <div className="pillar-grid">
            <Link href="/sleep" className="pillar">
              <div className="num">01 / Sleep</div>
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              </div>
              <h3>Sleep</h3>
              <p>Recovery, repair, and resilience. Quality sleep regulates hormones, restores the immune system, and protects long-term cardiovascular health.</p>
              <div className="arrow">Learn more →</div>
            </Link>
            <Link href="/activity" className="pillar">
              <div className="num">02 / Movement</div>
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 18l4-6 4 4 4-8 4 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Movement</h3>
              <p>Strength, energy, and cardiovascular health. Physical activity regulates metabolism, muscle, and brain — the strongest predictor of healthy ageing.</p>
              <div className="arrow">Learn more →</div>
            </Link>
            <Link href="/mental-health" className="pillar">
              <div className="num">03 / Mental Health</div>
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
              <h3>Mental Health</h3>
              <p>Focus, stress regulation, and emotional balance. Mindfulness shifts the nervous system from &quot;fight-or-flight&quot; to rest-and-recover.</p>
              <div className="arrow">Learn more →</div>
            </Link>
            <Link href="/nutrition" className="pillar">
              <div className="num">04 / Nutrition</div>
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3c4 0 7 3 7 7 0 6-7 11-7 11S5 16 5 10c0-4 3-7 7-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
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
              <div className="placeholder-stripe">
                <span>Founders portrait — Prof. Dr. Nimrat Grewal &amp; Dr. Simran Grewal</span>
              </div>
              <div className="tag">
                <strong>Prof. Dr. Nimrat Grewal</strong> · cardiothoracic surgeon<br />
                <strong>Dr. Simran Grewal</strong> · orthopaedic trauma surgeon
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Built by surgeons, driven by science</div>
              <h2>The art of living healthy, guided by science and medicine.</h2>
              <div className="quote">
                As doctors, we see preventable health risks every day. TRAIN helps you understand your body, improve your daily habits, and stay healthier — using science and data.
              </div>
              <p className="by">
                — <strong>Prof. Dr. Nimrat Grewal</strong> &amp; <strong>Dr. Simran Grewal</strong>, founders.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
                <Link href="/projects" className="btn btn-primary">Explore our work <span className="arrow">→</span></Link>
                <Link href="/science" className="btn btn-ghost">Read the science</Link>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.6"/></svg>
              </div>
              <h4>20+ years of research</h4>
              <p>Two decades of clinical experience and translational research in cardiovascular and preventive health.</p>
            </div>
            <div className="mission-card">
              <div className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4"/><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" stroke="currentColor" strokeWidth="1.4"/></svg>
              </div>
              <h4>Worldwide collaboration</h4>
              <p>Partnerships with leading medical and research institutions across academia, hospitals, and industry.</p>
            </div>
            <div className="mission-card">
              <div className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M3 9h18M8 14h4" stroke="currentColor" strokeWidth="1.4"/></svg>
              </div>
              <h4>Data Donation Platform</h4>
              <p>An inclusive, real-world health data infrastructure designed for diverse, longitudinal research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Our work</div>
              <h2>From research to real-world impact.</h2>
            </div>
            <p>TRAIN builds on years of academic research and clinical experience. Its founders lead the TARGet research group — translating science into prevention, products, and policy.</p>
            <Link href="/projects" className="all">All projects <span className="arrow">↗</span></Link>
          </div>

          <div className="projects-grid">
            <Link href="/projects/ddm" className="project">
              <div className="thumb anemone"></div>
              <div className="body">
                <span className="tag">Data infrastructure · 2026</span>
                <h3>Data Donation Platform (DDM)</h3>
                <p>Building inclusive, real-world health data from diverse populations — to make prevention and research more representative.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/gen-taad" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(-15deg) brightness(.9)' }}></div>
              <div className="body">
                <span className="tag">Genomics · 2024</span>
                <h3>GEN-TAAD</h3>
                <p>Genetic and molecular mechanisms behind thoracic aortic disease. 600,000+ individuals studied, polygenic risk scoring under development.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/sukh" className="project dark">
              <div className="thumb">
                <div className="placeholder-stripe"><span>SUKH Healing Garden</span></div>
              </div>
              <div className="body">
                <span className="tag">Wellbeing · 2025</span>
                <h3>SUKH Healing Garden</h3>
                <p>Nature-inspired, multi-sensory environments designed to support recovery, wellbeing, and resilience in demanding settings.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/after-the-storm" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(20deg) brightness(.85)' }}></div>
              <div className="body">
                <span className="tag">Patient experience · 2026</span>
                <h3>After the Storm</h3>
                <p>A research and artistic project translating life after aortic dissection into sound — making the invisible recovery experience shareable.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/genie-ta" className="project">
              <div className="thumb anemone" style={{ filter: 'saturate(.7) brightness(.95)' }}></div>
              <div className="body">
                <span className="tag">Genomics · 2025</span>
                <h3>GENIE-TA</h3>
                <p>Whole genome sequencing combined with epigenomic analysis to uncover hidden causes of aortic disease beyond standard testing.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/trainletic" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(40deg)' }}></div>
              <div className="body">
                <span className="tag">Performance · Active</span>
                <h3>TRAINLetic</h3>
                <p>With the Koninklijke Nederlandse Cricket Bond — optimising athletic performance and long-term health in professional cricketers.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TARGet / Scientific Output ============ */}
      <section className="target" id="science">
        <div className="wrap">
          <div className="target-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>TARGet Research Group</div>
              <h2>Advancing knowledge in cardiovascular disease and preventive health.</h2>
              <p>An internationally active academic research initiative led by clinician-scientists — bringing together surgeons, physicians, data scientists and researchers to translate science into clinical and societal impact.</p>
              <div style={{ marginTop: '28px' }}>
                <Link href="/science#publications" className="btn btn-primary">View all publications <span className="arrow">→</span></Link>
              </div>
            </div>
            <div className="nums">
              <div className="n">
                <div className="v">20+</div>
                <div className="l"><strong>PhDs</strong><br />driving translational and clinical research</div>
              </div>
              <div className="n">
                <div className="v">5+</div>
                <div className="l"><strong>Postdocs</strong><br />advancing genetic, clinical, and data-driven insights</div>
              </div>
              <div className="n">
                <div className="v">100+</div>
                <div className="l"><strong>Publications</strong><br />contributing to international research and innovation</div>
              </div>
              <div className="n">
                <div className="v">50+</div>
                <div className="l"><strong>Collaborations</strong><br />with leading academic and clinical institutions worldwide</div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap collab">
          <div className="label">Collaborators · Academic institutions &amp; public partners</div>
          <div className="collab-row">
            <div className="collab-chip"><span className="dot"></span>Amsterdam UMC</div>
            <div className="collab-chip"><span className="dot"></span>Leiden University Medical Center</div>
            <div className="collab-chip"><span className="dot"></span>Erasmus MC</div>
            <div className="collab-chip"><span className="dot"></span>AIIMS New Delhi</div>
            <div className="collab-chip"><span className="dot"></span>KEM Hospital Mumbai</div>
            <div className="collab-chip"><span className="dot"></span>KNCB</div>
            <div className="collab-chip"><span className="dot"></span>European Society of Cardiology</div>
            <div className="collab-chip"><span className="dot"></span>American Heart Association</div>
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

          <div className="insights-grid">
            {featured && (
              <article className="article feature">
                <Link href={`/blog/${featured.slug.current}`} className="thumb">
                  {featured.mainImage
                    ? <Image src={urlFor(featured.mainImage).width(800).height(480).url()} alt={featured.title} width={800} height={480} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <div className="anemone" style={{ width: '100%', height: '100%' }}></div>
                  }
                </Link>
                <div className="body">
                  <div className="meta">
                    <span className="pill">{featured.category}</span>
                    <span className="date">{formatDate(featured.publishedAt)}</span>
                    {featured.readTime && <span className="muted">· {featured.readTime} min read</span>}
                  </div>
                  <h3><Link href={`/blog/${featured.slug.current}`}>{featured.title}</Link></h3>
                  <p>{featured.excerpt}</p>
                  <Link href={`/blog/${featured.slug.current}`} className="more" style={{ fontFamily: 'IBM Plex Mono', fontSize: '12px', letterSpacing: '.08em', textTransform: 'uppercase', paddingTop: '12px', display: 'block' }}>Read article →</Link>
                </div>
              </article>
            )}
            {rest.map((post, i) => (
              <article key={post._id} className="article">
                <Link href={`/blog/${post.slug.current}`} className="thumb">
                  {post.mainImage
                    ? <Image src={urlFor(post.mainImage).width(400).height(240).url()} alt={post.title} width={400} height={240} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <div className="anemone" style={{ width: '100%', height: '100%', filter: `hue-rotate(${(i + 1) * 40}deg)` }}></div>
                  }
                </Link>
                <div className="body">
                  <div className="meta">
                    <span className="pill">{post.category}</span>
                    <span className="date">{formatDate(post.publishedAt)}</span>
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
            <h2>Start your journey toward better health — built on science, powered by research.</h2>
            <div className="right">
              <p>Join thousands of people building lifestyle habits that protect their long-term health. Free to start, science to back it up.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-primary">Try TRAIN free <span className="arrow">→</span></a>
                <a href="#" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Talk to the team</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
