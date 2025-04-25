"use client"

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
// import { setRequestLocale } from "next-intl/server"

// type Props = {
//     params: { locale: string }
// }
export default function ContactPage(
    // { params }: Props
) {
    // const { locale } = params;
    // setRequestLocale(locale);

    const t = useTranslations('ContactPage')

    const contactInfo = {
        email: "team@orivion.com",
        address: "1209 Mountain Road Pl NE, Ste R, Albuquerque, NM 87110, Estados Unidos",
        phone: "+34 677746305"
    }

    return (
        <main className="bg-gray-50">
            <section className="py-8 md:pt-8 md:pb-12 px-4 mt-14 bg-gray-50">
                <div className="container mx-auto max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                    >
                        <h1 className="block text-center pb-8 font-semibold text-gray-800 text-5xl">
                            {t('title')}
                        </h1>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <input
                                    type="text"
                                    placeholder={t('form.namePlaceholder')}
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder={t('form.emailPlaceholder')}
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                                    required
                                />
                            </div>

                            <input
                                type="tel"
                                placeholder={t('form.phonePlaceholder')}
                                className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                            />

                            <textarea
                                rows={4}
                                placeholder={t('form.messagePlaceholder')}
                                className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                                required
                            />

                            <div className='flex flex-row justify-center'>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="px-8 bg-gradient-to-r hover:scale-105 transition-all cursor-pointer from-purple-600 to-cyan-400 text-white py-3 md:py-4 rounded-lg font-semibold text-md md:text-lg"
                                >
                                    {t('form.submit')}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-8 text-center text-gray-600"
                    >
                        <p className="mb-2">{t('help.text')}</p>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-blue-600 hover:text-purple-600 font-medium"
                        >
                            {contactInfo.email}
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}