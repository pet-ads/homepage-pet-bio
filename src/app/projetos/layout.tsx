import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Página de perguntas do site do pet/licbio @IFSP São Paulo',
}

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
