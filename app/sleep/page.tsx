import Link from 'next/link'
import Image from 'next/image'
import SleepAppFeatures from '@/components/SleepAppFeatures'

export const metadata = { title: 'Sleep — TRAIN' }

export default function SleepPage() {
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
                <span className="current">Sleep</span>
              </div>
              <h1 style={{ marginTop: '32px' }}>
                Quality sleep reduces the risk of heart disease, diabetes, anxiety, and depression while improving the immune system.
              </h1>
            </div>
            <div className="pillar-hero-photo-img">
              <Image
                src="/images/sleep-hero.jpg"
                alt="Sleep and rest"
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
              <h2>Three tools for deeper, more restorative sleep.</h2>
            </div>
            <p>Grounded in circadian science, autonomic regulation, and sleep-stage research, built to adapt to your patterns.</p>
          </div>
          <SleepAppFeatures />
        </div>
      </section>

      {/* ============ AWARENESS (science) ============ */}
      <section className="awareness" id="science">
        <div className="wrap">
          <div className="top">
            <div>
              <h2>The science of sleep, distilled.</h2>
            </div>
            <p>Plain-language explainers from our clinician-scientists. What sleep actually does in the body, why circadian rhythm matters, and the eight evidence-based habits that protect both.</p>
          </div>

          <div className="qa">
            <div>
              <h3>Why do we actually need sleep?</h3>
              <p>Sleep is not just rest. It is essential for your physical and mental health. While you sleep, your brain processes information and clears waste products. Your body repairs cells, strengthens your immune system, and regulates important hormones like cortisol (stress), insulin (blood sugar), and growth hormone.</p>
              <p style={{ marginTop: '16px' }}><strong>Long-term poor sleep has been linked to:</strong></p>
              <ul className="risk-list">
                <li>Heart disease</li>
                <li>Stroke</li>
                <li>Hypertension</li>
                <li>Diabetes</li>
                <li>Obesity</li>
                <li>Depression</li>
                <li>Cardiovascular mortality</li>
              </ul>
              <p>The American Heart Association added sleep as the 8<sup>th</sup> pillar to its <em>Life's Essential 8</em> cardiovascular health checklist.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>What is the circadian rhythm?</h3>
              <p>Your body's natural internal clock that runs on an approximately 24-hour cycle. It helps regulate sleep and wake timing, body temperature, hormone release (such as melatonin and cortisol), energy levels and alertness, and metabolism and digestion.</p>
              <p>The rhythm is controlled by a small part of the brain called the <strong>suprachiasmatic nucleus (SCN)</strong>, the "master clock" that responds mainly to light and darkness. Morning light signals your body to stay awake; darkness signals it to produce melatonin and feel sleepy.</p>
              <p>When your rhythm is aligned, you fall asleep more easily, wake up refreshed, and have more stable energy. When disrupted, it has been linked in research to diabetes, cardiovascular disease, and mental health disturbances.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>What happens in my body while I sleep?</h3>
              <p>Sleep consists of four stages, each with unique patterns of brain activity, eye movements, and hormonal changes.</p>
              <ul className="steps">
                <li>
                  <strong>Awake</strong>
                  Your body begins to relax. Heart rate and breathing slow down, muscle activity decreases. Sudden contractions known as hypnic jerks may occur.
                </li>
                <li>
                  <strong>Light sleep</strong>
                  Eye movements cease; brain activity shows sleep spindles and K-complexes. Body temperature and heart rate continue to decrease. Acetylcholine and serotonin promote transition.
                </li>
                <li>
                  <strong>Deep sleep</strong>
                  Low, high-amplitude delta waves dominate. Blood supply to muscles increases. Growth hormone and prolactin are released, supporting tissue repair and immune function.
                </li>
                <li>
                  <strong>REM sleep</strong>
                  Rapid eye movements, vivid dreams, heightened brain activity. Voluntary muscles are nearly paralysed ("REM atonia"). Acetylcholine and norepinephrine are active.
                </li>
              </ul>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>How can I improve my sleep based on science?</h3>
              <p>None of these are theory. Each is grounded in circadian biology, autonomic regulation, or sleep-architecture research. Build them in slowly; consistency beats intensity.</p>
              <ul className="steps">
                <li><strong>Keep a consistent schedule</strong>Going to bed and waking at the same time keeps the suprachiasmatic clock synchronized. Variable sleep timing is linked to poorer sleep quality.</li>
                <li><strong>Get morning daylight</strong>Light is the strongest time cue. Morning exposure increases cortisol, suppresses melatonin, and shifts your clock earlier.</li>
                <li><strong>Reduce evening blue light</strong>Short-wavelength light inhibits melatonin secretion, increasing sleep onset latency and reducing subjective sleep quality.</li>
                <li><strong>Limit afternoon caffeine</strong>Caffeine blocks adenosine receptors and reduces perceived fatigue without reducing the underlying need for sleep. Even 6 hours before bed it can significantly reduce sleep time and quality.</li>
                <li><strong>Avoid heavy late meals</strong>Late eating affects peripheral circadian clocks and raises core body temperature, which normally needs to decrease for sleep initiation.</li>
                <li><strong>Reduce arousal before sleep</strong>Mindfulness, breathing techniques, and relaxation training shift the nervous system from sympathetic to parasympathetic, reducing sleep latency and improving continuity.</li>
                <li><strong>Keep it cool and dark</strong>Core body temperature naturally drops before sleep. A cooler environment supports thermoregulation; darkness promotes endogenous melatonin.</li>
                <li><strong>Be physically active</strong>Regular activity influences circadian timing, body temperature regulation, and adenosine accumulation, supporting deeper slow-wave sleep.</li>
              </ul>
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
              <Link href="/activity" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Continue to Activity →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
