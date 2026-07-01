import { client } from './client'

// ─── Blog Posts ─────────────────────────────────────────────────────────────

const POST_FIELDS = `
  _id,
  title,
  slug,
  excerpt,
  "category": category->title,
  tags,
  readTime,
  publishedAt,
  featured,
  mainImage,
  "author": author->{ name, role, image }
`

export async function getAllPosts() {
  if (!client) return []
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`)
}

export async function getLatestPosts(limit = 5) {
  if (!client) return []
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) [0...$limit] { ${POST_FIELDS} }`, { limit })
}

export async function getPostBySlug(slug: string) {
  if (!client) return null
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      ${POST_FIELDS},
      body[] {
        ...,
        _type == "file" => { ..., "asset": asset-> }
      },
      "related": *[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0..2] {
        _id, title, slug, excerpt, "category": category->title, readTime, publishedAt, mainImage
      }
    }
  `, { slug })
}

export async function getAllCategories() {
  if (!client) return []
  return client.fetch(`
    *[_type == "category"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      "count": count(*[_type == "post" && references(^._id)])
    }
  `)
}

// ─── Team Members ────────────────────────────────────────────────────────────

export async function getAllTeamMembers() {
  if (!client) return []
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id, name, role, "department": department->title, isFounder, bio, image,
      linkedin, twitter, email
    }
  `)
}

export async function getAllDepartments() {
  if (!client) return []
  return client.fetch(`
    *[_type == "department"] | order(order asc) {
      _id, title,
      "count": count(*[_type == "teamMember" && references(^._id)])
    }
  `)
}

// ─── Projects ────────────────────────────────────────────────────────────────

export async function getProjectMainImage(slug: string) {
  if (!client) return null
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] { mainImage }`,
    { slug }
  )
}

export async function getAllProjects() {
  if (!client) return []
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id, title, slug, "category": category->title, tagline, status, mainImage, featured
    }
  `)
}

export async function getFeaturedProjects() {
  if (!client) return []
  return client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) {
      _id, title, slug, "category": category->title, tagline, mainImage
    }`
  )
}

export async function getProjectBySlug(slug: string) {
  if (!client) return null
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id, title, slug, "category": category->title, tagline, status, launchedAt, mainImage,
      overviewHeading, overviewBody, missionStatement,
      whyHeading, whyBody,
      whatWeDoHeading, whatWeDoItems,
      scienceHeading, scienceBody,
      impactHeading, impactCells,
      stats,
      "related": *[_type == "project" && slug.current != $slug] | order(order asc) [0..3] {
        _id, title, slug, "category": category->title, tagline, mainImage
      }
    }
  `, { slug })
}

// ─── Publications ────────────────────────────────────────────────────────────

export async function getAllPublications() {
  if (!client) return []
  return client.fetch(`
    *[_type == "publication"] | order(order asc) {
      _id, title, coverImage,
      externalUrl,
      "downloadUrl": downloadFile.asset->url
    }
  `)
}

// ─── Site Settings ───────────────────────────────────────────────────────────

export async function getSiteSettings() {
  if (!client) return null
  return client.fetch(`*[_type == "siteSettings"][0] {
    "heroVideoUrl": heroVideo.asset->url,
    "heroVideoPoster": heroVideoPoster,
    heroVideoLabel,
    heroVideoTitle,
    heroVideoCtaText,
    heroVideoCtaHref
  }`)
}

// ─── Collaborators ───────────────────────────────────────────────────────────

export async function getAllCollaborators() {
  if (!client) return []
  return client.fetch(`
    *[_type == "collaborator"] | order(order asc) {
      _id, name, type, location, description,
      "logo": logo { ..., asset-> },
      website
    }
  `)
}
