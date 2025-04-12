import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-grey-space mt-20 py-12 bg-grey-space/20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-electric-blue text-lg font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy" className="hover:text-neon-purple transition">Política de Privacidad</Link></li>
                            <li><Link href="/terms" className="hover:text-neon-purple transition">Términos de Servicio</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-electric-blue text-lg font-bold mb-4">Contacto</h4>
                        <ul className="space-y-2">
                            <li>✉️ team@emyux.com</li>
                            <li>📍 1209 Mountain Road Pl NE, Ste R</li>
                            <li>Albuquerque, NM 87110</li>
                            <li>Estados Unidos</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-electric-blue text-lg font-bold mb-4">Entidad Legal</h4>
                        <p className="text-sm">
                            ORION GLOBAL LLC<br />
                            EIN: 33-4271275<br />
                            Representación comercial:<br />
                            Emyux AI
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-grey-space text-center text-sm">
                    <p>© {new Date().getFullYear()} ORIVION. Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}