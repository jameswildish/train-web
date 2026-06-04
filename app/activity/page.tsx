import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Activity — TRAIN' }

export default function ActivityPage() {
  return (
    <>
      <section className="pillar-hero pillar-hero-photo" data-screen-label="01 Activity Hero">
        <div className="wrap">
          <div className="pillar-hero-photo-inner">
            <div className="pillar-hero-photo-text">
              <div className="crumbs">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">Activity</span>
              </div>
              <h1 style={{ marginTop: '32px' }}>
                Movement is medicine — <span className="quiet">physical activity is one of the most powerful tools</span> supporting muscle, metabolism, and resilience as we age.
              </h1>
              <p className="lead">Strength, cardio, mobility — adapted to your readiness. Built around the science of movement as a systemic regulator, not just exercise.</p>
            </div>
            <div className="pillar-hero-photo-img">
              <Image
                src="/images/nutrition-hero.jpg"
                alt="Physical activity and movement"
                width={700}
                height={560}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="app-features" data-screen-label="02 Activity tools">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>In the app</div>
              <h2>Movement, calibrated to what your body is ready for today.</h2>
            </div>
            <p>Activity, structured work, and recovery — each tool reads your wearable data and adjusts intensity to match your readiness.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="num">01 — Tracking</div>
              <h3>My Activity</h3>
              <p>Sync any wearable and track daily activity, movement patterns, and recovery. Consistent physical activity supports muscle strength, cardiovascular health, and metabolic function — all strongly linked to healthy ageing.</p>
              <span className="try">Sync your device <span className="arrow">→</span></span>
            </div>
            <div className="feature-card dark">
              <div className="num">02 — Structured</div>
              <h3>Personalised work</h3>
              <p>Guided sessions integrating strength, cardiovascular conditioning, and mobility. Using your activity levels, heart rate, and recovery metrics, intensity and volume adjust to your body's readiness.</p>
              <span className="try">Start a session <span className="arrow">→</span></span>
            </div>
            <div className="feature-card">
              <div className="num">03 — Restorative</div>
              <h3>Balance &amp; Recovery</h3>
              <p>Movement regulates energy, stress, and wellbeing through the nervous system. Gentler forms — walking, stretching — release endorphins and serotonin while calming the body and supporting recovery.</p>
              <span className="try">Try a recovery walk <span className="arrow">→</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="awareness" id="science" data-screen-label="03 Activity science">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>TRAIN Health Awareness</div>
              <h2>Why movement is the strongest predictor of healthy ageing.</h2>
            </div>
            <p>Physical activity is not only about fitness — it's a fundamental regulator of long-term physical and cognitive health. Here's what the research actually says.</p>
          </div>

          <div className="qa">
            <div className="anchor">01 / Why move</div>
            <div>
              <h3>Why do we need physical activity?</h3>
              <p>During movement, the body activates multiple systems simultaneously: musculoskeletal adaptation, cardiovascular efficiency, metabolic regulation, and neurochemical balance.</p>
              <p><strong>Regular activity is associated with reduced risk of:</strong></p>
              <ul className="risk-list">
                <li>Cardiovascular disease</li>
                <li>Diabetes</li>
                <li>Obesity &amp; metabolic syndrome</li>
                <li>Osteoporosis &amp; frailty</li>
                <li>Depression &amp; anxiety</li>
                <li>Neurodegenerative decline</li>
              </ul>
              <p>The American Heart Association includes physical activity as a core pillar of cardiovascular health due to its systemic effects on mortality and disease prevention.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">02 / Longevity</div>
            <div>
              <h3>What is the role of movement in long-term health and longevity?</h3>
              <p>Muscle tissue is a key predictor of healthy ageing. Muscle is not only for strength — it functions as a metabolic and endocrine organ that regulates glucose uptake, supports insulin sensitivity, and produces myokines that influence inflammation and immune function.</p>
              <p>Loss of muscle mass (<strong>sarcopenia</strong>) is strongly associated with frailty, reduced mobility, and increased risk of chronic disease later in life. Research consistently shows that maintaining muscle strength and cardiorespiratory fitness is one of the strongest predictors of longevity.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">03 / Brain</div>
            <div>
              <h3>How does physical activity affect the brain?</h3>
              <p>Exercise has direct effects on brain structure and function. Physical activity increases cerebral blood flow, the release of <strong>brain-derived neurotrophic factor (BDNF)</strong> which supports neuroplasticity, and dopamine, serotonin, and norepinephrine activity.</p>
              <p>Regular movement is associated with improved cognitive performance, memory function, stress resilience, long-term brain health, and reduced risk of neurodegenerative disease.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">04 / The body</div>
            <div>
              <h3>What happens in the body during physical activity?</h3>
              <ul className="steps">
                <li><span className="step-num">System 01</span><strong>Muscular</strong>Muscle fibres experience micro-level stress — stimulating repair and hypertrophy during recovery.</li>
                <li><span className="step-num">System 02</span><strong>Cardiovascular</strong>Heart rate and stroke volume increase. Long-term adaptation improves oxygen delivery efficiency.</li>
                <li><span className="step-num">System 03</span><strong>Metabolic</strong>Glucose uptake increases independent of insulin. Fat and carbohydrates are utilised more efficiently.</li>
                <li><span className="step-num">System 04</span><strong>Endocrine &amp; nervous</strong>Stress hormones rise acutely. Post-exercise, parasympathetic activity increases, supporting recovery.</li>
              </ul>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">05 / Dose</div>
            <div>
              <h3>How much movement do we actually need?</h3>
              <p>Current guidelines from global health organisations suggest at least <strong>150 minutes of moderate activity per week</strong>, or 75 minutes of vigorous activity, plus strength training twice per week.</p>
              <p>However, research increasingly shows that daily movement quality and consistency may be more important than structured exercise alone. Even light activity — walking, household activities, general daily movement — contributes to metabolic and cardiovascular health. Sedentary behaviour, even in physically active individuals, is independently linked to increased cardiometabolic risk.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">06 / Strength</div>
            <div>
              <h3>Why is strength training especially important for ageing?</h3>
              <p>From a longevity perspective, resistance training is critical. After approximately age 30, muscle mass naturally declines without intervention. Strength training helps maintain muscle mass and strength, preserve bone density, improve insulin sensitivity, and reduce the risk of falls and frailty in later life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" data-screen-label="04 Activity FAQ">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Frequently asked</div>
              <h2>Common questions about movement.</h2>
            </div>
            <p>From "should I run or lift?" to working out when you're already exhausted.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Cardio or strength — which matters more?</summary>
              <div className="answer">Both. Cardiorespiratory fitness predicts cardiovascular mortality; muscle strength predicts metabolic and functional ageing. A balanced week typically includes both, with strength becoming relatively more important with age.</div>
            </details>
            <details className="faq-item">
              <summary>How long until I see the benefits?</summary>
              <div className="answer">Mood, sleep, and energy effects are often noticeable within days. Cardiovascular adaptation takes about 4–6 weeks, and structural changes in muscle and bone take longer. Consistency, not intensity, drives most of the long-term benefit.</div>
            </details>
            <details className="faq-item">
              <summary>Is it okay to exercise when I'm tired?</summary>
              <div className="answer">Light movement on a tired day can support recovery. Hard training on a depleted body — especially with poor sleep — increases injury risk and can blunt adaptation. The app's readiness signals are designed to guide this trade-off.</div>
            </details>
            <details className="faq-item">
              <summary>Does walking really "count"?</summary>
              <div className="answer">Yes. Brisk walking is independently associated with reduced cardiovascular and metabolic risk. For sedentary individuals it often produces the largest relative benefit per minute of any intervention.</div>
            </details>
            <details className="faq-item">
              <summary>What if I haven't trained in years?</summary>
              <div className="answer">Start with consistent low-load movement and short, progressive sessions. Detraining is real, but so is the body's responsiveness — measurable gains typically appear within 2–4 weeks of structured restart.</div>
            </details>
          </div>
        </div>
      </section>

      <section className="pillar-cta" data-screen-label="05 Activity CTA">
        <div className="wrap">
          <div className="card">
            <h2>Start your free trial of TRAIN Health Awareness.</h2>
            <div className="actions">
              <a href="#" className="btn btn-primary">Try TRAIN free <span className="arrow">→</span></a>
              <Link href="/mental-health" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Continue to Mental Health →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
