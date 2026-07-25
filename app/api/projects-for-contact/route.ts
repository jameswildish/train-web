import { NextResponse } from 'next/server'
import { getProjectsForContact } from '@/sanity/lib/queries'

export async function GET() {
  const projects = await getProjectsForContact()
  return NextResponse.json(projects)
}
