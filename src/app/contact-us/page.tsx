'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi'

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-cosmic-black to-space-gray px-4">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-neon-purple to-electric-blue bg-clip-text text-transparent">
                            Conectemos
                        </span>{' '}
                        Potencial
                    </motion.h1>
                    <p className="text-xl text-light-gray/80 max-w-3xl mx-auto">
                        Cuéntanos sobre tu proyecto y descubramos juntos cómo impulsar tu crecimiento
                    </p>
                </div>
            </section>

            <section className="py-20 bg-pure-white dark:bg-cosmic-black px-4">
                <div className="container mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-neon-purple to-electric-blue bg-clip-text text-transparent">
                            Envíanos un Mensaje
                        </h2>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.div whileHover={{ scale: 1.02 }}>
                                    <input
                                        type="text"
                                        placeholder="Nombre completo"
                                        className="w-full px-4 py-3 rounded-lg border border-light-gray/20 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20"
                                        required
                                    />
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.02 }}>
                                    <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        className="w-full px-4 py-3 rounded-lg border border-light-gray/20 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20"
                                        required
                                    />
                                </motion.div>
                            </div>

                            <motion.div whileHover={{ scale: 1.02 }}>
                                <input
                                    type="tel"
                                    placeholder="Teléfono"
                                    className="w-full px-4 py-3 rounded-lg border border-light-gray/20 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20"
                                />
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }}>
                                <input
                                    type="text"
                                    placeholder="Empresa"
                                    className="w-full px-4 py-3 rounded-lg border border-light-gray/20 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20"
                                />
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }}>
                                <textarea
                                    rows={5}
                                    placeholder="Describe tu proyecto o necesidades"
                                    className="w-full px-4 py-3 rounded-lg border border-light-gray/20 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20"
                                    required
                                />
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-neon-purple to-electric-blue text-pure-white py-4 rounded-lg font-semibold"
                            >
                                Enviar Mensaje
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-space-gray to-cosmic-black p-1 rounded-2xl h-full">
                            <div className="bg-pure-white dark:bg-space-gray rounded-xl p-8 h-full space-y-8">
                                <h3 className="text-2xl font-bold text-neon-purple">Nuestra Ubicación</h3>

                                <div className="aspect-video rounded-xl overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.561968063054!2d-106.59291292370642!3d35.10524437277511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8722749d24d5e58d%3A0x4d3e4b6e5a7b5e6e!2s1209%20Mountain%20Rd%20NE%2C%20Albuquerque%2C%20NM%2087110%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1716787561351!5m2!1ses!2ses"
                                        className="w-full h-full"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <FiMapPin className="text-electric-blue mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <p className="font-medium text-space-gray dark:text-light-gray">Dirección</p>
                                            <p className="text-light-gray/80">1209 Mountain Road Pl NE, Ste R</p>
                                            <p className="text-light-gray/80">Albuquerque, NM 87110, USA</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <FiMail className="text-electric-blue mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <p className="font-medium text-space-gray dark:text-light-gray">Correo</p>
                                            <a href="mailto:team@emyux.com" className="text-light-gray/80 hover:text-electric-blue">
                                                team@emyux.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <FiPhone className="text-electric-blue mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <p className="font-medium text-space-gray dark:text-light-gray">Teléfono</p>
                                            <a href="tel:+11234567890" className="text-light-gray/80 hover:text-electric-blue">
                                                +1 (123) 456-7890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <FiClock className="text-electric-blue mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <p className="font-medium text-space-gray dark:text-light-gray">Horario</p>
                                            <p className="text-light-gray/80">Lun-Vie: 9:00 - 18:00 (EST)</p>
                                            <p className="text-light-gray/80">Sáb-Dom: Cerrado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-space-gray to-cosmic-black px-4">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        className="inline-block bg-gradient-to-r from-neon-purple to-electric-blue p-1 rounded-2xl"
                    >
                        <div className="bg-pure-white dark:bg-space-gray rounded-xl px-8 py-12">
                            <h3 className="text-2xl font-bold mb-4">¿Prefieres una Llamada?</h3>
                            <p className="text-light-gray/80 mb-8 max-w-xl mx-auto">
                                Agenda una consulta gratuita de 30 minutos con nuestro equipo de expertos
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-neon-purple to-electric-blue text-pure-white px-8 py-3 rounded-lg font-semibold"
                            >
                                Agendar Llamada
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}