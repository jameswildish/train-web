import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/sanity/lib/queries'
import BlogContent from './BlogContent'

export const revalidate = 0

export const metadata = { title: 'Blog — TRAIN' }

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof getAllPosts>> = []
  let categories: Awaited<ReturnType<typeof getAllCategories>> = []
  try {
    ;[posts, categories] = await Promise.all([getAllPosts(), getAllCategories()])
  } catch {
    // Sanity not configured yet
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
          <h1 style={{ marginTop: '40px' }}>From science to daily life.</h1>
          <p className="lead">Plain-language explainers from our clinician-scientists. What the latest research actually means for your sleep, energy, stress, and long-term health — without the jargon.</p>
        </div>
      </section>

      <BlogContent posts={posts} categories={categories} />
    </>
  )
}
