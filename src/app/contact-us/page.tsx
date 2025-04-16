export default async function ContactPage() {
    return (
        <main className="bg-gray-50">
            <section className="py-8 md:pt-8 md:pb-12 px-4 mt-14 bg-gray-50">
                <div className="container mx-auto max-w-2xl">
                    <div
                        className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                    >
                        <span className="block text-center pb-8 font-semibold text-gray-800 text-5xl">
                            Contáctanos
                        </span>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                <input
                                    type="text"
                                    placeholder="Nombre completo"
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                                    required
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Teléfono (opcional)"
                                className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                            />
                            <textarea
                                rows={4}
                                placeholder="¿Cómo podemos ayudarte?"
                                className="w-full px-4 py-3 rounded-lg bg-white border-2 border-gray-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
                                required
                            />
                            <div className='flex flex-row justify-center'>
                                <button
                                    type="submit"
                                    className="px-8 bg-gradient-to-r hover:scale-105 transition-all cursor-pointer from-purple-600 to-cyan-400 text-white py-3 md:py-4 rounded-lg font-semibold text-md md:text-lg"
                                >
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>

                    <div
                        className="mt-8 text-center text-gray-600"
                    >
                        <p className="mb-2">¿Necesitas ayuda inmediata?</p>
                        <a
                            href="mailto:team@orivion.com"
                            className="text-blue-600 hover:text-purple-600 font-medium"
                        >
                            team@orivion.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}