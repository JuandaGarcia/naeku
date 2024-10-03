import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.scss'

const lato = Lato({
	subsets: ['latin'],
	weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
	title: 'Naeku by YT Rocket',
	description:
		'Lanza tu música sin costos ocultos, con soporte especializado y distribúyela para que suene en todo el mundo.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`${lato.className}`}>
				{children}
				<div id="modals" />
			</body>
		</html>
	)
}
