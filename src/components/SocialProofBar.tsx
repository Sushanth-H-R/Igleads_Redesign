'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

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
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(36px, 4vw, 48px)',
          fontWeight: 700,
          color: '#F0EEE8',
          lineHeight: 1,
        }}
      >
        {isStatic ? '< 3 min' : `${prefix ?? ''}${count}${suffix ?? ''}`}
      </div>
      <div
        style={{
          fontSize: 13,
          color: '#6B6A65',
          marginTop: 8,
          letterSpacing: '0.04em',
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
  return (
    <section
      id="social-proof"
      style={{
        background: '#111116',
        borderTop: '1px solid #1E1E28',
        borderBottom: '1px solid #1E1E28',
        padding: '56px 0',
        overflow: 'hidden',
      }}
    >
      {/* Trusted by label */}
      <p
        style={{
          textAlign: 'center',
          fontSize: 13,
          color: '#6B6A65',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: 36,
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
        <div style={{ width: 1, height: 48, background: '#2A2A35' }} />
        <Stat value={99.2} suffix="%" label="uptime" decimals={1} />
        <div style={{ width: 1, height: 48, background: '#2A2A35' }} />
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
                background: '#16161D',
                border: '1px solid #2A2A35',
                borderRadius: 999,
                padding: '6px 16px',
                fontSize: 12,
                color: '#6B6A65',
                whiteSpace: 'nowrap',
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
