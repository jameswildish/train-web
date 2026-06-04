import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import type { PortableTextBlock } from '@portabletext/types'
import { getPostBySlug, getAllPosts } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

export const revalidate = 0

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    return posts.map((p: { slug: { current: string } }) => ({ slug: p.slug.current }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const post = await getPostBySlug(slug)
    return { title: post ? `${post.title} — TRAIN` : 'Article — TRAIN' }
  } catch {
    return { title: 'Article — TRAIN' }
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
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
    image: ({ value }: { value: { alt?: string } }) => (
      <figure>
        <Image
          src={urlFor(value as SanityImageSource).width(900).url()}
          alt={value.alt ?? ''}
          width={900}
          height={500}
          style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
        />
      </figure>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let post: {
    title: string
    excerpt: string
    category: string
    tags: string[]
    readTime: number
    publishedAt: string
    mainImage: SanityImageSource | null
    body: PortableTextBlock[]
    author: { name: string; role: string; image: SanityImageSource | null } | null
    related: Array<{
      _id: string
      title: string
      slug: { current: string }
      excerpt: string
      category: string
      readTime: number
      publishedAt: string
      mainImage: SanityImageSource | null
    }>
  } | null = null

  try {
    post = await getPostBySlug(slug)
  } catch {
    // Sanity not configured
  }

  if (!post) notFound()

  const headings = post.body ? extractHeadings(post.body as PortableTextBlock[]) : []

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
              <span className="current">{post.title}</span>
            </div>

            <div className="article-meta">
              {post.category && <span className="pill">{post.category}</span>}
              {post.publishedAt && <span className="date">{formatDate(post.publishedAt)}</span>}
              {post.readTime && <span className="muted">· {post.readTime} min read</span>}
            </div>

            <h1>{post.title}</h1>
            {post.excerpt && <p className="lede">{post.excerpt}</p>}

            {post.author && (
              <div className="byline">
                <div className="avatar">
                  {post.author.image && (
                    <Image
                      src={urlFor(post.author.image).width(48).height(48).url()}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div>
                  <div className="name">{post.author.name}</div>
                  {post.author.role && <div className="role">{post.author.role}</div>}
                </div>
              </div>
            )}
          </div>

          <div className="wrap">
            {post.mainImage ? (
              <div className="article-hero-img">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.title}
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  priority
                />
              </div>
            ) : (
              <div className="article-hero-img anemone"></div>
            )}
          </div>
        </header>

        <div className="article-body">
          <div className="wrap">
            <div className="article-layout">
              <aside className="article-toc">
                {headings.length > 0 && (
                  <>
                    <div className="eyebrow" style={{ marginBottom: '14px' }}>In this piece</div>
                    <ol>
                      {headings.map(h => (
                        <li key={h.key} style={{ paddingLeft: h.level === 'h3' ? '12px' : '0' }}>
                          <a href={`#${h.key}`}>{h.text}</a>
                        </li>
                      ))}
                    </ol>
                  </>
                )}

                <div className="share">
                  <div className="eyebrow" style={{ margin: '28px 0 12px' }}>Share</div>
                  <div className="share-row">
                    <a href="#" aria-label="LinkedIn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V10h2.5v8zM7.25 8.8a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18 18h-2.5v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18H10V10h2.4v1.1h.03a2.65 2.65 0 0 1 2.4-1.3c2.55 0 3.02 1.7 3.02 3.9V18z"/></svg>
                    </a>
                    <a href="#" aria-label="X">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5-6.5L4.5 21H1.5l8-9.2L1.5 3h6.8l4.5 6 5.2-6z"/></svg>
                    </a>
                    <a href="#" aria-label="Email">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                    </a>
                    <a href="#" aria-label="Copy link">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>
                    </a>
                  </div>
                </div>
              </aside>

              <div className="article-prose">
                {post.body && (
                  <PortableText
                    value={post.body as Parameters<typeof PortableText>[0]['value']}
                    components={ptComponents}
                  />
                )}

                {post.tags && post.tags.length > 0 && (
                  <div className="tags">
                    <span className="eyebrow">Tagged</span>
                    {post.tags.map(tag => (
                      <span key={tag} className="tag-link">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {post.related && post.related.length > 0 && (
        <section className="related-articles">
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
              {post.related.map(r => (
                <article key={r._id} className="article">
                  <Link href={`/blog/${r.slug.current}`} className="thumb">
                    {r.mainImage
                      ? <Image src={urlFor(r.mainImage).width(400).height(240).url()} alt={r.title} width={400} height={240} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <div className="anemone" style={{ width: '100%', height: '100%' }}></div>
                    }
                  </Link>
                  <div className="body">
                    <div className="meta">
                      <span className="pill">{r.category}</span>
                      <span className="date">{formatDate(r.publishedAt)}</span>
                      {r.readTime && <span className="muted">· {r.readTime} min</span>}
                    </div>
                    <h3><Link href={`/blog/${r.slug.current}`}>{r.title}</Link></h3>
                    <p>{r.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
