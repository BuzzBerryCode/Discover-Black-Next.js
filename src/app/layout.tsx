import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discover Creators',
  description: 'Creator discovery platform',
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