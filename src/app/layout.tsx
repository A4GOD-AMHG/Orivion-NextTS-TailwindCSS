import { Metadata } from 'next';
import { ReactNode } from 'react';
// import { Sora, Space_Grotesk, Inter, Outfit } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "./globals.css"
import { AnimatePresence } from 'framer-motion';
import CookieModal from '@/components/CookieModal';
import ScrollToTop from '@/components/ScrollToTop';

// const sora = Sora({
//     variable: "--font-sora",
//     subsets: ["latin"],
// });

// const spaceGrotesk = Space_Grotesk({
//     variable: "--font-space-grotesk",
//     subsets: ["latin"],
// });

// const inter = Inter({
//     variable: "--font-inter",
//     subsets: ["latin"],
// });

// const outfit = Outfit({
//     variable: "--font-outfit",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "ORIVION - Crecimiento y Escalabilidad",
    description: "Ejecutamos lo que tu negocio NECESITA para crecer",
    keywords: ["agencia de crecimiento", "crecimiento del ecommerce", "monetización de la comunidad"],
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://orivion.com',
        siteName: 'ORIVION',
    },
};

// export const metadata: Metadata = {
//     title: "ORIVION - Growth Beyond Gravity",
//     description: "We execute what your business NEEDS to grow",
//     keywords: ["growth agency", "ecommerce growth", "community monetization"],
//     openGraph: {
//         type: 'website',
//         locale: 'es_ES',
//         url: 'https://orivion.com',
//         siteName: 'ORIVION',
//     },
// };

export default function RootLayout({ children }: { children: ReactNode; }) {
    return (
        <html lang="es" >
            {/* <html lang="es" className={`${sora.variable} ${spaceGrotesk.variable} ${inter.variable} ${outfit.variable}`}> */}
            <body className="bg-pureWhite flex flex-col min-h-screen dark:bg-spaceGray transition-colors duration-300">
                <Header />
                <AnimatePresence mode='wait'>
                    {children}
                </AnimatePresence>
                <ScrollToTop />
                <Footer />
                <CookieModal />
            </body>
        </html>
    );
}