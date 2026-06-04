'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const PROJECT_LINKS = [
  { href: '/projects/ddm',                  label: 'Data Donation Platform', tag: 'Data infrastructure' },
  { href: '/projects/gen-taad',             label: 'GEN-TAAD',               tag: 'Genomics' },
  { href: '/projects/genie-ta',             label: 'GENIE-TA',               tag: 'Genomics' },
  { href: '/projects/apecx',               label: 'APECx Study',            tag: 'Clinical' },
  { href: '/projects/after-the-storm',      label: 'After the Storm',        tag: 'Patient experience' },
  { href: '/projects/sukh',                label: 'SUKH Healing Garden',    tag: 'Wellbeing' },
  { href: '/projects/diversity-prevention', label: 'Diversity & Prevention', tag: 'Community' },
  { href: '/projects/trainletic',           label: 'TRAINletic',             tag: 'Performance' },
  { href: '/projects/aviation',             label: 'Aviation & Aortic',      tag: 'Clinical' },
]

const RESOURCES_LINKS = [
  { href: '/blog',              label: 'Blog',          tag: 'Insights & articles' },
  { href: '/team',              label: 'Team',          tag: 'Founders & TARGet group' },
  { href: '/collaborators',     label: 'Collaborators', tag: 'Partners & institutions' },
  { href: '/science#about',     label: 'About us',      tag: 'Mission · vision · approach' },
  { href: '/science#publications', label: 'Publications', tag: 'Peer-reviewed research' },
]

const NAV_FLAT = [
  { href: '/sleep',         key: 'sleep',     label: 'Sleep' },
  { href: '/activity',      key: 'activity',  label: 'Activity' },
  { href: '/mental-health', key: 'mental',    label: 'Mental Health' },
  { href: '/nutrition',     key: 'nutrition', label: 'Nutrition' },
  { href: '/science',       key: 'science',   label: 'Science' },
]

function getActiveKey(pathname: string): string {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/sleep')) return 'sleep'
  if (pathname.startsWith('/activity')) return 'activity'
  if (pathname.startsWith('/mental-health')) return 'mental'
  if (pathname.startsWith('/nutrition')) return 'nutrition'
  if (pathname.startsWith('/science')) return 'science'
  if (pathname.startsWith('/projects')) return 'projects'
  if (pathname.startsWith('/blog')) return 'blog'
  if (pathname.startsWith('/team')) return 'team'
  if (pathname.startsWith('/collaborators')) return 'collaborators'
  if (pathname.startsWith('/contact')) return 'contact'
  return ''
}

export default function SiteHeader() {
  const pathname = usePathname()
  const activeKey = getActiveKey(pathname)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(activeKey === 'projects')
  const [resourcesOpen, setResourcesOpen] = useState(['blog', 'team', 'collaborators'].includes(activeKey))

  const isResources = ['blog', 'blog-article', 'team', 'collaborators'].includes(activeKey)

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
    <header className={`nav${drawerOpen ? ' drawer-open' : ''}`}>
      <div className="wrap row">
        <Link href="/" className="logo">
          <span className="mark">T</span>
          <span className="word">TRAIN</span>
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

          {/* Projects dropdown */}
          <div
            className={`nav-item has-dd${activeKey === 'projects' ? ' active' : ''}${openDropdown === 'projects' ? ' open' : ''}`}
            onMouseEnter={() => setOpenDropdown('projects')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="nav-trigger"
              type="button"
              aria-expanded={openDropdown === 'projects'}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation()
                setOpenDropdown(openDropdown === 'projects' ? null : 'projects')
              }}
            >
              Projects <span className="caret">▾</span>
            </button>
            <div className="dropdown projects-dd" role="menu">
              <div className="dd-heading">Research portfolio</div>
              <div className="dd-grid projects-grid">
                {PROJECT_LINKS.map(l => (
                  <Link key={l.href} href={l.href} className="dd-item">
                    <span className="dd-label">{l.label}</span>
                    <span className="dd-tag">{l.tag}</span>
                  </Link>
                ))}
              </div>
              <Link href="/projects" className="dd-footer">
                View all projects <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Resources dropdown */}
          <div
            className={`nav-item has-dd${isResources ? ' active' : ''}${openDropdown === 'resources' ? ' open' : ''}`}
            onMouseEnter={() => setOpenDropdown('resources')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="nav-trigger"
              type="button"
              aria-expanded={openDropdown === 'resources'}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation()
                setOpenDropdown(openDropdown === 'resources' ? null : 'resources')
              }}
            >
              Resources <span className="caret">▾</span>
            </button>
            <div className="dropdown app-dd" role="menu">
              <div className="dd-heading">Explore TRAIN</div>
              <div className="dd-grid pillars-grid">
                {RESOURCES_LINKS.map(l => (
                  <Link key={l.href} href={l.href} className="dd-item">
                    <span className="dd-label">{l.label}</span>
                    <span className="dd-tag">{l.tag}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/contact" className={activeKey === 'contact' ? 'active' : ''}>
            Contact
          </Link>
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

      {/* Mobile drawer */}
      <div className="mobile-drawer" aria-hidden={!drawerOpen}>
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
              <Link href="/projects" onClick={() => setDrawerOpen(false)}><strong>View all projects</strong></Link>
              {PROJECT_LINKS.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}>{l.label}</Link>
              ))}
            </div>
          </details>

          <details className="m-group" open={isResources || resourcesOpen}>
            <summary onClick={() => setResourcesOpen(!resourcesOpen)}>
              Resources <span className="caret">▾</span>
            </summary>
            <div className="m-links">
              {RESOURCES_LINKS.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setDrawerOpen(false)}>{l.label}</Link>
              ))}
            </div>
          </details>

          <Link href="/contact" className={`m-link${activeKey === 'contact' ? ' active' : ''}`} onClick={() => setDrawerOpen(false)}>
            Contact
          </Link>

          <div className="m-cta">
            <a href="#login" className="btn btn-ghost">Log in</a>
            <a href="#try" className="btn btn-primary">Try TRAIN free <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    </header>
  )
}
