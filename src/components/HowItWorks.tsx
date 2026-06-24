'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Database, Download } from 'lucide-react'
import { useTheme } from 'next-themes'

const darkSteps = [
  {
    id: 1,
    title: 'Choose Target & Options',
    desc: 'Select your extraction mode (Hashtags, Followers, following lists, or commenters) and enter your target usernames or hashtags.',
    icon: Search,
    image: '/Ig1.png'
  },
  {
    id: 2,
    title: 'Verify & Clean Emails',
    desc: 'Our system extracts public bios and runs email contacts through our real-time verification checks to filter bounce-prone accounts.',
    icon: Database,
    image: '/Ig2.png'
  },
  {
    id: 3,
    title: 'Download Prospect List',
    desc: 'Export your validated Instagram leads list instantly in CSV or Excel format, ready to feed your cold email sequences.',
    icon: Download,
    image: '/Ig3.png'
  }
]

const lightSteps = [
  {
    id: 1,
    title: 'Choose Target & Options',
    desc: 'Select your extraction mode (Hashtags, Followers, following lists, or commenters) and enter your target usernames or hashtags.',
    icon: Search,
    image: '/Ig-light-1.png'
  },
  {
    id: 2,
    title: 'Verify & Clean Emails',
    desc: 'Our system extracts public bios and runs email contacts through our real-time verification checks to filter bounce-prone accounts.',
    icon: Database,
    image: '/Ig-light-2.png'
  },
  {
    id: 3,
    title: 'Download Prospect List',
    desc: 'Export your validated Instagram leads list instantly in CSV or Excel format, ready to feed your cold email sequences.',
    icon: Download,
    image: '/Ig-light-3.png'
  }
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const isDark = !mounted || theme === 'dark'
  const steps = isDark ? darkSteps : lightSteps

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev === 3 ? 1 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stepLineBg = isDark ? '#1A1A1A' : '#E0DEF0'
  const stepNumInactive = isDark ? '#1A1A1A' : '#E0DEF0'
  const browserBg = isDark ? '#0A0A0A' : '#FFFFFF'
  const browserTopBg = isDark ? '#111111' : '#F5F4FC'
  const browserBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'

  return (
    <section id="how-it-works" style={{ padding: '80px 0', background: 'var(--bg-base)', transition: 'background 300ms ease' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: '#8B5CF6',
              textTransform: 'uppercase',
              marginBottom: 12,
              marginTop: 0,
            }}
          >
            • GET STARTED IN MINUTES
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 700,
              margin: '0 0 16px 0',
            }}
          >
            <span style={{ color: isDark ? '#F0EEE8' : '#0F0E17' }}>How igleads </span>
            <span style={{ color: '#8B5CF6' }}>Works</span>
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
            Extracting qualified, verified email lists from Instagram hashtags and profiles has never been easier.
          </p>
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
                background: stepLineBg,
                zIndex: 0,
                transition: 'background 300ms ease',
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
                        background: isActive ? '#8B5CF6' : stepNumInactive,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: 20,
                        fontWeight: 700,
                        color: isActive ? '#000' : 'var(--text-muted)',
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
                          color: 'var(--text-primary)',
                          marginBottom: 8,
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 15,
                          color: 'var(--text-muted)',
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
                background: browserBg,
                border: `1px solid ${browserBorder}`,
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: isDark
                  ? '0 0 60px -15px rgba(139,92,246,0.15), 0 24px 64px -12px rgba(0,0,0,0.5)'
                  : '0 16px 48px rgba(0,0,0,0.1)',
                transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  height: 40,
                  borderBottom: `1px solid ${browserBorder}`,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 16px',
                  gap: 8,
                  background: browserTopBg,
                  transition: 'background 300ms ease',
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
              </div>

              {/* Browser content */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={steps[0].image}
                  alt=""
                  style={{ width: '100%', height: 'auto', visibility: 'hidden', display: 'block' }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={steps[activeStep - 1].image}
                      alt={`Step ${activeStep}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        backgroundColor: browserBg,
                        display: 'block',
                        borderRadius: '0 0 12px 12px',
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
