import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Sleep — TRAIN' }

export default function SleepPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="pillar-hero pillar-hero-photo" data-screen-label="01 Sleep Hero">
        <div className="wrap">
          <div className="pillar-hero-photo-inner">
            <div className="pillar-hero-photo-text">
              <div className="crumbs">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">Sleep</span>
              </div>
              <div className="eyebrow" style={{ margin: '32px 0 20px' }}>Pillar 01 — Sleep</div>
              <h1>
                Quality sleep <span className="quiet">reduces the risk of heart disease, diabetes, anxiety, and depression</span> while improving the immune system.
              </h1>
              <p className="lead">A practical toolkit designed to support healthy sleep habits — synced to your wearable, grounded in circadian science.</p>
            </div>
            <div className="pillar-hero-photo-img">
              <Image
                src="/images/nutrition-hero.jpg"
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
      <section className="app-features" data-screen-label="02 Sleep tools">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>In the app</div>
              <h2>Three tools that work with your body's clock.</h2>
            </div>
            <p>Each tool is grounded in sleep science — circadian rhythm, autonomic regulation, and the four stages of sleep — and adapts to your data.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="num">01 — Tracking</div>
              <h3>MySleep</h3>
              <p>Sync your wearable device to track sleep duration and quality. Build a consistent routine that supports deeper, more restorative sleep — an essential foundation for long-term health and longevity.</p>
              <span className="try">Sync your device <span className="arrow">→</span></span>
            </div>
            <div className="feature-card dark">
              <div className="num">02 — Soundscape</div>
              <h3>Sound Scapes</h3>
              <p>A sound-based approach to help you unwind. Steady background sounds — including nature recordings — reduce environmental distractions and create a consistent auditory environment for sleep.</p>
              <span className="try">Try the Rainforest soundscape <span className="arrow">→</span></span>
            </div>
            <div className="feature-card">
              <div className="num">03 — Meditation</div>
              <h3>Sleep meditation</h3>
              <p>Audio-based sessions using science-informed relaxation techniques — body scanning, mindful breathing, gratitude — to support downregulation of the nervous system and the transition into sleep.</p>
              <span className="try">Start a session <span className="arrow">→</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AWARENESS (long-form science) ============ */}
      <section className="awareness" id="science" data-screen-label="03 Sleep science">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>TRAIN Health Awareness</div>
              <h2>The science of sleep — distilled.</h2>
            </div>
            <p>Plain-language explainers from our clinician-scientists. What sleep actually does in the body, why circadian rhythm matters, and the eight evidence-based habits that protect both.</p>
          </div>

          <div className="qa">
            <div className="anchor">01 / Function</div>
            <div>
              <h3>Why do we actually need sleep?</h3>
              <p>Sleep is not just rest — it's essential for your physical and mental health. While you sleep, your brain processes information and clears waste products. Your body repairs cells, strengthens your immune system, and regulates important hormones like cortisol, insulin, and growth hormone.</p>
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
            <div className="anchor">02 / Rhythm</div>
            <div>
              <h3>What is the circadian rhythm?</h3>
              <p>Your body's natural internal clock that runs on an approximately 24-hour cycle. It helps regulate sleep and wake timing, body temperature, hormone release (such as melatonin and cortisol), energy levels and alertness, and metabolism and digestion.</p>
              <p>The rhythm is controlled by a small part of the brain called the <strong>suprachiasmatic nucleus (SCN)</strong> — a "master clock" that responds mainly to light and darkness. Morning light signals your body to stay awake; darkness signals it to produce melatonin and feel sleepy.</p>
              <p>When your rhythm is aligned, you fall asleep more easily, wake up refreshed, and have more stable energy. When disrupted, it has been linked in research to diabetes, cardiovascular disease, and mental health disturbances.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">03 / Stages</div>
            <div>
              <h3>What happens in my body while I sleep?</h3>
              <p>Sleep consists of four stages, each with unique patterns of brain activity, eye movements, and hormonal changes.</p>
              <ul className="steps">
                <li>
                  <span className="step-num">Stage 01</span>
                  <strong>Awake</strong>
                  Your body begins to relax — heart rate and breathing slow down, muscle activity decreases. Sudden contractions known as hypnic jerks may occur.
                </li>
                <li>
                  <span className="step-num">Stage 02</span>
                  <strong>Light sleep</strong>
                  Eye movements cease; brain activity shows sleep spindles and K-complexes. Body temperature and heart rate continue to decrease. Acetylcholine and serotonin promote transition.
                </li>
                <li>
                  <span className="step-num">Stage 03</span>
                  <strong>Deep sleep</strong>
                  Low, high-amplitude delta waves dominate. Blood supply to muscles increases. Growth hormone and prolactin are released — supporting tissue repair and immune function.
                </li>
                <li>
                  <span className="step-num">Stage 04</span>
                  <strong>REM sleep</strong>
                  Rapid eye movements, vivid dreams, heightened brain activity. Voluntary muscles are nearly paralysed ("REM atonia"). Acetylcholine and norepinephrine are active.
                </li>
              </ul>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">04 / Practice</div>
            <div>
              <h3>Eight evidence-based habits to improve your sleep.</h3>
              <p>None of these are theory — each is grounded in circadian biology, autonomic regulation, or sleep-architecture research. Build them in slowly; consistency beats intensity.</p>
              <ul className="steps">
                <li><span className="step-num">01</span><strong>Keep a consistent schedule</strong>Going to bed and waking at the same time keeps the suprachiasmatic clock synchronized. Variable sleep timing is linked to poorer sleep quality.</li>
                <li><span className="step-num">02</span><strong>Get morning daylight</strong>Light is the strongest time cue. Morning exposure increases cortisol, suppresses melatonin, and shifts your clock earlier.</li>
                <li><span className="step-num">03</span><strong>Reduce evening blue light</strong>Short-wavelength light inhibits melatonin secretion, increasing sleep onset latency and reducing subjective sleep quality.</li>
                <li><span className="step-num">04</span><strong>Limit afternoon caffeine</strong>Caffeine blocks adenosine receptors and reduces perceived fatigue without reducing the underlying need for sleep. Even 6 hours before bed it can significantly reduce sleep time and quality.</li>
                <li><span className="step-num">05</span><strong>Avoid heavy late meals</strong>Late eating affects peripheral circadian clocks and raises core body temperature — which normally needs to decrease for sleep initiation.</li>
                <li><span className="step-num">06</span><strong>Reduce arousal before sleep</strong>Mindfulness, breathing techniques, and relaxation training shift the nervous system from sympathetic to parasympathetic — reducing sleep latency and improving continuity.</li>
                <li><span className="step-num">07</span><strong>Keep it cool and dark</strong>Core body temperature naturally drops before sleep. A cooler environment supports thermoregulation; darkness promotes endogenous melatonin.</li>
                <li><span className="step-num">08</span><strong>Be physically active</strong>Regular activity influences circadian timing, body temperature regulation, and adenosine accumulation — and supports deeper slow-wave sleep.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="faq" data-screen-label="04 Sleep FAQ">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Frequently asked</div>
              <h2>Common questions about sleep.</h2>
            </div>
            <p>Quick answers to what we hear most often — from naps to night-shift work to "is 7 hours really enough?"</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>How many hours of sleep do I actually need?</summary>
              <div className="answer">Most adults need 7–9 hours, though needs vary modestly with age and genetics. What matters most is consistency and the depth of your sleep architecture — not just total time in bed.</div>
            </details>
            <details className="faq-item">
              <summary>Are naps good or bad for nighttime sleep?</summary>
              <div className="answer">Short naps (10–30 minutes) earlier in the afternoon can boost alertness without disrupting sleep pressure. Long or late naps can reduce adenosine accumulation and delay sleep onset.</div>
            </details>
            <details className="faq-item">
              <summary>Does alcohol help me sleep?</summary>
              <div className="answer">Alcohol may shorten sleep onset, but it fragments REM and deep-sleep stages, increases nighttime awakenings, and worsens overall sleep quality — especially in the second half of the night.</div>
            </details>
            <details className="faq-item">
              <summary>What is "sleep debt" — and can I catch up on weekends?</summary>
              <div className="answer">Short-term debt can be partially recovered, but chronic weekday restriction with weekend recovery (social jetlag) is linked to metabolic and cardiovascular risk. Consistency is more protective than catch-up sleep.</div>
            </details>
            <details className="faq-item">
              <summary>Is melatonin safe to take regularly?</summary>
              <div className="answer">Low doses, used short-term and timed correctly, are generally considered safe for healthy adults. It is most useful for circadian phase shifts (jet lag, shift work) rather than as a general sleep aid. Talk to your physician for chronic use.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="pillar-cta" data-screen-label="05 Sleep CTA">
        <div className="wrap">
          <div className="card">
            <h2>Start your free trial of TRAIN Health Awareness.</h2>
            <div className="actions">
              <a href="#" className="btn btn-primary">Try TRAIN free <span className="arrow">→</span></a>
              <Link href="/activity" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Continue to Activity →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
