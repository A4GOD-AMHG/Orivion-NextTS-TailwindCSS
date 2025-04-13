'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const routes = [
        { name: 'Inicio', path: '/' },
        { name: '¿Quienes somos?', path: '/about-us' },
        { name: 'Servicios', path: '/services' },
        { name: 'Políticas', path: '/privacy-policy' },
        // { name: 'Términos', path: '/terms' },
        { name: 'Contáctanos', path: '/contact-us' },
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="sticky top-0 bg-white shadow z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/">
                    <Logo width={200} height={100} />
                </Link>
                <div className="hidden md:flex items-center gap-6">
                    {routes.map((route) => {
                        const isActive = pathname === route.path
                        return (
                            <Link key={route.path} href={route.path}>
                                <span className="relative group text-xl font-medium text-space-gray dark:text-light-gray">
                                    {route.name}
                                    <span
                                        className={`absolute left-0 -bottom-2 block h-[4px] bg-purple-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </span>
                            </Link>
                        )
                    })}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {!isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-white">
                    <div className="flex flex-col items-end px-4 pb-3">
                        {routes.map((route) => {
                            const isActive = pathname === route.path
                            return (
                                <Link className='relative' key={route.path} href={route.path}>
                                    <span
                                        className={`block text-xl font-medium py-1 text-gray-800
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {route.name}
                                    </span>
                                    <span
                                        className={`absolute left-0 -bottom-0 block h-[4px] bg-purple-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </header>
    )
}