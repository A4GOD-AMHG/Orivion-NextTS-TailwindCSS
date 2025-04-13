'use client'

import { motion } from 'framer-motion'
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen">
            <section className="min-h-[50vh] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center py-14 sm:py-20 px-4">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl sm:text-7xl font-space-grotesk font-bold mb-6">
                            Transforma tu negocio <br />con{' '}
                            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                                Growth Inteligente
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
                            Potenciamos empresas con soluciones de IA y estrategias de marketing que generan resultados reales
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r cursor-pointer from-purple-700 to-cyan-400 text-pure-white px-8 py-4 rounded-xl text-xl font-semibold"
                        >
                            Comienza con nosotros ahora
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gray-100 px-10 sm:px-4">
                <motion.h2 initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='relative text-center font-semibold text-5xl sm:text-6xl text-gray-800 mb-12'>¿Quienes Somos?</motion.h2>
                <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 blur-3xl rounded-full" />
                        <div className="relative space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold bg-gradient-to-r from-purple-700 to-cyan-400 bg-clip-text text-transparent">
                                Orivion: Expertos en Growth Estratégico
                            </h2>
                            <p className="text-lg text-gray-800 dark:text-white/90">
                                Con más de 2 años de experiencia, hemos perfeccionado el arte de escalar negocios mediante:
                            </p>
                            <ul className="space-y-4">
                                {['IA Predictiva', 'Automatización Inteligente', 'Estrategias Data-Driven', 'Optimización en Tiempo Real'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full" />
                                        <span className="text-gray-800 dark:text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 p-1 rounded-2xl w-full"
                    >
                        <div className="bg-gray-50 rounded-xl p-4 md:p-8 h-full">
                            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 text-center">
                                {['28', '95%', '4.7/5'].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="p-3 md:p-4 bg-gray-800/5 rounded-xl mx-auto w-full max-w-[200px] md:max-w-none"
                                    >
                                        <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-700 to-cyan-400 bg-clip-text text-transparent">
                                            {stat}
                                        </p>
                                        <p className="text-sm md:text-lg text-gray-800 dark:text-white/80 mt-1 md:mt-2 leading-tight md:leading-normal">
                                            {['Clientes', 'Satisfacción', 'Rating'][index]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-10 sm:px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-space-grotesk font-bold text-pure-white mb-6">
                            Nuestro Arsenal de Growth
                        </h2>
                        <p className="text-white/80 text-xl max-w-2xl mx-auto">
                            Soluciones integradas que combinan tecnología de punta y expertise humano
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Marketing Digital',
                                description: 'Campañas performance con ROI medible',
                                icon: '📈'
                            },
                            {
                                title: 'Gestión de Ads',
                                description: 'Maximiza tu presupuesto publicitario',
                                icon: '🎯'
                            },
                            {
                                title: 'Desarrollo Tecnológico',
                                description: 'Soluciones a medida para escalar',
                                icon: '💻'
                            },
                            {
                                title: 'Branding Estratégico',
                                description: 'Posicionamiento que genera confianza',
                                icon: '🌟'
                            },
                            {
                                title: 'Automatización',
                                description: 'Flujos de trabajo inteligentes',
                                icon: '🤖'
                            },
                            {
                                title: 'Analítica Predictiva',
                                description: 'Toma decisiones basadas en datos',
                                icon: '📊'
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -3 }}
                                className="p-8 rounded-2xl cursor-pointer bg-pure-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/20 transition-all"
                            >
                                <Link href="/services">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-xl text-pure-white mb-2">{service.title}</h3>
                                    <p className="text-white/80">{service.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-100 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-gradient-to-br from-purple-700 to-cyan-400 p-1 rounded-2xl">
                        <div className="bg-gray-50 rounded-xl px-4 py-5 sm:p-12">
                            <h2 className="text-2xl sm:text-3xl font-space-grotesk font-bold text-center mb-8">
                                ¿Listo para transformar tu negocio?
                            </h2>

                            <form className="flex flex-col items-center space-y-6">
                                <div className="w-full grid md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        className="w-full px-4 py-3 bg-white rounded-lg border-[1px] sm:border-[3px] border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 bg-white rounded-lg border-[1px] sm:border-[3px] border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                                    />
                                </div>
                                <textarea
                                    rows={4}
                                    placeholder="Cuéntanos sobre tu proyecto"
                                    className="w-full px-4 py-3 bg-white rounded-lg border-[1px] sm:border-[3px] border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                                />

                                <button
                                    type="submit"
                                    className="w-52 hover:scale-105 transition-all px-4 bg-gradient-to-r cursor-pointer from-purple-700 to-cyan-400 text-white text-xl py-4 rounded-lg font-semibold"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}