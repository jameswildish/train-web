import Link from 'next/link'
import { getAllTeamMembers, getAllDepartments } from '@/sanity/lib/queries'
import TeamContent from './TeamContent'

export const revalidate = 0

export const metadata = { title: 'Team — TRAIN' }

export default async function TeamPage() {
  let members: Awaited<ReturnType<typeof getAllTeamMembers>> = []
  let departments: Awaited<ReturnType<typeof getAllDepartments>> = []
  try {
    ;[members, departments] = await Promise.all([getAllTeamMembers(), getAllDepartments()])
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
            <span className="current">Team</span>
          </div>
          <h1 style={{ marginTop: '40px' }}>The people behind TRAIN.</h1>
          <p className="lead">
            A multidisciplinary team of surgeons, clinician-scientists, researchers, and data
            specialists — translating medical science into practical, daily habits and advancing
            cardiovascular and preventive health worldwide.
          </p>
        </div>
      </section>

      <TeamContent sanityMembers={members} departments={departments} />
    </>
  )
}
