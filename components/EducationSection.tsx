import Link from 'next/link'
import Image from 'next/image'
import { getEducationArticlesByPillar } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url'

interface EducationArticle {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  readTime?: number
  mainImage?: SanityImageSource
}

interface Props {
  pillar: string
  heading?: string
}

export default async function EducationSection({ pillar, heading = 'Education' }: Props) {
  let articles: EducationArticle[] = []
  try {
    articles = await getEducationArticlesByPillar(pillar)
  } catch {
    return null
  }

  if (!articles || articles.length === 0) return null

  return (
    <section className="education-section">
      <div className="wrap">
        <div className="education-head">
          <div>
            <p className="eyebrow">Education</p>
            <h2>{heading}</h2>
          </div>
          <p>In-depth guides grounded in the latest research.</p>
        </div>

        <div className="education-grid">
          {articles.map((article, i) => (
            <Link key={article._id} href={`/education/${article.slug.current}`} className="edu-card">
              <div className="edu-card-img">
                {article.mainImage ? (
                  <Image
                    src={urlFor(article.mainImage).width(600).height(340).url()}
                    alt={article.title}
                    width={600}
                    height={340}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div className="edu-card-placeholder" data-index={i % 4} />
                )}
              </div>
              <div className="edu-card-body">
                {article.readTime && (
                  <span className="edu-card-time">{article.readTime} min read</span>
                )}
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="edu-card-cta">Read guide <span className="arrow">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
