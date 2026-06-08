'use client'

import { useState } from 'react'
import Link from 'next/link'

type AudioType = 'soundscape' | 'meditation' | null

export default function SleepAppFeatures() {
  const [audioOpen, setAudioOpen] = useState<AudioType>(null)

  return (
    <>
      <div className="feature-grid">
        <div className="feature-card">
          <h3>MySleep</h3>
          <p>Sync your wearable device to track sleep duration and quality. Build a consistent routine that supports deeper, more restorative sleep, an essential foundation for long-term health and longevity.</p>
          <Link href="/contact" className="feature-cta">TRAIN App — Coming Soon <span className="arrow">→</span></Link>
        </div>
        <div className="feature-card dark">
          <h3>Sound Scapes</h3>
          <p>A sound-based approach to help you unwind. Steady background sounds, including nature recordings, reduce environmental distractions and create a consistent auditory environment for sleep.</p>
          <button className="feature-cta" onClick={() => setAudioOpen('soundscape')}>Try the Rainforest soundscape <span className="arrow">→</span></button>
        </div>
        <div className="feature-card">
          <h3>Sleep meditation</h3>
          <p>Audio-based sessions using science-informed relaxation techniques including body scanning, mindful breathing, and gratitude to support downregulation of the nervous system and the transition into sleep.</p>
          <button className="feature-cta" onClick={() => setAudioOpen('meditation')}>Start a session <span className="arrow">→</span></button>
        </div>
      </div>

      {audioOpen && (
        <AudioModal type={audioOpen} onClose={() => setAudioOpen(null)} />
      )}
    </>
  )
}

const AUDIO_CONFIG = {
  soundscape: {
    title: 'Rainforest Soundscape',
    subtitle: 'Nature ambient · 45 min',
    description: 'Steady background sounds to reduce environmental distractions and create a consistent auditory environment for sleep.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  meditation: {
    title: 'Sleep Meditation',
    subtitle: 'Body scan & breathing · 20 min',
    description: 'Science-informed relaxation techniques including body scanning and mindful breathing to support nervous-system downregulation before sleep.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5M9 10h6M9 19l3-7 3 7" />
        <path d="M7 14s-2 1-2 3h14c0-2-2-3-2-3" />
      </svg>
    ),
  },
}

function AudioModal({ type, onClose }: { type: 'soundscape' | 'meditation'; onClose: () => void }) {
  const [playing, setPlaying] = useState(false)
  const config = AUDIO_CONFIG[type]

  return (
    <div className="audio-overlay" onClick={onClose}>
      <div className="audio-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={config.title}>
        <button className="audio-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="audio-icon">{config.icon}</div>
        <div className="audio-title">{config.title}</div>
        <div className="audio-subtitle">{config.subtitle}</div>
        <p className="audio-desc">{config.description}</p>

        <div className="audio-waveform" data-playing={playing}>
          {Array.from({ length: 22 }).map((_, i) => (
            <div key={i} className="wave-bar" style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>

        <button
          className="audio-play-btn"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          )}
        </button>

        <div className="audio-coming-soon">
          <p>Full audio library available in the TRAIN app.</p>
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: '12px' }}>TRAIN App — Coming Soon</Link>
        </div>
      </div>
    </div>
  )
}
