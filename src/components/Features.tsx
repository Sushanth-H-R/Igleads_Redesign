'use client'

import { motion } from 'framer-motion'

/* ── Premium Inline SVG Icons ─────────────────────────────── */
const EmailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
)

const TargetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const DataIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#8B5CF6" strokeWidth="1.5" />
    <circle cx="6.5" cy="6.5" r="1" fill="#8B5CF6" opacity="0.4" />
    <circle cx="17.5" cy="6.5" r="1" fill="#8B5CF6" opacity="0.4" />
    <circle cx="6.5" cy="17.5" r="1" fill="#8B5CF6" opacity="0.4" />
    <circle cx="17.5" cy="17.5" r="1" fill="#8B5CF6" opacity="0.4" />
  </svg>
)

const LightningIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L4.5 13H12l-1 9L20 11h-8l1-9z" />
  </svg>
)

const features = [
  {
    icon: EmailIcon,
    title: 'Profile Scraping',
    desc: 'Extract bios, follower counts, emails, and post stats from any public profile at scale. Stop clicking manually.',
    stat: 'Up to 500 profiles per run',
  },
  {
    icon: TargetIcon,
    title: 'Hashtag Mining',
    desc: 'Find everyone posting under any hashtag. Discover niche audiences before your competitors even wake up.',
    stat: 'Any public hashtag',
  },
  {
    icon: DataIcon,
    title: 'One-Click Export',
    desc: 'Download clean CSV, Excel, or JSON files. Pre-formatted perfectly for Mailchimp, HubSpot, or Salesforce.',
    stat: 'CSV · XLS · JSON',
  },
  {
    icon: LightningIcon,
    title: 'Fast & Reliable',
    desc: 'Consistent results at scale. Anti-block architecture, 99.2% uptime, and an average scrape in under 3 minutes.',
    stat: 'Avg: 2m 47s per job',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '120px 0', background: '#000000', outline: 'none' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, color: '#8B5CF6', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              WHAT YOU GET
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: 700,
              color: '#F0EEE8',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Everything{' '}
            <span style={{ color: '#8B5CF6' }}>you need.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                data-cursor="hover"
                className="group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #111111 0%, #080808 100%)',
                  borderRadius: 24,
                  padding: '48px 40px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
                }}
              >
                {/* Subtle hover gradient background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 60%)'
                  }}
                />

                <div className="relative z-10">
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      background: 'rgba(139,92,246,0.08)',
                      border: '1px solid rgba(139,92,246,0.15)',
                      borderRadius: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 24,
                      boxShadow: '0 8px 24px -8px rgba(139,92,246,0.2)'
                    }}
                  >
                    <Icon />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 26,
                      fontWeight: 600,
                      color: '#F0EEE8',
                      marginBottom: 12,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 16,
                      color: '#8A8985',
                      lineHeight: 1.6,
                      marginBottom: 24,
                    }}
                  >
                    {feature.desc}
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#8B5CF6',
                      borderTop: '1px solid rgba(255,255,255,0.08)',
                      paddingTop: 16,
                      display: 'inline-flex',
                      alignItems: 'center',
                      letterSpacing: '0.02em',
                    }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#8B5CF6', marginRight: 8, opacity: 0.6 }} />
                    {feature.stat}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
