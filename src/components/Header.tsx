import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
    return (
        <header className="border-b bg-gray-800 border-grey-space py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    <Logo width={200} height={100} />
                </Link>
                <div className="space-x-6">
                    <Link href="/services" className="hover:text-electric-blue transition">
                        Servicios
                    </Link>
                    <Link href="/cases" className="hover:text-electric-blue transition">
                        Casos de Éxito
                    </Link>
                    <Link href="/contact" className="bg-neon-purple px-4 py-2 rounded-lg hover:bg-opacity-80 transition">
                        Contacto
                    </Link>
                    <Link href="/privacy-policy" className="text-sm hover:text-electric-blue transition">
                        Legal
                    </Link>
                </div>
            </div>
        </header>
    )
}