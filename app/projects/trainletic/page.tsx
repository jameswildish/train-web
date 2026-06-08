import Link from 'next/link'
import Image from 'next/image'
import { getProjectMainImage } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const metadata = { title: 'TRAINletic — TRAIN Projects' }

export default async function TrainleticPage() {
  let project: { mainImage?: unknown } | null = null
  try { project = await getProjectMainImage('trainletic') } catch {}
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">TRAINletic</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Performance · 2024</div>
          <h1>TRAINletic</h1>
          <p className="tagline"><em>Optimising performance through science-driven health insights.</em></p>
          <div className="media">
            {project?.mainImage ? (
              <Image
                src={urlFor(project.mainImage).width(1600).height(700).url()}
                alt="TRAINletic"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            ) : (
              <div className="anemone" style={{ width: '100%', height: '100%', filter: 'hue-rotate(120deg) brightness(.8)' }}>
                <div className="badges">
                  <span className="badge"><span className="dot"></span> TARGet Research Group</span>
                  <span className="badge"><span className="dot"></span> Translational</span>
                  <span className="badge"><span className="dot"></span> Peer-reviewed</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="proj-intro">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Overview</div>
              <h2>What is TRAINletic?</h2>
              <p>TRAINletic is a research initiative exploring the relationship between physical performance, mental health, and recovery in professional athletes.</p>
              <p>Developed in collaboration with elite sports organisations, the project combines wearable data, clinical insights, and performance metrics to better understand how sleep, stress, and recovery influence athletic performance.</p>
              <p>The project was piloted with the Dutch National Cricket Team during the 2024 ICC Men&apos;s T20 World Cup.</p>
            </div>
            <aside>
              <div className="eyebrow">Our mission</div>
              <h4>To optimise athletic performance by translating health data into personalised insights that improve recovery, resilience, and long-term wellbeing.</h4>
            </aside>
          </div>
        </div>
      </section>

      <section className="proj-why">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Why this matters</div>
              <h2>The gap we&apos;re closing.</h2>
            </div>
            <div>
              <p>Elite performance is not only determined by training — but by recovery, sleep, and mental resilience.</p>
              <p>Athletes operate at the limits of physical and mental capacity, where small changes in recovery or stress can significantly impact performance and injury risk.</p>
              <p>Despite increasing access to wearable data, translating this information into meaningful, actionable insights remains a major challenge.</p>
              <p>TRAINletic addresses this gap by integrating data, science, and clinical expertise into a personalised approach to performance and health.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="proj-do">
        <div className="wrap">
          <div className="grid">
            <div className="block">
              <div className="eyebrow">What we do</div>
              <h3>The work — in practice.</h3>
              <ul>
                <li>Collect wearable data including sleep, HRV, recovery, and training load</li>
                <li>Monitor subjective wellbeing — stress, fatigue, and readiness</li>
                <li>Integrate performance metrics such as strength, speed, and decision-making</li>
                <li>Analyse relationships between recovery, mental health, and performance</li>
                <li>Develop personalised strategies to optimise performance and reduce injury risk</li>
              </ul>
            </div>
            <div className="block">
              <div className="eyebrow">Scientific foundation</div>
              <h3>How the science holds up.</h3>
              <p>TRAINletic combines sports science, clinical expertise, and real-world data collection in elite athletes.</p>
              <p>Data collection includes wearable data (e.g. WHOOP) — sleep, HRV, recovery, activity load; subjective wellness scores — stress, fatigue, soreness, readiness; performance metrics from coaching staff; and match and contextual data.</p>
              <p>This integrated dataset enables a comprehensive understanding of how physical and mental health influence performance. The study has received ethical approval (LUMC METC) and is conducted in accordance with international research standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="proj-impact">
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: '18px' }}>Impact</div>
          <h2>Who benefits — and how.</h2>
          <div className="impact-grid">
            <div className="impact-cell">
              <div className="tag">01 — For athletes</div>
              <h4>For athletes</h4>
              <p>Improved performance through better recovery, sleep, and mental resilience.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">02 — For teams &amp; coaches</div>
              <h4>For teams &amp; coaches</h4>
              <p>Data-driven insights to optimise training and reduce injury risk.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">03 — For healthcare</div>
              <h4>For healthcare</h4>
              <p>Translating elite performance insights into broader health applications.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">04 — For researchers</div>
              <h4>For researchers</h4>
              <p>Unique datasets linking performance, physiology, and mental health.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="proj-facts">
        <div className="wrap">
          <div className="eyebrow">Key facts</div>
          <h2>By the numbers.</h2>
          <div className="facts-grid">
            <div className="fact">
              <div className="v">KNCB</div>
              <div className="l">Dutch National Cricket Team partner</div>
            </div>
            <div className="fact">
              <div className="v">2024</div>
              <div className="l">ICC T20 World Cup pilot</div>
            </div>
            <div className="fact">
              <div className="v">Multi-modal</div>
              <div className="l">Wearable, subjective, performance data</div>
            </div>
            <div className="fact">
              <div className="v">Sleep · Recovery · Mind</div>
              <div className="l">Core focus areas</div>
            </div>
          </div>
        </div>
      </section>

      <section className="proj-related">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Related projects</div>
              <h2>Other work from TARGet.</h2>
            </div>
            <p>Each project sits within a connected research portfolio — from genomics and clinical trials to patient experience and community-based prevention.</p>
            <Link href="/projects" className="all">All projects <span className="arrow">↗</span></Link>
          </div>
          <div className="projects-grid">
            <Link href="/projects/data-donation-monitoring-ddm" className="project">
              <div className="thumb anemone" style={{}}></div>
              <div className="body">
                <span className="tag">Data infrastructure · 2026</span>
                <h3>Data Donation Platform (DDM)</h3>
                <p>Building inclusive, real-world health data to improve prevention and research.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/sukh" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(80deg) brightness(.85)' }}></div>
              <div className="body">
                <span className="tag">Wellbeing · 2025</span>
                <h3>SUKH Healing Garden</h3>
                <p>Nature-inspired environments for recovery, wellbeing, and resilience.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/diversity-prevention" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(-40deg) brightness(.9)' }}></div>
              <div className="body">
                <span className="tag">Community · 2024</span>
                <h3>Diversity &amp; Prevention</h3>
                <p>Community-based health initiatives for inclusive prevention.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/after-the-storm" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(20deg) brightness(.85)' }}></div>
              <div className="body">
                <span className="tag">Patient experience · 2026</span>
                <h3>After the Storm</h3>
                <p>Understanding the silent, often invisible experience of recovery beyond survival.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="pillar-cta">
        <div className="wrap">
          <div className="card">
            <h2>Collaborate with the TARGet group.</h2>
            <div className="actions">
              <a href="#" className="btn btn-primary">Get in touch <span className="arrow">→</span></a>
              <Link href="/science" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>About the research group →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
