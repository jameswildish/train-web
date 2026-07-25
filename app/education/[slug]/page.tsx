import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/types'
import { getEducationArticleBySlug, getAllEducationArticles } from '@/sanity/lib/queries'

export const revalidate = 0

export async function generateStaticParams() {
  try {
    const articles = await getAllEducationArticles()
    return articles.map((a: { slug: { current: string } }) => ({ slug: a.slug.current }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const article = await getEducationArticleBySlug(slug)
    return { title: article ? `${article.title} — TRAIN` : 'Education — TRAIN' }
  } catch {
    return { title: 'Education — TRAIN' }
  }
}

const PILLAR_LABELS: Record<string, { label: string; href: string }> = {
  activity: { label: 'Activity', href: '/activity' },
  sleep: { label: 'Sleep', href: '/sleep' },
  'mental-health': { label: 'Mental Health', href: '/mental-health' },
  nutrition: { label: 'Nutrition', href: '/nutrition' },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function extractPlainText(body: PortableTextBlock[]): string {
  return body
    .filter((b): b is PortableTextBlock & { children: Array<{ text?: string }> } =>
      b._type === 'block' && Array.isArray((b as { children?: unknown }).children)
    )
    .flatMap(b => b.children.map(c => c.text ?? ''))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function getReadTime(body: PortableTextBlock[]): number {
  const words = extractPlainText(body).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

function extractHeadings(body: PortableTextBlock[]) {
  return body
    .filter((b): b is PortableTextBlock & { style: string; _key: string; children: Array<{ text: string }> } =>
      b._type === 'block' && (b.style === 'h2' || b.style === 'h3') && Array.isArray(b.children)
    )
    .map(b => ({
      key: b._key,
      text: b.children.map(c => c.text).join(''),
      level: b.style,
    }))
}

function getYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
  return m?.[1] ?? null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ptComponents: any = {
  block: {
    h2: ({ children, value }: { children: React.ReactNode; value: { _key: string } }) => (
      <h2 id={value._key}>{children}</h2>
    ),
    h3: ({ children, value }: { children: React.ReactNode; value: { _key: string } }) => (
      <h3 id={value._key}>{children}</h3>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote><p>{children}</p></blockquote>
    ),
    normal: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
  },
  marks: {
    sup: ({ children }: { children: React.ReactNode }) => <sup>{children}</sup>,
  },
  types: {
    file: ({ value }: { value: { asset?: { url?: string } } }) =>
      value?.asset?.url ? (
        <figure className="article-video">
          <video controls playsInline style={{ width: '100%', borderRadius: '8px' }}>
            <source src={value.asset.url} />
          </video>
        </figure>
      ) : null,
    youtube: ({ value }: { value: { url?: string } }) => {
      const id = value?.url ? getYouTubeId(value.url) : null
      return id ? (
        <figure className="article-video">
          <div className="youtube-embed">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </figure>
      ) : null
    },
  },
}

export default async function EducationArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getEducationArticleBySlug(slug)
  if (!article) notFound()

  const body = (article.body ?? []) as PortableTextBlock[]
  const headings = extractHeadings(body)
  const readTime = getReadTime(body)
  const pillars: string[] = article.pillars ?? []
  const hasToc = headings.length > 2

  return (
    <>
      {/* ── Header ── */}
      <section className="article-hero edu-article-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            {pillars[0] && PILLAR_LABELS[pillars[0]] ? (
              <>
                <Link href={PILLAR_LABELS[pillars[0]].href}>{PILLAR_LABELS[pillars[0]].label}</Link>
                <span className="sep">/</span>
              </>
            ) : null}
            <span className="current">Education</span>
          </div>

          <div className="edu-article-pills">
            {pillars.map(p => PILLAR_LABELS[p] ? (
              <Link key={p} href={PILLAR_LABELS[p].href} className="pill">{PILLAR_LABELS[p].label}</Link>
            ) : null)}
          </div>

          <h1 className="edu-article-title">{article.title}</h1>

          <div className="article-meta">
            {article.publishedAt && <span className="date">{formatDate(article.publishedAt)}</span>}
            <span>{readTime} min read</span>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="article-body edu-article-body">
        <div className="wrap">
          {hasToc ? (
            <div className="article-layout">
              <aside className="article-toc">
                <p className="toc-label">Contents</p>
                <ol>
                  {headings.map(h => (
                    <li key={h.key} className={h.level === 'h3' ? 'toc-sub' : ''}>
                      <a href={`#${h.key}`}>{h.text}</a>
                    </li>
                  ))}
                </ol>
              </aside>
              <div className="article-prose">
                <PortableText value={body} components={ptComponents} />
              </div>
            </div>
          ) : (
            <div className="edu-prose-center">
              <div className="article-prose">
                <PortableText value={body} components={ptComponents} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Back links ── */}
      <section className="edu-article-back">
        <div className="wrap">
          <div className="edu-back-links">
            {pillars.map(p => PILLAR_LABELS[p] ? (
              <Link key={p} href={PILLAR_LABELS[p].href} className="btn">
                ← Back to {PILLAR_LABELS[p].label}
              </Link>
            ) : null)}
          </div>
        </div>
      </section>
    </>
  )
}
