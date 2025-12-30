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
                url: '/swiftship-logo.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/swiftship-logo.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/swiftship-logo.png',
                type: 'image/svg+xml',
            },
        ],
        apple: '/swiftship-logo.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${manrope.className} antialiased`} suppressHydrationWarning>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
