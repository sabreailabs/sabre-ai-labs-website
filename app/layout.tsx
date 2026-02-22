import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sabre AI Labs — Building Intelligent Systems',
  description:
    'Sabre AI Labs is an innovation-driven AI & technology research lab building intelligent software systems, AI solutions, hardware prototypes, and research-based technologies for real-world impact.',
  keywords: [
    'AI lab', 'artificial intelligence', 'machine learning', 'research lab',
    'hardware prototypes', 'IoT', 'embedded systems', 'full stack development',
    'Sabre AI Labs', 'innovation lab', 'AI research India'
  ],
  authors: [{ name: 'Sabre AI Labs' }],
  creator: 'Sabre AI Labs',
  publisher: 'Sabre AI Labs',
  metadataBase: new URL('https://sabreailabs.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sabreailabs.in',
    siteName: 'Sabre AI Labs',
    title: 'Sabre AI Labs — Building Intelligent Systems',
    description: 'Innovation-driven AI & technology lab building intelligent systems for real-world impact.',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sabre AI Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabre AI Labs — Building Intelligent Systems',
    description: 'Innovation-driven AI & technology lab.',
    images: ['/logo.jpeg'],
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
