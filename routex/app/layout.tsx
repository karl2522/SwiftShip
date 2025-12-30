import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
    subsets: ["latin"],
    variable: '--font-manrope',
});

export const metadata: Metadata = {
    title: 'SwiftShip Logistics - Global Shipping & Freight Solutions',
    description: 'Professional shipping and logistics solutions. Book voyages, track orders, and manage your freight with confidence. Reliable global shipping services.',
    generator: 'v0.app',
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.className} antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
