'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Globe, Shield, Database, Zap, ArrowRight } from "lucide-react"
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function Pricing() {
  const [credits, setCredits] = useState<number>(100)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const isDark = !mounted || theme === 'dark'

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredits(Number(e.target.value))
  }

  const priceValue = credits * 0.12
  const price = priceValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const percentage = ((credits - 100) / (100000 - 100)) * 100

  const cardBg = isDark ? 'linear-gradient(180deg, #111111 0%, #080808 100%)' : 'linear-gradient(180deg, #FFFFFF 0%, #F5F4FC 100%)'
  const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'
  const sliderTrackBg = isDark ? '#1A1A1A' : '#E0DEF0'

  return (
    <section id="pricing" style={{ padding: '120px 0', background: 'var(--bg-base)', overflow: 'hidden', transition: 'background 300ms ease' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="text-center mb-16 reveal">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, color: '#8B5CF6', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              SIMPLE, TRANSPARENT PRICING
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] font-bold" style={{ color: 'var(--text-primary)' }}>
            Pay as you go.<br className="hidden md:block" /> <span style={{ color: "#8B5CF6" }}>No hidden fees.</span>
          </h2>
          <p className="mt-6 font-body text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Forget about monthly subscriptions. Only pay for the credits you actually need. Every credit equals one successful extraction or action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">

          {/* Left Panel: Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: 24,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'background 300ms ease, border-color 300ms ease',
            }}
          >
            <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Calculate Your Cost</h3>
            <p className="font-body text-[15px] mb-10" style={{ color: 'var(--text-secondary)' }}>Adjust the slider below to select how many credits you need.</p>

            <div className="flex justify-between items-end mb-6 gap-4">
              <div className="flex-shrink-0">
                <div className="text-xs font-semibold tracking-wider mb-2 uppercase font-body" style={{ color: 'var(--text-muted)' }}>Credits Needed</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl lg:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>{credits.toLocaleString()}</span>
                  <span className="font-body text-sm font-medium" style={{ color: 'var(--text-muted)' }}>credits</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs font-semibold tracking-wider mb-2 uppercase font-body" style={{ color: 'var(--text-muted)' }}>Total Price</div>
                <div className="font-display text-4xl lg:text-5xl font-bold" style={{ color: '#8B5CF6' }}>${price}</div>
              </div>
            </div>

            {/* Custom Slider */}
            <div className="relative w-full h-12 mb-2 flex items-center">
              <input
                type="range"
                min="100"
                max="100000"
                step="100"
                value={credits}
                onChange={handleSliderChange}
                className="w-full absolute z-10 opacity-0 cursor-pointer h-full"
                title="Credits"
              />
              <div className="w-full h-2.5 rounded-full overflow-hidden absolute" style={{ background: sliderTrackBg, border: `1px solid ${cardBorder}` }}>
                <div
                  className="h-full bg-[#8B5CF6] transition-all duration-150 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div
                className="absolute w-6 h-6 bg-white rounded-full border-2 border-[#8B5CF6] z-0 pointer-events-none transition-all duration-150 ease-out"
                style={{
                  left: `calc(${percentage}% - 12px)`,
                  boxShadow: '0 0 15px rgba(139,92,246,0.6)',
                }}
              />
            </div>
            <div className="flex justify-between text-xs font-mono font-medium mb-12 px-1" style={{ color: 'var(--text-muted)' }}>
              <span>100</span>
              <span>50K</span>
              <span>100K</span>
            </div>

            {/* Info Box */}
            <div style={{
              background: 'transparent',
              border: `1px solid ${cardBorder}`,
              borderRadius: 16,
              padding: '24px',
              marginBottom: 'auto',
              transition: 'border-color 300ms ease',
            }}>
              <div className="flex items-center gap-2 mb-3">
                <Zap size={18} className="text-[#8B5CF6]" />
                <h4 className="font-display font-medium text-lg" style={{ color: 'var(--text-primary)' }}>What can I do with credits?</h4>
              </div>
              <p className="text-[15px] leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                Credits are the universal currency used to power your data extractions. Instead of paying for a rigid monthly tier, you simply spend credits on the exact actions you need.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                <div className="flex items-center gap-2 text-[13px] font-body font-medium" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" /> 1 Credit ≈ 1 Basic Lead Extracted
                </div>
                <div className="flex items-center gap-2 text-[13px] font-body font-medium" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" /> Pay only for successful scrapes
                </div>
                <div className="flex items-center gap-2 text-[13px] font-body font-medium" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" /> Different actions have different costs
                </div>
                <div className="flex items-center gap-2 text-[13px] font-body font-medium" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" /> Credits never expire
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6" style={{ borderTop: `1px solid ${cardBorder}` }}>
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22c55e]"></span>
                </div>
                <span className="text-[15px] font-body font-medium" style={{ color: 'var(--text-secondary)' }}>$0.12 per credit base rate</span>
              </div>
              <button
                data-cursor="hover"
                style={{
                  background: '#8B5CF6',
                  color: '#fff',
                  border: 'none',
                  padding: '0 24px',
                  height: '48px',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 20px -5px rgba(139,92,246,0.5)',
                  transition: 'all 0.2s ease',
                }}
                className="hover:opacity-90 hover:scale-[1.02] hover:-translate-y-0.5"
              >
                Start Extracting <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right Panel: Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: 24,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'background 300ms ease, border-color 300ms ease',
            }}
          >
            <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Everything Included</h3>
            <p className="font-body text-[15px] mb-10" style={{ color: 'var(--text-secondary)' }}>Get full access to all platform features, no matter how many credits you buy.</p>

            <ul className="space-y-6 mb-auto">
              {[
                { icon: Globe, label: 'Scrape hashtags, followers & comments', colorClass: 'text-blue-400', bgClass: 'bg-blue-500/10', borderClass: 'border-blue-500/20' },
                { icon: Shield, label: 'Real-time email verification', colorClass: 'text-emerald-400', bgClass: 'bg-emerald-500/10', borderClass: 'border-emerald-500/20' },
                { icon: Database, label: 'CSV & Excel Exports', colorClass: 'text-amber-400', bgClass: 'bg-amber-500/10', borderClass: 'border-amber-500/20' },
                { icon: Check, label: 'Category & location filters', colorClass: 'text-[#8B5CF6]', bgClass: 'bg-[#8B5CF6]/10', borderClass: 'border-[#8B5CF6]/20' },
                { icon: Zap, label: 'REST API & Webhooks Access', colorClass: 'text-pink-400', bgClass: 'bg-pink-500/10', borderClass: 'border-pink-500/20' },
                { icon: Check, label: 'Priority email support', colorClass: isDark ? 'text-[#8A8985]' : 'text-[#8B87A8]', bgClass: 'bg-white/5', borderClass: 'border-white/10' },
                { icon: Check, label: 'No monthly commitment', colorClass: isDark ? 'text-[#8A8985]' : 'text-[#8B87A8]', bgClass: 'bg-white/5', borderClass: 'border-white/10' },
                { icon: Check, label: 'Credits never expire', colorClass: isDark ? 'text-[#8A8985]' : 'text-[#8B87A8]', bgClass: 'bg-white/5', borderClass: 'border-white/10' },
              ].map(({ icon: Icon, label, colorClass, bgClass, borderClass }) => (
                <li key={label} className="flex items-center gap-4 font-body text-[15px] font-medium" style={{ color: 'var(--text-primary)' }}>
                  <div className={`w-8 h-8 rounded-full ${bgClass} flex items-center justify-center ${colorClass} border ${borderClass}`}>
                    <Icon size={15} />
                  </div>
                  {label}
                </li>
              ))}
            </ul>

            <div style={{
              background: 'rgba(139,92,246,0.05)',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: 12,
              padding: '24px',
              marginTop: '40px',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <Zap size={22} className="text-[#8B5CF6] flex-shrink-0 mt-0.5" />
              <p className="text-[15px] font-body leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                Looking for custom enterprise volumes over 100,000 credits? <a href="#" className="font-semibold text-[#8B5CF6] hover:underline underline-offset-2 transition-all">Contact our sales team</a> for volume discounts.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
