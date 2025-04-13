'use client'

import { motion } from 'framer-motion'
import { FaHandshake } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa6';
import { FiSearch, FiCheckCircle } from 'react-icons/fi';

export default function AboutPage() {
    return (
        <main className="bg-gray-50">
            <section className="relative py-20 px-4">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                            Revolucionando
                        </span>{' '}
                        el Growth Digital
                    </motion.h1>
                    <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                        Combinamos inteligencia artificial con expertise humano para crear estrategias que escalan negocios
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
                            Nuestra Esencia
                        </h2>
                        <p className="text-lg text-gray-800">
                            En Orivion no solo implementamos tecnología - creamos ecosistemas digitales inteligentes que:
                        </p>
                        <ul className="space-y-6">
                            {[
                                'Automatizan procesos clave con IA predictiva',
                                'Optimizan campañas en tiempo real',
                                'Generan insights accionables',
                                'Personalizan experiencias a escala'
                            ].map((item, index) => (
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
                            <h3 className="text-2xl font-bold text-purple-600">Nuestra Evolución</h3>
                            <div className="space-y-6">
                                {[
                                    { year: '2022', event: 'Fundación como startup de marketing automatizado' },
                                    { year: '2022', event: 'Primera integración de modelos predictivos de IA' },
                                    { year: '2023', event: 'Expansión internacional con oficina en EE.UU.' },
                                    { year: '2024', event: 'Lanzamiento plataforma web para de contratación' }
                                ].map((item, index) => (
                                    <div key={index} className="border-l-4 border-cyan-400 pl-4">
                                        <p className="font-bold text-cyan-400">{item.year}</p>
                                        <p className="text-gray-800">{item.event}</p>
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
                            Pilares Fundamentales
                        </h2>
                        <p className="text-gray-300 text-xl max-w-2xl mx-auto">
                            Los principios que guían cada decisión y estrategia que desarrollamos
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Innovación Constante',
                                description: 'Invertimos 20% de recursos en I+D anual',
                                icon: <FaRocket className="w-12 h-12 text-cyan-400" />
                            },
                            {
                                title: 'Transparencia Radical',
                                description: 'Reportes en tiempo real con métricas claras',
                                icon: <FiSearch className="w-12 h-12 text-cyan-400" />
                            },
                            {
                                title: 'Resultados Compartidos',
                                description: 'Modelos de éxito compartido basados en KPIs',
                                icon: <FaHandshake className="w-12 h-12 text-cyan-400" />
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 backdrop-blur-sm flex flex-col items-center p-8 rounded-2xl text-center"
                            >
                                <div className="mb-4">{value.icon}</div>
                                <h3 className="text-xl text-white mb-2">{value.title}</h3>
                                <p className="text-gray-300">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}