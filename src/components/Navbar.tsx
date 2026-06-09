'use client'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Docs (API)', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        zIndex: 100,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
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
            fontSize: 18,
            color: '#F0EEE8',
            textDecoration: 'none',
          }}
        >
          igleads
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
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: 6,
                transition: 'color 150ms ease',
                background: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#F0EEE8'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Sign in */}
          <a
            href="#"
            data-cursor="hover"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              marginRight: 16,
              transition: 'color 150ms ease',
              background: 'transparent',
              border: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F0EEE8')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
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
              background: '#00E5C0',
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
