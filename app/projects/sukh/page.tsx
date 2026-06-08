import Link from 'next/link'

export const metadata = { title: 'SUKH Healing Garden — TRAIN Projects' }

export default function SUKHPage() {
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">SUKH Healing Garden</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Wellbeing · 2025</div>
          <h1>SUKH Healing Garden</h1>
          <p className="tagline">Nature-inspired environments for recovery, wellbeing, and resilience.</p>
          <div className="media anemone" style={{ filter: 'hue-rotate(80deg) brightness(.85)' }}>
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
              <h2>What is the SUKH Healing Garden?</h2>
              <p>SUKH Healing Oasis is a nature-inspired concept designed to support wellbeing, recovery, and mental restoration in demanding environments.</p>
              <p>It creates spaces where people can temporarily step out of their surroundings and enter a calming, restorative environment — supporting both physical and mental balance.</p>
              <p>By combining nature, sensory experience, and gentle behavioural support, the concept encourages relaxation, reflection, and positive lifestyle habits.</p>
            </div>
            <aside>
              <div className="eyebrow">Our mission</div>
              <h4>To explore how nature, environment, and lifestyle can be integrated into everyday settings to improve wellbeing, resilience, and recovery in a sustainable and scalable way.</h4>
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
              <p>Modern environments — including healthcare, work, and urban settings — can be overwhelming and stressful, leading to increased stress and mental fatigue, reduced recovery capacity, sleep disturbances, and lower overall wellbeing.</p>
              <p>At the same time, there is growing evidence that environment and lifestyle play a key role in how people feel, function, and recover.</p>
              <p>SUKH Healing Oasis responds to this by reintroducing nature and sensory balance into daily environments.</p>
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
                <li>Design nature-inspired environments that promote calm, focus, and recovery</li>
                <li>Use multi-sensory experiences (light, sound, materials, greenery) to influence mood and behaviour</li>
                <li>Encourage movement, reflection, and behavioural awareness</li>
                <li>Explore how environments can support personalised wellbeing experiences</li>
                <li>Create pathways and spaces that invite people to step away, reset, and recharge</li>
              </ul>
            </div>
            <div className="block">
              <div className="eyebrow">Scientific foundation</div>
              <h3>How the science holds up.</h3>
              <p>The concept is grounded in insights from biophilic design, environmental psychology, and lifestyle and behavioural science.</p>
              <p>Research shows that nature-inspired environments can reduce stress and mental fatigue, improve mood and perceived wellbeing, support cognitive recovery and focus, and enhance overall resilience.</p>
              <p>These principles are translated into practical, real-world environments that are accessible and adaptable.</p>
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
              <p>Improved sense of calm and wellbeing, better recovery from stress, and enhanced focus and mental clarity.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">02 — For organisations</div>
              <h4>For organisations</h4>
              <p>Healthier environments, improved experience and satisfaction, and a potential reduction in stress-related burden.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">03 — For research</div>
              <h4>For research</h4>
              <p>Insight into the role of environment in wellbeing, and opportunities for data-driven, personalised approaches.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">04 — For society</div>
              <h4>For society</h4>
              <p>Contribution to healthier, more sustainable environments and a shift toward preventive, wellbeing-oriented design.</p>
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
              <div className="v">Multi-sensory</div>
              <div className="l">Nature-inspired environments</div>
            </div>
            <div className="fact">
              <div className="v">Inclusive</div>
              <div className="l">Designed for diverse users, neurodiversity-aware</div>
            </div>
            <div className="fact">
              <div className="v">Integrated</div>
              <div className="l">Combines design, behaviour, and environment</div>
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
            <Link href="/projects/after-the-storm" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(20deg) brightness(.85)' }}></div>
              <div className="body">
                <span className="tag">Patient experience · 2026</span>
                <h3>After the Storm</h3>
                <p>Understanding the silent, often invisible experience of recovery beyond survival.</p>
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
            <Link href="/projects/trainletic" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(120deg) brightness(.8)' }}></div>
              <div className="body">
                <span className="tag">Performance · 2024</span>
                <h3>TRAINletic</h3>
                <p>Optimising performance through science-driven health insights.</p>
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
