import Link from 'next/link';
import Logo from './Logo';

const routes: { name: string, href: string }[] = [
    { name: "Inicio", href: "/" },
    { name: "Sobre nosotros", href: "/about-us" },
    { name: "Servicios", href: "/services" },
    { name: "Políticas", href: "/privacy-policy" },
    { name: "Términos", href: "/terms" },
    { name: "Contáctanos", href: "/contact-us" }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-pure-white dark:bg-cosmic-black">
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-2xl">
                    <Link href="/">
                        <Logo width={200} height={100} />
                    </Link>
                    <p className="mt-6 font-medium text-cosmic-black dark:text-pure-white max-w-[300px]">
                        Innovación en Growth Marketing y soluciones de IA
                    </p>
                </div>

                <div>
                    <h4 className="text-cosmic-black dark:text-pure-white font-bold text-4xl mb-4">
                        Enlaces Rápidos
                    </h4>
                    <div className="flex flex-col gap-3">
                        {routes.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-electric-blue text-xl flex items-center gap-2 text-space-gray dark:text-light-gray"
                            >
                                <span className="w-2 h-2 bg-neon-purple rounded-full" />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-sm space-y-2">
                    <h4 className="text-cosmic-black dark:text-pure-white text-4xl font-bold mb-4">
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
                            className="hover:text-electric-blue text-space-gray dark:text-light-gray"
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>

            <p className="text-cosmic-black text-center py-8 font-medium text-xl">
                Creado por Emyux AI. © {currentYear} Todos los derechos reservados
            </p>
        </footer>
    );
}
