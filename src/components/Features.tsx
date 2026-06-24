'use client'

import { motion } from 'framer-motion'

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const ShieldCheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

const FilterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
)

const CodeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const features = [
  {
    icon: InstagramIcon,
    title: 'Instagram Profile Extraction',
    desc: 'Extract public email addresses, phone numbers, bios, follower counts, and categories from any Instagram account, hashtag, or post.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Real-time Email Verification',
    desc: 'Every email found is validated automatically. We verify domain MX records and SMTP connections to keep bounce rates under 3%.',
  },
  {
    icon: FilterIcon,
    title: 'Category & Follower Filters',
    desc: 'Filter extracted profiles based on business categories, follower size, post count, keywords in bio, or specific location targets.',
  },
  {
    icon: CodeIcon,
    title: 'Developer API Access',
    desc: 'Trigger Instagram scrape tasks programmatically using our developer REST API and stream results into your CRM with webhooks.',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '120px 0', background: 'var(--bg-base)', outline: 'none', transition: 'background 300ms ease' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, color: '#8B5CF6', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              GDPR &amp; CCPA COMPLIANT
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: '0 0 24px 0',
              lineHeight: 1.1,
            }}
          >
            Designed for Outreach,<br />
            <span style={{ color: '#8B5CF6' }}>Built for Scale</span>
          </h2>
          <p
             style={{
               fontFamily: 'var(--font-body)',
               fontSize: 18,
               color: 'var(--text-secondary)',
               lineHeight: 1.6,
               maxWidth: 700,
               margin: '0 auto'
             }}
          >
            Stop copy-pasting contacts manually. Extract thousands of verified email addresses and phone numbers in seconds and launch your Instagram outbound campaigns.
          </p>
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
                className="group relative overflow-hidden feature-card-anim"
                style={{
                  background: 'var(--bg-surface)',
                  borderRadius: 24,
                  padding: '48px 40px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.04)',
                  transition: 'background 300ms ease, border-color 300ms ease',
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
                      color: 'var(--text-primary)',
                      marginBottom: 12,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 16,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: 0,
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
