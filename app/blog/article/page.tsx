import Link from 'next/link'

export const metadata = { title: 'Why sleep is your best medicine — TRAIN' }

export default function BlogArticlePage() {
  return (
    <>
      <article className="article-page">
        <header className="article-hero">
          <div className="wrap">
            <div className="crumbs">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <Link href="/blog">Blog</Link>
              <span className="sep">/</span>
              <span className="current">Why sleep is your best medicine</span>
            </div>

            <div className="article-meta">
              <span className="pill">Sleep</span>
              <span className="date">May 12, 2026</span>
              <span className="muted">· 6 min read</span>
            </div>

            <h1>Why sleep is your best medicine — the science of recovery.</h1>
            <p className="lede">How your circadian rhythm regulates everything from blood sugar to immune function — and the eight evidence-based habits that protect it.</p>

            <div className="byline">
              <div className="avatar"></div>
              <div>
                <div className="name">Prof. Dr. Nimrat Grewal</div>
                <div className="role">Cardiothoracic surgeon · Co-founder, TRAIN</div>
              </div>
            </div>
          </div>

          <div className="wrap">
            <div className="article-hero-img anemone"></div>
          </div>
        </header>

        <div className="article-body">
          <div className="wrap">
            <div className="article-layout">
              <aside className="article-toc">
                <div className="eyebrow" style={{ marginBottom: '14px' }}>In this piece</div>
                <ol>
                  <li><a href="#why">Why we sleep — really</a></li>
                  <li><a href="#circadian">Your internal clock</a></li>
                  <li><a href="#stages">The four stages</a></li>
                  <li><a href="#habits">Eight habits that protect it</a></li>
                  <li><a href="#bottom-line">The bottom line</a></li>
                </ol>

                <div className="share">
                  <div className="eyebrow" style={{ margin: '28px 0 12px' }}>Share</div>
                  <div className="share-row">
                    <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V10h2.5v8zM7.25 8.8a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18 18h-2.5v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18H10V10h2.4v1.1h.03a2.65 2.65 0 0 1 2.4-1.3c2.55 0 3.02 1.7 3.02 3.9V18z"/></svg></a>
                    <a href="#" aria-label="X"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5-6.5L4.5 21H1.5l8-9.2L1.5 3h6.8l4.5 6 5.2-6z"/></svg></a>
                    <a href="#" aria-label="Email"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></a>
                    <a href="#" aria-label="Copy link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg></a>
                  </div>
                </div>
              </aside>

              <div className="article-prose">
                <p className="lead-para">For most of us, sleep feels like time off — a pause in the day, useful but optional. The biology tells a different story. While you sleep, your brain is busy clearing waste, consolidating memory, and resetting hormonal systems. Your body is repairing tissues, balancing blood sugar, and strengthening the immune response.</p>

                <p>It's the most active "rest" you'll ever have. And when it's compromised — chronically, even a little — almost every other system in the body pays a price.</p>

                <h2 id="why">Why we sleep — really</h2>
                <p>Long-term poor sleep has been linked in research to heart disease, stroke, hypertension, type 2 diabetes, obesity, depression, and overall cardiovascular mortality. In 2022 the American Heart Association added sleep as the 8<sup>th</sup> pillar to its <em>Life's Essential 8</em> checklist for cardiovascular health — alongside diet, activity, and smoking.</p>
                <p>That addition wasn't ceremonial. It reflects a decade of evidence showing that habitually getting fewer than 7 hours of quality sleep is independently associated with worse cardiometabolic outcomes — even after adjusting for diet, weight, and physical activity.</p>

                <blockquote>
                  <p>"Sleep is not lost time. It's the most active maintenance period your body has — and the one we most consistently undervalue."</p>
                </blockquote>

                <h2 id="circadian">Your internal clock — and why it matters</h2>
                <p>The <strong>circadian rhythm</strong> is your body's roughly 24-hour internal clock. It regulates sleep timing, body temperature, hormone release (most notably melatonin and cortisol), energy and alertness, and digestion. The "master clock" lives in a small brain region called the suprachiasmatic nucleus, and it takes its cues mainly from light.</p>
                <p>Morning light tells your body to stay alert and produces a cortisol pulse that gets you moving. Evening darkness signals melatonin release and primes you for sleep. When your rhythm is aligned, sleep onset is easy, energy is stable, and waking feels natural. When it's disrupted — by inconsistent timing, late-night light, or shift work — the downstream effects show up in metabolism, mood, and cardiovascular markers.</p>

                <h2 id="stages">The four stages of sleep</h2>
                <p>Sleep is not a single state. It cycles through four distinct stages, each with its own physiology and function:</p>
                <ol>
                  <li><strong>Awake / drowsy.</strong> Heart rate and breathing slow. You may experience small muscle contractions known as hypnic jerks as the body lets go.</li>
                  <li><strong>Light sleep.</strong> Eye movements stop. Brain activity shifts to characteristic sleep spindles and K-complexes. Temperature and heart rate continue to fall.</li>
                  <li><strong>Deep sleep.</strong> Slow delta waves dominate. Blood flow to muscles increases. Growth hormone and prolactin are released — supporting tissue repair and immune function.</li>
                  <li><strong>REM sleep.</strong> Rapid eye movements, vivid dreams, and high brain activity. Voluntary muscles are temporarily paralysed. Acetylcholine and norepinephrine become active.</li>
                </ol>

                <h2 id="habits">Eight evidence-based habits that protect your sleep</h2>
                <p>None of these are theory. Each is grounded in circadian biology, autonomic regulation, or sleep-architecture research. You don't need to do all eight at once — pick the two that look most off in your week.</p>

                <ol className="numbered-habits">
                  <li><strong>Keep a consistent schedule.</strong> Going to bed and waking at roughly the same time keeps the suprachiasmatic clock synchronised. Variable timing is independently linked to poorer sleep quality.</li>
                  <li><strong>Get morning light.</strong> 10–20 minutes outside within an hour of waking is the strongest single cue you can give your clock.</li>
                  <li><strong>Reduce evening blue light.</strong> Short-wavelength light suppresses melatonin secretion. Dim things down for the last hour before bed.</li>
                  <li><strong>Limit afternoon caffeine.</strong> Caffeine blocks adenosine receptors. Even 6 hours before bed it can measurably reduce sleep quality.</li>
                  <li><strong>Don't eat heavy late.</strong> Late meals raise core body temperature and disrupt peripheral circadian clocks in the liver and gut.</li>
                  <li><strong>Reduce arousal before sleep.</strong> Mindfulness, slow breathing, and gentle stretching shift the nervous system from sympathetic toward parasympathetic.</li>
                  <li><strong>Keep it cool and dark.</strong> Core temperature naturally drops before sleep. A cool room supports it; darkness promotes melatonin.</li>
                  <li><strong>Move daily.</strong> Regular physical activity supports adenosine accumulation and deeper slow-wave sleep — but avoid intense exercise close to bedtime.</li>
                </ol>

                <h2 id="bottom-line">The bottom line</h2>
                <p>Sleep isn't a productivity loss — it's a productivity multiplier. It's also one of the most modifiable risk factors we have for cardiovascular and metabolic disease, mental health, and long-term cognitive function. Protect it the way you would protect any other vital sign.</p>
                <p>Inside the TRAIN app, <Link href="/sleep">MySleep</Link> tracks your sleep architecture from your wearable, while Sleep Meditation and Sound Scapes help you wind down without screens. None of it replaces medical care — but together it gives you a way to act on what the research has been telling us for two decades.</p>

                <div className="tags">
                  <span className="eyebrow">Tagged</span>
                  <a href="#" className="tag-link">Sleep</a>
                  <a href="#" className="tag-link">Circadian rhythm</a>
                  <a href="#" className="tag-link">Cardiovascular</a>
                  <a href="#" className="tag-link">Recovery</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="related-articles" data-screen-label="More articles">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '40px' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Keep reading</div>
              <h2>More from TRAIN.</h2>
            </div>
            <p>Other plain-language pieces by our clinician-scientists.</p>
            <Link href="/blog" className="all">All articles <span className="arrow">↗</span></Link>
          </div>

          <div className="insights-grid blog-grid">
            <article className="article">
              <Link href="/blog/article" className="thumb anemone"></Link>
              <div className="body">
                <div className="meta"><span className="pill">Sleep</span><span className="date">Mar 14, 2026</span></div>
                <h3><Link href="/blog/article">The truth about caffeine — when it stops being useful.</Link></h3>
                <p>Adenosine, sleep pressure, and why the 6-hour rule is more important than most people realise.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" ></Link>
              <div className="body">
                <div className="meta"><span className="pill">Mental Health</span><span className="date">May 04, 2026</span></div>
                <h3><Link href="/blog/article">Stress less, live more — managing stress for heart health.</Link></h3>
                <p>The biology of chronic stress, and short daily practices proven to shift you into rest-and-recover.</p>
              </div>
            </article>
            <article className="article">
              <Link href="/blog/article" className="thumb anemone" ></Link>
              <div className="body">
                <div className="meta"><span className="pill">Movement</span><span className="date">Feb 28, 2026</span></div>
                <h3><Link href="/blog/article">Why muscle is medicine — strength and healthy ageing.</Link></h3>
                <p>Sarcopenia, myokines, and the most underrated predictor of longevity.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
