import Link from 'next/link'

export const metadata = { title: 'Genetic Insights into Aortic Disease (GEN-TAAD) — TRAIN Projects' }

export default function GenTaadPage() {
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">Genetic Insights into Aortic Disease</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Genomics · 2024</div>
          <h1>Genetic Insights into Aortic Disease (GEN-TAAD)</h1>
          <p className="tagline">Understanding genetic risk to predict and prevent life-threatening aortic disease.</p>
          <div className="media anemone" style={{ filter: 'hue-rotate(-15deg) brightness(.9)' }}>
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
              <h2>What is GEN-TAAD?</h2>
              <p>GEN-TAAD is a large-scale research initiative focused on uncovering the genetic and molecular mechanisms underlying thoracic aortic aneurysms and dissections.</p>
              <p>By combining genomic data, clinical information, and advanced molecular techniques, the project aims to better understand why some individuals develop life-threatening aortic disease — while others do not.</p>
              <p>The ultimate goal is to move beyond generalised care toward personalised risk prediction and targeted treatment strategies.</p>
            </div>
            <aside>
              <div className="eyebrow">Our mission</div>
              <h4>To identify genetic and biological mechanisms driving aortic disease and translate these insights into personalised risk prediction and future treatment strategies.</h4>
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
              <p>Thoracic aortic dissections are life-threatening events with extremely high mortality if untreated. Current clinical decision-making is largely based on aortic diameter — a limited and often insufficient predictor of risk.</p>
              <p>More than <strong>85% of dissections occur below current surgical thresholds</strong> — meaning high-risk patients are missed, while low-risk patients undergo unnecessary major surgery.</p>
              <p>GEN-TAAD addresses this gap by developing more accurate, personalised approaches to risk prediction.</p>
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
                <li>Conduct large-scale genome-wide association studies (GWAS)</li>
                <li>Identify genetic variants linked to aortic disease risk</li>
                <li>Develop polygenic risk scores for personalised prediction</li>
                <li>Integrate genetic, clinical, and epidemiological data</li>
                <li>Perform single-cell and multi-omics analyses in aortic tissue</li>
                <li>Validate findings in cellular and experimental models</li>
              </ul>
            </div>
            <div className="block">
              <div className="eyebrow">Scientific foundation</div>
              <h3>How the science holds up.</h3>
              <p>GEN-TAAD is built on a translational research framework that connects clinical patient data, large-scale genomic datasets, multi-omics analysis (including RNA sequencing), and functional validation in stem cell and animal models.</p>
              <p>This integrated approach allows us to move from genetic discovery → biological understanding → clinical application.</p>
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
              <p>Earlier identification of those at high risk of aortic complications.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">02 — For researchers</div>
              <h4>For researchers</h4>
              <p>New insights into disease mechanisms and therapeutic targets.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">03 — For healthcare</div>
              <h4>For healthcare</h4>
              <p>Potential reduction in unnecessary surgeries and improved outcomes.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">04 — For society</div>
              <h4>For society</h4>
              <p>A shift toward precision medicine in cardiovascular disease.</p>
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
              <div className="v">600,000+</div>
              <div className="l">Individuals included</div>
            </div>
            <div className="fact">
              <div className="v">18,000+</div>
              <div className="l">Aneurysm cases studied</div>
            </div>
            <div className="fact">
              <div className="v">3,400+</div>
              <div className="l">Dissection patients</div>
            </div>
            <div className="fact">
              <div className="v">15+</div>
              <div className="l">Collaborating centres worldwide</div>
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
              <div className="thumb anemone"></div>
              <div className="body">
                <span className="tag">Data infrastructure · 2026</span>
                <h3>Data Donation Platform (DDM)</h3>
                <p>Building inclusive, real-world health data to improve prevention and research.</p>
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
