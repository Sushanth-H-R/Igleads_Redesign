'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useTheme } from 'next-themes'

function useCountUp(target: number, decimals = 0, duration = 2000) {
  const [count, setCount] = useState(0)

  const animate = () => {
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return { count, animate }
}

function Stat({
  value,
  suffix,
  prefix,
  label,
  decimals,
  isStatic,
}: {
  value: number
  suffix?: string
  prefix?: string
  label: string
  decimals?: number
  isStatic?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { count, animate } = useCountUp(value, decimals ?? 0)
  const triggered = useRef(false)

  useEffect(() => {
    if (inView && !triggered.current) {
      triggered.current = true
      animate()
    }
  }, [inView]) // eslint-disable-line

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 4vw, 48px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1,
          transition: 'color 200ms ease',
        }}
      >
        {isStatic ? '< 3 min' : `${prefix ?? ''}${count}${suffix ?? ''}`}
      </div>
      <div
        style={{
          fontSize: 13,
          color: 'var(--text-muted)',
          marginTop: 8,
          letterSpacing: '0.04em',
          transition: 'color 200ms ease',
        }}
      >
        {label}
      </div>
    </div>
  )
}

const badges = [
  'E-commerce Brands',
  'Lead Gen Agencies',
  'Growth Hackers',
  'Social Media Managers',
  'DTC Founders',
  'Marketing Consultants',
  'Outreach Teams',
]

export default function SocialProofBar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const isDark = !mounted || theme === 'dark'

  const barBg = isDark ? '#111116' : 'var(--bg-surface-2)'
  const dividerColor = isDark ? '#2A2A35' : 'rgba(0,0,0,0.1)'
  const badgeBg = isDark ? '#16161D' : 'var(--bg-surface)'
  const badgeBorder = isDark ? '#2A2A35' : 'var(--border-color)'

  return (
    <section
      id="social-proof"
      style={{
        background: barBg,
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        padding: '56px 0',
        overflow: 'hidden',
        transition: 'background 300ms ease, border-color 300ms ease',
      }}
    >
      {/* Trusted by label */}
      <p
        style={{
          textAlign: 'center',
          fontSize: 13,
          color: 'var(--text-muted)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: 36,
          transition: 'color 200ms ease',
        }}
      >
        Trusted by 5,000+ marketers, agencies &amp; e-commerce brands
      </p>

      {/* Stats row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 80,
          marginBottom: 40,
        }}
      >
        <Stat value={12} suffix="M+" label="profiles scraped" />
        <div style={{ width: 1, height: 48, background: dividerColor, transition: 'background 300ms ease' }} />
        <Stat value={99.2} suffix="%" label="uptime" decimals={1} />
        <div style={{ width: 1, height: 48, background: dividerColor, transition: 'background 300ms ease' }} />
        <Stat value={0} label="avg scrape time" isStatic />
      </div>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div
          className="animate-marquee"
          style={{ display: 'flex', gap: 12, width: 'max-content' }}
        >
          {[...badges, ...badges].map((badge, i) => (
            <span
              key={i}
              style={{
                background: badgeBg,
                border: `1px solid ${badgeBorder}`,
                borderRadius: 999,
                padding: '6px 16px',
                fontSize: 12,
                color: 'var(--text-muted)',
                whiteSpace: 'nowrap',
                transition: 'background 300ms ease, border-color 300ms ease, color 200ms ease',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
