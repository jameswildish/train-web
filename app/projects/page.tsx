import { getAllProjects } from '@/sanity/lib/queries'
import ProjectsContent from './ProjectsContent'

export const revalidate = 0

export const metadata = { title: 'Projects — TRAIN' }

export default async function ProjectsPage() {
  let projects: Awaited<ReturnType<typeof getAllProjects>> = []
  try {
    projects = await getAllProjects()
  } catch {
    // Sanity not configured yet — static fallback handled in ProjectsContent
  }

  return <ProjectsContent sanityProjects={projects} />
}
