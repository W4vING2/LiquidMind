import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	weight: '400',
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
	weight: '400',
})

export const viewport = {
	width: 'device-width',
	initialScale: 1,
}

export const metadata: Metadata = {
	metadataBase: new URL('https://liquiddmind.vercel.app'),
	title: {
		default: 'LiquidMind — AI платформа',
		template: '%s | LiquidMind',
	},

	description:
		'LiquidMind — современная AI-платформа для общения с разными моделями искусственного интеллекта.',

	keywords: [
		'AI',
		'искусственный интеллект',
		'чат с ИИ',
		'LiquidMind',
		'нейросети',
		'AI models',
	],

	authors: [{ name: 'LiquidMind' }],
	creator: 'LiquidMind',
	publisher: 'LiquidMind',

	openGraph: {
		type: 'website',
		url: 'https://your-domain.com',
		title: 'LiquidMind — AI платформа',
		description:
			'Современная AI-платформа для работы с лучшими моделями нейросетей.',
		siteName: 'LiquidMind',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'LiquidMind AI',
			},
		],
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
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
