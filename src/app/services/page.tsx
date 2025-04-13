'use client'

import { motion } from 'framer-motion'
import { FiBarChart, FiTarget, FiCode, FiStar, FiZap, FiPieChart } from 'react-icons/fi'

export default function ServicesPage() {
    return (
        <main className="bg-gray-50">
            <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    animate={{ opacity: 1, y: 0 }}
                    className="container mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        <span className="bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                            Potencia tu Crecimiento
                        </span>{' '}
                        con Soluciones Integrales
                    </h1>
                    <p className="text-3xl text-gray-300 max-w-3xl mx-auto">
                        Estrategias innovadoras que combinan tecnología y creatividad para resultados transformadores
                    </p>
                </motion.div>
            </section>

            <section className="py-20 bg-gray-50 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Nuestros Servicios Clave
                        </h2>
                        <p className="text-gray-600 text-2xl max-w-4xl mx-auto">
                            Soluciones especializadas para cada necesidad de tu negocio
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Marketing Digital',
                                description: 'Campañas data-driven con ROI medible',
                                icon: <FiBarChart className="w-12 h-12 text-purple-600" />,
                                features: ['SEO Avanzado', 'Publicidad Digital', 'Email Marketing', 'Analítica Web']
                            },
                            {
                                title: 'Gestión de Ads',
                                description: 'Maximiza tu inversión publicitaria',
                                icon: <FiTarget className="w-12 h-12 text-purple-600" />,
                                features: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Optimización en Tiempo Real']
                            },
                            {
                                title: 'Desarrollo Tecnológico',
                                description: 'Soluciones a medida para escalar',
                                icon: <FiCode className="w-12 h-12 text-purple-600" />,
                                features: ['Web Apps', 'Automatización', 'Integración API', 'Cloud Solutions']
                            },
                            {
                                title: 'Branding Estratégico',
                                description: 'Construcción de identidad sólida',
                                icon: <FiStar className="w-12 h-12 text-purple-600" />,
                                features: ['Diseño de Marca', 'Posicionamiento', 'Estrategia de Contenidos', 'Storytelling']
                            },
                            {
                                title: 'Automatización',
                                description: 'Flujos de trabajo inteligentes',
                                icon: <FiZap className="w-12 h-12 text-purple-600" />,
                                features: ['Chatbots IA', 'CRM Automatizado', 'Workflows', 'Integraciones']
                            },
                            {
                                title: 'Analítica Predictiva',
                                description: 'Toma decisiones basadas en datos',
                                icon: <FiPieChart className="w-12 h-12 text-purple-600" />,
                                features: ['Business Intelligence', 'Dashboards', 'Modelos Predictivos', 'KPI Tracking']
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                            >
                                <div className="mb-4">{service.icon}</div>
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
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Nuestra Metodología
                        </h2>
                        <p className="text-gray-300 text-2xl max-w-2xl mx-auto">
                            Un proceso probado para garantizar el éxito de cada proyecto
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '1', title: 'Diagnóstico', description: 'Análisis completo del negocio' },
                            { step: '2', title: 'Estrategia', description: 'Plan personalizado con KPIs' },
                            { step: '3', title: 'Implementación', description: 'Despliegue técnico y creativo' },
                            { step: '4', title: 'Optimización', description: 'Mejora continua con IA' }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl text-center"
                            >
                                <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-cyan-400 font-bold">{step.step}</span>
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
                        viewport={{ once: true }}
                        whileInView={{ scale: 1 }}
                        className="bg-gradient-to-r from-purple-600 to-cyan-400 p-1 rounded-2xl"
                    >
                        <div className="bg-white rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                ¿Listo para Transformar tu Negocio?
                            </h3>
                            <p className="text-gray-600 text-xl mb-8">
                                Agenda una consultoría gratuita y descubre tu potencial
                            </p>
                            <button
                                className="bg-gradient-to-r cursor-pointer hover:scale-105 transition-all from-purple-600 to-cyan-400 text-white text-xl px-8 py-3 rounded-lg font-semibold"
                            >
                                Contáctanos
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}