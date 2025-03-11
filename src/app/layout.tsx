import '../styles/globals.css'

import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: [
    {
      path: '../../public/PretendardVariable.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/PretendardVariable.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'Concierge Admin',
  description: 'Concierge Admin.',
  keywords: [],
  metadataBase: new URL('https://sfa.the-relay.kr'),
  applicationName: 'Concierge Admin',
  icons: '@/public/img/ssa_favicon.png',
  openGraph: {
    title: 'Concierge Admin',
    description: 'Concierge Admin.',
    images: '@/public/img/ssa_logo.png',
    url: 'https://sfa.the-relay.kr',
    siteName: 'Concierge Admin',
    locale: 'ko_KR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sfa.the-relay.kr',
  },
}

export const viewport: Viewport = {
  colorScheme: 'only light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={`${pretendard.className} bg-[#011C1F]`}>{children}</body>
    </html>
  )
}
