import Link from 'next/link'
import Image from 'next/image'
import { getAllCollaborators } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

export const revalidate = 0

export const metadata = { title: 'Collaborators — TRAIN' }

type Collaborator = {
  _id: string
  name: string
  type: string
  location: string
  description: string
  logo?: SanityImageSource
  website?: string
}

const STATIC_ACADEMIC = [
  { name: 'Amsterdam UMC', loc: 'Amsterdam, NL' },
  { name: 'Leiden University Medical Center', loc: 'Leiden, NL' },
  { name: 'Erasmus MC', loc: 'Rotterdam, NL' },
  { name: 'AIIMS New Delhi', loc: 'New Delhi, IN' },
  { name: 'KEM Hospital Mumbai', loc: 'Mumbai, IN' },
  { name: 'Karolinska Institutet', loc: 'Stockholm, SE' },
  { name: 'Oxford Cardiovascular', loc: 'Oxford, UK' },
  { name: 'Mayo Clinic', loc: 'Rochester, US' },
  { name: 'Cleveland Clinic', loc: 'Cleveland, US' },
  { name: 'Johns Hopkins', loc: 'Baltimore, US' },
  { name: 'Yale School of Medicine', loc: 'New Haven, US' },
  { name: 'University of Cambridge', loc: 'Cambridge, UK' },
]

const STATIC_PROFESSIONAL = [
  { name: 'European Society of Cardiology', loc: 'Sophia Antipolis, FR' },
  { name: 'American Heart Association', loc: 'Dallas, US' },
  { name: 'European Association for Cardio-Thoracic Surgery', loc: 'Windsor, UK' },
  { name: 'Society of Thoracic Surgeons', loc: 'Chicago, US' },
  { name: 'Cardiothoracic Surgery Network', loc: 'Brussels, BE' },
  { name: 'World Heart Federation', loc: 'Geneva, CH' },
]

const STATIC_COMMUNITY = [
  { name: 'Koninklijke Nederlandse Cricket Bond', loc: 'Amstelveen, NL' },
  { name: 'Cricket Netherlands', loc: 'NL' },
  { name: 'Sukh Community Foundation', loc: 'Amsterdam, NL' },
  { name: 'Centre for Diversity in Health', loc: 'Amsterdam, NL' },
  { name: 'Patient Advisory Network', loc: 'International' },
  { name: 'Public Health NL', loc: 'Bilthoven, NL' },
]

export default async function CollaboratorsPage() {
  let collaborators: Collaborator[] = []
  try {
    collaborators = await getAllCollaborators()
  } catch {
    // Sanity not configured yet
  }

  const hasSanity = collaborators.length > 0
  const academic = collaborators.filter(c => c.type === 'Academic' || c.type === 'Clinical')
  const professional = collaborators.filter(c => c.type === 'Government' || c.type === 'Charity')
  const community = collaborators.filter(c => c.type === 'Industry')

  return (
    <>
      <section className="science-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/science">Science</Link>
            <span className="sep">/</span>
            <span className="current">Collaborators</span>
          </div>
          <h1 style={{ marginTop: '40px' }}>Built with the best in the field.</h1>
          <p className="lead">
            TRAIN and the TARGet Research Group work with leading medical, academic, and public-partner
            institutions worldwide. Together, we advance evidence-based health and translate research
            into real-world impact.
          </p>
        </div>
      </section>

      <section className="target" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="target-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>By the numbers</div>
              <h2>A growing global network.</h2>
              <p>From early-career researchers to leading academic centres, our network spans clinical care, genomics, data science, and community-based prevention.</p>
              <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Become a collaborator <span className="arrow">→</span></Link>
                <Link href="/science#publications" className="btn btn-ghost">Read publications</Link>
              </div>
            </div>
            <div className="nums">
              <div className="n"><div className="v">50+</div><div className="l"><strong>Institutions</strong><br />academic, hospital and industry partners</div></div>
              <div className="n"><div className="v">25+</div><div className="l"><strong>Countries</strong><br />from Europe and the Americas to Asia and Africa</div></div>
              <div className="n"><div className="v">100+</div><div className="l"><strong>Publications</strong><br />contributing to international research and innovation</div></div>
              <div className="n"><div className="v">20+</div><div className="l"><strong>Active projects</strong><br />across clinical, genomic and community research</div></div>
            </div>
          </div>
        </div>
      </section>

      {hasSanity ? (
        <section style={{ padding: '96px 0' }}>
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: '40px' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: '18px' }}>All collaborators</div>
                <h2>Our global partners.</h2>
              </div>
              <p>Leading institutions, professional bodies, and community partners working with TARGet.</p>
            </div>
            <div className="collab-cards">
              {collaborators.map(c => (
                <div key={c._id} className="collab-card">
                  {c.logo && (
                    <Image
                      src={urlFor(c.logo).width(80).height(40).url()}
                      alt={c.name}
                      width={80}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                  {!c.logo && <span className="dot"></span>}
                  <span>{c.name}</span>
                  {c.location && <span className="loc">{c.location}</span>}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          <section style={{ padding: '96px 0' }}>
            <div className="wrap">
              <div className="sec-head" style={{ marginBottom: '40px' }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: '18px' }}>Academic institutions</div>
                  <h2>University and hospital partners.</h2>
                </div>
                <p>Leading research universities and academic medical centres — collaborating on translational science, clinical trials, and population studies.</p>
              </div>
              <div className="collab-cards">
                {STATIC_ACADEMIC.map(c => (
                  <div key={c.name} className="collab-card"><span className="dot"></span><span>{c.name}</span><span className="loc">{c.loc}</span></div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: '0 0 96px' }}>
            <div className="wrap">
              <div className="sec-head" style={{ marginBottom: '40px' }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: '18px' }}>Professional bodies</div>
                  <h2>Societies, federations and clinical networks.</h2>
                </div>
                <p>Working with the bodies that shape clinical guidelines and global standards.</p>
              </div>
              <div className="collab-cards">
                {STATIC_PROFESSIONAL.map(c => (
                  <div key={c.name} className="collab-card"><span className="dot"></span><span>{c.name}</span><span className="loc">{c.loc}</span></div>
                ))}
              </div>
            </div>
          </section>

          <section style={{ padding: '0 0 96px' }}>
            <div className="wrap">
              <div className="sec-head" style={{ marginBottom: '40px' }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: '18px' }}>Community &amp; sport partners</div>
                  <h2>Where research meets daily life.</h2>
                </div>
                <p>Partnerships that bring our research into the spaces where people actually live, train, and recover.</p>
              </div>
              <div className="collab-cards">
                {STATIC_COMMUNITY.map(c => (
                  <div key={c.name} className="collab-card"><span className="dot"></span><span>{c.name}</span><span className="loc">{c.loc}</span></div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="cta">
        <div className="wrap">
          <div className="cta-card">
            <h2>Want to collaborate with us?</h2>
            <div className="right">
              <p>The TARGet research group welcomes new clinical, academic, and community partners. Whether you have data, a question, or a co-funded study in mind — get in touch.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">Get in touch <span className="arrow">→</span></Link>
                <Link href="/science" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>About the research group</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
