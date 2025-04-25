'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl';
// import { setRequestLocale } from 'next-intl/server';
import { FiBarChart, FiTarget, FiCode, FiStar, FiZap, FiPieChart } from 'react-icons/fi'

// type Props = {
//     params: { locale: string };
// };
export default function ServicesPage(
    // { params }: Props
) {
    // const { locale } = params;

    // setRequestLocale(locale);

    const t = useTranslations('ServicesPage');

    const services = t.raw('servicesSection.services') as Array<{
        title: string
        description: string
        features: string[]
    }>

    const methodologySteps = t.raw('methodology.steps') as Array<{
        title: string
        description: string
    }>

    const serviceIcons = {
        marketing: FiBarChart,
        ads: FiTarget,
        development: FiCode,
        branding: FiStar,
        automation: FiZap,
        analytics: FiPieChart
    }

    const heroTitleHtml = t.raw('hero.title')
        .replace(
            '<span>',
            '<span class="bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">'
        )
        .replace('</span>', '</span>')

    return (
        <main className="bg-gray-50">
            <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="container mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white"
                        dangerouslySetInnerHTML={{ __html: heroTitleHtml }} />
                    <p className="text-3xl text-gray-300 max-w-3xl mx-auto">
                        {t('hero.subtitle')}
                    </p>
                </motion.div>
            </section>

            <section className="py-20 bg-gray-50 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            {t('servicesSection.title')}
                        </h2>
                        <p className="text-gray-600 text-2xl max-w-4xl mx-auto">
                            {t('servicesSection.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const iconKey = Object.keys(serviceIcons)[index] as keyof typeof serviceIcons
                            const IconComponent = serviceIcons[iconKey]

                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                                >
                                    <div className="mb-4">
                                        <IconComponent className="w-12 h-12 text-purple-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center text-gray-700">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            {t('methodology.title')}
                        </h2>
                        <p className="text-gray-300 text-2xl max-w-2xl mx-auto">
                            {t('methodology.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {methodologySteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center"
                            >
                                <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-cyan-400 font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-xl text-white mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50 px-4">
                <div className="container mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        className="bg-gradient-to-r from-purple-600 to-cyan-400 p-1 rounded-2xl"
                    >
                        <div className="bg-white rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {t('cta.title')}
                            </h3>
                            <p className="text-gray-600 text-xl mb-8">
                                {t('cta.subtitle')}
                            </p>
                            <button className="bg-gradient-to-r cursor-pointer hover:scale-105 transition-all from-purple-600 to-cyan-400 text-white text-xl px-8 py-3 rounded-lg font-semibold">
                                {t('cta.button')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}