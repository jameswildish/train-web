import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Mental Health — TRAIN' }

export default function MentalHealthPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pillar-hero pillar-hero-photo">
        <div className="wrap">
          <div className="pillar-hero-photo-inner">
            <div className="pillar-hero-photo-text">
              <div className="crumbs">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">Mental Health</span>
              </div>
              <h1 style={{ marginTop: '32px' }}>
                Mindfulness helps reduce stress, improve focus and concentration, and support overall mental health.
              </h1>
            </div>
            <div className="pillar-hero-photo-img">
              <Image
                src="/images/mental-health-hero.jpg"
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

      {/* ============ APP FEATURES ============ */}
      <section className="app-features">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>Three tools for a more regulated mind.</h2>
            </div>
            <p>Grounded in attention science, autonomic regulation, and body-state awareness, each adapted to your wearable data and current physiological state.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>My Mind</h3>
              <p>Connect any wearable to gain a deeper understanding of your internal state. Track stress patterns, sleep quality, and recovery to better interpret how your nervous system responds to daily demands.</p>
              <Link href="/contact" className="feature-cta">TRAIN App — Coming Soon <span className="arrow">→</span></Link>
            </div>
            <div className="feature-card dark">
              <h3>Personalised Practice</h3>
              <p>Guided mindfulness and meditation sessions thoughtfully designed around focused attention, breath awareness, and open monitoring — adapted to your HRV, stress indicators, and sleep quality.</p>
              <Link href="/contact" className="feature-cta">TRAIN App — Coming Soon <span className="arrow">→</span></Link>
            </div>
            <div className="feature-card">
              <h3>Balance &amp; Restoration</h3>
              <p>Breathwork, body scanning, and mindful awareness practices associated with increased parasympathetic activity and reduced stress reactivity — supporting recovery, emotional regulation, and mental wellbeing.</p>
              <Link href="/contact" className="feature-cta">TRAIN App — Coming Soon <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AWARENESS (science) ============ */}
      <section className="awareness" id="science">
        <div className="wrap">
          <div className="top">
            <div>
              <h2>The biology of mindfulness. What actually shifts.</h2>
            </div>
            <p>Mindfulness and meditation are mental-training practices that help regulate attention, emotion, and the body's stress response. Here's what the research actually measures.</p>
          </div>

          <div className="qa">
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
            <div>
              <h3>What happens in the body during meditation?</h3>
              <p>Meditation produces measurable physiological changes across multiple systems.</p>
              <ul className="steps">
                <li><strong>Autonomic shift</strong>Increased parasympathetic (vagal) activation, reduced sympathetic activity, and lower resting heart rate and blood pressure over time.</li>
                <li><strong>Hormonal</strong>Decreased cortisol in several studies, and improved recovery after acute stress exposure.</li>
                <li><strong>Activity patterns</strong>Changes in alpha and theta brain wave activity, and increased connectivity between attention and emotion-regulation networks.</li>
              </ul>
              <p>These effects reflect a shift toward a more regulated and less reactive physiological state.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>Can mindfulness improve sleep?</h3>
              <p>Yes — mindfulness can improve sleep primarily by reducing cognitive and physiological arousal before bedtime. It helps by reducing rumination, lowering sympathetic nervous system activity, and supporting faster transition into sleep states.</p>
              <p>Research shows mindfulness-based interventions can improve sleep onset latency, sleep quality, and night-time awakenings.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>Do you need long meditation sessions to benefit?</h3>
              <p>No. Studies show that even short daily practices of <strong>5–10 minutes</strong> can produce measurable benefits when done consistently.</p>
              <p>The key factor is repeated activation of attentional control and relaxation responses — not session length alone.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>What is the key scientific principle behind mindfulness?</h3>
              <p>Mindfulness works through three main mechanisms, each reinforcing the others over time.</p>
              <ul className="steps">
                <li><strong>Attention regulation</strong>Training focus and reducing distraction — the foundational skill underlying everything else.</li>
                <li><strong>Emotion regulation</strong>Reducing automatic reactivity to stress and creating space between trigger and response.</li>
                <li><strong>Body-state awareness</strong>Improving recognition of physiological stress signals — the earliest, most actionable cue.</li>
              </ul>
              <p>Together, these mechanisms help reduce chronic stress load and improve mental and physical wellbeing over time.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>How does physical activity regulate mental health?</h3>
              <p>Exercise influences the autonomic nervous system by increasing acute sympathetic activation during activity, followed by enhanced parasympathetic rebound in the recovery phase. It also stimulates:</p>
              <ul className="steps">
                <li><strong>Endorphins</strong>Pain modulation and mood elevation.</li>
                <li><strong>Serotonin</strong>Mood stability.</li>
                <li><strong>Dopamine</strong>Motivation and reward regulation.</li>
              </ul>
              <p>Regular movement is associated with reduced symptoms of anxiety and depression, likely due to both neurochemical and anti-inflammatory effects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="pillar-cta">
        <div className="wrap">
          <div className="card">
            <h2>Start your free trial of TRAIN Health Awareness.</h2>
            <div className="actions">
              <a href="/contact" className="btn btn-primary">TRAIN App — Coming Soon <span className="arrow">→</span></a>
              <Link href="/nutrition" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Continue to Nutrition →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
