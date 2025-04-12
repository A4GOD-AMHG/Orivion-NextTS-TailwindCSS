'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

export default function Header() {
    const pathname = usePathname()
    const routes = [
        { name: 'Inicio', path: '/' },
        { name: 'Sobre Nosotros', path: '/about-us' },
        { name: 'Servicios', path: '/services' },
        { name: 'Equipo', path: '/team' },
        { name: 'Políticas', path: '/privacy-policy' },
        { name: 'Términos', path: '/terms' },
        { name: 'Contáctanos', path: '/contact-us' },
    ]

    return (
        <header className="sticky top-0 bg-pure-white dark:bg-cosmic-black">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/">
                    <Logo width={200} height={100} />
                </Link>
                <div className="flex items-center gap-6">
                    {routes.map((route) => {
                        // Comprobamos si es la ruta activa
                        const isActive = pathname === route.path;
                        return (
                            <Link key={route.path} href={route.path}>
                                <span className="relative group text-xl font-medium text-space-gray dark:text-light-gray">
                                    {route.name}
                                    <span
                                        className={`absolute left-0 -bottom-1 block h-[2px] bg-neon-purple transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}
