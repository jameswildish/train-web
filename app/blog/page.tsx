import Link from 'next/link'
import { getAllPosts } from '@/sanity/lib/queries'
import BlogContent from './BlogContent'

export const metadata = { title: 'Blog — TRAIN' }

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getAllPosts>> = []
  try {
    posts = await getAllPosts()
  } catch {
    // Sanity not configured yet — static fallback handled in BlogContent
  }

  return (
    <>
      <section className="science-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Blog</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">Insights · Plain-language explainers</div>
          <h1>From science to daily life.</h1>
          <p className="lead">Plain-language explainers from our clinician-scientists. What the latest research actually means for your sleep, energy, stress, and long-term health — without the jargon.</p>
        </div>
      </section>

      <BlogContent posts={posts} />
    </>
  )
}
