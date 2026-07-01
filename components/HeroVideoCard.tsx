'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Props = {
  videoUrl: string
  posterImage?: unknown
  label?: string
  title?: string
  ctaText?: string
  ctaHref?: string
}

export default function HeroVideoCard({ videoUrl, posterImage, label, title, ctaText, ctaHref }: Props) {
  const [open, setOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (open) videoRef.current?.play()
    else { videoRef.current?.pause(); if (videoRef.current) videoRef.current.currentTime = 0 }
  }, [open])

  const posterUrl = posterImage ? urlFor(posterImage).width(600).height(600).url() : null

  return (
    <>
      <div className="stage">
        <div className="hero-video-card">
          <button className="hero-video-thumb" onClick={() => setOpen(true)} aria-label="Play video">
            {posterUrl
              ? <Image src={posterUrl} alt={title ?? 'Video'} fill style={{ objectFit: 'cover' }} />
              : <div className="hero-video-placeholder" />
            }
            <div className="hero-video-overlay" />
            <div className="hero-video-meta">
              {label && <span className="hero-video-label">{label}</span>}
              {title && <span className="hero-video-title">{title}</span>}
            </div>
            <div className="hero-play-btn" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="hero-video-cta">
              {ctaText} <span className="arrow">→</span>
            </Link>
          )}
        </div>
      </div>

      {open && (
        <div className="video-modal" onClick={() => setOpen(false)}>
          <button className="video-modal-close" onClick={() => setOpen(false)} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
          <div className="video-modal-inner" onClick={e => e.stopPropagation()}>
            <video ref={videoRef} controls playsInline style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  )
}
