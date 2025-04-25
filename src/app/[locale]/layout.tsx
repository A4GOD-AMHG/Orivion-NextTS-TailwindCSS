import { ReactNode } from 'react';
import { Sora } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css"
import CookieModal from '@/components/CookieModal';
import ScrollToTop from '@/components/ScrollToTop';
import { locales } from '@/i18n/config';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const sora = Sora({
    subsets: ["latin"],
});

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


type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "RootLayout" });

    return { title: t('title'), description: t('description'), };
    // return { keywords: t('keywords') };
}

// openGraph: {
//     type: 'website',
//     locale: 'es_ES',
//     url: 'https://orivion.com',
//     siteName: 'ORIVION',
// },

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html lang={locale} className={`${sora.className}`} >
            <body className="bg-pureWhite flex flex-col min-h-screen dark:bg-spaceGray transition-colors duration-300">
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                    <ScrollToTop />
                    <Footer />
                    <CookieModal />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}