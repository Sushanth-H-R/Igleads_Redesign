'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Docs (API)', href: '#' },
  { label: 'Contact', href: '#' },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return <div style={{ width: 56, height: 28 }} />

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      data-cursor="hover"
      aria-label="Toggle theme"
      style={{
        width: 56,
        height: 28,
        borderRadius: 999,
        border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
        background: isDark ? '#1E1E2E' : '#F0F0F5',
        position: 'relative',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background 300ms ease, border-color 300ms ease',
        display: 'flex',
        alignItems: 'center',
        padding: '0 4px',
      }}
    >
      {/* Sliding circle */}
      <span
        style={{
          position: 'absolute',
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: '#8B5CF6',
          top: '50%',
          transform: 'translateY(-50%)',
          left: isDark ? 'calc(100% - 26px)' : 4,
          transition: 'left 300ms ease',
          boxShadow: '0 1px 4px rgba(139,92,246,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isDark ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#F0EEE8' }}>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" style={{ color: '#0F0E17' }}>
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </span>
    </button>
  )
}

export default function Navbar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const isDark = !mounted || theme === 'dark'

  const linkColor = isDark ? 'rgba(255,255,255,0.5)' : 'var(--text-secondary)'
  const linkHoverColor = isDark ? '#F0EEE8' : 'var(--text-primary)'
  const logoColor = isDark ? '#F0EEE8' : 'var(--text-primary)'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        zIndex: 100,
        background: isDark ? 'rgba(0,0,0,0.85)' : 'rgba(248,247,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
        transition: 'background 300ms ease, border-color 300ms ease',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 40px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Logo */}
        <a
          href="#"
          data-cursor="hover"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 22,
            color: logoColor,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <img src="/igleads-logo.svg" alt="igleads icon" style={{ height: '32px', width: 'auto' }} />
          <span>igleads<span style={{ color: '#8B5CF6' }}>.co</span></span>
        </a>

        {/* Center: Nav links */}
        <div style={{ display: 'flex', gap: 8 }} className="hidden md:flex">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              data-cursor="hover"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: linkColor,
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: 6,
                transition: 'color 150ms ease',
                background: 'transparent',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = linkHoverColor }}
              onMouseLeave={e => { e.currentTarget.style.color = linkColor }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Sign in */}
          <a
            href="#"
            data-cursor="hover"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: linkColor,
              textDecoration: 'none',
              transition: 'color 150ms ease',
              background: 'transparent',
              border: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = linkHoverColor)}
            onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
          >
            Sign In
          </a>

          {/* Get Started */}
          <a
            href="#pricing"
            data-cursor="hover"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              fontWeight: 700,
              color: '#000000',
              background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
              padding: '10px 20px',
              borderRadius: 6,
              border: 'none',
              textDecoration: 'none',
              transition: 'transform 150ms ease, filter 150ms ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.02)'
              e.currentTarget.style.filter = 'brightness(1.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.filter = 'brightness(1)'
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
