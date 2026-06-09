'use client'

import Link from 'next/link'

export default function ContactPage() {
  return (
    <>
      <section className="science-hero" data-screen-label="01 Contact Hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Contact</span>
          </div>
          <h1 style={{ marginTop: '40px' }}>Let's talk.</h1>
          <p className="lead">Press, partnerships, research collaborations, or general questions — we'd love to hear from you.</p>
        </div>
      </section>

      {/* ============ CONTACT GRID ============ */}
      <section style={{ padding: '56px 0 96px' }} data-screen-label="02 Contact Grid">
        <div className="wrap">
          <div className="contact-grid">

            {/* Left: form */}
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="eyebrow" style={{ marginBottom: '20px' }}>Send a message</div>

              <div className="form-row two">
                <label>
                  <span className="lbl">First name</span>
                  <input type="text" placeholder="Your first name" />
                </label>
                <label>
                  <span className="lbl">Last name</span>
                  <input type="text" placeholder="Your last name" />
                </label>
              </div>

              <div className="form-row two">
                <label>
                  <span className="lbl">Email</span>
                  <input type="email" placeholder="you@email.com" />
                </label>
                <label>
                  <span className="lbl">Organisation</span>
                  <input type="text" placeholder="Optional" />
                </label>
              </div>

              <label>
                <span className="lbl">What's this about?</span>
                <select>
                  <option>General enquiry</option>
                  <option>Research collaboration</option>
                  <option>Press &amp; media</option>
                  <option>Partnership &amp; institutional</option>
                  <option>App support</option>
                  <option>Patient enquiry</option>
                </select>
              </label>

              <label>
                <span className="lbl">Message</span>
                <textarea rows={6} placeholder="Tell us a little about what you're interested in…"></textarea>
              </label>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '12px' }}>Send message <span className="arrow">→</span></button>
              <p className="form-note">We aim to respond within two working days. For urgent press enquiries, use the direct line below.</p>
            </form>

            {/* Right: contact cards */}
            <aside className="contact-cards">

              <a href="mailto:hello@trainhealth.com" className="contact-card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                </span>
                <span className="body">
                  <span className="title">General enquiries</span>
                  <span className="val">hello@trainhealth.com</span>
                </span>
              </a>

              <a href="mailto:research@trainhealth.com" className="contact-card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
                </span>
                <span className="body">
                  <span className="title">Research collaboration</span>
                  <span className="val">research@trainhealth.com</span>
                </span>
              </a>

              <a href="mailto:press@trainhealth.com" className="contact-card">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 8 12 13 3 8"/><rect x="3" y="6" width="18" height="14" rx="2"/></svg>
                </span>
                <span className="body">
                  <span className="title">Press &amp; media</span>
                  <span className="val">press@trainhealth.com</span>
                </span>
              </a>

              <div className="contact-card static">
                <span className="ico">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13Z"/><circle cx="12" cy="9" r="3"/></svg>
                </span>
                <span className="body">
                  <span className="title">Office</span>
                  <span className="val">Amsterdam UMC<br />Meibergdreef 9, 1105 AZ<br />Amsterdam, the Netherlands</span>
                </span>
              </div>

              <div className="contact-card socials-card">
                <span className="title">Follow us</span>
                <div className="socials-row">
                  <a href="https://www.linkedin.com/company/train-health-awareness" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V10h2.5v8zM7.25 8.8a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18 18h-2.5v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18H10V10h2.4v1.1h.03a2.65 2.65 0 0 1 2.4-1.3c2.55 0 3.02 1.7 3.02 3.9V18z"/></svg></a>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="faq" data-screen-label="03 Contact FAQ" style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Frequently asked</div>
              <h2>Before you send.</h2>
            </div>
            <p>The most common questions we get — answered here so you don't have to wait.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>How quickly will I hear back?</summary>
              <div className="answer">Most enquiries get a response within two working days. Press and time-sensitive requests are usually handled within 24 hours — please mark these clearly in your subject line.</div>
            </details>
            <details className="faq-item">
              <summary>I have a clinical question. Can you help?</summary>
              <div className="answer">TRAIN is a research and lifestyle awareness platform — not a clinical service. For specific medical advice, please speak to your treating physician. We can point you to resources or relevant research, but we can't provide clinical guidance.</div>
            </details>
            <details className="faq-item">
              <summary>How do I propose a research collaboration?</summary>
              <div className="answer">Send a short outline to <strong>research@trainhealth.com</strong> covering: the research question, your institution and team, what you're hoping for from a partnership, and any timeline. We'll come back to you with whether it's a fit and next steps.</div>
            </details>
            <details className="faq-item">
              <summary>Can I write for the TRAIN blog?</summary>
              <div className="answer">We work with clinicians, researchers, and selected guest contributors. If you're interested in contributing a piece, email <strong>hello@trainhealth.com</strong> with a brief outline and a relevant writing sample.</div>
            </details>
            <details className="faq-item">
              <summary>I'm a patient who's contributed to a TARGet study. Who do I contact?</summary>
              <div className="answer">Please reach out via the research team that originally enrolled you, or email <strong>research@trainhealth.com</strong> and we'll route you to the right team.</div>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
