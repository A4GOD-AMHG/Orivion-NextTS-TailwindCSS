'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
    return (
        <main className="bg-gray-100">
            <section className="relative pt-12 pb-6 md:pt-16 md:pb-8 px-4 bg-gray-100">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                    >
                        <span className="bg-gradient-to-r text-5xl from-purple-600 to-cyan-400 bg-clip-text text-transparent">
                            Contáctanos
                        </span>
                    </motion.h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                    </p>
                </div>
            </section>

            <section className="py-8 md:pt-8 md:pb-12 px-4 bg-gray-100">
                <div className="container mx-auto max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <input
                                    type="text"
                                    placeholder="Nombre completo"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                                    required
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Teléfono (opcional)"
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                            />
                            <textarea
                                rows={4}
                                placeholder="¿Cómo podemos ayudarte?"
                                className="w-full px-4 py-3 rounded-lg border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                                required
                            />
                            <div className='flex flex-row justify-center'>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="px-8 bg-gradient-to-r cursor-pointer from-purple-600 to-cyan-400 text-white py-3 md:py-4 rounded-lg font-semibold text-md md:text-lg"
                                >
                                    Enviar Mensaje
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-8 text-center text-gray-600"
                    >
                        <p className="mb-2">¿Necesitas ayuda inmediata?</p>
                        <a
                            href="mailto:team@emyux.com"
                            className="text-purple-600 hover:text-cyan-400 font-medium"
                        >
                            team@emyux.com
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}