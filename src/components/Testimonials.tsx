'use client'

import { useState } from "react"
import { Quote, Star } from "lucide-react"

const data = [
  {
    quote: "I built a 2,000-contact outreach list in under an hour. Nothing comes close for Instagram lead gen.",
    name: "Rahul Verma",
    role: "E-commerce Founder",
    avatar: "/avatar-1.jpg",
  },
  {
    quote: "We cut influencer research time by 80%. Igleads just does the work.",
    name: "Priya Anand",
    role: "Marketing Lead",
    avatar: "/avatar-2.jpg",
  },
  {
    quote: "Our agency runs scrapes for 12 clients weekly. The bulk export into HubSpot is a lifesaver.",
    name: "Jonas Reiter",
    role: "Lead Gen Agency",
    avatar: "/avatar-3.jpg",
  },
  {
    quote: "The hashtag mining is insane. Found 400 micro-influencers in our niche in one afternoon.",
    name: "Tomás Reyes",
    role: "Growth Strategist",
    avatar: "/avatar-4.jpg",
  },
  {
    quote: "Free plan got me hooked. Upgraded to Pro same week. Data quality is just different.",
    name: "Anika Bauer",
    role: "Social Consultant",
    avatar: "/avatar-5.jpg",
  },
]

// Default: tight poker hand stack, slight fan
const stackRot = [-8, -4, 0, 4, 8]
const stackX = [-22, -11, 0, 11, 22]
const stackY = [6, 2, 0, 2, 6]

// Hover: spread like dealer fanning the hand across the table
const fanRot = [-22, -11, 0, 11, 22]
const fanX = [-420, -210, 0, 210, 420]
const fanY = [70, 20, -8, 20, 70]

function TestimonialCard({ t, i, style = {}, lifted = false }: any) {
  return (
    <article
      className="w-[85vw] md:w-[340px] p-8 shrink-0 snap-center relative"
      style={{
        background: "linear-gradient(180deg, #141414, #0C0C0C)",
        backgroundClip: "padding-box",
        boxShadow: lifted
          ? "inset 0 0 0 1px var(--border), 0 30px 80px -20px rgba(139,92,246,0.25), 0 20px 60px -20px rgba(0,0,0,0.8)"
          : "inset 0 0 0 1px var(--border), 0 20px 60px -25px rgba(0,0,0,0.8)",
        borderRadius: "24px",
        overflow: "hidden",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        transform: "translateZ(0)",
        ...style
      }}
      data-cursor="hover"
    >
      <div style={{ paddingBottom: '24px' }}>
        <div className="flex items-start justify-between mb-6">
          <Quote className="size-8" style={{ color: "var(--teal)" }} fill="currentColor" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="size-4" style={{ color: 'var(--teal)' }} fill="currentColor" />
            ))}
          </div>
        </div>
        <p className="text-base text-white/85 leading-relaxed min-h-[96px] font-body">
          {t.quote}
        </p>
        <hr className="my-6 border-white/10" />
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.avatar}
            alt={t.name}
            width={48}
            height={48}
            loading="lazy"
            className="size-12 rounded-full object-cover ring-1 ring-white/10"
          />
          <div>
            <p className="text-[15px] font-semibold text-[#F0EEE8] font-body">{t.name}</p>
            <p className="text-[13px] text-white/45 font-body">{t.role}</p>
          </div>
        </div>

        <span
          className="absolute bottom-4 right-5 text-xs tracking-[0.2em] uppercase text-white/25"
          style={{ fontFamily: "var(--font-display)" }}
        >
          0{i + 1}
        </span>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const [open, setOpen] = useState(false)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)

  return (
    <section id="testimonials" style={{ padding: '80px 0', background: '#000000' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-16 reveal">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, color: '#8B5CF6', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              WHAT THEY SAY
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
            A hand of{' '}
            <span style={{ color: '#8B5CF6' }}>kind words.</span>
          </h2>
        </div>

        {/* Desktop Fan */}
        <div
          className="hidden md:flex relative h-[500px] items-center justify-center reveal select-none"
          style={{ perspective: "1400px" }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => {
            setOpen(false)
            setHoverIdx(null)
          }}
        >
          {data.map((t, i) => {
            const rot = open ? fanRot[i] : stackRot[i]
            const x = open ? fanX[i] : stackX[i]
            const y = open ? fanY[i] : stackY[i]
            const lifted = hoverIdx === i
            const z = lifted ? 50 : open ? i : 10 - Math.abs(i - 2)
            
            return (
              <div
                key={i}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
                className="absolute cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y - (lifted ? 18 : 0)}px) rotate(${
                    lifted ? rot * 0.4 : rot
                  }deg) scale(${lifted ? 1.05 : 1})`,
                  transformOrigin: "bottom center",
                  transition: "transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 350ms ease",
                  zIndex: z,
                }}
              >
                <TestimonialCard t={t} i={i} lifted={lifted} />
              </div>
            )
          })}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 gap-6" style={{ scrollbarWidth: 'none' }}>
          {data.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
