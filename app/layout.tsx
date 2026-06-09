import type { Metadata } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { getAllProjects } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'TRAIN — Science-driven, medically grounded lifestyle',
  description: 'TRAIN translates medical and scientific knowledge into practical, daily habits — built by surgeons. Driven by science, designed for how you actually live.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') ?? ''
  const isStudio = pathname.startsWith('/studio')

  let navProjects: { href: string; label: string; tag: string }[] = []
  if (!isStudio) {
    try {
      const projects = await getAllProjects()
      navProjects = projects.map((p: { title: string; slug: { current: string }; tag: string }) => ({
        href: `/projects/${p.slug.current}`,
        label: p.title,
        tag: p.tag,
      }))
    } catch {}
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400;1,500&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        {!isStudio && <SiteHeader navProjects={navProjects} />}
        <main>{children}</main>
        {!isStudio && <SiteFooter />}
      </body>
    </html>
  )
}
