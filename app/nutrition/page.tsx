import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Nutrition — TRAIN' }

export default function NutritionPage() {
  return (
    <>
      <section className="pillar-hero pillar-hero-photo" data-screen-label="01 Nutrition Hero">
        <div className="wrap">
          <div className="pillar-hero-photo-inner">
            <div className="pillar-hero-photo-text">
              <div className="crumbs">
                <Link href="/">Home</Link>
                <span className="sep">/</span>
                <span className="current">Nutrition</span>
              </div>
              <h1 style={{ marginTop: '32px' }}>
                Balanced nutrition <span className="quiet">fuels the body and brain,</span> supporting long-term health.
              </h1>
              <p className="lead">Patterns over perfection. Built around dietary patterns shown to lower blood pressure, improve cholesterol, and reduce systemic inflammation — not fad diets.</p>
            </div>
            <div className="pillar-hero-photo-img">
              <Image
                src="/images/nutrition-hero.jpg"
                alt="Nutrition — whole foods"
                width={700}
                height={560}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="app-features" data-screen-label="02 Nutrition tools">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>In the app</div>
              <h2>Tools that focus on patterns, not single foods.</h2>
            </div>
            <p>What you eat over months matters more than any single meal. Each tool is designed to help you notice and shape patterns.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="num">01 — Patterns</div>
              <h3>MyNutrition</h3>
              <p>Track your dietary patterns over time — fruits, vegetables, whole grains, legumes, healthy fats. Built around long-term behaviour rather than calorie counting.</p>
              <span className="try">Start tracking <span className="arrow">→</span></span>
            </div>
            <div className="feature-card dark">
              <div className="num">02 — Guidance</div>
              <h3>Heart-healthy Plates</h3>
              <p>Practical, science-aligned meal templates based on the AHA's Life's Essential 8 framework — Mediterranean and plant-rich patterns linked to lower cardiovascular and metabolic risk.</p>
              <span className="try">Explore plates <span className="arrow">→</span></span>
            </div>
            <div className="feature-card">
              <div className="num">03 — Education</div>
              <h3>Food &amp; You</h3>
              <p>Short, evidence-grounded explainers on how specific foods affect insulin, inflammation, and energy — to help you make more informed choices day-to-day.</p>
              <span className="try">Start a lesson <span className="arrow">→</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="awareness" id="science" data-screen-label="03 Nutrition science">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>TRAIN Health Awareness</div>
              <h2>Why dietary patterns beat individual nutrients.</h2>
            </div>
            <p>The biggest gains come from how you eat over months — not from any single "superfood." Here's what the research actually shows.</p>
          </div>

          <div className="qa">
            <div className="anchor">01 / Chronic risk</div>
            <div>
              <h3>What is the relationship between nutrition and chronic disease?</h3>
              <p>Chronic diseases are strongly influenced by long-term dietary patterns rather than single foods. Highly processed diets — high in refined sugars, saturated fats, and low in fibre — are associated with:</p>
              <ul className="risk-list">
                <li>Increased inflammation</li>
                <li>Insulin resistance</li>
                <li>Unhealthy cholesterol</li>
                <li>Higher cardiovascular risk</li>
              </ul>
              <p>In contrast, dietary patterns rich in whole foods are associated with reduced risk. Examples include Mediterranean-style diets, plant-rich dietary patterns, and high-fibre, minimally processed diets — consistently linked to improved cardiovascular and metabolic health outcomes.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">02 / Sugar</div>
            <div>
              <h3>How does sugar affect the body?</h3>
              <p>Sugar — particularly added and refined sugars — is rapidly absorbed and causes quick increases in blood glucose levels. Frequent high intake can lead to repeated insulin spikes, reduced insulin sensitivity over time, increased fat storage, and energy fluctuations.</p>
              <p>However, <strong>naturally occurring sugars in whole foods</strong> (such as fruit) behave differently due to fibre content — and are healthy.</p>
            </div>
          </div>

          <div className="qa">
            <div className="anchor">03 / Framework</div>
            <div>
              <h3>What does the AHA's <em>Life's Essential 8</em> say about nutrition?</h3>
              <p>Nutrition is one of the key pillars within this model of cardiovascular health. The framework emphasises overall lifestyle patterns rather than individual nutrients — focusing on long-term behaviours that reduce cardiovascular risk.</p>
              <p><strong>A heart-healthy dietary pattern is characterised by:</strong></p>
              <ul className="steps">
                <li><span className="step-num">High in</span><strong>Whole foods</strong>Fruits, vegetables, whole grains, and legumes — the foundation of every protective pattern in the literature.</li>
                <li><span className="step-num">Emphasis</span><strong>Healthy fats</strong>Unsaturated fats from olive oil, nuts, seeds, and fatty fish.</li>
                <li><span className="step-num">Moderate</span><strong>Lean proteins</strong>Fish, poultry, legumes, and plant-based protein sources.</li>
                <li><span className="step-num">Limit</span><strong>Added sugars, sodium, ultra-processed</strong>Where most modern cardiometabolic risk concentrates.</li>
              </ul>
              <p>Adherence to heart-healthy patterns is associated with lower blood pressure, improved cholesterol profiles, reduced systemic inflammation, and lower risk of cardiovascular events.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" data-screen-label="04 Nutrition FAQ">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Frequently asked</div>
              <h2>Common questions about nutrition.</h2>
            </div>
            <p>What the evidence actually says — minus the diet-industry noise.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Is fruit "too much sugar"?</summary>
              <div className="answer">No. The sugar in whole fruit comes with fibre, water, and a matrix of micronutrients that slow absorption. Whole-fruit intake is associated with reduced — not increased — cardiometabolic risk.</div>
            </details>
            <details className="faq-item">
              <summary>Should I cut out all carbs?</summary>
              <div className="answer">Generally, no. The quality of carbohydrates matters more than the quantity. Whole grains, legumes, fruit, and vegetables are protective; refined and ultra-processed carbohydrates are the ones most associated with risk.</div>
            </details>
            <details className="faq-item">
              <summary>What about fasting?</summary>
              <div className="answer">Time-restricted eating can support metabolic health for some, but the overall pattern still matters most. Fasting around an ultra-processed diet does not produce the same protective effects as eating well across the day.</div>
            </details>
            <details className="faq-item">
              <summary>Is one "best diet"?</summary>
              <div className="answer">No single diet wins for everyone. The patterns with the strongest evidence — Mediterranean, DASH, plant-rich — share more in common than they differ: whole foods, fibre, healthy fats, less ultra-processed.</div>
            </details>
          </div>
        </div>
      </section>

      <section className="pillar-cta" data-screen-label="05 Nutrition CTA">
        <div className="wrap">
          <div className="card">
            <h2>Start your free trial of TRAIN Health Awareness.</h2>
            <div className="actions">
              <a href="#" className="btn btn-primary">Try TRAIN free <span className="arrow">→</span></a>
              <Link href="/science" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Read the science →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
