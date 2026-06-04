import Link from 'next/link'

export const metadata = { title: 'Data Donation Platform (DDM) — TRAIN Projects' }

export default function DDMPage() {
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">Data Donation Platform</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Data infrastructure · 2026</div>
          <h1>Data Donation Platform (DDM)</h1>
          <p className="tagline">Building inclusive, real-world health data to improve prevention and research.</p>
          <div className="media anemone">
            <div className="badges">
              <span className="badge"><span className="dot"></span> TARGet Research Group</span>
              <span className="badge"><span className="dot"></span> Translational</span>
              <span className="badge"><span className="dot"></span> Peer-reviewed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="proj-intro">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Overview</div>
              <h2>What is DDM?</h2>
              <p>The Data Donation Platform (DDM) is a large-scale initiative designed to collect real-world health, lifestyle, and wearable data from diverse populations.</p>
              <p>Its goal is to improve our understanding of health and disease, and to enable more inclusive and effective prevention strategies.</p>
            </div>
            <aside>
              <div className="eyebrow">Our mission</div>
              <h4>To create the most inclusive and comprehensive health dataset possible — one that reflects the real world and drives meaningful scientific and societal impact.</h4>
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
              <p>Most existing health data is derived from relatively homogeneous populations and controlled clinical settings.</p>
              <p>As a result, our understanding of disease does not always reflect real-world diversity — leading to gaps in prevention, diagnosis, and treatment.</p>
              <p>The DDM addresses this by collecting data from individuals across different backgrounds, lifestyles, and environments, helping to build a more complete and inclusive picture of health.</p>
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
                <li>Collect real-world data through digital questionnaires, lifestyle tracking, and wearable devices</li>
                <li>Capture a wide range of health, behavioural, and environmental variables</li>
                <li>Ensure diversity and representation across populations</li>
                <li>Build longitudinal datasets to study health over time</li>
                <li>Enable research into prevention, risk stratification, and personalised health strategies</li>
              </ul>
            </div>
            <div className="block">
              <div className="eyebrow">Scientific foundation</div>
              <h3>How the science holds up.</h3>
              <p>The Data Donation Platform is closely connected to the TARGet Research Group, an academic initiative led by clinician-scientists and researchers with expertise in cardiovascular and preventive health.</p>
              <p>All data collection and management are conducted within a research framework, following strict ethical standards and privacy-by-design principles.</p>
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
              <div className="tag">01 — For individuals</div>
              <h4>For individuals</h4>
              <p>Empowering people to contribute to science and gain personalised insights into their health.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">02 — For researchers</div>
              <h4>For researchers</h4>
              <p>Enabling high-quality, diverse data for breakthrough discoveries and better risk prediction.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">03 — For healthcare</div>
              <h4>For healthcare</h4>
              <p>Supporting the development of more effective, targeted, and equitable interventions.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">04 — For society</div>
              <h4>For society</h4>
              <p>Driving data-driven policies and preventive strategies that reduce the global burden of disease.</p>
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
              <div className="v">10,000+</div>
              <div className="l">Participants and growing</div>
            </div>
            <div className="fact">
              <div className="v">20+</div>
              <div className="l">Data types collected</div>
            </div>
            <div className="fact">
              <div className="v">15+</div>
              <div className="l">Collaborating institutions worldwide</div>
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
            <Link href="/projects/apecx" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(60deg) brightness(.85)' }}></div>
              <div className="body">
                <span className="tag">Clinical · 2026</span>
                <h3>APECx Study</h3>
                <p>Understanding global cardiac surgery practices to improve outcomes and standardise care worldwide.</p>
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
