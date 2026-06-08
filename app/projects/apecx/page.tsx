import Link from 'next/link'

export const metadata = { title: 'APECx Study — TRAIN Projects' }

export default function APECxPage() {
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">APECx Study</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Clinical · 2026</div>
          <h1>APECx Study</h1>
          <p className="tagline">Understanding global cardiac surgery practices to improve outcomes and standardise care worldwide.</p>
          <div className="media anemone" style={{ filter: 'hue-rotate(60deg) brightness(.85)' }}>
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
              <h2>What is APECx?</h2>
              <p>APECx is an adaptive, international, multicentre observational study designed to map real-world anaesthesia, perfusion, and surgical practices in adult cardiac surgery.</p>
              <p>By collecting high-quality global data, APECx aims to better understand variation in perioperative care and identify opportunities to improve patient outcomes.</p>
              <p>The study is investigator-initiated and led by Amsterdam UMC, in collaboration with clinicians and researchers worldwide.</p>
            </div>
            <aside>
              <div className="eyebrow">Our mission</div>
              <h4>To create a global, data-driven understanding of cardiac surgery practices — and translate this knowledge into safer, more effective, and more equitable care for patients worldwide.</h4>
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
              <p>Cardiac surgery outcomes vary widely across centres and regions, not only due to patient factors but also differences in perioperative management.</p>
              <p>Despite advances in surgical techniques, there is still limited high-quality evidence guiding anaesthesia, perfusion, and intraoperative strategies.</p>
              <p>This variation directly impacts complications such as acute kidney injury, pulmonary complications, ICU stay, and mortality.</p>
              <p>APECx addresses this gap by systematically studying global practice variation and identifying modifiable factors that can improve outcomes.</p>
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
                <li>Collect real-world perioperative data in cardiac surgery patients worldwide</li>
                <li>Analyse global variation in anaesthesia, perfusion, and surgical practices</li>
                <li>Identify modifiable factors associated with clinical outcomes</li>
                <li>Study differences across regions, healthcare systems, and patient populations</li>
                <li>Generate evidence to inform future guidelines and clinical trials</li>
              </ul>
            </div>
            <div className="block">
              <div className="eyebrow">Scientific foundation</div>
              <h3>How the science holds up.</h3>
              <p>APECx is an adaptive, prospective cohort study conducted across cardiac surgery centres worldwide. Study duration: ~10 years with multiple evolving phases.</p>
              <p>Each phase focuses on a specific research question (e.g. ventilation strategies). Data collection occurs twice per year in short, structured inclusion periods. All data are derived from routine clinical care — minimal burden, no added risk.</p>
              <p>The adaptive design allows continuous learning, enabling the study to evolve as new questions and evidence gaps emerge.</p>
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
              <p>Improving patient outcomes by identifying safer perioperative strategies and reducing complications.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">02 — For researchers</div>
              <h4>For researchers</h4>
              <p>Providing a global dataset to understand practice variation and generate high-impact research.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">03 — For healthcare</div>
              <h4>For healthcare</h4>
              <p>Supporting more consistent, evidence-based care across institutions and regions.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">04 — For society</div>
              <h4>For society</h4>
              <p>Driving standardisation and equity in cardiac surgery outcomes worldwide.</p>
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
              <div className="v">35+</div>
              <div className="l">Collaborating institutions worldwide</div>
            </div>
            <div className="fact">
              <div className="v">15+</div>
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
            <Link href="/projects/data-donation-monitoring-ddm" className="project">
              <div className="thumb anemone"></div>
              <div className="body">
                <span className="tag">Data infrastructure · 2026</span>
                <h3>Data Donation Platform (DDM)</h3>
                <p>Building inclusive, real-world health data to improve prevention and research.</p>
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
