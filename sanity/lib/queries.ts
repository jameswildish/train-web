import { client } from './client'

// ─── Blog Posts ─────────────────────────────────────────────────────────────

const POST_FIELDS = `
  _id,
  title,
  slug,
  excerpt,
  category,
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
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) [0...$limit] { ${POST_FIELDS} }`, { limit: limit - 1 })
}

export async function getPostBySlug(slug: string) {
  if (!client) return null
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      ${POST_FIELDS},
      body,
      "related": *[_type == "post" && category == ^.category && slug.current != $slug] | order(publishedAt desc) [0..2] {
        _id, title, slug, excerpt, category, readTime, publishedAt, mainImage
      }
    }
  `, { slug })
}

// ─── Team Members ────────────────────────────────────────────────────────────

export async function getAllTeamMembers() {
  if (!client) return []
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id, name, role, department, isFounder, bio, image,
      linkedin, twitter, email, publications, github
    }
  `)
}

// ─── Projects ────────────────────────────────────────────────────────────────

export async function getAllProjects() {
  if (!client) return []
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id, title, slug, tag, tagline, summary, status, mainImage, featured
    }
  `)
}

export async function getFeaturedProjects(limit = 6) {
  if (!client) return []
  return client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) [0...$limit] {
      _id, title, slug, tag, year, summary, mainImage
    }`,
    { limit: limit - 1 }
  )
}

export async function getProjectBySlug(slug: string) {
  if (!client) return null
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id, title, slug, tag, year, tagline, summary, status, mainImage, badges,
      overviewHeading, overviewBody, missionStatement,
      whyHeading, whyBody,
      whatWeDoHeading, whatWeDoItems,
      scienceHeading, scienceBody,
      impactHeading, impactCells,
      stats,
      teamMembers[]->{ name, role, image },
      "related": *[_type == "project" && slug.current != $slug] | order(order asc) [0..3] {
        _id, title, slug, tag, year, summary, mainImage
      }
    }
  `, { slug })
}

// ─── Publications ────────────────────────────────────────────────────────────

export async function getAllPublications() {
  if (!client) return []
  return client.fetch(`
    *[_type == "publication"] | order(order asc, year desc) {
      _id, title, authors, journal, year, category, coverImage, abstract,
      externalUrl,
      "downloadUrl": downloadFile.asset->url
    }
  `)
}

export async function getFeaturedPublications() {
  if (!client) return []
  return client.fetch(`
    *[_type == "publication" && featured == true] | order(order asc) {
      _id, title, authors, journal, year, category, coverImage, abstract,
      externalUrl,
      "downloadUrl": downloadFile.asset->url
    }
  `)
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
