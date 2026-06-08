import Link from 'next/link'
import Image from 'next/image'
import { getProjectMainImage } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const metadata = { title: 'Aviation & Thoracic Aortic Disease — TRAIN Projects' }

export default async function AviationPage() {
  let project: { mainImage?: unknown } | null = null
  try { project = await getProjectMainImage('aviation') } catch {}
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">Aviation &amp; Thoracic Aortic Disease</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Clinical · 2026</div>
          <h1>Aviation &amp; Thoracic Aortic Disease</h1>
          <p className="tagline"><em>Understanding the safety of air travel in patients with aortic disease.</em></p>
          <div className="media">
            {project?.mainImage ? (
              <Image
                src={urlFor(project.mainImage).width(1600).height(700).url()}
                alt="Aviation & Thoracic Aortic Disease"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            ) : (
              <div className="anemone" style={{ width: '100%', height: '100%', filter: 'hue-rotate(200deg) brightness(.9)' }}>
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
              <h2>What is this project?</h2>
              <p>This project investigates whether commercial air travel is safe for patients with thoracic aortic disease, including aortic aneurysm and aortic dissection.</p>
              <p>Despite being a common question in clinical practice, there is currently no clear evidence or guidance available.</p>
              <p>This project combines patient-reported data, clinical expertise, and physiological insights to better understand potential risks and support clinical decision-making.</p>
            </div>
            <aside>
              <div className="eyebrow">Our mission</div>
              <h4>To provide clear, evidence-informed guidance on air travel for patients with thoracic aortic disease — improving counselling, reducing uncertainty, and supporting safe, informed decisions.</h4>
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
              <p>Patients with aortic disease frequently ask whether they can safely fly, yet clinicians lack consistent guidance.</p>
              <p>As a result, advice varies between hospitals and physicians; patients may either avoid travel unnecessarily or take unassessed risks; and important aspects of quality of life are affected.</p>
              <p>This project aims to close this gap by generating real-world data and translating it into practical recommendations.</p>
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
                <li>Collect large-scale patient-reported data on flying behaviour and concerns</li>
                <li>Assess how often patients travel and how this changes after diagnosis</li>
                <li>Evaluate what advice patients receive from healthcare providers</li>
                <li>Link travel patterns to clinical characteristics such as aortic size and diagnosis</li>
                <li>Develop a physiology-based framework for risk assessment</li>
              </ul>
            </div>
            <div className="block">
              <div className="eyebrow">Scientific foundation</div>
              <h3>How the science holds up.</h3>
              <p>This project is a collaboration between cardiothoracic surgeons, aortic specialists, and aviation medicine experts.</p>
              <p>It builds on established knowledge of aortic biomechanics and blood pressure variability, clinical experience from high-volume aortic centres, and insights from aerospace medicine on the physiological effects of flight.</p>
              <p>By integrating these perspectives, the project aims to move beyond anecdotal evidence toward structured, clinically relevant guidance.</p>
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
              <div className="tag">01 — For patients</div>
              <h4>For patients</h4>
              <p>More clarity and confidence in decisions about travel and daily life.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">02 — For clinicians</div>
              <h4>For clinicians</h4>
              <p>A practical framework to guide consistent patient counselling.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">03 — For research</div>
              <h4>For research</h4>
              <p>First large-scale dataset linking aortic disease and air travel behaviour.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">04 — For healthcare</div>
              <h4>For healthcare</h4>
              <p>Improved quality of life and reduction of unnecessary restrictions in chronic disease.</p>
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
              <div className="v">800+</div>
              <div className="l">Survey responses collected</div>
            </div>
            <div className="fact">
              <div className="v">Multi-disciplinary</div>
              <div className="l">Aortic + aviation medicine</div>
            </div>
            <div className="fact">
              <div className="v">3+</div>
              <div className="l">Collaborating countries</div>
            </div>
            <div className="fact">
              <div className="v">2026</div>
              <div className="l">Project launched</div>
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
            <Link href="/projects/gen-taad" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(-15deg) brightness(.9)' }}></div>
              <div className="body">
                <span className="tag">Genomics · 2024</span>
                <h3>Genetic Insights into Aortic Disease (GEN-TAAD)</h3>
                <p>Understanding genetic risk to predict and prevent life-threatening aortic disease.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/apecx" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(60deg) brightness(.85)' }}></div>
              <div className="body">
                <span className="tag">Clinical · 2026</span>
                <h3>APECx Study</h3>
                <p>Understanding global cardiac surgery practices to improve outcomes and standardise care worldwide.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/genie-ta" className="project">
              <div className="thumb anemone" style={{ filter: 'saturate(.7) brightness(.95)' }}></div>
              <div className="body">
                <span className="tag">Genomics · 2025</span>
                <h3>Genetic &amp; Epigenomic Insights into Thoracic Aortopathy (GENIE-TA)</h3>
                <p>Uncovering hidden genetic mechanisms behind aortic disease.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/data-donation-monitoring-ddm" className="project">
              <div className="thumb anemone" style={{}}></div>
              <div className="body">
                <span className="tag">Data infrastructure · 2026</span>
                <h3>Data Donation Platform (DDM)</h3>
                <p>Building inclusive, real-world health data to improve prevention and research.</p>
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
