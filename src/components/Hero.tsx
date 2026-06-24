'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { Settings2, SlidersHorizontal } from 'lucide-react'

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
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const isDark = !mounted || theme === 'dark'

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
    <div ref={ref} style={{ textAlign: 'left' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>
        {display}
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
        {label}
      </div>
    </div>
  )
}

function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('Hashtag')
  const [searchValue, setSearchValue] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const isDark = !mounted || theme === 'dark'

  const leads = [
    { handle: '@sarah.fit', email: 'sarah@fitlife.co', followers: '124k' },
    { handle: '@jake_adventure', email: 'info@jakereynolds.photo', followers: '88k' },
    { handle: '@marcus.eats', email: 'marcus@brodymeats.com', followers: '92k' },
  ]

  const cardBg = isDark ? 'rgba(15, 15, 20, 0.45)' : 'rgba(255, 255, 255, 0.45)'
  const cardBorder = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(139, 92, 246, 0.15)'
  const cardShadow = isDark ? '0 24px 64px -16px rgba(0,0,0,0.5)' : '0 8px 32px rgba(139, 92, 246, 0.08)'
  const inputBg = isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0,0,0,0.04)'
  const inputBorder = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0,0,0,0.1)'
  const textPrimary = 'var(--text-primary)'
  const textMuted = 'var(--text-muted)'
  const textSecondary = 'var(--text-secondary)'
  const subBg = isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0,0,0,0.02)'
  const filterCardBg = isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0,0,0,0.03)'
  const bottomBarBg = isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0,0,0,0.03)'

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        background: cardBg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${cardBorder}`,
        borderRadius: 16,
        width: '100%',
        maxWidth: 540,
        boxShadow: cardShadow,
        fontFamily: 'var(--font-body)',
        overflow: 'hidden',
        transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
      }}
    >
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${cardBorder}` }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27C93F' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, color: '#8B5CF6', letterSpacing: 1 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          IG LEADS CRAWLER
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', padding: '20px', gap: 12 }}>
        {['Hashtag', 'Followers', 'Comments'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: 8,
              background: activeTab === tab ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
              border: `1px solid ${activeTab === tab ? '#8B5CF6' : cardBorder}`,
              color: activeTab === tab ? textPrimary : textMuted,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              outline: 'none',
            }}
          >
            {tab === 'Hashtag' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>}
            {tab === 'Followers' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
            {tab === 'Comments' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>}
            {tab}
          </button>
        ))}
      </div>

      {/* Search Input Area */}
      <div style={{ padding: '0 20px 20px 20px', display: 'flex', gap: 12 }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: textMuted }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            placeholder={`Target (e.g. ${activeTab === 'Hashtag' ? '#fitness' : activeTab === 'Followers' ? '@nike' : 'post URL'})...`}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 42px',
              background: inputBg,
              border: `1px solid ${inputBorder}`,
              borderRadius: 8,
              color: textPrimary,
              outline: 'none',
              fontSize: 13,
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)'}
            onBlur={e => e.target.style.borderColor = inputBorder}
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          style={{ padding: '0 14px', border: `1px solid ${showFilters ? 'rgba(59, 130, 246, 0.5)' : cardBorder}`, borderRadius: 8, background: showFilters ? 'rgba(59, 130, 246, 0.1)' : inputBg, color: showFilters ? '#3B82F6' : textMuted, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
        >
          <Settings2 size={16} />
        </button>
        <button style={{ padding: '0 24px', background: '#3B82F6', color: '#FFF', borderRadius: 8, border: 'none', fontWeight: 600, fontSize: 14, cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#2563eb'} onMouseLeave={e => e.currentTarget.style.background = '#3B82F6'}>
          Scrape
        </button>
      </div>

      {/* Crawler Config Filters Card */}
      {showFilters && (
        <div style={{ margin: '0 20px 20px 20px', padding: '16px', border: `1px solid ${cardBorder}`, borderRadius: 8, background: filterCardBg }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderBottom: `1px solid ${cardBorder}`, paddingBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10, color: textMuted, fontWeight: 700, letterSpacing: 1 }}>
              <SlidersHorizontal size={14} />
              CRAWLER CONFIG
            </div>
            <div style={{ fontSize: 10, color: '#3B82F6', fontWeight: 700, letterSpacing: 1 }}>
              FILTERS ACTIVE
            </div>
          </div>
          <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: textPrimary, cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: '#3B82F6', width: 16, height: 16, cursor: 'pointer' }} />
              Auto-Verify Emails
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: textPrimary, cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: '#3B82F6', width: 16, height: 16, cursor: 'pointer' }} />
              Extract Phones
            </label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${cardBorder}`, paddingTop: 16 }}>
            <span style={{ fontSize: 13, color: textSecondary }}>Proxy Pool Group:</span>
            <select style={{ background: inputBg, border: `1px solid ${cardBorder}`, color: textPrimary, padding: '6px 12px', borderRadius: 6, fontSize: 13, outline: 'none', cursor: 'pointer' }}>
              <option>US Proxy Pool</option>
              <option>EU Proxy Pool</option>
              <option>Global Mix</option>
            </select>
          </div>
        </div>
      )}

      {/* Content Area */}
      {!searchValue ? (
        <div style={{ padding: '60px 20px', textAlign: 'center', borderTop: `1px solid ${cardBorder}` }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: textMuted }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <h3 style={{ fontSize: 14, color: textMuted, fontWeight: 600, marginBottom: 8 }}>No Profiles Extracted Yet</h3>
          <p style={{ fontSize: 12, color: textMuted, opacity: 0.8, lineHeight: 1.5 }}>Choose scrape mode, input a keyword, and run<br />extraction simulator.</p>
        </div>
      ) : (
        <div style={{ borderTop: `1px solid ${cardBorder}` }}>
          <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${cardBorder}` }}>
            <span style={{ fontSize: 11, color: textMuted, fontWeight: 700, letterSpacing: 1 }}>LIVE SCRAPING: 58 LEADS</span>
            <div style={{ display: 'flex', background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,0.05)', borderRadius: 20, padding: 4, gap: 4 }}>
              <div style={{ width: 28, height: 24, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: textMuted }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              </div>
              <div style={{ width: 28, height: 24, borderRadius: 12, background: 'rgba(139, 92, 246, 0.2)', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              </div>
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1fr', fontSize: 10, color: textSecondary, fontWeight: 700, letterSpacing: 1, marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${cardBorder}` }}>
              <span>HANDLE</span>
              <span>EMAIL</span>
              <span style={{ textAlign: 'right' }}>FOLLOWERS</span>
            </div>
            {leads.map((lead, i) => (
              <div key={lead.handle} style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1fr', padding: '12px 0', borderBottom: i !== leads.length - 1 ? `1px solid ${cardBorder}` : 'none', fontSize: 13, alignItems: 'center' }}>
                <span style={{ color: textPrimary, fontWeight: 600 }}>{lead.handle}</span>
                <span style={{ color: '#8B5CF6' }}>{lead.email}</span>
                <span style={{ color: textMuted, textAlign: 'right' }}>{lead.followers}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div style={{ padding: '16px 20px', borderTop: `1px solid ${cardBorder}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: bottomBarBg }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: textMuted }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#27C93F" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
          Bounce Rate: <span style={{ color: textPrimary, fontWeight: 600 }}>0.8%</span>
        </div>
        <button
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: isDark ? '#F0EEE8' : '#0F0E17', color: isDark ? '#000' : '#fff', borderRadius: 8, fontSize: 13, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Export CSV
        </button>
      </div>
    </div>
  )
}

export default function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const isDark = !mounted || theme === 'dark'

  const threadsColor = isDark ? [139 / 255, 92 / 255, 246 / 255] : [109 / 255, 40 / 255, 217 / 255]
  const threadsOpacity = isDark ? 0.4 : 0.45

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
        alignItems: 'center',
      }}
    >
      {/* Threads background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: threadsOpacity,
          transition: 'opacity 300ms ease',
        }}
      >
        <Threads
          color={threadsColor}
          amplitude={1.2}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      {/* Content wrapper */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}
      >
        {/* Left: Text Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <motion.h1
            {...fadeUp(0.1)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              margin: 0,
              maxWidth: 580,
            }}
          >
            Extract Verified Leads From{' '}
            <span style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Instagram</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: 480,
              margin: '24px 0 0 0',
            }}
          >
            Scrape public email addresses, phone numbers, and social metrics. Target followers, following lists, and post commenters instantly without any setup.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            style={{ marginTop: 40, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}
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
                fontSize: 14,
                padding: '14px 28px',
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
                border: isDark ? '1.5px solid rgba(255,255,255,0.2)' : '1.5px solid rgba(0,0,0,0.15)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: 14,
                padding: '13px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                transition: 'border-color 200ms ease, color 200ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#8B5CF6'
                e.currentTarget.style.color = '#8B5CF6'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >
              View Pricing
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.45)}
            style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}
          >
            <AnimatedStat target="10M+" label="Emails Scraped" />
            <div style={{ width: 1, height: 32, background: isDark ? '#1E1E28' : 'rgba(0,0,0,0.1)' }} />
            <AnimatedStat target="5k+" label="Active Scrapers" />
            <div style={{ width: 1, height: 32, background: isDark ? '#1E1E28' : 'rgba(0,0,0,0.1)' }} />
            <AnimatedStat target="100%" label="No Credit Setup" />
          </motion.div>
        </div>

        {/* Right: Dashboard Mockup */}
        <motion.div
          {...fadeUp(0.5)}
          style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
        >
          <DashboardMockup />
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          #hero > div:nth-of-type(2) {
            grid-template-columns: 1fr;
            text-align: center;
          }
          #hero > div:nth-of-type(2) > div:first-child {
            align-items: center !important;
            text-align: center !important;
          }
          #hero > div:nth-of-type(2) > div:first-child > h1 {
            margin: 0 auto !important;
          }
          #hero > div:nth-of-type(2) > div:first-child > p {
            margin: 24px auto 0 auto !important;
          }
          #hero > div:nth-of-type(2) > div:first-child > div {
            justify-content: center !important;
          }
          #hero > div:nth-of-type(2) > div:last-child {
            justify-content: center !important;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  )
}
