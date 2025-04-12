import { Metadata } from 'next';
import { ReactNode } from 'react';
import "./globals.css"
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

// import { Sora, Space_Grotesk, Inter, Outfit } from "next/font/google";

// const sora = Sora({
//   variable: "--font-sora",
//   subsets: ["latin"],
//   display: 'swap',
// });

// const spaceGrotesk = Space_Grotesk({
//   variable: "--font-space-grotesk",
//   subsets: ["latin"],
//   display: 'swap',
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: 'swap',
// });

// const outfit = Outfit({
//   variable: "--font-outfit",
//   subsets: ["latin"],
//   display: 'swap',
// });

export const metadata: Metadata = {
    title: "ORIVION - Growth Beyond Gravity",
    description: "We execute what your business NEEDS to grow",
    keywords: ["growth agency", "ecommerce growth", "community monetization"],
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://orivion.com',
        siteName: 'ORIVION',
    },
};

export default function RootLayout({ children }: { children: ReactNode; }) {
    return (
        <html lang="es">
            {/* <html className={`${sora.variable} ${spaceGrotesk.variable} ${inter.variable} ${outfit.variable}`}> */}
            <body className="bg-pureWhite dark:bg-spaceGray transition-colors duration-300">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}