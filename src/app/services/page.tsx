import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-cosmic-black to-space-gray px-4">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6"
                    >
                        Motor de <span className="bg-gradient-to-r from-neon-purple to-electric-blue bg-clip-text text-transparent">
                            Growth
                        </span>{' '}
                        Integral
                    </motion.h1>
                    <p className="text-xl text-light-gray/80 max-w-3xl mx-auto">
                        Paquetes estratégicos diseñados para escalar tu negocio en cada etapa
                    </p>
                </div>
            </section>

            <section className="py-20 bg-pure-white dark:bg-cosmic-black px-4">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12">
                    {[
                        {
                            title: 'Marketing Performance',
                            description: 'Campañas data-driven con optimización en tiempo real',
                            features: [
                                'Gestión de Ads Multicanales',
                                'Optimización CRO',
                                'Analítica Predictiva',
                                'Automatización de Bid Strategies'
                            ],
                            icon: '📈'
                        },
                        {
                            title: 'Desarrollo Tecnológico',
                            description: 'Soluciones a medida para operaciones escalables',
                            features: [
                                'Arquitectura Cloud',
                                'Sistemas de Automatización',
                                'Integración API',
                                'Dashboards Personalizados'
                            ],
                            icon: '💻'
                        },
                        {
                            title: 'Branding Estratégico',
                            description: 'Posicionamiento que genera autoridad',
                            features: [
                                'Diseño de Identidad',
                                'Estrategia de Contenidos',
                                'Gestión de Reputación',
                                'Storytelling Data-Driven'
                            ],
                            icon: '🎨'
                        },
                        {
                            title: 'Inteligencia Artificial',
                            description: 'Implementación de modelos predictivos',
                            features: [
                                'Chatbots Inteligentes',
                                'Sistemas de Recomendación',
                                'Análisis Sentimental',
                                'Automatización de CRM'
                            ],
                            icon: '🤖'
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-br from-space-gray/10 to-cosmic-black/10 p-1 rounded-2xl"
                        >
                            <div className="bg-pure-white dark:bg-space-gray rounded-xl p-8 h-full">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="text-4xl">{service.icon}</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-neon-purple">{service.title}</h3>
                                        <p className="text-light-gray/80">{service.description}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {service.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center gap-2 p-3 bg-space-gray/5 rounded-lg">
                                            <div className="w-2 h-2 bg-electric-blue rounded-full" />
                                            <span className="text-space-gray dark:text-light-gray">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-space-gray to-cosmic-black px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-pure-white mb-4">
                            Metodología Orivion
                        </h2>
                        <p className="text-light-gray/80 max-w-2xl mx-auto">
                            Un proceso probado para garantizar resultados medibles
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '1', title: 'Diagnóstico', description: 'Análisis 360° de tu negocio' },
                            { step: '2', title: 'Estrategia', description: 'Plan personalizado con KPIs' },
                            { step: '3', title: 'Implementación', description: 'Despliegue con tecnología propia' },
                            { step: '4', title: 'Optimización', description: 'Ajustes en tiempo real con IA' }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-pure-white/5 backdrop-blur-sm p-6 rounded-xl text-center"
                            >
                                <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-electric-blue font-bold">{step.step}</span>
                                </div>
                                <h3 className="text-xl text-pure-white mb-2">{step.title}</h3>
                                <p className="text-light-gray/80">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-pure-white dark:bg-cosmic-black px-4">
                <div className="container mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        className="bg-gradient-to-br from-neon-purple to-electric-blue p-1 rounded-2xl"
                    >
                        <div className="bg-pure-white dark:bg-space-gray rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-4">¿Listo para el Siguiente Nivel?</h3>
                            <p className="text-light-gray/80 mb-8">
                                Agenda una consultoría gratuita y descubre tu potencial de crecimiento
                            </p>
                            <Link
                                href="/contacto"
                                className="inline-block bg-gradient-to-r from-neon-purple to-electric-blue text-pure-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                            >
                                Iniciar Consultoría
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}