export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 py-20 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8 text-electric-blue">Política de Privacidad</h1>

                <section className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
                        <p>Recopilamos información que nos proporcionas voluntariamente al utilizar nuestros servicios, incluyendo pero no limitado a: nombre, dirección de correo electrónico, información de pago a través de Stripe, y datos de uso del sitio.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">2. Uso de la Información</h2>
                        <p>Utilizamos tu información para: Procesar transacciones, proporcionar soporte técnico, mejorar nuestros servicios, y cumplir con obligaciones legales. No compartimos tus datos con terceros excepto proveedores esenciales como Stripe para procesamiento de pagos.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">3. Protección de Datos</h2>
                        <p>Implementamos medidas de seguridad SSL/TLS y cifrado de extremo a extremo para proteger tu información. Sin embargo, ningún método de transmisión electrónica es 100% seguro.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">4. Derechos del Usuario</h2>
                        <p>Tienes derecho a: Acceder, rectificar, y solicitar eliminación de tus datos personales. Contacta a team@emyux.com para ejercer estos derechos.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                        <p>Utilizamos cookies técnicas y de análisis (Google Analytics) para mejorar la experiencia. Puedes gestionarlas desde la configuración de tu navegador.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">6. Cambios en la Política</h2>
                        <p>Nos reservamos el derecho de modificar esta política. Cambios significativos serán notificados por email o mediante aviso en el sitio.</p>
                    </div>

                    <div className="mt-12 border-t border-grey-space pt-8">
                        <p><strong>Entidad responsable:</strong><br />
                            ORION GLOBAL LLC (EIN: 33-4271275)<br />
                            1209 Mountain Road Pl NE, Ste R<br />
                            Albuquerque, NM 87110<br />
                            Estados Unidos</p>
                    </div>
                </section>
            </main>
        </div>
    )
}