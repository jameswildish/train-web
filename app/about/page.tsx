import Link from 'next/link'

export const metadata = { title: 'About — TRAIN' }

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="science-hero" data-screen-label="01 About Hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">About</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Built by surgeons · Driven by science</div>
          <h1>Two sisters. One mission. <span style={{ color: 'var(--muted)', fontWeight: 400 }}>Bridging advanced medical research and everyday health practices.</span></h1>
          <p className="lead">TRAIN Health Awareness was founded by Prof. Dr. Nimrat Grewal and Dr. Simran Grewal — two surgeon sisters combining clinical care, scientific research, and a mission to improve long-term health.</p>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section data-screen-label="02 Founders Story">
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
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Our story</div>
              <h2>From the operating theatre to your daily routine.</h2>
              <div className="quote">
                As doctors, we see preventable health risks every day. TRAIN helps you understand your body, improve your daily habits, and stay healthier — using science and data.
              </div>
              <p className="by">— Founders, TRAIN Health Awareness</p>
              <p style={{ marginTop: '28px', maxWidth: '480px', fontSize: '16px', lineHeight: 1.6, color: 'var(--ink-2)' }}>
                Years of clinical work showed us the same pattern: most of the chronic disease we treat is rooted in modifiable lifestyle factors — yet most lifestyle advice is generic, ungrounded, or impossible to apply day-to-day. We built TRAIN to close that gap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION / VISION / APPROACH ============ */}
      <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} data-screen-label="03 MVA">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '16px' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>What we stand for</div>
              <h2>Mission, vision, and how we work.</h2>
            </div>
            <p>The principles that guide every research project, every habit we recommend, and every line of code in the TRAIN app.</p>
          </div>

          <div className="mva-grid">
            <div className="mva-card">
              <div className="eyebrow">01 / Mission</div>
              <h3>Bridge the gap between science and habits.</h3>
              <p>To translate advanced medical research into everyday health practices — empowering individuals with the knowledge and tools they need to take control of their health and prevent non-communicable diseases.</p>
            </div>
            <div className="mva-card">
              <div className="eyebrow">02 / Vision</div>
              <h3>A world of informed, proactive individuals.</h3>
              <p>A world where individuals are well-informed about their health risks and proactive in managing them — supported by a community of engaged people who can make better health decisions backed by the latest research.</p>
            </div>
            <div className="mva-card">
              <div className="eyebrow">03 / Approach</div>
              <h3>Cutting-edge research, practical health advice.</h3>
              <p>We integrate clinical and scientific insight with everyday application — through the TRAIN Health app and our research portfolio, covering cardiovascular and musculoskeletal health, risk-factor management, and ongoing studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BY THE NUMBERS ============ */}
      <section data-screen-label="04 Numbers">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>By the numbers</div>
              <h2>Two decades of clinical research and translational work.</h2>
            </div>
            <p>Our work spans genetic and molecular research, real-world data collection, and lifestyle-based prevention — across institutions worldwide.</p>
          </div>

          <div className="facts-grid">
            <div className="fact">
              <div className="v">20+</div>
              <div className="l">Years of research and innovation</div>
            </div>
            <div className="fact">
              <div className="v">100+</div>
              <div className="l">Peer-reviewed scientific publications</div>
            </div>
            <div className="fact">
              <div className="v">50+</div>
              <div className="l">Collaborating medical &amp; research institutions</div>
            </div>
            <div className="fact">
              <div className="v">9</div>
              <div className="l">Active research programmes</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }} data-screen-label="05 Values">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>What guides us</div>
              <h2>Our values.</h2>
            </div>
            <p>Non-negotiables we hold ourselves to — in the lab, in the clinic, and in the product.</p>
          </div>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
              </div>
              <h4>Evidence over hype</h4>
              <p>Every habit we recommend traces back to peer-reviewed research. No trends, no shortcuts, no claims we can't cite.</p>
            </div>
            <div className="mission-card">
              <div className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
              </div>
              <h4>Privacy by design</h4>
              <p>Your health data is yours. We collect what we need, encrypt what we hold, and never sell it. Period.</p>
            </div>
            <div className="mission-card">
              <div className="ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5M14 19c0-2 2.5-4 5-4"/></svg>
              </div>
              <h4>Inclusive science</h4>
              <p>Health data has historically come from narrow populations. We build for diversity — across ages, ethnicities, and life contexts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section data-screen-label="06 Timeline">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>How we got here</div>
              <h2>A short timeline.</h2>
            </div>
            <p>From PhD research to a clinical app — the milestones that built TRAIN.</p>
          </div>

          <div className="timeline">
            <div className="t-item">
              <div className="t-year">2008</div>
              <div className="t-body">
                <h4>Doctoral research begins</h4>
                <p>Foundational PhD work on aortic pathology, bicuspid aortic valve, and the histology of thoracic aortic disease.</p>
              </div>
            </div>
            <div className="t-item">
              <div className="t-year">2016</div>
              <div className="t-body">
                <h4>TARGet research group founded</h4>
                <p>An international academic initiative bringing surgeons, physicians, data scientists, and researchers under one translational research umbrella.</p>
              </div>
            </div>
            <div className="t-item">
              <div className="t-year">2020</div>
              <div className="t-body">
                <h4>Lifestyle medicine focus</h4>
                <p>Shift from purely surgical research toward integrated lifestyle and prevention — recognising that 85% of chronic disease is modifiable.</p>
              </div>
            </div>
            <div className="t-item">
              <div className="t-year">2024</div>
              <div className="t-body">
                <h4>GEN-TAAD &amp; TRAINletic launch</h4>
                <p>Polygenic risk scoring for aortic disease (600,000+ individuals); first elite-athlete pilot with the Dutch National Cricket Team.</p>
              </div>
            </div>
            <div className="t-item">
              <div className="t-year">2026</div>
              <div className="t-body">
                <h4>TRAIN Health Awareness app</h4>
                <p>Public launch of the science-driven lifestyle app — translating two decades of research into daily, personalised habits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta" data-screen-label="07 CTA">
        <div className="wrap">
          <div className="cta-card">
            <h2>Want to work with us?</h2>
            <div className="right">
              <p>We collaborate with clinicians, researchers, institutions, and patients worldwide. If your work intersects with ours, we'd like to hear from you.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-primary">Get in touch <span className="arrow">→</span></a>
                <Link href="/collaborators" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>See collaborators</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
