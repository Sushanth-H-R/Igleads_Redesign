import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import LenisScroller from '@/components/LenisScroller'

const geistMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'IgLeads — Instagram Lead Scraping Tool',
  description: 'Scrape public Instagram profiles, hashtags, and posts. Extract emails, bios, and follower data. Export to CSV, Excel, or your CRM in minutes.',
  keywords: ['instagram scraper', 'lead generation', 'instagram data', 'email extraction', 'marketing tool'],
  openGraph: {
    title: 'IgLeads — Instagram Lead Scraping Tool',
    description: 'Turn any Instagram audience into a lead list in minutes.',
    type: 'website',
    url: 'https://igleads.co',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistMono.variable}>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        <LenisScroller />
        {children}
      </body>
    </html>
  )
}
