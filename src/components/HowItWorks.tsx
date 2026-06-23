'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Database, Download } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Target Audience',
    desc: 'Enter any Instagram profile, hashtag, or post URL to extract followers, following, or commenters.',
    icon: Search,
    image: '/dashboard-step-1.webp'
  },
  {
    id: 2,
    title: 'Data Extraction',
    desc: 'Our engine safely scrapes public data including bios, engagement metrics, and verified emails.',
    icon: Database,
    image: '/dashboard-step-2.webp'
  },
  {
    id: 3,
    title: 'Export & Scale',
    desc: 'Download clean CSVs ready for immediate use in your CRM, cold email sequences, or custom audiences.',
    icon: Download,
    image: '/dashboard-step-3.webp'
  }
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev === 3 ? 1 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="how-it-works" style={{ padding: '80px 0', background: '#000000' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, color: '#8B5CF6', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              HOW IT WORKS
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 700,
              color: '#F0EEE8',
              margin: 0,
            }}
          >
            Three steps to <span style={{ color: '#8B5CF6' }}>scale.</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Timeline side */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: 23,
                top: 24,
                bottom: 24,
                width: 2,
                background: '#1A1A1A',
                zIndex: 0,
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 48, position: 'relative', zIndex: 1 }}>
              {steps.map((step) => {
                const isActive = activeStep === step.id
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    data-cursor="hover"
                    style={{
                      display: 'flex',
                      gap: 24,
                      cursor: 'none',
                      opacity: isActive ? 1 : 0.4,
                      transition: 'opacity 300ms ease',
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: isActive ? '#8B5CF6' : '#1A1A1A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: 20,
                        fontWeight: 700,
                        color: isActive ? '#000' : '#6B6A65',
                        flexShrink: 0,
                        transition: 'all 300ms ease',
                        boxShadow: isActive ? '0 0 24px rgba(139,92,246,0.4)' : 'none',
                      }}
                    >
                      {step.id}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 24,
                          fontWeight: 600,
                          color: '#F0EEE8',
                          marginBottom: 8,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 15,
                          color: '#6B6A65',
                          lineHeight: 1.6,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Browser Mockup side */}
          <div className="reveal">
            <div
              style={{
                background: '#0F0F0F',
                border: '1px solid #1A1A1A',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 24px 64px -12px rgba(0,0,0,0.5)',
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  height: 40,
                  borderBottom: '1px solid #1A1A1A',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 16px',
                  gap: 8,
                  background: '#16161D',
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
              </div>

              {/* Browser content */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={steps[activeStep - 1].image}
                      alt={`Step ${activeStep}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        backgroundColor: '#0F0F0F',
                        display: 'block',
                        borderRadius: '0 0 10px 10px',
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
