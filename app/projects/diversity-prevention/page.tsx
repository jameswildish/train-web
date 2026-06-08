import Link from 'next/link'

export const metadata = { title: 'Diversity & Prevention — TRAIN Projects' }

export default function DiversityPreventionPage() {
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">Diversity &amp; Prevention</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Community · 2024</div>
          <h1>Diversity &amp; Prevention</h1>
          <p className="tagline"><em>Community-based health initiatives for inclusive prevention.</em></p>
          <div className="media anemone" style={{ filter: 'hue-rotate(-40deg) brightness(.9)' }}>
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
              <h2>What is Diversity &amp; Prevention?</h2>
              <p>Diversity &amp; Prevention is a community-based initiative focused on reducing health inequalities by making preventive healthcare accessible, relevant, and culturally sensitive.</p>
              <p>Rather than expecting individuals to engage with traditional healthcare systems, we bring prevention directly into trusted community spaces — including religious and cultural centres — where people already gather, connect, and feel at home.</p>
              <p>This approach allows us to reach populations that are often underserved by conventional prevention programmes and to engage them in a meaningful and sustainable way.</p>
            </div>
            <aside>
              <div className="eyebrow">Our mission</div>
              <h4>To reduce health disparities by empowering individuals and families with knowledge, awareness, and practical tools to take control of their health — within the context of their own communities.</h4>
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
              <p>Health inequalities remain one of the biggest challenges in modern healthcare.</p>
              <p>People with a migration background are disproportionately affected by cardiovascular disease, diabetes, and other lifestyle-related conditions — often at a younger age and with worse outcomes.</p>
              <p>At the same time, existing prevention programmes frequently fail to reach these groups due to language barriers, limited health literacy, and lack of trust in formal healthcare systems.</p>
              <p>Effective prevention requires a different approach: one that is inclusive, accessible, and rooted in trust. Community spaces — such as mosques and cultural centres — offer exactly that environment.</p>
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
                <li>Organise community-based health days in trusted environments (e.g. places of worship)</li>
                <li>Provide accessible education on lifestyle, nutrition, mental health, and cardiovascular prevention</li>
                <li>Facilitate open dialogue between healthcare professionals and community members</li>
                <li>Increase awareness through practical, non-diagnostic health insights</li>
                <li>Co-create solutions together with participants to ensure cultural relevance and impact</li>
              </ul>
            </div>
            <div className="block">
              <div className="eyebrow">Scientific foundation</div>
              <h3>How the science holds up.</h3>
              <p>Diversity &amp; Prevention is developed by the TARGet research group at Amsterdam UMC, combining clinical expertise with community-based research.</p>
              <p>The approach is built on years of experience in inclusive prevention research, co-creation with communities, and participatory and culturally sensitive methodologies.</p>
              <p>By integrating real-world insights with scientific expertise, the programme creates a bridge between healthcare, research, and society.</p>
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
              <p>Greater awareness of health risks and practical steps toward healthier lifestyles.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">02 — For families</div>
              <h4>For families</h4>
              <p>Breaking intergenerational patterns of unhealthy habits and stress.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">03 — For communities</div>
              <h4>For communities</h4>
              <p>Stronger social cohesion and increased openness around health and wellbeing.</p>
            </div>
            <div className="impact-cell">
              <div className="tag">04 — For healthcare</div>
              <h4>For healthcare</h4>
              <p>Improved reach of preventive care and reduced long-term disease burden.</p>
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
              <div className="v">15,000+</div>
              <div className="l">Participants and growing</div>
            </div>
            <div className="fact">
              <div className="v">20+</div>
              <div className="l">Community health events</div>
            </div>
            <div className="fact">
              <div className="v">10+</div>
              <div className="l">Collaborating institutions</div>
            </div>
            <div className="fact">
              <div className="v">2024</div>
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
            <Link href="/projects/trainletic" className="project">
              <div className="thumb anemone" style={{ filter: 'hue-rotate(120deg) brightness(.8)' }}></div>
              <div className="body">
                <span className="tag">Performance · 2024</span>
                <h3>TRAINletic</h3>
                <p>Optimising performance through science-driven health insights.</p>
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
