'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
// import { setRequestLocale } from 'next-intl/server'
import { FaHandshake, FaRocket } from 'react-icons/fa'
import { FiSearch, FiCheckCircle } from 'react-icons/fi'

type Milestone = {
    year: string
    event: string
}

type Pillar = {
    title: string
    description: string
}


// type Props = {
//     params: { locale: string }
// }

export default function AboutPage(
    // { params }: Props
) {
    // const { locale } = params;
    // setRequestLocale(locale);

    const t = useTranslations('AboutPage')

    const essenceItems = t.raw('essence.items') as string[]
    const milestones = t.raw('evolution.milestones') as Milestone[]
    const pillars = t.raw('pillars.items') as Pillar[]

    const pillarIcons = {
        innovation: FaRocket,
        transparency: FiSearch,
        results: FaHandshake
    }

    const heroTitleHtml = t.raw('hero.title')
        .replace(
            '<span>',
            '<span class="bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">'
        )
        .replace('</span>', '</span>')

    return (
        <main className="bg-gray-50">
            <section className="relative py-20 px-4">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                        dangerouslySetInnerHTML={{ __html: heroTitleHtml }}
                    />
                    <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                            {t('essence.title')}
                        </h2>
                        <p className="text-lg text-gray-800">
                            {t('essence.description')}
                        </p>
                        <ul className="space-y-6">
                            {essenceItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <FiCheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-800 flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-2xl"
                    >
                        <div className="bg-white rounded-xl p-8 h-full space-y-8">
                            <h3 className="text-2xl font-bold text-purple-600">
                                {t('evolution.title')}
                            </h3>
                            <div className="space-y-6">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="border-l-4 border-cyan-400 pl-4">
                                        <p className="font-bold text-cyan-400">{milestone.year}</p>
                                        <p className="text-gray-800">{milestone.event}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            {t('pillars.title')}
                        </h2>
                        <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                            {t('pillars.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => {
                            const iconKey = Object.keys(pillarIcons)[index] as keyof typeof pillarIcons
                            const IconComponent = pillarIcons[iconKey]

                            return (
                                <motion.div
                                    key={pillar.title}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/5 backdrop-blur-sm flex flex-col items-center p-8 rounded-2xl text-center"
                                >
                                    <div className="mb-4">
                                        <IconComponent className="w-12 h-12 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl text-white mb-2">{pillar.title}</h3>
                                    <p className="text-gray-300">{pillar.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}