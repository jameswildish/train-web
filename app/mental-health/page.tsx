import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Mental Health — TRAIN' }

export default function MentalHealthPage() {
  return (
    <>
      <section className="pillar-hero pillar-hero-photo" data-screen-label="01 Mental Health Hero">
        <div className="wrap">
          <div className="pillar-hero-photo-inner">
            <div className="pillar-hero-photo-text">
              <div className="crumbs">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">Mental Health</span>
              </div>
              <h1 style={{ marginTop: '32px' }}>
                Mindfulness <span className="quiet">helps reduce stress, improve focus and concentration,</span> and support overall mental health.
              </h1>
              <p className="lead">A nervous-system toolkit grounded in attention regulation, emotion regulation, and body-state awareness — adapted to how you're actually doing today.</p>
            </div>
            <div className="pillar-hero-photo-img">
              <Image
                src="/images/nutrition-hero.jpg"
                alt="Mindfulness and mental health"
                width={700}
                height={560}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="app-features" data-screen-label="02 Mental Health tools">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>In the app</div>
              <h2>Three tools to support a calmer nervous system.</h2>
            </div>
            <p>Each session is designed around focused attention, breath awareness, and open monitoring — adapted to your current physiological state.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="num">01 — Tracking</div>
              <h3>My Mind</h3>
              <p>Connect any wearable to gain a deeper understanding of your internal state. Track stress patterns, sleep quality, and recovery to better interpret how your nervous system responds to daily demands.</p>
              <span className="try">Sync your device <span className="arrow">→</span></span>
            </div>
            <div className="feature-card dark">
              <div className="num">02 — Adaptive</div>
              <h3>Personalised Practice</h3>
              <p>Guided mindfulness and meditation sessions thoughtfully designed around focused attention, breath awareness, and open monitoring — adapted to your HRV, stress indicators, and sleep quality.</p>
              <span className="try">Start a session <span className="arrow">→</span></span>
            </div>
            <div className="feature-card">
              <div className="num">03 — Restorative</div>
              <h3>Balance &amp; Restoration</h3>
              <p>Breathwork, body scanning, and mindful awareness practices associated with increased parasympathetic activity and reduced stress reactivity — supporting recovery, emotional regulation, and mental wellbeing.</p>
              <span className="try">Try the breathwork session <span className="arrow">→</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="awareness" id="science" data-screen-label="03 Mental Health science">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>TRAIN Health Awareness</div>
              <h2>The biology of mindfulness — what actually shifts.</h2>
            </div>
            <p>Mindfulness and meditation are mental-training practices that help regulate attention, emotion, and the body's stress response. Here's what the research actually measures.</p>
          </div>

          <div className="qa">
            <div className="anchor">01 / Why practice</div>
            <div>
              <h3>Why do we actually need mindfulness and meditation?</h3>
              <p>From a biological perspective, these practices influence the autonomic nervous system — shifting activity away from a chronic "fight-or-flight" state (sympathetic activation) toward a more balanced "rest-and-recover" state (parasympathetic activation).</p>
              <p><strong>Regular practice has been associated with improvements in:</strong></p>
              <ul className="risk-list">
                <li>Stress regulation</li>
                <li>Emotional stability</li>
                <li>Attention &amp; focus</li>
                <li>Sleep quality</li>
                <li>Psychological wellbeing</li>
              </ul>
              <p>Chronic stress is linked to elevated cortisol and long-term effects on metabolic, cardiovascular, and immune health. Mindfulness practices help reduce this sustained physiological load.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">02 / The body</div>
            <div>
              <h3>What happens in the body during meditation?</h3>
              <p>Meditation produces measurable physiological changes across multiple systems.</p>
              <ul className="steps">
                <li><span className="step-num">Nervous</span><strong>Autonomic shift</strong>Increased parasympathetic (vagal) activation, reduced sympathetic activity, and lower resting heart rate and blood pressure over time.</li>
                <li><span className="step-num">Endocrine</span><strong>Hormonal</strong>Decreased cortisol in several studies, and improved recovery after acute stress exposure.</li>
                <li><span className="step-num">Brain</span><strong>Activity patterns</strong>Changes in alpha and theta brain wave activity, and increased connectivity between attention and emotion-regulation networks.</li>
              </ul>
              <p>These effects reflect a shift toward a more regulated and less reactive physiological state.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">03 / Sleep</div>
            <div>
              <h3>Can mindfulness improve sleep?</h3>
              <p>Yes — mindfulness can improve sleep primarily by reducing cognitive and physiological arousal before bedtime. It helps by reducing rumination, lowering sympathetic nervous system activity, and supporting faster transition into sleep states.</p>
              <p>Research shows mindfulness-based interventions can improve sleep onset latency, sleep quality, and night-time awakenings.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">04 / Dose</div>
            <div>
              <h3>Do you need long meditation sessions to benefit?</h3>
              <p>No. Studies show that even short daily practices of <strong>5–10 minutes</strong> can produce measurable benefits when done consistently.</p>
              <p>The key factor is repeated activation of attentional control and relaxation responses — not session length alone.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">05 / Mechanism</div>
            <div>
              <h3>What is the key scientific principle behind mindfulness?</h3>
              <p>Mindfulness works through three main mechanisms — each reinforcing the others over time.</p>
              <ul className="steps">
                <li><span className="step-num">M1</span><strong>Attention regulation</strong>Training focus and reducing distraction — the foundational skill underlying everything else.</li>
                <li><span className="step-num">M2</span><strong>Emotion regulation</strong>Reducing automatic reactivity to stress and creating space between trigger and response.</li>
                <li><span className="step-num">M3</span><strong>Body-state awareness</strong>Improving recognition of physiological stress signals — the earliest, most actionable cue.</li>
              </ul>
              <p>Together, these mechanisms help reduce chronic stress load and improve mental and physical wellbeing over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" data-screen-label="04 Mental Health FAQ">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Frequently asked</div>
              <h2>Common questions about mindfulness.</h2>
            </div>
            <p>Honest answers — including what mindfulness <em>isn't</em>.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Is mindfulness a replacement for therapy or medication?</summary>
              <div className="answer">No. Mindfulness is a complementary practice with growing evidence in stress regulation and sleep. For clinical anxiety, depression, or trauma, work with a qualified professional — TRAIN is not a substitute for clinical care.</div>
            </details>
            <details className="faq-item">
              <summary>What if my mind "won't stop"?</summary>
              <div className="answer">That's normal — and the point. Mindfulness is not about emptying the mind; it's about noticing where attention goes and gently returning it. The noticing is the training.</div>
            </details>
            <details className="faq-item">
              <summary>How long until I feel the benefits?</summary>
              <div className="answer">Acute relaxation effects often appear within a session. Measurable changes in HRV, stress reactivity, and sleep onset typically appear over 4–8 weeks of consistent practice.</div>
            </details>
            <details className="faq-item">
              <summary>Is breathwork the same as meditation?</summary>
              <div className="answer">They overlap. Breathwork uses specific breathing patterns to shift the autonomic nervous system; meditation trains attention and awareness. Many TRAIN sessions blend both.</div>
            </details>
          </div>
        </div>
      </section>

      <section className="pillar-cta" data-screen-label="05 Mental Health CTA">
        <div className="wrap">
          <div className="card">
            <h2>Start your free trial of TRAIN Health Awareness.</h2>
            <div className="actions">
              <a href="#" className="btn btn-primary">Try TRAIN free <span className="arrow">→</span></a>
              <Link href="/nutrition" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Continue to Nutrition →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
