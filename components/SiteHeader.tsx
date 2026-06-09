'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

type NavProject = { href: string; label: string; tag: string }


const SCIENCE_LINKS = [
  { href: '/about',               label: 'About',         tag: 'Mission · vision · approach' },
  { href: '/about#publications',  label: 'Publications',  tag: 'Peer-reviewed research' },
  { href: '/about#collaborate',   label: 'Collaborators', tag: 'Partners & institutions' },
  { href: '/team',                label: 'Team',          tag: 'Founders & researchers' },
  { href: '/blog',                label: 'Blog',          tag: 'Insights & articles' },
]

const NAV_FLAT = [
  { href: '/sleep',         key: 'sleep',     label: 'Sleep' },
  { href: '/activity',      key: 'activity',  label: 'Activity' },
  { href: '/mental-health', key: 'mental',    label: 'Mental Health' },
  { href: '/nutrition',     key: 'nutrition', label: 'Nutrition' },
]

function getActiveKey(pathname: string): string {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/sleep')) return 'sleep'
  if (pathname.startsWith('/activity')) return 'activity'
  if (pathname.startsWith('/mental-health')) return 'mental'
  if (pathname.startsWith('/nutrition')) return 'nutrition'
  if (pathname.startsWith('/blog')) return 'science'
  if (pathname.startsWith('/about')) return 'science'
  if (pathname.startsWith('/science')) return 'science'
  if (pathname.startsWith('/team')) return 'science'
  if (pathname.startsWith('/collaborators')) return 'science'
  if (pathname.startsWith('/projects')) return 'projects'
  if (pathname.startsWith('/contact')) return 'contact'
  return ''
}

export default function SiteHeader({ navProjects }: { navProjects?: NavProject[] }) {
  const PROJECT_LINKS = navProjects ?? []
  const pathname = usePathname()
  const activeKey = getActiveKey(pathname)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(activeKey === 'projects')
  const [scienceOpen, setScienceOpen] = useState(activeKey === 'science')

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.has-dd')) setOpenDropdown(null)
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpenDropdown(null); setDrawerOpen(false) }
    }
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
    <header className={`nav${drawerOpen ? ' drawer-open' : ''}`}>
      <div className="wrap row">
        <Link href="/" className="logo">
          <img src="/images/TRAIN-icon.png" alt="TRAIN" className="logo-icon" />
          <span className="logo-text">
            <span className="word">TRAIN</span>
            <span className="logo-sub">Health Awareness</span>
          </span>
        </Link>

        <nav className="main">
          {NAV_FLAT.map(item => (
            <Link
              key={item.key}
              href={item.href}
              className={activeKey === item.key ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}

          {/* Science dropdown */}
          <div
            className={`nav-item has-dd${activeKey === 'science' ? ' active' : ''}${openDropdown === 'science' ? ' open' : ''}`}
            onMouseEnter={() => setOpenDropdown('science')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="nav-trigger-split">
              <Link href="/about">Science</Link>
              <button
                type="button"
                className="caret-btn"
                aria-expanded={openDropdown === 'science'}
                aria-haspopup="true"
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === 'science' ? null : 'science') }}
              >▾</button>
            </div>
            <div className="dropdown resources-dd" role="menu">
              <div className="dd-grid resources-grid">
                {SCIENCE_LINKS.map(l => (
                  <Link key={l.href} href={l.href} className="dd-item">
                    <span className="dd-label">{l.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Projects dropdown */}
          <div
            className={`nav-item has-dd${activeKey === 'projects' ? ' active' : ''}${openDropdown === 'projects' ? ' open' : ''}`}
            onMouseEnter={() => setOpenDropdown('projects')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="nav-trigger-split">
              <Link href="/projects">Projects</Link>
              <button
                type="button"
                className="caret-btn"
                aria-expanded={openDropdown === 'projects'}
                aria-haspopup="true"
                onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === 'projects' ? null : 'projects') }}
              >▾</button>
            </div>
            <div className="dropdown projects-dd" role="menu">
              <div className="dd-grid projects-grid">
                {PROJECT_LINKS.map(l => (
                  <Link key={l.href} href={l.href} className="dd-item">
                    <span className="dd-label">{l.label}</span>
                  </Link>
                ))}
              </div>
              <Link href="/projects" className="dd-footer">
                All projects <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="nav-cta">
          <a href="/contact" className="btn btn-primary">TRAIN App — Coming Soon</a>
        </div>

        <button
          className="hamburger"
          type="button"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    {/* Mobile drawer — outside <header> to avoid backdrop-filter containing block */}
    <div className={`mobile-drawer${drawerOpen ? ' is-open' : ''}`} aria-hidden={!drawerOpen}>
      <div className="drawer-inner">
        {NAV_FLAT.map(item => (
          <Link
            key={item.key}
            href={item.href}
            className={`m-link${activeKey === item.key ? ' active' : ''}`}
            onClick={() => setDrawerOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        <details className="m-group" open={activeKey === 'projects' || projectsOpen}>
          <summary onClick={() => setProjectsOpen(!projectsOpen)}>
            Projects <span className="caret">▾</span>
          </summary>
          <div className="m-links">
            <Link href="/projects" onClick={() => setDrawerOpen(false)}><strong>All projects</strong></Link>
            {PROJECT_LINKS.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}>{l.label}</Link>
            ))}
          </div>
        </details>

        <details className="m-group" open={activeKey === 'science' || scienceOpen}>
          <summary onClick={() => setScienceOpen(!scienceOpen)}>
            Science <span className="caret">▾</span>
          </summary>
          <div className="m-links">
            {SCIENCE_LINKS.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}>{l.label}</Link>
            ))}
          </div>
        </details>

        <Link href="/contact" className={`m-link${activeKey === 'contact' ? ' active' : ''}`} onClick={() => setDrawerOpen(false)}>
          Contact
        </Link>

        <div className="m-cta">
          <a href="/contact" className="btn btn-primary">TRAIN App — Coming Soon</a>
        </div>
      </div>
    </div>
    </>
  )
}
