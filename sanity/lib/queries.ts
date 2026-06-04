import { client } from './client'

// ─── Blog Posts ─────────────────────────────────────────────────────────────

export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      readTime,
      publishedAt,
      mainImage,
      "author": author->{ name, role, image }
    }
  `)
}

export async function getPostBySlug(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      category,
      readTime,
      publishedAt,
      mainImage,
      body,
      "author": author->{ name, role, image, bio }
    }
  `, { slug })
}

// ─── Team Members ────────────────────────────────────────────────────────────

export async function getAllTeamMembers() {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      department,
      bio,
      image,
      linkedin,
      twitter
    }
  `)
}

// ─── Projects ────────────────────────────────────────────────────────────────

export async function getAllProjects() {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      slug,
      tag,
      tagline,
      summary,
      status,
      mainImage,
      featured
    }
  `)
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      tag,
      tagline,
      summary,
      status,
      mainImage,
      body,
      stats,
      teamMembers[]->{ name, role, image }
    }
  `, { slug })
}

// ─── Collaborators ───────────────────────────────────────────────────────────

export async function getAllCollaborators() {
  return client.fetch(`
    *[_type == "collaborator"] | order(order asc) {
      _id,
      name,
      type,
      location,
      description,
      logo,
      website
    }
  `)
}
