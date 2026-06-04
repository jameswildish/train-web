import Link from 'next/link'

export const metadata = {
  title: 'Collaborators — TRAIN',
}

export default function CollaboratorsPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="science-hero" data-screen-label="01 Collaborators Hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/science">Science</Link>
            <span className="sep">/</span>
            <span className="current">Collaborators</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">
            Worldwide partnerships
          </div>
          <h1>Built with the best in the field.</h1>
          <p className="lead">
            TRAIN and the TARGet Research Group work with leading medical, academic, and public-partner
            institutions worldwide. Together, we advance evidence-based health and translate research
            into real-world impact.
          </p>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section
        className="target"
        data-screen-label="02 Collab Stats"
        style={{ borderTop: '1px solid var(--line)' }}
      >
        <div className="wrap">
          <div className="target-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>By the numbers</div>
              <h2>A growing global network.</h2>
              <p>
                From early-career researchers to leading academic centres, our network spans clinical
                care, genomics, data science, and community-based prevention.
              </p>
              <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">
                  Become a collaborator <span className="arrow">→</span>
                </Link>
                <Link href="/science#publications" className="btn btn-ghost">
                  Read publications
                </Link>
              </div>
            </div>
            <div className="nums">
              <div className="n">
                <div className="v">50+</div>
                <div className="l">
                  <strong>Institutions</strong>
                  <br />
                  academic, hospital and industry partners
                </div>
              </div>
              <div className="n">
                <div className="v">25+</div>
                <div className="l">
                  <strong>Countries</strong>
                  <br />
                  from Europe and the Americas to Asia and Africa
                </div>
              </div>
              <div className="n">
                <div className="v">100+</div>
                <div className="l">
                  <strong>Publications</strong>
                  <br />
                  contributing to international research and innovation
                </div>
              </div>
              <div className="n">
                <div className="v">20+</div>
                <div className="l">
                  <strong>Active projects</strong>
                  <br />
                  across clinical, genomic and community research
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ACADEMIC INSTITUTIONS ============ */}
      <section style={{ padding: '96px 0' }} data-screen-label="03 Collaborators Grid">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '40px' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Academic institutions</div>
              <h2>University and hospital partners.</h2>
            </div>
            <p>
              Leading research universities and academic medical centres — collaborating on
              translational science, clinical trials, and population studies.
            </p>
          </div>
          <div className="collab-cards">
            <div className="collab-card"><span className="dot"></span><span>Amsterdam UMC</span><span className="loc">Amsterdam, NL</span></div>
            <div className="collab-card"><span className="dot"></span><span>Leiden University Medical Center</span><span className="loc">Leiden, NL</span></div>
            <div className="collab-card"><span className="dot"></span><span>Erasmus MC</span><span className="loc">Rotterdam, NL</span></div>
            <div className="collab-card"><span className="dot"></span><span>AIIMS New Delhi</span><span className="loc">New Delhi, IN</span></div>
            <div className="collab-card"><span className="dot"></span><span>KEM Hospital Mumbai</span><span className="loc">Mumbai, IN</span></div>
            <div className="collab-card"><span className="dot"></span><span>Karolinska Institutet</span><span className="loc">Stockholm, SE</span></div>
            <div className="collab-card"><span className="dot"></span><span>Oxford Cardiovascular</span><span className="loc">Oxford, UK</span></div>
            <div className="collab-card"><span className="dot"></span><span>Mayo Clinic</span><span className="loc">Rochester, US</span></div>
            <div className="collab-card"><span className="dot"></span><span>Cleveland Clinic</span><span className="loc">Cleveland, US</span></div>
            <div className="collab-card"><span className="dot"></span><span>Johns Hopkins</span><span className="loc">Baltimore, US</span></div>
            <div className="collab-card"><span className="dot"></span><span>Yale School of Medicine</span><span className="loc">New Haven, US</span></div>
            <div className="collab-card"><span className="dot"></span><span>University of Cambridge</span><span className="loc">Cambridge, UK</span></div>
          </div>
        </div>
      </section>

      {/* ============ PROFESSIONAL BODIES ============ */}
      <section style={{ padding: '0 0 96px' }} data-screen-label="04 Professional Bodies">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '40px' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Professional bodies</div>
              <h2>Societies, federations and clinical networks.</h2>
            </div>
            <p>Working with the bodies that shape clinical guidelines and global standards.</p>
          </div>
          <div className="collab-cards">
            <div className="collab-card"><span className="dot"></span><span>European Society of Cardiology</span><span className="loc">Sophia Antipolis, FR</span></div>
            <div className="collab-card"><span className="dot"></span><span>American Heart Association</span><span className="loc">Dallas, US</span></div>
            <div className="collab-card"><span className="dot"></span><span>European Association for Cardio-Thoracic Surgery</span><span className="loc">Windsor, UK</span></div>
            <div className="collab-card"><span className="dot"></span><span>Society of Thoracic Surgeons</span><span className="loc">Chicago, US</span></div>
            <div className="collab-card"><span className="dot"></span><span>Cardiothoracic Surgery Network</span><span className="loc">Brussels, BE</span></div>
            <div className="collab-card"><span className="dot"></span><span>World Heart Federation</span><span className="loc">Geneva, CH</span></div>
          </div>
        </div>
      </section>

      {/* ============ COMMUNITY & SPORT ============ */}
      <section style={{ padding: '0 0 96px' }} data-screen-label="05 Community Partners">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: '40px' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Community &amp; sport partners</div>
              <h2>Where research meets daily life.</h2>
            </div>
            <p>
              Partnerships that bring our research into the spaces where people actually live, train,
              and recover.
            </p>
          </div>
          <div className="collab-cards">
            <div className="collab-card"><span className="dot"></span><span>Koninklijke Nederlandse Cricket Bond</span><span className="loc">Amstelveen, NL</span></div>
            <div className="collab-card"><span className="dot"></span><span>Cricket Netherlands</span><span className="loc">NL</span></div>
            <div className="collab-card"><span className="dot"></span><span>Sukh Community Foundation</span><span className="loc">Amsterdam, NL</span></div>
            <div className="collab-card"><span className="dot"></span><span>Centre for Diversity in Health</span><span className="loc">Amsterdam, NL</span></div>
            <div className="collab-card"><span className="dot"></span><span>Patient Advisory Network</span><span className="loc">International</span></div>
            <div className="collab-card"><span className="dot"></span><span>Public Health NL</span><span className="loc">Bilthoven, NL</span></div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta" data-screen-label="06 Collab CTA">
        <div className="wrap">
          <div className="cta-card">
            <h2>Want to collaborate with us?</h2>
            <div className="right">
              <p>
                The TARGet research group welcomes new clinical, academic, and community partners.
                Whether you have data, a question, or a co-funded study in mind — get in touch.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">
                  Get in touch <span className="arrow">→</span>
                </Link>
                <Link
                  href="/science"
                  className="btn"
                  style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}
                >
                  About the research group
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
