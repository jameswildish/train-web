import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedPublications, getSiteSettings } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

export const revalidate = 0

export const metadata = {
  title: 'Science — TRAIN',
}

type Publication = {
  _id: string
  title: string
  authors?: string
  journal?: string
  year?: string
  category?: string
  coverImage?: unknown
  abstract?: string
  externalUrl?: string
  downloadUrl?: string
}

const STATIC_PUBS = [
  { _id: 's1', title: 'Mendelian Randomization Suggests a Causal Link Between Glycemic Traits and Thoracic Aortic Structures and Diseases.', category: 'Genomics' },
  { _id: 's2', title: 'Establishing reference values for aortic dimensions in the general Indian population — implications for global standards.', category: 'Population' },
  { _id: 's3', title: 'Beyond the tear: the enduring role of aortic pathology in the era of genomic medicine.', category: 'Review' },
  { _id: 's4', title: 'APECx — Anaesthesia, Perfusion and Surgical Practices in Cardiac Surgery: a modular multiphase prospective international observational study.', category: 'Multi-centre' },
  { _id: 's5', title: 'Diversity and Representation in Cardiovascular Research: Evidence Gaps, Emerging Models, and Policy Implications.', category: 'Equity' },
  { _id: 's6', title: 'Aortic wall lamellar structure in phylogeny and in humans — insights from bicuspid and tricuspid aortic valve morphology.', category: 'Histopathology' },
  { _id: 's7', title: 'Comparison of cardiovascular risk profiles of patients with type A aortic dissection and thoracic aortic aneurysm.', category: 'Risk factors' },
  { _id: 's8', title: 'The TRAIN Health Awareness Clinical Trial — Baseline Findings and Cardiovascular Risk Management in Aortic Dissection Patients.', category: 'Clinical trial' },
  { _id: 's9', title: 'From Survival to Recovery: Understanding the Life Impact of an Acute Aortic Dissection through Activity, Sleep, and Quality of Life.', category: 'Patient experience' },
  { _id: 's10', title: 'Sex Differences in the Histopathology of Acute Type A Aortic Dissections.', category: 'Sex differences' },
  { _id: 's11', title: 'Aortic root replacement for bicuspid aortic valve dysfunction does not impair survival rates.', category: 'Outcomes' },
  { _id: 's12', title: 'Wall Shear Stress Directional Abnormalities in BAV Aortas — Toward a New Hemodynamic Predictor of Aortopathy?', category: 'Hemodynamics' },
]

export default async function SciencePage() {
  let publications: Publication[] = []
  let settings: { scienceHeroImage?: SanityImageSource } | null = null
  try {
    ;[publications, settings] = await Promise.all([getFeaturedPublications(), getSiteSettings()])
  } catch {
    // Sanity not configured yet
  }
  const pubs: Publication[] = publications.length > 0 ? publications : STATIC_PUBS as Publication[]
  return (
    <>
      {/* ============ SCIENCE HERO ============ */}
      <section className="science-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Science</span>
          </div>
          <div className={settings?.scienceHeroImage ? 'science-hero-inner' : ''}>
            <div>
              <div style={{ margin: '40px 0 24px' }} className="eyebrow">About · Research · Publications</div>
              <h1>The art of living healthy — guided by science and medicine.</h1>
              <p className="lead">TRAIN is built on years of academic research and clinical experience. Our founders lead the TARGet research group — an international initiative advancing cardiovascular and preventive health through translational science.</p>
            </div>
            {settings?.scienceHeroImage && (
              <div className="science-hero-image">
                <Image
                  src={urlFor(settings.scienceHeroImage).width(900).height(680).url()}
                  alt="TRAIN research team"
                  width={900}
                  height={680}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <nav className="section-anchor-nav">
        <div className="wrap">
          <a href="#about">About us</a>
          <a href="#target">TARGet group</a>
          <a href="#collaborate">Collaborators</a>
          <a href="#publications">Scientific output</a>
        </div>
      </nav>

      {/* ============ ABOUT US (Mission / Vision / Approach) ============ */}
      <section id="about">
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
              <div className="eyebrow">01 / Mission</div>
              <h3>Bridge the gap between science and habits.</h3>
              <p>To bridge the gap between advanced medical research and everyday health practices. We provide comprehensive information on risk factors, ongoing research projects, and the latest scientific findings to support a healthier lifestyle.</p>
            </div>
            <div className="mva-card">
              <div className="eyebrow">02 / Vision</div>
              <h3>A world of informed, proactive individuals.</h3>
              <p>A world where individuals are well-informed about their health risks and proactive in managing them — supported by a community of engaged people who can make better health decisions backed by the latest research and technology.</p>
            </div>
            <div className="mva-card">
              <div className="eyebrow">03 / Approach</div>
              <h3>Cutting-edge research, practical health advice.</h3>
              <p>We integrate clinical and scientific insight with everyday application — through the TRAIN Health app and our website, covering cardiovascular and musculoskeletal health, risk-factor management, and ongoing research studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="founders" id="team">
        <div className="wrap">
          <div className="founders-grid">
            <div className="founders-photo">
              <div className="placeholder-stripe"><span>Photo placeholder</span></div>
              <div className="tag">
                <strong>Prof. Dr. Nimrat Grewal</strong> · cardiothoracic surgeon<br />
                <strong>Dr. Simran Grewal</strong> · orthopaedic trauma surgeon
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

        <div className="wrap collab" id="collaborate">
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
            <div className="collab-chip"><span className="dot"></span>Oxford Cardiovascular</div>
            <div className="collab-chip"><span className="dot"></span>Karolinska Institutet</div>
            <div className="collab-chip"><span className="dot"></span>Mayo Clinic</div>
            <div className="collab-chip"><span className="dot"></span>Cleveland Clinic</div>
          </div>
        </div>
      </section>

      {/* ============ PUBLICATIONS ============ */}
      <section className="pubs" id="publications">
        <div className="wrap">
          <div className="sec-head head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Scientific output</div>
              <h2>Selected publications from the TARGet group.</h2>
            </div>
            <p>100+ peer-reviewed contributions across cardiovascular and preventive health. A representative selection — full list available on request.</p>
            <a href="#" className="all">All publications <span className="arrow">↗</span></a>
          </div>

          <div className="pubs-grid">
            {pubs.map(pub => {
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
                  {pub.category && <span className="tag">{pub.category}</span>}
                  <h4>{pub.title}</h4>
                  {pub.authors && <span className="pub-authors">{pub.authors}{pub.year ? ` · ${pub.year}` : ''}</span>}
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

      {/* ============ CTA ============ */}
      <section className="cta">
        <div className="wrap">
          <div className="cta-card">
            <h2>Join the TRAIN research community.</h2>
            <div className="right">
              <p>We collaborate with clinicians, researchers, institutions, and patients worldwide. If your work intersects with ours, we&apos;d like to hear from you.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-primary">Get in touch <span className="arrow">→</span></a>
                <Link href="/projects" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Explore projects</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
