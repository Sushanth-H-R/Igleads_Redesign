'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Is scraping Instagram data legal?',
    a: 'Igleads only accesses publicly available Instagram data — the same information visible to anyone browsing without an account. We never access private profiles, bypass authentication, or extract personal private information.',
  },
  {
    q: 'Will my Instagram account get banned?',
    a: 'Igleads does not require your Instagram login credentials. We operate independently — your account is never at risk.',
  },
  {
    q: 'What data can I actually extract?',
    a: 'Usernames, bios, follower counts, following counts, post counts, engagement rates, email addresses where publicly listed, and profile categories.',
  },
  {
    q: 'How fast is a typical scrape?',
    a: 'Most jobs complete in under 3 minutes. Our engine averages 2 minutes 47 seconds per scrape job regardless of size.',
  },
  {
    q: 'Can I export the data to my CRM?',
    a: 'All plans support CSV export which imports into any CRM. Pro and Agency plans include direct HubSpot, Mailchimp, and Salesforce integrations.',
  },
  {
    q: 'Do I need technical skills to use this?',
    a: 'None at all. Paste a profile URL or hashtag, set your limit, click start. Your data is ready to download in minutes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '80px 0', background: '#000000' }}>
      <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal flex flex-col items-center">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, color: '#8B5CF6', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              FAQ
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
            Questions? <span style={{ color: '#8B5CF6' }}>Answers.</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid',
                  borderColor: isOpen ? '#8B5CF6' : 'var(--border)',
                  borderLeftWidth: isOpen ? 4 : 1,
                  borderRadius: 12,
                  overflow: 'hidden',
                  transition: 'border-color 200ms ease, border-left-width 200ms ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  data-cursor="hover"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    color: '#F0EEE8',
                    fontFamily: 'var(--font-body)',
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  {faq.q}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} color={isOpen ? '#8B5CF6' : '#6B6A65'} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div
                        style={{
                          padding: '0 24px 24px 24px',
                          color: '#6B6A65',
                          fontSize: 15,
                          lineHeight: 1.6,
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
