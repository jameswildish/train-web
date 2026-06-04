import Link from 'next/link'

export const metadata = { title: 'After the Storm — TRAIN Projects' }

export default function AfterTheStormPage() {
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">After the Storm</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Patient experience · 2026</div>
          <h1>After the Storm</h1>
          <p className="tagline">Understanding the silent, often invisible experience of recovery beyond survival.</p>
          <div className="media anemone" style={{ filter: 'hue-rotate(20deg) brightness(.85)' }}>
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
              <h2>What is After the Storm?</h2>
              <p>After the Storm is a research and artistic project exploring how patients experience life after an aortic dissection.</p>
              <p>While acute treatment is often successful, many patients describe a lasting change in how they perceive their body — a quiet, ongoing awareness of heartbeat, breathing, and physical sensations.</p>
              <p>These experiences are rarely captured in clinical care, yet they shape daily life in profound ways.</p>
            </div>
            <aside>
              <div className="eyebrow">Our mission</div>
              <h4>To make the invisible experience of life after aortic dissection visible, shareable, and understood — by translating lived experience into sound and collective listening.</h4>
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
              <p>Recovery after aortic dissection extends far beyond physical healing.</p>
              <p>Many patients describe a persistent awareness of their body — listening to their heartbeat, sensing subtle changes, and interpreting signals in a new way.</p>
              <p>This form of vigilance is not easily captured in medical follow-up, yet it deeply influences quality of life.</p>
              <p>After the Storm brings attention to this often overlooked dimension of recovery.</p>
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
                <li>Work with patients as co-creators to explore lived experiences after dissection</li>
                <li>Record voice, breath, silence, and environmental sounds</li>
                <li>Translate sensory experiences into sound-based compositions</li>
                <li>Develop collective soundscapes reflecting life after aortic dissection</li>
                <li>Create new ways to share patient experiences beyond clinical language</li>
              </ul>
            </div>
            <div className="block">
              <div className="eyebrow">Scientific foundation</div>
              <h3>How the science holds up.</h3>
              <p>After the Storm is developed within the TARGet research group and builds on extensive clinical and scientific expertise in aortic disease.</p>
              <p>The project brings together clinicians, researchers, and patients, in collaboration with international academic partners — introducing an innovative approach at the intersection of medicine, patient experience, and art.</p>
              <p>By combining clinical insight with artistic practice, the project explores new ways of understanding recovery after cardiovascular events.</p>
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
              <p>Offering recognition and shared understanding of experiences that are often difficult to express.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">02 — For researchers</div>
              <h4>For researchers</h4>
              <p>Opening new perspectives on patient experience beyond traditional clinical measures.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">03 — For healthcare</div>
              <h4>For healthcare</h4>
              <p>Encouraging a broader view of recovery that includes sensory and experiential dimensions.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">04 — For society</div>
              <h4>For society</h4>
              <p>Increasing awareness of the long-term impact of life-threatening cardiovascular events.</p>
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
              <div className="v">12</div>
              <div className="l">Participants with lived experience</div>
            </div>
            <div className="fact">
              <div className="v">10</div>
              <div className="l">Month co-creation trajectory</div>
            </div>
            <div className="fact">
              <div className="v">7</div>
              <div className="l">Collaborative sound sessions</div>
            </div>
            <div className="fact">
              <div className="v">4</div>
              <div className="l">Sound-based compositions developed</div>
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
            <Link href="/projects/sukh" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(80deg) brightness(.85)' }}></div>
              <div className="body">
                <span className="tag">Wellbeing · 2025</span>
                <h3>SUKH Healing Garden</h3>
                <p>Nature-inspired environments for recovery, wellbeing, and resilience.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/ddm" className="project">
              <div className="thumb anemone"></div>
              <div className="body">
                <span className="tag">Data infrastructure · 2026</span>
                <h3>Data Donation Platform (DDM)</h3>
                <p>Building inclusive, real-world health data to improve prevention and research.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/gen-taad" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(-15deg) brightness(.9)' }}></div>
              <div className="body">
                <span className="tag">Genomics · 2024</span>
                <h3>Genetic Insights into Aortic Disease (GEN-TAAD)</h3>
                <p>Understanding genetic risk to predict and prevent life-threatening aortic disease.</p>
                <span className="more">Learn more <span className="arrow">→</span></span>
              </div>
            </Link>
            <Link href="/projects/trainletic" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(120deg) brightness(.8)' }}></div>
              <div className="body">
                <span className="tag">Performance · 2024</span>
                <h3>TRAINletic</h3>
                <p>Optimising performance through science-driven health insights.</p>
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
