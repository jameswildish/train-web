import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Activity — TRAIN' }

export default function ActivityPage() {
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
                <span className="current">Activity</span>
              </div>
              <h1 style={{ marginTop: '32px' }}>
                Physical activity is one of the most powerful tools for supporting muscle, metabolism, and resilience as we age.
              </h1>
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

      {/* ============ APP FEATURES ============ */}
      <section className="app-features">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>Three tools for stronger, smarter movement.</h2>
            </div>
            <p>Grounded in exercise physiology, readiness science, and metabolic research, built to adapt to your patterns.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>My Activity</h3>
              <p>Sync any wearable and track daily activity, movement patterns, and recovery. Consistent physical activity supports muscle strength, cardiovascular health, and metabolic function, all strongly linked to healthy ageing.</p>
              <Link href="/contact" className="feature-cta">TRAIN App — Coming Soon <span className="arrow">→</span></Link>
            </div>
            <div className="feature-card dark">
              <h3>Personalised work</h3>
              <p>Guided sessions integrating strength, cardiovascular conditioning, and mobility. Using your activity levels, heart rate, and recovery metrics, intensity and volume adjust to your body's readiness.</p>
              <Link href="/contact" className="feature-cta">TRAIN App — Coming Soon <span className="arrow">→</span></Link>
            </div>
            <div className="feature-card">
              <h3>Balance &amp; Recovery</h3>
              <p>Movement regulates energy, stress, and wellbeing through the nervous system. Gentler forms — walking, stretching — release endorphins and serotonin while calming the body and supporting recovery.</p>
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
              <h2>Why movement is the strongest predictor of healthy ageing.</h2>
            </div>
            <p>Physical activity is not only about fitness. It is a fundamental regulator of long-term physical and cognitive health. Here is what the research actually says.</p>
          </div>

          <div className="qa">
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
            <div>
              <h3>What is the role of movement in long-term health and longevity?</h3>
              <p>Muscle tissue is a key predictor of healthy ageing. Muscle is not only for strength — it functions as a metabolic and endocrine organ that regulates glucose uptake, supports insulin sensitivity, and produces myokines that influence inflammation and immune function.</p>
              <p>Loss of muscle mass (<strong>sarcopenia</strong>) is strongly associated with frailty, reduced mobility, and increased risk of chronic disease later in life. Research consistently shows that maintaining muscle strength and cardiorespiratory fitness is one of the strongest predictors of longevity.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>How does physical activity affect the brain?</h3>
              <p>Exercise has direct effects on brain structure and function. Physical activity increases cerebral blood flow, the release of <strong>brain-derived neurotrophic factor (BDNF)</strong> which supports neuroplasticity, and dopamine, serotonin, and norepinephrine activity.</p>
              <p>Regular movement is associated with improved cognitive performance, memory function, stress resilience, long-term brain health, and reduced risk of neurodegenerative disease.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>What happens in the body during physical activity?</h3>
              <ul className="steps">
                <li><strong>Muscular</strong>Muscle fibres experience micro-level stress — stimulating repair and hypertrophy during recovery.</li>
                <li><strong>Cardiovascular</strong>Heart rate and stroke volume increase. Long-term adaptation improves oxygen delivery efficiency.</li>
                <li><strong>Metabolic</strong>Glucose uptake increases independent of insulin. Fat and carbohydrates are utilised more efficiently.</li>
                <li><strong>Endocrine &amp; nervous</strong>Stress hormones rise acutely. Post-exercise, parasympathetic activity increases, supporting recovery.</li>
              </ul>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>How much movement do we actually need?</h3>
              <p>Current guidelines from global health organisations suggest at least <strong>150 minutes of moderate activity per week</strong>, or 75 minutes of vigorous activity, plus strength training twice per week.</p>
              <p>However, research increasingly shows that daily movement quality and consistency may be more important than structured exercise alone. Even light activity — walking, household activities, general daily movement — contributes to metabolic and cardiovascular health. Sedentary behaviour, even in physically active individuals, is independently linked to increased cardiometabolic risk.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>Why is strength training especially important for ageing?</h3>
              <p>From a longevity perspective, resistance training is critical. After approximately age 30, muscle mass naturally declines without intervention. Strength training helps maintain muscle mass and strength, preserve bone density, improve insulin sensitivity, and reduce the risk of falls and frailty in later life.</p>
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
              <Link href="/mental-health" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Continue to Mental Health →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
