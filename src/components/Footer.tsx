'use client'

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" stroke="currentColor" strokeWidth="0" fill="currentColor"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const SocialBtn = ({ children }: { children: React.ReactNode }) => (
  <button
    data-cursor="hover"
    style={{
      width: 40,
      height: 40,
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-color)',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)',
      transition: 'border-color 200ms ease, color 200ms ease, background 300ms ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = '#8B5CF6'
      e.currentTarget.style.color = '#8B5CF6'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border-color)'
      e.currentTarget.style.color = 'var(--text-muted)'
    }}
  >
    {children}
  </button>
)

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-surface-2)', borderTop: '1px solid var(--border-color)', padding: '80px 0 0 0', transition: 'background 300ms ease, border-color 300ms ease' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        {/* 4-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Column 1 — Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 200ms ease' }}>
                <img src="/igleads-logo.svg" alt="igleads icon" style={{ height: '28px', width: 'auto' }} />
                <span>igleads<span style={{ color: '#8B5CF6' }}>.co</span></span>
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 280, marginTop: 16, transition: 'color 200ms ease' }}>
              Extract email addresses, phone numbers, and Instagram leads with high accuracy and speed. Build your prospect lists automatically.
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 20, transition: 'color 200ms ease' }}>
              Explore
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {['Features', 'How It Works', 'Pricing', 'FAQs'].map(link => (
                <a
                  key={link}
                  href="#"
                  style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', lineHeight: 2.2, transition: 'color 150ms ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 20, transition: 'color 200ms ease' }}>
              Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {['API Documentation', 'Contact & Support', 'Help Center', 'Terms of Service', 'Privacy Policy'].map(link => (
                <a
                  key={link}
                  href="#"
                  style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', lineHeight: 2.2, transition: 'color 150ms ease' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4 — Follow Us */}
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 20, transition: 'color 200ms ease' }}>
              Follow Us
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <SocialBtn><XIcon /></SocialBtn>
              <SocialBtn><InstagramIcon /></SocialBtn>
              <SocialBtn><LinkedInIcon /></SocialBtn>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            marginTop: 48,
            borderTop: '1px solid var(--border-color)',
            padding: '24px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
            transition: 'border-color 300ms ease',
          }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', transition: 'color 200ms ease' }}>
            © {new Date().getFullYear()} igleads.co. All Rights Reserved.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a
                key={link}
                href="#"
                style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 150ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
