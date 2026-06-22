import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClarityLabs | Hyaluronic Acid Serum',
  description: 'ClarityLabs Hyaluronic Acid Serum — Dermatologist-tested, clinically formulated for 72-hour deep hydration. Clean ingredients, visible results.',
  keywords: 'hyaluronic acid serum, skincare, ClarityLabs, hydrating serum, dermatologist tested',
  openGraph: {
    title: 'ClarityLabs | Hyaluronic Acid Serum',
    description: 'Clinically formulated for 72-hour deep hydration.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
