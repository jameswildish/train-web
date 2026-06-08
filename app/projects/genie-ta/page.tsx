import Link from 'next/link'

export const metadata = { title: 'Genetic & Epigenomic Insights into Thoracic Aortopathy (GENIE-TA) — TRAIN Projects' }

export default function GenieTaPage() {
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">Genetic &amp; Epigenomic Insights into Thoracic Aortopathy</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Genomics · 2025</div>
          <h1>Genetic &amp; Epigenomic Insights into Thoracic Aortopathy (GENIE-TA)</h1>
          <p className="tagline">Uncovering hidden genetic mechanisms behind aortic disease.</p>
          <div className="media anemone" style={{ filter: 'saturate(.7) brightness(.95)' }}>
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
              <h2>What is GENIE-TA?</h2>
              <p>GENIE-TA is a translational research project aimed at identifying previously undetected genetic causes of thoracic aortic disease.</p>
              <p>While current genetic testing explains only a minority of cases, many patients remain without a clear diagnosis.</p>
              <p>GENIE-TA uses whole genome sequencing combined with advanced epigenomic analysis to explore overlooked regions of the genome and uncover hidden disease mechanisms.</p>
            </div>
            <aside>
              <div className="eyebrow">Our mission</div>
              <h4>To identify novel genetic variants and mechanisms underlying aortic disease — and translate these discoveries into improved diagnostics, risk prediction, and future therapies.</h4>
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
              <p>Thoracic aortic aneurysms and dissections are often silent until they become life-threatening.</p>
              <p>Despite advances in genetic testing, <strong>only 15–20% of patients</strong> currently receive a genetic diagnosis.</p>
              <p>This leaves the majority of patients without a clear explanation for their disease — limiting early detection, family screening, and prevention.</p>
              <p>GENIE-TA addresses this gap by investigating genetic mechanisms that are not captured by standard testing approaches.</p>
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
                <li>Perform whole genome sequencing in patients without a known genetic cause</li>
                <li>Investigate non-coding regions of the genome, including regulatory elements</li>
                <li>Identify deep intronic variants that may affect gene splicing</li>
                <li>Detect structural genetic variation not captured by standard diagnostics</li>
                <li>Integrate genomic data with epigenomic and chromatin datasets</li>
                <li>Explore candidate genes based on prior GWAS findings</li>
              </ul>
            </div>
            <div className="block">
              <div className="eyebrow">Scientific foundation</div>
              <h3>How the science holds up.</h3>
              <p>GENIE-TA is embedded within a strong translational research framework combining clinical genetics, cardiothoracic surgery, and experimental cardiology.</p>
              <p>The project integrates whole genome sequencing data with existing epigenomic datasets, enabling a comprehensive analysis of both coding and non-coding regions of the genome.</p>
              <p>This approach allows us to move beyond traditional genetic testing and uncover mechanisms that have previously remained hidden.</p>
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
              <p>Increasing the likelihood of receiving a genetic diagnosis and enabling family screening.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">02 — For researchers</div>
              <h4>For researchers</h4>
              <p>Identifying new disease mechanisms and genetic pathways.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">03 — For healthcare</div>
              <h4>For healthcare</h4>
              <p>Improving interpretation of genetic testing and clinical decision-making.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">04 — For society</div>
              <h4>For society</h4>
              <p>Improving early detection and prevention of life-threatening events.</p>
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
              <div className="v">130</div>
              <div className="l">Young patients without known genetic cause</div>
            </div>
            <div className="fact">
              <div className="v">WGS</div>
              <div className="l">Whole genome sequencing</div>
            </div>
            <div className="fact">
              <div className="v">2+</div>
              <div className="l">Collaborating institutions</div>
            </div>
            <div className="fact">
              <div className="v">2025</div>
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
            <Link href="/projects/data-donation-monitoring-ddm" className="project">
              <div className="thumb anemone"></div>
              <div className="body">
                <span className="tag">Data infrastructure · 2026</span>
                <h3>Data Donation Platform (DDM)</h3>
                <p>Building inclusive, real-world health data to improve prevention and research.</p>
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
            <Link href="/projects/aviation" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(200deg) brightness(.9)' }}></div>
              <div className="body">
                <span className="tag">Clinical · 2026</span>
                <h3>Aviation &amp; Thoracic Aortic Disease</h3>
                <p>Understanding the safety of air travel in patients with aortic disease.</p>
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
