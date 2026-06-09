import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjects } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

export const revalidate = 0

export async function generateStaticParams() {
  try {
    const projects = await getAllProjects()
    return projects.map((p: { slug: { current: string } }) => ({ slug: p.slug.current }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const p = await getProjectBySlug(slug)
    return { title: p ? `${p.title} — TRAIN Projects` : 'Project — TRAIN' }
  } catch {
    return { title: 'Project — TRAIN' }
  }
}

// Split text into paragraphs on blank lines
function paras(text: string) {
  return text?.split(/\n\n+/).filter(Boolean).map((p, i) => <p key={i}>{p}</p>)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let project: any = null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let allProjects: any[] = []
  try {
    ;[project, allProjects] = await Promise.all([getProjectBySlug(slug), getAllProjects()])
  } catch {
    // Sanity not configured
  }

  if (!project) notFound()

  // Next 3 projects in CMS order, wrapping around
  const currentIdx = allProjects.findIndex((p: { slug: { current: string } }) => p.slug.current === slug)
  const related = currentIdx === -1 ? [] : [1, 2, 3].map(offset => allProjects[(currentIdx + offset) % allProjects.length])

  const hasOverview = project.overviewHeading || project.overviewBody || project.missionStatement
  const hasWhy = project.whyHeading || project.whyBody
  const hasWork = project.whatWeDoItems?.length > 0 || project.scienceBody
  const hasImpact = project.impactCells?.length > 0
  const hasStats = project.stats?.length > 0
  const hasTeam = project.teamMembers?.length > 0
  const hasRelated = related.length > 0

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="project-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/projects">Our Work</Link>
            <span className="sep">/</span>
            <span className="current">{project.title}</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">
            {[project.tag, project.year].filter(Boolean).join(' · ')}
          </div>
          <h1>{project.title}</h1>
          {project.tagline && <p className="tagline">{project.tagline}</p>}

          <div className="media">
            {project.mainImage ? (
              <Image
                src={urlFor(project.mainImage as SanityImageSource).width(1600).height(700).url()}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            ) : (
              <div className="anemone" style={{ width: '100%', height: '100%' }}>
                {project.badges?.length > 0 && (
                  <div className="badges">
                    {project.badges.map((b: string) => (
                      <span key={b} className="badge"><span className="dot"></span> {b}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Overview ─────────────────────────────────────────────── */}
      {hasOverview && (
        <section className="proj-intro">
          <div className="wrap">
            <div className="grid">
              <div>
                <div className="eyebrow" style={{ marginBottom: '18px' }}>Overview</div>
                {project.overviewHeading && <h2>{project.overviewHeading}</h2>}
                {project.overviewBody && paras(project.overviewBody)}
              </div>
              {project.missionStatement && (
                <aside>
                  <div className="eyebrow">Our mission</div>
                  <h4>{project.missionStatement}</h4>
                </aside>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── Why this matters ─────────────────────────────────────── */}
      {hasWhy && (
        <section className="proj-why">
          <div className="wrap">
            <div className="grid">
              <div>
                <div className="eyebrow" style={{ marginBottom: '18px' }}>Why this matters</div>
                {project.whyHeading && <h2>{project.whyHeading}</h2>}
              </div>
              <div>
                {project.whyBody && paras(project.whyBody)}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── What we do + Scientific foundation ───────────────────── */}
      {hasWork && (
        <section className="proj-do">
          <div className="wrap">
            <div className="grid">
              {project.whatWeDoItems?.length > 0 && (
                <div className="block">
                  <div className="eyebrow">What we do</div>
                  {project.whatWeDoHeading && <h3>{project.whatWeDoHeading}</h3>}
                  <ul>
                    {project.whatWeDoItems.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.scienceBody && (
                <div className="block">
                  <div className="eyebrow">Scientific foundation</div>
                  {project.scienceHeading && <h3>{project.scienceHeading}</h3>}
                  {paras(project.scienceBody)}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── Impact ───────────────────────────────────────────────── */}
      {hasImpact && (
        <section className="proj-impact">
          <div className="wrap">
            <div className="eyebrow" style={{ marginBottom: '18px' }}>Impact</div>
            <h2>{project.impactHeading || 'Who benefits — and how.'}</h2>
            <div className="impact-grid" style={{ marginTop: '32px' }}>
              {project.impactCells.map((cell: { tag?: string; heading?: string; body?: string }, i: number) => (
                <div key={i} className="impact-cell">
                  {cell.tag && <div className="tag">{cell.tag}</div>}
                  {cell.heading && <h4>{cell.heading}</h4>}
                  {cell.body && <p>{cell.body}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Key facts ────────────────────────────────────────────── */}
      {hasStats && (
        <section className="proj-facts">
          <div className="wrap">
            <div className="eyebrow">Key facts</div>
            <h2>By the numbers.</h2>
            <div className="facts-grid">
              {project.stats.map((s: { value: string; label: string }, i: number) => (
                <div key={i} className="fact">
                  <div className="v">{s.value}</div>
                  <div className="l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Team ─────────────────────────────────────────────────── */}
      {hasTeam && (
        <section className="proj-related">
          <div className="wrap">
            <div className="eyebrow" style={{ marginBottom: '18px' }}>Team</div>
            <h2>Project team.</h2>
            <div className="team-grid" style={{ marginTop: '32px' }}>
              {project.teamMembers.map((m: { name: string; role: string; image?: SanityImageSource }, i: number) => (
                <div key={i} className="team-card">
                  <div className="portrait">
                    {m.image
                      ? <Image src={urlFor(m.image).width(300).height(300).url()} alt={m.name} width={300} height={300} />
                      : <div className="placeholder-stripe"><span>Photo placeholder</span></div>
                    }
                  </div>
                  <div className="info">
                    <div className="name">{m.name}</div>
                    <div className="role">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Related projects ─────────────────────────────────────── */}
      {hasRelated && (
        <section className="proj-related">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow" style={{ marginBottom: '18px' }}>Related projects</div>
                <h2>Other work from TARGet.</h2>
              </div>
              <Link href="/projects" className="all">All projects <span className="arrow">↗</span></Link>
            </div>
            <div className="projects-grid">
              {related.map((r: { _id: string; title: string; slug: { current: string }; tag?: string; year?: string; summary?: string; mainImage?: SanityImageSource }) => (
                <Link key={r._id} href={`/projects/${r.slug.current}`} className="project">
                  <div className="thumb">
                    {r.mainImage
                      ? <Image src={urlFor(r.mainImage).width(800).height(480).url()} alt={r.title} fill style={{ objectFit: 'cover' }} />
                      : <div className="anemone" style={{ width: '100%', height: '100%' }} />
                    }
                  </div>
                  <div className="body">
                    <span className="tag">{[r.tag, r.year].filter(Boolean).join(' · ')}</span>
                    <h3>{r.title}</h3>
                    {r.summary && <p>{r.summary}</p>}
                    <span className="more">Learn more <span className="arrow">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="pillar-cta">
        <div className="wrap">
          <div className="card">
            <h2>Collaborate with the TARGet group.</h2>
            <div className="actions">
              <Link href="/contact" className="btn btn-primary">Get in touch <span className="arrow">→</span></Link>
              <Link href="/science" className="btn" style={{ border: '1px solid rgba(244,241,234,0.3)', color: 'var(--bg)' }}>About the research group →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
