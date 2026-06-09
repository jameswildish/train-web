import Link from 'next/link'
import Image from 'next/image'
import { getAllPublications, getAllCollaborators } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

export const revalidate = 0

export const metadata = {
  title: 'About — TRAIN',
}

type Collaborator = {
  _id: string
  name: string
  logo?: unknown
  website?: string
  type?: string
  location?: string
}

type Publication = {
  _id: string
  title: string
  coverImage?: unknown
  externalUrl?: string
  downloadUrl?: string
}

export default async function AboutPage() {
  let publications: Publication[] = []
  let collaborators: Collaborator[] = []
  try {
    ;[publications, collaborators] = await Promise.all([
      getAllPublications(),
      getAllCollaborators(),
    ])
  } catch {
    // Sanity not configured yet
  }
  return (
    <>
      <section className="pillar-hero pillar-hero-photo science-hero">
        <div className="wrap">
          <div className="pillar-hero-photo-inner">
            <div className="pillar-hero-photo-text">
              <div className="crumbs">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">About</span>
              </div>
              <h1 style={{ marginTop: '32px' }}>The art of living healthy, guided by science and medicine.</h1>
              <p className="lead">TRAIN is built on years of academic research and clinical experience. Our founders lead the TARGet research group — an international initiative advancing cardiovascular and preventive health through translational science.</p>
            </div>
            <div className="pillar-hero-photo-img">
              <Image
                src="/images/about-hero.jpg"
                alt="Science and medicine"
                width={700}
                height={560}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <nav className="section-anchor-nav">
        <div className="wrap">
          <a href="#about">About us</a>
          <a href="#target">TARGet group</a>
          <a href="#collaborate">Collaborators</a>
          <a href="#publications">Publications</a>
        </div>
      </nav>

      {/* ============ ABOUT US ============ */}
      <section id="about" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '16px' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>About us</div>
              <h2>Bridging advanced medical research and everyday health.</h2>
            </div>
            <p>Dr Nimrat Grewal and Dr Simran Grewal founded TRAIN Health Awareness to translate clinical insight into practical, daily habits. We empower individuals with the knowledge and tools to take control of their health and prevent non-communicable diseases.</p>
          </div>

          <div className="mva-grid">
            <div className="mva-card">
              <div className="eyebrow">Mission</div>
              <h3>Bridge the gap between science and habits.</h3>
              <p>To bridge the gap between advanced medical research and everyday health practices. We provide comprehensive information on risk factors, ongoing research projects, and the latest scientific findings to support a healthier lifestyle.</p>
            </div>
            <div className="mva-card">
              <div className="eyebrow">Vision</div>
              <h3>A world of informed, proactive individuals.</h3>
              <p>A world where individuals are well-informed about their health risks and proactive in managing them, supported by a community of engaged people who can make better health decisions backed by the latest research and technology.</p>
            </div>
            <div className="mva-card">
              <div className="eyebrow">Approach</div>
              <h3>Cutting-edge research, practical health advice.</h3>
              <p>We integrate clinical and scientific insight with everyday application — through the TRAIN Health app and our website, covering cardiovascular and musculoskeletal health, risk-factor management, and ongoing research studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="founders" id="founders">
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
                <strong>Prof. Dr. Nimrat Grewal</strong> · Cardiothoracic Surgeon<br />
                <strong>Dr. Simran Grewal</strong> · Orthopaedic Trauma Surgeon
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Built by surgeons</div>
              <h2>Two sisters. One mission.</h2>
              <div className="quote">
                As doctors, we see preventable health risks every day. TRAIN helps you understand your body, improve your daily habits, and stay healthier — using science and data.
              </div>
              <p className="by">— Founders, TRAIN Health Awareness.</p>
              <p style={{ marginTop: '28px', maxWidth: '480px' }}>TRAIN was founded by two surgeon sisters combining clinical care, scientific research, and a mission to improve long-term health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TARGet ============ */}
      <section className="target" id="target">
        <div className="wrap">
          <div className="target-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>TARGet Research Group</div>
              <h2>Advancing knowledge in cardiovascular &amp; preventive health.</h2>
              <p>An internationally active academic research initiative led by clinician-scientists — bringing together surgeons, physicians, data scientists, and researchers across disciplines to translate science into clinical and societal impact.</p>
              <p>Our work spans genetic and molecular research, real-world data collection, and lifestyle-based prevention — bridging the gap between science and everyday health.</p>
              <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#publications" className="btn btn-primary">View publications <span className="arrow">→</span></a>
                <a href="#collaborate" className="btn btn-ghost">Join as collaborator</a>
              </div>
              <div className="nums" style={{ marginTop: '40px' }}>
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
            <div className="target-img">
              <Image
                src="/images/nimrat-grewal-about.jpg"
                alt="Prof. Dr. Nimrat Grewal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', borderRadius: '8px' }}
                quality={90}
              />
            </div>
          </div>
        </div>

        {collaborators.length > 0 && (
          <div className="wrap collab" id="collaborate">
            <div className="label">Our Collaborators</div>
            <div className="collab-logo-grid">
              {collaborators.map(c => (
                c.website ? (
                  <a key={c._id} href={c.website} target="_blank" rel="noopener noreferrer" className="collab-logo-item">
                    {c.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={urlFor(c.logo as SanityImageSource).width(600).auto('format').url()}
                        alt={c.name}
                      />
                    ) : (
                      <span>{c.name}</span>
                    )}
                  </a>
                ) : (
                  <div key={c._id} className="collab-logo-item">
                    {c.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={urlFor(c.logo as SanityImageSource).width(600).auto('format').url()}
                        alt={c.name}
                      />
                    ) : (
                      <span>{c.name}</span>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ============ PUBLICATIONS ============ */}
      {publications.length > 0 && (
        <section className="pubs" id="publications">
          <div className="wrap">
            <div className="sec-head head">
              <div>
                <div className="eyebrow" style={{ marginBottom: '18px' }}>Scientific output</div>
                <h2>Selected publications from the TARGet group.</h2>
              </div>
              <p>100+ peer-reviewed contributions across cardiovascular and preventive health. A representative selection. Full list available on request.</p>
            </div>

            <div className="pubs-grid">
              {publications.map(pub => {
                const href = pub.externalUrl || pub.downloadUrl
                const label = pub.downloadUrl && !pub.externalUrl ? 'Download' : 'Read the paper'
                const card = (
                  <>
                    {pub.coverImage && (
                      <div className="pub-cover">
                        <Image
                          src={urlFor(pub.coverImage as SanityImageSource).width(120).height(160).url()}
                          alt={pub.title}
                          width={120}
                          height={160}
                          style={{ objectFit: 'cover', borderRadius: '4px' }}
                        />
                      </div>
                    )}
                    <h4>{pub.title}</h4>
                    {href && <span className="read">{label} <span className="arrow">→</span></span>}
                  </>
                )
                return href ? (
                  <a key={pub._id} href={href} target="_blank" rel="noopener noreferrer" className="pub-card">
                    {card}
                  </a>
                ) : (
                  <div key={pub._id} className="pub-card">{card}</div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============ CTA ============ */}
      <section className="cta">
        <div className="wrap">
          <div className="cta-card">
            <h2>The science is here. The evidence is building.</h2>
            <div className="right">
              <p>TRAIN is a clinician-led group working at the intersection of cardiovascular science, lifestyle medicine, and digital health. If your work intersects with ours, we&apos;d like to collaborate.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Get in touch <span className="arrow">→</span></Link>
                <Link href="/projects" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Explore projects</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
