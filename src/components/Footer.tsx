import Link from 'next/link';
import Logo from './Logo';

const routes = [
    { name: "Inicio", href: "/" },
    { name: "¿Quienes somos?", href: "/about-us" },
    { name: "Servicios", href: "/services" },
    // { name: 'Equipo', href: '/team' },
    { name: "Políticas", href: "/privacy-policy" },
    // { name: "Términos", href: "/terms" },
    { name: "Contáctanos", href: "/contact-us" }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-white text-gray-800 border-t border-gray-200 text-center sm:text-left">
            <div className="container mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-xl flex flex-col items-center sm:items-start md:text-2xl">
                    <Link href="/">
                        <Logo width={200} height={100} />
                    </Link>
                    <p className="mt-4 font-normal text-gray-800 sm:max-w-[300px] px-4 sm:px-0 text-base md:text-lg">
                        Innovación en Growth Marketing y soluciones de IA
                    </p>
                </div>

                <div>
                    <h4 className="text-gray-800 dark:text-pure-white font-bold text-3xl md:text-4xl mb-3">
                        Enlaces Rápidos
                    </h4>
                    <div className="flex flex-col items-center sm:items-start gap-2">
                        {routes.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-purple-600 text-lg md:text-xl flex items-center gap-2 text-gray-800"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-sm space-y-2">
                    <h4 className="text-gray-800 text-3xl md:text-4xl font-bold mb-3">
                        Legal
                    </h4>
                    {[
                        'ORION GLOBAL LLC',
                        'EIN: 33-4271275',
                        '1209 Mountain Road Pl NE, Ste R',
                        'Albuquerque, NM 87110, USA',
                        'Contacto: team@emyux.com',
                        'Representación: Emyux AI'
                    ].map((text, index) => (
                        <p
                            key={index}
                            className="text-gray-800 text-base md:text-lg font-normal dark:text-light-gray"
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>

            <p className="text-gray-800 text-center py-4 md:py-8 font-medium text-base md:text-xl">
                Creado por Emyux AI. © {currentYear} Todos los derechos reservados
            </p>
        </footer>
    );
}
