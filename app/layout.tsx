import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guilherme Trindade - Curriculo',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
