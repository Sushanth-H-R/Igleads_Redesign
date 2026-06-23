'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import dynamic from 'next/dynamic'

const Threads = dynamic(() => import('./Threads'), { ssr: false })

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

function AnimatedStat({ target, label }: { target: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const isPercent = target.includes('%')
    const hasPlus = target.includes('+')
    const isM = target.includes('M')
    const isK = target.includes('k')
    const raw = parseFloat(target.replace(/[^0-9.]/g, ''))

    const controls = animate(0, raw, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate(v) {
        const rounded = Math.floor(v)
        const suffix = isM ? 'M+' : isK ? 'k+' : isPercent ? '%' : hasPlus ? '+' : ''
        setDisplay(`${rounded}${suffix}`)
      },
      onComplete() {
        setDisplay(target)
      },
    })
    return () => controls.stop()
  }, [inView, target])

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, color: '#F0EEE8', lineHeight: 1 }}>
        {display}
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#6B6A65', marginTop: 4 }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'transparent',
        paddingTop: 160,
        paddingBottom: 80,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Threads background — full bleed, pointer-events none */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Threads
          color={[139 / 255, 92 / 255, 246 / 255]}
          amplitude={1.2}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      {/* Content — relative, sits above Threads */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* H1 */}
        <motion.h1
          {...fadeUp(0.1)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 5vw, 68px)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#F0EEE8',
            margin: '0 auto',
            maxWidth: 760,
          }}
        >
          Extract Verified Leads From{' '}
          <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Instagram</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 18,
            color: '#6B6A65',
            lineHeight: 1.7,
            maxWidth: 520,
            margin: '20px auto 0 auto',
          }}
        >
          Scrape public email addresses, phone numbers, and social metrics. Target followers, following lists, and post commenters instantly without any setup.
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.3)}
          style={{ marginTop: 40, display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#pricing"
            data-cursor="hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
              color: '#000',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 15,
              padding: '14px 32px',
              borderRadius: 10,
              textDecoration: 'none',
              transition: 'transform 200ms ease, filter 200ms ease, box-shadow 200ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.03)'
              e.currentTarget.style.filter = 'brightness(1.08)'
              e.currentTarget.style.boxShadow = '0 0 32px rgba(139,92,246,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.filter = 'brightness(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Get 100 Free Leads →
          </a>
          <a
            href="#pricing"
            data-cursor="hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.2)',
              color: '#F0EEE8',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: 15,
              padding: '13px 28px',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'border-color 200ms ease, color 200ms ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#8B5CF6'
              e.currentTarget.style.color = '#8B5CF6'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#F0EEE8'
            }}
          >
            View Pricing
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.45)}
          style={{ marginTop: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}
        >
          <AnimatedStat target="10M+" label="Emails Scraped" />
          <div className="hidden md:block" style={{ width: 1, height: 40, background: '#1E1E28' }} />
          <AnimatedStat target="5k+" label="Active Scrapers" />
          <div className="hidden md:block" style={{ width: 1, height: 40, background: '#1E1E28' }} />
          <AnimatedStat target="100%" label="No Credit Setup" />
        </motion.div>
      </div>
    </section>
  )
}
