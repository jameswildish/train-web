import Link from 'next/link'
import { getEducationArticlesByPillar } from '@/sanity/lib/queries'

interface Block {
  _type: string
  children?: Array<{ text?: string }>
}

interface EducationArticle {
  _id: string
  title: string
  slug: { current: string }
  body?: Block[]
}

function extractPlainText(body: Block[]): string {
  return body
    .filter(b => b._type === 'block' && Array.isArray(b.children))
    .flatMap(b => (b.children ?? []).map(c => c.text ?? ''))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function getExcerpt(body: Block[] | undefined): string {
  if (!body) return ''
  const text = extractPlainText(body)
  return text.length > 120 ? text.slice(0, 120).trimEnd() + '...' : text
}

function getReadTime(body: Block[] | undefined): number {
  if (!body) return 1
  const words = extractPlainText(body).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
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
          {articles.map(article => {
            const excerpt = getExcerpt(article.body)
            const readTime = getReadTime(article.body)
            return (
              <Link key={article._id} href={`/education/${article.slug.current}`} className="edu-card">
                <div className="edu-card-body">
                  <span className="edu-card-time">{readTime} min read</span>
                  <h3>{article.title}</h3>
                  {excerpt && <p>{excerpt}</p>}
                  <span className="edu-card-cta">Read guide <span className="arrow">→</span></span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
