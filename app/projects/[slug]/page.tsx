import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
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

// ─── Custom block renderers ─────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, i: number) {
  switch (block._type) {
    case 'sectionHeading':
      return (
        <section key={block._key ?? i} className="proj-intro">
          <div className="wrap">
            {block.eyebrow && <div className="eyebrow" style={{ marginBottom: '18px' }}>{block.eyebrow}</div>}
            {block.heading && <h2>{block.heading}</h2>}
            {block.body && <p style={{ marginTop: '16px' }}>{block.body}</p>}
          </div>
        </section>
      )

    case 'twoColumn':
      return (
        <section key={block._key ?? i} className="proj-why">
          <div className="wrap">
            <div className="grid">
              <div>
                {block.eyebrow && <div className="eyebrow" style={{ marginBottom: '18px' }}>{block.eyebrow}</div>}
                {block.heading && <h2>{block.heading}</h2>}
                {block.leftBody && <p style={{ marginTop: '16px' }}>{block.leftBody}</p>}
              </div>
              <div>
                {block.rightEyebrow && <div className="eyebrow">{block.rightEyebrow}</div>}
                {block.rightHeading && <h4>{block.rightHeading}</h4>}
                {block.rightBody && <p>{block.rightBody}</p>}
              </div>
            </div>
          </div>
        </section>
      )

    case 'bulletList':
      return (
        <section key={block._key ?? i} className="proj-do">
          <div className="wrap">
            <div className="block">
              {block.eyebrow && <div className="eyebrow">{block.eyebrow}</div>}
              {block.heading && <h3>{block.heading}</h3>}
              {block.items?.length > 0 && (
                <ul>
                  {block.items.map((item: string, j: number) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </div>
          </div>
        </section>
      )

    case 'impactGrid':
      return (
        <section key={block._key ?? i} className="proj-impact">
          <div className="wrap">
            {block.eyebrow && <div className="eyebrow" style={{ marginBottom: '18px' }}>{block.eyebrow}</div>}
            {block.heading && <h2>{block.heading}</h2>}
            <div className="impact-grid" style={{ marginTop: '32px' }}>
              {block.cells?.map((cell: { tag?: string; heading?: string; body?: string }, j: number) => (
                <div key={j} className="impact-cell">
                  {cell.tag && <div className="tag">{cell.tag}</div>}
                  {cell.heading && <h4>{cell.heading}</h4>}
                  {cell.body && <p>{cell.body}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'block':
      return null // handled by PortableText below

    case 'image':
      if (!block.asset) return null
      return (
        <div key={block._key ?? i} className="wrap" style={{ margin: '40px auto' }}>
          <Image
            src={urlFor(block as SanityImageSource).width(1100).url()}
            alt={block.alt ?? ''}
            width={1100}
            height={600}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      )

    default:
      return null
  }
}

// Separate out pure text blocks for PortableText, everything else rendered custom
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function splitBody(body: any[]) {
  const sections: Array<{ type: 'pt'; blocks: unknown[] } | { type: 'custom'; block: unknown; i: number }> = []
  let ptBuffer: unknown[] = []

  body.forEach((block, i) => {
    if (block._type === 'block' || block._type === 'image') {
      ptBuffer.push(block)
    } else {
      if (ptBuffer.length) {
        sections.push({ type: 'pt', blocks: ptBuffer })
        ptBuffer = []
      }
      sections.push({ type: 'custom', block, i })
    }
  })
  if (ptBuffer.length) sections.push({ type: 'pt', blocks: ptBuffer })
  return sections
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let project: any = null
  try {
    project = await getProjectBySlug(slug)
  } catch {
    // Sanity not configured
  }

  if (!project) notFound()

  const bodySections = project.body ? splitBody(project.body) : []

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
                src={urlFor(project.mainImage as SanityImageSource).width(1200).height(500).url()}
                alt={project.title}
                width={1200}
                height={500}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                priority
              />
            ) : (
              <div className="anemone" style={{ height: '400px', borderRadius: '8px' }}>
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
      {project.summary && (
        <section className="proj-intro">
          <div className="wrap">
            <div className="grid">
              <div>
                <div className="eyebrow" style={{ marginBottom: '18px' }}>Overview</div>
                <h2>About this project</h2>
                <p style={{ marginTop: '16px' }}>{project.summary}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Flexible body sections ───────────────────────────────── */}
      {bodySections.map((section, i) => {
        if (section.type === 'pt') {
          return (
            <section key={i} style={{ padding: '0 0 48px' }}>
              <div className="wrap">
                <div className="article-prose">
                  <PortableText value={section.blocks as Parameters<typeof PortableText>[0]['value']} />
                </div>
              </div>
            </section>
          )
        }
        return renderBlock(section.block, section.i)
      })}

      {/* ─── Stats ────────────────────────────────────────────────── */}
      {project.stats?.length > 0 && (
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
      {project.teamMembers?.length > 0 && (
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
      {project.related?.length > 0 && (
        <section className="proj-related">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="eyebrow" style={{ marginBottom: '18px' }}>Related projects</div>
                <h2>Other work from TARGet.</h2>
              </div>
              <p>Each project sits within a connected research portfolio.</p>
              <Link href="/projects" className="all">All projects <span className="arrow">↗</span></Link>
            </div>
            <div className="projects-grid">
              {project.related.map((r: { _id: string; title: string; slug: { current: string }; tag?: string; year?: string; summary?: string; mainImage?: SanityImageSource }) => (
                <Link key={r._id} href={`/projects/${r.slug.current}`} className="project">
                  {r.mainImage
                    ? <Image className="thumb" src={urlFor(r.mainImage).width(600).height(320).url()} alt={r.title} width={600} height={320} style={{ objectFit: 'cover' }} />
                    : <div className="thumb anemone"></div>
                  }
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
