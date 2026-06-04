import Link from 'next/link'
import { getAllTeamMembers } from '@/sanity/lib/queries'
import TeamContent from './TeamContent'

export const revalidate = 0

export const metadata = { title: 'Team — TRAIN' }

export default async function TeamPage() {
  let members: Awaited<ReturnType<typeof getAllTeamMembers>> = []
  try {
    members = await getAllTeamMembers()
  } catch {
    // Sanity not configured yet — static fallback handled in TeamContent
  }

  return (
    <>
      <section className="science-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/science">Science</Link>
            <span className="sep">/</span>
            <span className="current">Team</span>
          </div>
          <div style={{ margin: '40px 0 24px' }} className="eyebrow">
            Clinicians · Researchers · Data scientists
          </div>
          <h1>The people behind TRAIN.</h1>
          <p className="lead">
            A multidisciplinary team of surgeons, clinician-scientists, researchers, and data
            specialists — translating medical science into practical, daily habits and advancing
            cardiovascular and preventive health worldwide.
          </p>
        </div>
      </section>

      <TeamContent sanityMembers={members} />
    </>
  )
}
