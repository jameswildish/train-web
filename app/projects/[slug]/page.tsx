import Link from 'next/link'
import { PortableText } from 'next-sanity'
import { getProjectBySlug, getAllProjects } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { SanityImageSource } from '@sanity/image-url'

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
    const project = await getProjectBySlug(slug)
    return { title: project ? `${project.title} — TRAIN Projects` : 'Project — TRAIN' }
  } catch {
    return { title: 'Project — TRAIN' }
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let project: null | {
    title: string
    tag: string
    tagline: string
    summary: string
    status: string
    mainImage: SanityImageSource | null
    body: unknown[]
    stats: Array<{ value: string; label: string }>
    teamMembers: Array<{ name: string; role: string; image: SanityImageSource | null }>
  } = null

  try {
    project = await getProjectBySlug(slug)
  } catch {
    // Sanity not configured yet
  }

  if (!project) notFound()

  return (
    <>
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
            {project.tag && `${project.tag} · `}{project.status}
          </div>
          <h1>{project.title}</h1>
          {project.tagline && <p className="tagline">{project.tagline}</p>}
          <div className="media">
            {project.mainImage ? (
              <Image
                src={urlFor(project.mainImage).width(1200).height(500).url()}
                alt={project.title}
                width={1200}
                height={500}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            ) : (
              <div className="anemone" style={{ height: '400px' }}>
                <div className="badges">
                  <span className="badge"><span className="dot"></span> TARGet Research Group</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {project.summary && (
        <section className="proj-intro">
          <div className="wrap">
            <div className="grid">
              <div>
                <div className="eyebrow" style={{ marginBottom: '18px' }}>Overview</div>
                <h2>About this project</h2>
                <p>{project.summary}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {project.body && Array.isArray(project.body) && project.body.length > 0 && (
        <section className="proj-do">
          <div className="wrap">
            <div className="article-prose">
              <PortableText value={project.body as Parameters<typeof PortableText>[0]['value']} />
            </div>
          </div>
        </section>
      )}

      {project.stats && project.stats.length > 0 && (
        <section className="proj-facts">
          <div className="wrap">
            <div className="eyebrow">Key facts</div>
            <h2>By the numbers.</h2>
            <div className="facts-grid">
              {project.stats.map((stat, i) => (
                <div key={i} className="fact">
                  <div className="v">{stat.value}</div>
                  <div className="l">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.teamMembers && project.teamMembers.length > 0 && (
        <section className="proj-related">
          <div className="wrap">
            <div className="eyebrow" style={{ marginBottom: '18px' }}>Team</div>
            <h2>Project team.</h2>
            <div className="team-grid">
              {project.teamMembers.map((member, i) => (
                <div key={i} className="member">
                  <div className="photo">
                    {member.image ? (
                      <Image
                        src={urlFor(member.image).width(200).height(200).url()}
                        alt={member.name}
                        width={200}
                        height={200}
                      />
                    ) : (
                      <div className="placeholder-stripe"><span>Photo placeholder</span></div>
                    )}
                  </div>
                  <div className="info">
                    <div className="name">{member.name}</div>
                    <div className="role">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="proj-related">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Related projects</div>
              <h2>Other work from TARGet.</h2>
            </div>
            <Link href="/projects" className="all">All projects <span className="arrow">↗</span></Link>
          </div>
        </div>
      </section>

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
