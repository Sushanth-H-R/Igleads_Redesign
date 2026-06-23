'use client'

import { Check } from "lucide-react"

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm text-white/80">
      <Check className="size-4" strokeWidth={3} style={{ color: '#8B5CF6' }} />
      {text}
    </li>
  )
}

type Tier = {
  name: string
  price: string
  tagline: string
  features: string[]
  cta: string
  badge?: string
  glow: string
}

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    tagline: "For solo marketers testing the waters.",
    features: ["100 emails/month", "10 credits", "Basic profile scraping", "CSV export", "Community support"],
    cta: "Start free",
    glow: "conic-gradient(from 0deg, #8B5CF6, #EC4899, #7B61FF, #8B5CF6)",
  },
  {
    name: "Starter",
    price: "$29",
    tagline: "For teams that need real volume.",
    features: [
      "1,000 emails/month",
      "100 credits",
      "Advanced scraping",
      "CSV & XLS export",
      "Email verification",
      "Priority support"
    ],
    cta: "Start free trial",
    badge: "Most popular",
    glow: "conic-gradient(from 0deg, #FF2D87, #7B61FF, #8B5CF6, #FF2D87)",
  },
  {
    name: "Agency",
    price: "$99",
    tagline: "For agencies running at scale.",
    features: [
      "5,000 emails/month",
      "500 credits",
      "Unlimited profiles",
      "All export formats",
      "API access",
      "Advanced integrations",
      "Priority support"
    ],
    cta: "Get Agency",
    glow: "conic-gradient(from 0deg, #7B61FF, #2DD4BF, #FF2D87, #7B61FF)",
  },
]

function PricingCard({ tier, featured }: { tier: Tier; featured?: boolean }) {
  return (
    <div className="group relative reveal" data-delay={featured ? "80" : undefined}>
      {/* Soft static glow halo on hover */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 hidden md:block"
        style={{
          background: tier.glow,
          filter: "blur(14px)",
        }}
      />
      <div
        className={`relative rounded-2xl p-8 h-full overflow-hidden ${featured ? "md:scale-[1.04]" : ""}`}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }} />}
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-display text-2xl font-semibold text-[#F0EEE8]">{tier.name}</h3>
            {tier.badge && (
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full text-black font-body"
                style={{ background: "var(--teal)" }}
              >
                {tier.badge}
              </span>
            )}
          </div>
          <div className="font-display text-5xl mb-4 text-[#F0EEE8] font-bold">
            {tier.price}
            <span className="text-base text-white/45 font-body font-normal">/mo</span>
          </div>
          <p className="text-sm text-white/55 mb-7 font-body">{tier.tagline}</p>
          <button
            data-cursor="hover"
            className={`w-full h-11 rounded-md text-sm font-semibold font-body transition-transform hover:scale-[1.02] ${
              featured ? "text-white" : "text-white/90 hover:bg-white/5"
            }`}
            style={
              featured
                ? { background: "linear-gradient(135deg, #8B5CF6, #EC4899)", border: "none" }
                : { border: "1px solid rgba(255,255,255,0.18)", background: "transparent" }
            }
          >
            {tier.cta}
          </button>
          <ul className="mt-7 space-y-3">
            {tier.features.map((f) => (
              <Feature key={f} text={f} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '80px 0', background: '#000000', overflow: 'hidden', isolation: 'isolate' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="text-center mb-14 reveal">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B5CF6' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, color: '#8B5CF6', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              PRICING
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-[#F0EEE8] font-bold">
            Simple <span style={{ color: "var(--teal)" }}>pricing.</span>
          </h2>
          <p className="text-white/55 mt-4 font-body">Start free. Scale when your team grows.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => (
            <PricingCard key={t.name} tier={t} featured={i === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
