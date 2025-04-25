import Link from 'next/link'
import Logo from './Logo'
import { useTranslations } from 'next-intl'

export default function Footer() {
    const t = useTranslations('Footer')
    const currentYear = new Date().getFullYear()

    const routes = [
        { name: t('routes.home'), href: "/" },
        { name: t('routes.about'), href: "/about-us" },
        { name: t('routes.services'), href: "/services" },
    ]

    const legal = [
        { name: t('routes.privacy'), href: "/privacy-policy" },
        { name: t('routes.contact'), href: "/contact-us" }
    ]

    return (
        <footer className="bg-white text-gray-800 border-t border-gray-200 text-center sm:text-left">
            <div className="container mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-xl flex flex-col items-center sm:items-start md:text-2xl">
                    <Link href="/">
                        <Logo width={200} height={100} />
                    </Link>
                    <a
                        href="mailto:team@orivion.com"
                        className="text-blue-600 mt-4 cursor-pointer hover:text-purple-600 text-base md:text-lg"
                    >
                        team@orivion.com
                    </a>
                    <p className="mt-2 font-normal text-gray-800 sm:max-w-[300px] px-4 sm:px-0 text-base md:text-lg">
                        {t('address')}
                    </p>
                    <p className="mt-2 font-normal text-gray-800 sm:max-w-[300px] px-4 sm:px-0 text-base md:text-lg">
                        {t('location')}
                    </p>
                </div>

                <div>
                    <h4 className="text-gray-800 dark:text-pure-white font-bold text-3xl md:text-4xl mb-3">
                        {t('quickLinks')}
                    </h4>
                    <div className="flex flex-col items-center sm:items-start gap-2">
                        {routes.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-purple-600 text-lg md:text-xl flex items-center gap-2 text-blue-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-gray-800 dark:text-pure-white font-bold text-3xl md:text-4xl mb-3">
                        {t('legal')}
                    </h4>
                    <div className='flex flex-col items-center sm:items-start gap-2'>
                        {legal.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-purple-600 text-lg md:text-xl flex items-center gap-2 text-blue-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-gray-800 text-center py-4 md:py-8 font-medium text-base md:text-xl">
                {t('copyright', { year: currentYear })}
            </p>
        </footer>
    )
}