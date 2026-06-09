import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'Nutrition — TRAIN' }

export default function NutritionPage() {
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
                <span className="current">Nutrition</span>
              </div>
              <h1 style={{ marginTop: '32px' }}>
                Balanced nutrition fuels the body and brain, supporting long-term health and reducing the risk of cardiovascular and metabolic disease.
              </h1>
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

      {/* ============ APP FEATURES ============ */}
      <section className="app-features">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>Three tools that focus on patterns, not single foods.</h2>
            </div>
            <p>What you eat over months matters more than any single meal. Each tool is designed to help you notice and shape lasting habits.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>MyNutrition</h3>
              <p>Track your dietary patterns over time — fruits, vegetables, whole grains, legumes, healthy fats. Built around long-term behaviour rather than calorie counting.</p>
              <Link href="/contact" className="feature-cta">TRAIN App. Coming Soon <span className="arrow">→</span></Link>
            </div>
            <div className="feature-card dark">
              <h3>Heart-healthy Plates</h3>
              <p>Practical, science-aligned meal templates based on the AHA's Life's Essential 8 framework — Mediterranean and plant-rich patterns linked to lower cardiovascular and metabolic risk.</p>
              <Link href="/contact" className="feature-cta">TRAIN App. Coming Soon <span className="arrow">→</span></Link>
            </div>
            <div className="feature-card">
              <h3>Food &amp; You</h3>
              <p>Short, evidence-grounded explainers on how specific foods affect insulin, inflammation, and energy — to help you make more informed choices day-to-day.</p>
              <Link href="/contact" className="feature-cta">TRAIN App. Coming Soon <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AWARENESS (science) ============ */}
      <section className="awareness" id="science">
        <div className="wrap">
          <div className="top">
            <div>
              <h2>Why dietary patterns beat individual nutrients.</h2>
            </div>
            <p>The biggest gains come from how you eat over months — not from any single "superfood." Here's what the research actually shows.</p>
          </div>

          <div className="qa">
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
            <div>
              <h3>How does sugar affect the body?</h3>
              <p>Sugar — particularly added and refined sugars — is rapidly absorbed and causes quick increases in blood glucose levels. Frequent high intake can lead to repeated insulin spikes, reduced insulin sensitivity over time, increased fat storage, and energy fluctuations.</p>
              <p>However, <strong>naturally occurring sugars in whole foods</strong> (such as fruit) behave differently due to fibre content — and are healthy.</p>
            </div>
          </div>

          <div className="qa">
            <div>
              <h3>What does the AHA's <em>Life's Essential 8</em> say about nutrition?</h3>
              <p>Nutrition is one of the key pillars within this model of cardiovascular health. The framework emphasises overall lifestyle patterns rather than individual nutrients — focusing on long-term behaviours that reduce cardiovascular risk.</p>
              <p><strong>A heart-healthy dietary pattern is characterised by:</strong></p>
              <ul className="steps">
                <li><strong>Whole foods</strong>Fruits, vegetables, whole grains, and legumes — the foundation of every protective pattern in the literature.</li>
                <li><strong>Healthy fats</strong>Unsaturated fats from olive oil, nuts, seeds, and fatty fish.</li>
                <li><strong>Lean proteins</strong>Fish, poultry, legumes, and plant-based protein sources.</li>
                <li><strong>Limit added sugars, sodium, ultra-processed</strong>Where most modern cardiometabolic risk concentrates.</li>
              </ul>
              <p>Adherence to heart-healthy patterns is associated with lower blood pressure, improved cholesterol profiles, reduced systemic inflammation, and lower risk of cardiovascular events.</p>
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
              <a href="/contact" className="btn btn-primary">TRAIN App. Coming Soon <span className="arrow">→</span></a>
              <Link href="/about" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>Read the science →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
