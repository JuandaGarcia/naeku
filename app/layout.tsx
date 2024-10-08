import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.scss'

const lato = Lato({
	subsets: ['latin'],
	weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
	title: 'Naeku by YT Rocket',
	description:
		'Lanza tu música sin costos ocultos, con soporte especializado y distribúyela para que suene en todo el mundo.',
	openGraph: {
		images: 'https://naeku.juanda.co/img/og.jpg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`${lato.className}`}>
				<ThemeProvider defaultTheme="light">{children}</ThemeProvider>
				<div id="modals" />
			</body>
		</html>
	)
}
