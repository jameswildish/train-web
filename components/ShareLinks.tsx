'use client'

import { useState } from 'react'

export default function ShareLinks({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  const url = () => typeof window !== 'undefined' ? window.location.href : ''

  const shareLinkedIn = () => window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`,
    '_blank', 'noopener,noreferrer'
  )

  const shareX = () => window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url())}&text=${encodeURIComponent(title)}`,
    '_blank', 'noopener,noreferrer'
  )

  const shareEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url())}`
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(url())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="share">
      <div className="eyebrow" style={{ margin: '28px 0 12px' }}>Share</div>
      <div className="share-row">
        <button onClick={shareLinkedIn} aria-label="Share on LinkedIn" title="Share on LinkedIn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 18H6V10h2.5v8zM7.25 8.8a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18 18h-2.5v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18H10V10h2.4v1.1h.03a2.65 2.65 0 0 1 2.4-1.3c2.55 0 3.02 1.7 3.02 3.9V18z"/></svg>
        </button>
        <button onClick={shareX} aria-label="Share on X" title="Share on X">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5-6.5L4.5 21H1.5l8-9.2L1.5 3h6.8l4.5 6 5.2-6z"/></svg>
        </button>
        <button onClick={shareEmail} aria-label="Share by email" title="Share by email">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
        </button>
        <button onClick={copyLink} aria-label={copied ? 'Copied!' : 'Copy link'} title={copied ? 'Copied!' : 'Copy link'}>
          {copied
            ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 6 9 17l-5-5"/></svg>
            : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>
          }
        </button>
      </div>
    </div>
  )
}
