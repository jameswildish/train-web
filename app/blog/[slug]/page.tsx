import Link from 'next/link'
import { PortableText } from 'next-sanity'
import { getPostBySlug, getAllPosts } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { SanityImageSource } from '@sanity/image-url'

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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post: null | {
    title: string
    excerpt: string
    category: string
    readTime: number
    publishedAt: string
    mainImage: SanityImageSource | null
    body: unknown[]
    author: { name: string; role: string; image: SanityImageSource | null }
  } = null

  try {
    post = await getPostBySlug(slug)
  } catch {
    // Sanity not configured yet
  }

  if (!post) notFound()

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : ''

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
              {formattedDate && <span className="date">{formattedDate}</span>}
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
                <div className="eyebrow" style={{ marginBottom: '14px' }}>In this piece</div>
                <div className="share">
                  <div className="eyebrow" style={{ margin: '28px 0 12px' }}>Share</div>
                  <div className="share-row">
                    <a href="#" aria-label="LinkedIn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V10h2.5v8zM7.25 8.8a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18 18h-2.5v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18H10V10h2.4v1.1h.03a2.65 2.65 0 0 1 2.4-1.3c2.55 0 3.02 1.7 3.02 3.9V18z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="X">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5-6.5L4.5 21H1.5l8-9.2L1.5 3h6.8l4.5 6 5.2-6z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="Email">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </aside>

              <div className="article-prose">
                {post.body && <PortableText value={post.body as Parameters<typeof PortableText>[0]['value']} />}
              </div>
            </div>
          </div>
        </div>
      </article>

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
        </div>
      </section>
    </>
  )
}
